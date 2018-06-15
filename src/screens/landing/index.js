import React, { PureComponent } from 'react';
import { View, Text, Button } from 'react-native';
import { Navigation } from 'react-native-navigation';

import { SCREEN_TYPE, FONT } from 'constants';
import styles from './styles';

class Landing extends PureComponent {
  static get options() {
    return {
      topBar: {
        visible: false,
      }
    };
  }
  
  render(){
    return(
      <View style={styles.container}>
        <Text style={{ fontFamily: FONT.BOLD }}>Landing</Text>
        <Button onPress={() => {
          Navigation.push(this.props.componentId, {
            component: {
              name: SCREEN_TYPE.ENTRY,
            }
          });
        }} title="go to Entry" />
      </View>
    )
  }
}

export default Landing;