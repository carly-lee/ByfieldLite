import React, { PureComponent } from 'react';
import { View, Text, KeyboardAvoidingView } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { string } from 'prop-types';

import { SCREEN_TYPE } from 'constants';
import { RoundedButton, LeftRoundedButton, RightRoundedButton, ValidateNumberInput, ValidationContainer } from 'components';
import { getPixel, Validations } from 'utils';
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
      cm: '',
      ft: '',
      inch: '',
      unit: 'FT',
      isValid: false,
    };
  }

  onPressContinue = () => {
    Navigation.push(this.props.componentId, {
      component: {
        name: SCREEN_TYPE.CONFIRM,
      },
    });
  }

  getCm = (type, value) => {
    if (this.state.unit === 'FT') {
      return value;
    }
    return value;
  }

  onValidation = ({ isValid }) => {
    this.setState({ isValid });
  }

  onChange = ({ id, text }) => {
    const value = text.replace(/\D/gi, '');
    const converted = this.getCm(id, value);

    this.setState({
      [id]: value,
      cm: converted,
      isValid: converted >= 125 && converted <= 301,
    });
  }

  onToggleUnit = (id) => {
    this.setState({ unit: id });
  }

  getInput = () => {
    const {
      unit, cm, ft, inch,
    } = this.state;
    if (unit === 'FT') {
      return (
        <ValidationContainer style={styles.inputContainer} onValidation={this.onValidation}>
          <ValidateNumberInput
            id="ft"
            style={styles.halfInput}
            onChange={this.onChange}
            validations={[Validations.required, Validations.height]}
            value={ft}
            maxLength={2} />
          <ValidateNumberInput
            id="inch"
            style={styles.halfInput}
            onChange={this.onChange}
            validations={[Validations.required, Validations.height]}
            value={inch}
            autoFocus={false}
            maxLength={2} />
        </ValidationContainer>
      );
    }
    return (
      <ValidateNumberInput
        id="cm"
        onChange={this.onChange}
        value={cm}
        maxLength={3}
        onValidation={this.onValidation}
        validations={[Validations.required, Validations.height]} />
    );
  }

  render() {
    const { isValid, unit } = this.state;

    return (
      <KeyboardAvoidingView
        behavior="padding"
        keyboardVerticalOffset={getPixel(64)}
        style={styles.container}
        enabled>
        <View style={styles.content}>
          <Text style={styles.question}>How tall are you?</Text>
          {this.getInput()}
          <View style={styles.buttonContainer}>
            <LeftRoundedButton id="FT" text="FT" disabled={unit === 'FT'} onPress={this.onToggleUnit} />
            <RightRoundedButton id="CM" text="CM" disabled={unit === 'CM'} onPress={this.onToggleUnit} />
          </View>
          <RoundedButton text="Continue" disabled={!isValid} onPress={this.onPressContinue} />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

export default Height;
