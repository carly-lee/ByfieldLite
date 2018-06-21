import React, { PureComponent } from 'react';
import { View, Text, ImageBackground, Image, TouchableOpacity, Alert } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { string } from 'prop-types';

import { RoundedButton, Panel, LabelListItem } from 'components';
import { backgroundGrain, imgBeans, imgParsley, icArrowLeft } from 'images';
import styles from './styles';

class Confirm extends PureComponent {
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
            <LabelListItem label="Goal" style={styles.border} />
            <LabelListItem label="Age" style={styles.border} />
            <LabelListItem label="Height" />
          </Panel>
          <View style={styles.buttonContainer}>
            <RoundedButton text="Save" onPress={this.onSave} />
          </View>
        </View>
      </ImageBackground>
    );
  }
}

export default Confirm;
