import React, { PureComponent } from 'react';
import { View, Text, ImageBackground, Image } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { string } from 'prop-types';

import { Card } from 'components';
import { backgroundGrain, icon8Logo, imgBeans, imgDumbbell, imgMat } from 'images';
import { SCREEN_TYPE } from 'constants';
import styles from './styles';

class Landing extends PureComponent {
  static get options() {
    return {
      topBar: {
        visible: false,
      },
    };
  }

  static propTypes = {
    componentId: string.isRequired,
  }

  onPressCard = (id) => {
    Navigation.push(this.props.componentId, {
      component: {
        name: SCREEN_TYPE.ENTRY,
        passProps: {
          type: id,
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
            id="weight"
            title="Lose weight"
            subTitle="Burn fat & get lean"
            onPress={this.onPressCard}/>
          <Card
            containerStyle={styles.cardGap}
            id="fit"
            title="Get fitter"
            subTitle="Tone up & feel healthy"
            onPress={this.onPressCard}/>
          <Card
            containerStyle={styles.cardGap}
            id="muscle"
            title="Gain muscle"
            subTitle="Build mass & strength"
            onPress={this.onPressCard}/>
        </View>
      </ImageBackground>
    );
  }
}

export default Landing;
