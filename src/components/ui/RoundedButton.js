import React, { PureComponent } from 'react';
import { StyleSheet, Text } from 'react-native';
import { func, string, bool } from 'prop-types';

import { FONT, COLOR } from 'constants';
import { getPixel } from 'utils';

import Button from './Button';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: getPixel(14),
    paddingHorizontal: getPixel(30),
    borderRadius: getPixel(24),
    backgroundColor: COLOR.DARK_GREY,
  },
  disabled: {
    backgroundColor: COLOR.GREY,
  },
  text: {
    fontFamily: FONT.MEDIUM,
    fontSize: getPixel(16),
    color: COLOR.WHITE,
  },
});

export default class RoundedButton extends PureComponent {
  static propTypes = {
    onPress: func.isRequired,
    text: string,
    disabled: bool,
  }

  static defaultProps = {
    disabled: false,
    text: 'button',
  }

  render() {
    const { onPress, text, disabled } = this.props;

    return (
      <Button
        containerStyle={styles.container}
        disabledStyle={styles.disabled}
        disabled={disabled}
        onPress={onPress}>
          <Text style={styles.text}>{text}</Text>
      </Button>
    );
  }
}
