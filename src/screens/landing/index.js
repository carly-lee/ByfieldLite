import React, { PureComponent } from 'react';
import { View, Text, ImageBackground, Image } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { string, func } from 'prop-types';

import { setGoal } from 'actions';
import { Card } from 'components';
import { backgroundGrain, icon8Logo, imgBeans, imgDumbbell, imgMat } from 'images';
import { SCREEN_TYPE, GOALS } from 'constants';
import styles from './styles';

class Landing extends PureComponent {
  static propTypes = {
    setGoal: func.isRequired,
    componentId: string.isRequired,
  }

  onPressCard = (goal) => {
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

  render() {
    return (
      <ImageBackground source={backgroundGrain} style={styles.container}>
        <View style={styles.backgroundImageContainer}>
          <Image source={imgBeans} style={styles.bean} />
          <Image source={imgMat} style={styles.mat} />
          <Image source={imgDumbbell} style={styles.dumbbell} />
        </View>
        <View style={styles.content}>
          <Image source={icon8Logo} />
          <Text style={styles.welcomeMessage}>WELCOME TO 8FIT</Text>
          <Text style={styles.question}>What's your goal?</Text>
          <Card
            containerStyle={styles.cardGap}
            title={GOALS.WEIGHT}
            data={GOALS.WEIGHT}
            subTitle="Burn fat & get lean"
            onPress={this.onPressCard}/>
          <Card
            containerStyle={styles.cardGap}
            title={GOALS.FIT}
            data={GOALS.FIT}
            subTitle="Tone up & feel healthy"
            onPress={this.onPressCard}/>
          <Card
            containerStyle={styles.cardGap}
            title={GOALS.MUSCLE}
            data={GOALS.MUSCLE}
            subTitle="Build mass & strength"
            onPress={this.onPressCard}/>
        </View>
      </ImageBackground>
    );
  }
}

export default connect(
  null,
  dispatch => bindActionCreators({ setGoal }, dispatch),
)(Landing);
