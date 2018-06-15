import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

class Confirm extends PureComponent {
  static get options() {
    return {
      topBar: {
        noBorder: true,
      }
    };
  }

  render(){
    return(
      <View style={styles.container}>
        <Text>Confirm</Text>
      </View>
    )
  }
}

export default Confirm;