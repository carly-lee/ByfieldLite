import React, { PureComponent, Fragment } from 'react';
import { View, Text, KeyboardAvoidingView } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { string, func, number } from 'prop-types';

import { SCREEN_TYPE } from 'constants';
import { setHeight, updateProgress } from 'actions';
import { RoundedButton, LeftRoundedButton, RightRoundedButton, ValidateNumberInput, ValidationContainer, ProgressBar } from 'components';
import { getPixel, Validations, convertFeetToCm, convertInchToCm } from 'utils';
import styles from './styles';

class Height extends PureComponent {
  static get options() {
    return {
      topBar: {
        visible: true,
      },
    };
  }

  static propTypes = {
    componentId: string.isRequired,
    setHeight: func.isRequired,
    updateProgress: func.isRequired,
    progress: number.isRequired,
    type: string,
  }

  static defaultProps = {
    type: 'weight',
  }

  constructor(props) {
    super(props);
    this.state = {
      ft: '',
      inch: '',
      height: '',
      unit: 'FT',
      isValid: false,
    };
  }

  componentDidMount() {
    this.props.updateProgress(100);
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
    this.setState({ [id]: value });
  }

  onToggleUnit = (id) => {
    this.setState({ unit: id });
  }

  getInput = () => {
    const {
      unit, height, ft, inch,
    } = this.state;
    if (unit === 'FT') {
      return (
        <ValidationContainer
          style={styles.inputContainer}
          customValidation={this.customValidation}
          onValidation={this.onValidation}>
          {({ registerInput, onValidation }) => (
            <Fragment>
              <ValidateNumberInput
                id="ft"
                style={styles.halfInput}
                onChange={this.onChange}
                registerInput={registerInput}
                onValidation={onValidation}
                validations={[Validations.required]}
                value={ft}
                maxLength={2} />
              <ValidateNumberInput
                id="inch"
                style={styles.halfInput}
                onChange={this.onChange}
                registerInput={registerInput}
                onValidation={onValidation}
                validations={[Validations.required]}
                value={inch}
                autoFocus={false}
                maxLength={2} />
            </Fragment>
          )}
        </ValidationContainer>
      );
    }
    return (
      <ValidateNumberInput
        id="height"
        onChange={this.onChange}
        value={height}
        maxLength={3}
        onValidation={this.onValidation}
        validations={[Validations.required, Validations.height]} />
    );
  }

  render() {
    const { isValid, unit } = this.state;
    const { progress } = this.props;

    return (
      <KeyboardAvoidingView
        behavior="padding"
        keyboardVerticalOffset={getPixel(64)}
        style={styles.container}
        enabled>
        <ProgressBar progress={progress} />
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
  state => ({ progress: state.progress }),
  dispatch => bindActionCreators({ setHeight, updateProgress }, dispatch),
)(Height);
