import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { string } from 'prop-types';

import { SCREEN_TYPE, FONT } from 'constants';
import styles from './styles';

import { RoundedButton, LeftRoundedButton, RightRoundedButton } from 'components';

class Landing extends PureComponent {
  static get options() {
    return {
      topBar: {
        visible: false,
      },
    };
  }

  static propTypes = {
    componentId: string.isRequired,
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontFamily: FONT.BOLD }}>Landing</Text>
        <RoundedButton
          title="go to Entry"
          onPress={() => {
          Navigation.push(this.props.componentId, {
            component: {
              name: SCREEN_TYPE.ENTRY,
            },
          });
        }} />
        <LeftRoundedButton text="LeftRoundedButton" onPress={() => {}} />
        <RightRoundedButton text="RightRoundedButton" onPress={() => {}} />
      </View>
    );
  }
}

export default Landing;
