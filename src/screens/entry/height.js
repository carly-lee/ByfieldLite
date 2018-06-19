import React, { PureComponent } from 'react';
import { View, Text, TextInput, KeyboardAvoidingView } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { string } from 'prop-types';

import { SCREEN_TYPE } from 'constants';
import { RoundedButton } from 'components';
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

  onPressContinue = () => {
    Navigation.push(this.props.componentId, {
      component: {
        name: SCREEN_TYPE.CONFIRM,
      },
    });
  }

  render() {
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
            keyboardType="numeric" />
          <RoundedButton text="Continue" onPress={this.onPressContinue} />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

export default Height;
