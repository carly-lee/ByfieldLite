import React, { PureComponent } from 'react';
import { View, Text, TextInput, KeyboardAvoidingView } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { string } from 'prop-types';

import { SCREEN_TYPE } from 'constants';
import { RoundedButton } from 'components';
import { getPixel } from 'utils';
import styles from './styles';

export default class Age extends PureComponent {
  static get options() {
    return {
      topBar: {
        noBorder: false,
      },
    };
  }

  static propTypes = {
    componentId: string.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      isValidate: false,
    };
  }

  onPressContinue = () => {
    Navigation.push(this.props.componentId, {
      component: {
        name: SCREEN_TYPE.HEIGHT,
      },
    });
  }

  // https://github.com/facebook/react-native/issues/18874
  onChangeText = (text = '') => {
    const value = text.replace(/\D/gi, '');

    this.setState({ value, isValidate: value >= 13 && value <= 120 });
  }

  render() {
    const { isValidate, value } = this.state;

    return (
      <KeyboardAvoidingView
        behavior="padding"
        keyboardVerticalOffset={getPixel(64)}
        style={styles.container}
        enabled>
        <View style={styles.content}>
          <Text style={styles.question}>How old are you?</Text>
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            keyboardType="numeric"
            value={value}
            onChangeText={this.onChangeText} />
          <RoundedButton text="Continue" disabled={!isValidate} onPress={this.onPressContinue} />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

