import React, { PureComponent } from 'react';
import { View, StyleSheet } from 'react-native';
import { node } from 'prop-types';

import { COLOR } from 'constants';
import { getPixel } from 'utils';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: getPixel(20),
    borderWidth: 1,
    borderColor: COLOR.LINE,
    backgroundColor: COLOR.WHITE,
  },
});

export default class Panel extends PureComponent {
  static propTypes = {
    children: node,
  }

  static defaultProps = {
    children: null,
  }

  render() {
    return (
      <View style={styles.container}>
        {this.props.children}
      </View>
    );
  }
}
