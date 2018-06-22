import React, { PureComponent } from 'react';
import { View, ImageBackground, Image, Animated, Easing } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { string, func } from 'prop-types';

import { setGoal, updateProgress } from 'actions';
import { AnimatedCard } from 'components';
import { backgroundGrain, icon8Logo, imgBeans, imgDumbbell, imgMat } from 'images';
import { SCREEN_TYPE, GOALS } from 'constants';
import { getPixel } from 'utils';
import styles from './styles';

const inputData = [
  { title: GOALS.WEIGHT, subTitle: 'Burn fat & get lean' },
  { title: GOALS.FIT, subTitle: 'Tone up & feel healthy' },
  { title: GOALS.MUSCLE, subTitle: 'Build mass & strength' },
];

class Landing extends PureComponent {
  static propTypes = {
    setGoal: func.isRequired,
    updateProgress: func.isRequired,
    componentId: string.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      animation: new Animated.Value(0),
    };

    props.updateProgress(40);
  }

  componentDidMount() {
    Animated.timing(this.state.animation, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: false,
      easing: Easing.inOut(Easing.ease),
    }).start();
  }

  onPressCard = (goal) => {
    console.log('TouchableOpacity:', goal);
    this.props.setGoal(goal);
    Navigation.push(this.props.componentId, {
      component: {
        name: SCREEN_TYPE.AGE,
      },
      options: {
        topBar: {
          visible: true,
        },
      },
    });
  }

  getLogo = () => {
    const logoSize = this.state.animation.interpolate({
      inputRange: [0, 0.1, 0.4, 1],
      outputRange: [2.2, 2.2, 1, 1],
    });

    const logoPosition = this.state.animation.interpolate({
      inputRange: [0, 0.1, 0.4, 1],
      outputRange: [getPixel(136), getPixel(136), getPixel(50), getPixel(50)],
    });

    return (
      <View style={styles.logoContainer}>
        <Animated.Image style={{ transform: [{ scale: logoSize }, { translateY: logoPosition }] }} source={icon8Logo} />
      </View>
    );
  }

  getCards = () => {
    const fadeIn = this.state.animation.interpolate({
      inputRange: [0, 0.4, 0.6, 1],
      outputRange: [0, 0, 1, 1],
    });

    const moveUp = this.state.animation.interpolate({
      inputRange: [0, 0.5, 0.7, 1],
      outputRange: [getPixel(5), getPixel(5), 0, 0],
    });

    return inputData.map(({ title, subTitle }) => (
      <AnimatedCard
        key={title}
        animationStyle={{ opacity: fadeIn, transform: [{ translateY: moveUp }] }}
        containerStyle={styles.cardGap}
        title={title}
        data={title}
        subTitle={subTitle}
        onPress={this.onPressCard}/>
    ));
  }

  getContents = () => {
    const fadeIn = this.state.animation.interpolate({
      inputRange: [0, 0.3, 0.5, 1],
      outputRange: [0, 0, 1, 1],
    });

    const moveUp = this.state.animation.interpolate({
      inputRange: [0, 0.4, 0.6, 1],
      outputRange: [getPixel(6), getPixel(6), 0, 0],
    });

    return (
      <View style={styles.content}>
        <Animated.Text style={[styles.welcomeMessage, { opacity: fadeIn, transform: [{ translateY: moveUp }] }]}>WELCOME TO 8FIT</Animated.Text>
        <Animated.Text style={[styles.question, { opacity: fadeIn, transform: [{ translateY: moveUp }] }]}>What's your goal?</Animated.Text>
        {this.getCards()}
      </View>
    );
  }

  moveHorizontal = direction => this.state.animation.interpolate({
    inputRange: [0, 0.1, 0.4, 1],
    outputRange: [getPixel(direction * 200), getPixel(direction * 200), 0, 0],
  });

  render() {
    return (
      <ImageBackground source={backgroundGrain} style={styles.container}>
        <View style={styles.backgroundImageContainer}>
          <Animated.Image source={imgBeans} style={[styles.bean, { transform: [{ translateX: this.moveHorizontal(-1) }] }]} />
          <Animated.View style={[styles.rightBackgroundImage, { transform: [{ translateX: this.moveHorizontal(1) }] }]}>
            <Image source={imgMat} style={styles.mat} />
            <Image source={imgDumbbell} style={styles.dumbbell} />
          </Animated.View>
        </View>
        {this.getLogo()}
        {this.getContents()}
      </ImageBackground>
    );
  }
}

export default connect(
  null,
  dispatch => bindActionCreators({ setGoal, updateProgress }, dispatch),
)(Landing);
