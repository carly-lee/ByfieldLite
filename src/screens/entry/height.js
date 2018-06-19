import React, { PureComponent } from 'react';
import { View, Text, TextInput, KeyboardAvoidingView } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { string } from 'prop-types';

import { SCREEN_TYPE } from 'constants';
import { RoundedButton, LeftRoundedButton, RightRoundedButton } from 'components';
import { getPixel } from 'utils';
import styles from './styles';

class Height extends PureComponent {
  static get options() {
    return {
      topBar: {
        noBorder: false,
      },
    };
  }

  static propTypes = {
    componentId: string.isRequired,
    type: string,
  }

  static defaultProps = {
    type: 'weight',
  }

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      unit: 'FT',
      isValidate: false,
    };
  }

  onPressContinue = () => {
    Navigation.push(this.props.componentId, {
      component: {
        name: SCREEN_TYPE.CONFIRM,
      },
    });
  }

  onChangeText = (text = '') => {
    const value = text.replace(/\D/gi, '');

    this.setState({ value, isValidate: value >= 125 && value <= 301 });
  }

  onToggleUnit = (id) => {
    this.setState({ unit: id });
  }

  render() {
    const { isValidate, value, unit } = this.state;

    return (
      <KeyboardAvoidingView
        behavior="padding"
        keyboardVerticalOffset={getPixel(64)}
        style={styles.container}
        enabled>
        <View style={styles.content}>
          <Text style={styles.question}>How tall are you?</Text>
          <TextInput
            style={styles.input}
            autoFocus={true}
            value={value}
            onChangeText={this.onChangeText}
            keyboardType="numeric" />
          <View style={styles.buttonContainer}>
            <LeftRoundedButton id="FT" text="FT" disabled={unit === 'FT'} onPress={this.onToggleUnit} />
            <RightRoundedButton id="CM" text="CM" disabled={unit === 'CM'} onPress={this.onToggleUnit} />
          </View>
          <RoundedButton text="Continue" disabled={!isValidate} onPress={this.onPressContinue} />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

export default Height;
