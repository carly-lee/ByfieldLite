import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';

import { RoundedButton } from 'components';
import styles from './styles';

class Confirm extends PureComponent {
  static get options() {
    return {
      topBar: {
        noBorder: true,
      },
    };
  }

  onSave = () => {

  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Confirm your details:</Text>
        <RoundedButton text="Save" onPress={this.onSave} />
      </View>
    );
  }
}

export default Confirm;
