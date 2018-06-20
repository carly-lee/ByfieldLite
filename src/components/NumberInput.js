import React, { PureComponent } from 'react';
import { TextInput, StyleSheet, ViewPropTypes } from 'react-native';
import { func, string, number, bool } from 'prop-types';

import { FONT, COLOR } from 'constants';
import { getPixel } from 'utils';
import withValidation from './withValidation';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderBottomWidth: 1,
    borderColor: COLOR.LINE,
    fontFamily: FONT.BOLD,
    fontSize: getPixel(32),
    color: COLOR.DARK_GREY,
    textAlign: 'center',
  },
});

export default class NumberInput extends PureComponent {
  static propTypes = {
    id: string,
    onChangeText: func,
    value: string,
    maxLength: number,
    autoFocus: bool,
    style: ViewPropTypes.style,
  }

  static defaultProps = {
    id: '',
    onChangeText: () => {},
    value: '',
    maxLength: 0,
    autoFocus: true,
    style: {},
  }

  render() {
    const {
      value, maxLength, autoFocus, style, onChangeText,
    } = this.props;

    return (
      <TextInput
        style={[styles.container, style]}
        underlineColorAndroid="transparent"
        keyboardType="numeric"
        value={value}
        maxLength={maxLength}
        autoFocus={autoFocus}
        onChangeText={onChangeText} />
    );
  }
}

export const ValidateNumberInput = withValidation(NumberInput);
