import React, { PureComponent } from 'react';
import { View, Text, ImageBackground, Image, TouchableOpacity, Alert } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { connect } from 'react-redux';
import { string, number, oneOfType } from 'prop-types';

import { RoundedButton, Panel, LabelListItem } from 'components';
import { backgroundGrain, imgBeans, imgParsley, icArrowLeft } from 'images';
import styles from './styles';

class Confirm extends PureComponent {
  static propTypes = {
    componentId: string.isRequired,
    goal: string.isRequired,
    age: oneOfType([string, number]).isRequired,
    height: oneOfType([string, number]).isRequired,
  }

  onPressBackButton = () => {
    Navigation.pop(this.props.componentId);
  }

  onSave = () => {
    Alert.alert(
      'You are all set!',
      'Your details have been saved.',
    );
  }

  render() {
    const { goal, age, height } = this.props;

    return (
      <ImageBackground source={backgroundGrain} style={styles.background}>
        <TouchableOpacity style={styles.backButton} onPress={this.onPressBackButton}>
          <Image source={icArrowLeft} />
        </TouchableOpacity>
        <View style={styles.container}>
          <Image source={imgBeans} style={styles.bean} />
          <Image source={imgParsley} style={styles.parsley} />
          <Text style={styles.title}>Confirm your details:</Text>
          <Panel>
            <LabelListItem style={styles.border} label="Goal" value={goal} />
            <LabelListItem style={styles.border} label="Age" value={age} />
            <LabelListItem label="Height" value={height} />
          </Panel>
          <View style={styles.buttonContainer}>
            <RoundedButton text="Save" onPress={this.onSave} />
          </View>
        </View>
      </ImageBackground>
    );
  }
}

export default connect(
  state => state,
  null,
)(Confirm);
