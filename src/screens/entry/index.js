import React, { PureComponent } from 'react';
import { View, Text, Button } from 'react-native';
import { Navigation } from 'react-native-navigation';

import { SCREEN_TYPE } from 'constants';
import styles from './styles';

class Entry extends PureComponent {
  static get options() {
    return {
      topBar: {
        noBorder: false
      }
    };
  }

  render(){
    return(
      <View style={styles.container}>
        <Text>Entry</Text>
        <Button onPress={() => {
          Navigation.push(this.props.componentId, {
            component: {
              name: SCREEN_TYPE.CONFIRM,
            }
          });
        }} title="go to Confirm Detail" />
      </View>
    )
  }
}

export default Entry;