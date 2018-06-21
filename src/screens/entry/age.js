import React, { PureComponent } from 'react';
import { View, Text, KeyboardAvoidingView } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { string, func } from 'prop-types';

import { SCREEN_TYPE } from 'constants';
import { setAge } from 'actions';
import { RoundedButton, ValidateNumberInput, ProgressBar } from 'components';
import { getPixel, Validations } from 'utils';
import styles from './styles';

class Age extends PureComponent {
  static propTypes = {
    componentId: string.isRequired,
    setAge: func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      isValid: false,
    };

    Navigation.mergeOptions(this.props.componentId, {
      topBar: {
        visible: true,
      },
    });
  }

  onPressContinue = () => {
    this.props.setAge(this.state.value);
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
        <ProgressBar />
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

export default connect(
  null,
  dispatch => bindActionCreators({ setAge }, dispatch),
)(Age);
