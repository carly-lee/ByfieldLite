import React, { PureComponent } from 'react';
import { View, Text, KeyboardAvoidingView } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { string, func } from 'prop-types';

import { SCREEN_TYPE } from 'constants';
import { setHeight } from 'actions';
import { RoundedButton, LeftRoundedButton, RightRoundedButton, ValidateNumberInput, ValidationContainer, ProgressBar } from 'components';
import { getPixel, Validations, convertFeetToCm, convertInchToCm } from 'utils';
import styles from './styles';

class Height extends PureComponent {
  static propTypes = {
    componentId: string.isRequired,
    setHeight: func.isRequired,
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
      height: '',
      unit: 'FT',
      isValid: false,
    };

    Navigation.mergeOptions(this.props.componentId, {
      topBar: {
        visible: true,
      },
    });
  }

  onPressContinue = () => {
    this.props.setHeight(this.state.height);
    Navigation.push(this.props.componentId, {
      component: {
        name: SCREEN_TYPE.CONFIRM,
      },
    });
  }

  customValidation = (values) => {
    const height = values.reduce((a, val) => {
      const converted = val.id === 'ft' ? convertFeetToCm(val.value) : convertInchToCm(val.value);
      return a + converted;
    }, 0);
    this.setState({ height: height.toFixed(2) });
    return Validations.height(height);
  }

  onValidation = ({ isValid }) => {
    this.setState({ isValid });
  }

  onChange = ({ id, text }) => {
    const value = text.replace(/\D/gi, '');
    if (id === 'cm') {
      this.setState({ [id]: value, height: value });
    } else {
      this.setState({ [id]: value });
    }
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
        <ValidationContainer
          style={styles.inputContainer}
          customValidation={this.customValidation}
          onValidation={this.onValidation}>
          <ValidateNumberInput
            id="ft"
            style={styles.halfInput}
            onChange={this.onChange}
            validations={[Validations.required]}
            value={ft}
            maxLength={2} />
          <ValidateNumberInput
            id="inch"
            style={styles.halfInput}
            onChange={this.onChange}
            validations={[Validations.required]}
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
        <ProgressBar />
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

export default connect(
  null,
  dispatch => bindActionCreators({ setHeight }, dispatch),
)(Height);
