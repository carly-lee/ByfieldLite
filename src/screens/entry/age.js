import React, { PureComponent } from 'react';
import { View, Text, KeyboardAvoidingView } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { string } from 'prop-types';

import { SCREEN_TYPE } from 'constants';
import { RoundedButton, ValidateNumberInput } from 'components';
import { getPixel, Validations } from 'utils';
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
      isValid: false,
    };
  }

  onPressContinue = () => {
    Navigation.push(this.props.componentId, {
      component: {
        name: SCREEN_TYPE.HEIGHT,
      },
    });
  }

  onValidation = ({ isValid }) => {
    this.setState({ isValid });
  }

  onChangeAge = ({ text }) => {
    const value = text.replace(/\D/gi, '');
    this.setState({ value });
  }

  render() {
    const { isValid, value } = this.state;

    return (
      <KeyboardAvoidingView
        behavior="padding"
        keyboardVerticalOffset={getPixel(64)}
        style={styles.container}
        enabled>
        <View style={styles.content}>
          <Text style={styles.question}>How old are you?</Text>
          <ValidateNumberInput
            onChange={this.onChangeAge}
            value={value}
            maxLength={3}
            onValidation={this.onValidation}
            validations={[Validations.required, Validations.age]} />
          <RoundedButton text="Continue" disabled={!isValid} onPress={this.onPressContinue} />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

