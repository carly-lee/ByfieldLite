import React, { PureComponent } from 'react';
import { Text, View, ViewPropTypes } from 'react-native';
import { string } from 'prop-types';

import styles from './LabelListItem.styles';

export default class LabelListItem extends PureComponent {
  static propTypes = {
    label: string,
    value: string,
    style: ViewPropTypes.style,
  }

  static defaultProps = {
    label: 'label',
    value: 'value',
    style: {},
  }

  render() {
    const { label, value, style } = this.props;

    return (
      <View style={[styles.container, style]}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.value}>{value}</Text>
      </View>
    );
  }
}
