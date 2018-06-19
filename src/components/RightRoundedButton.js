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
    paddingVertical: getPixel(8),
    paddingHorizontal: getPixel(40),
    borderTopRightRadius: getPixel(15),
    borderBottomRightRadius: getPixel(15),
    backgroundColor: COLOR.WHITE,
    borderColor: COLOR.DARK_GREY,
    borderWidth: 1,
  },
  disabled: {
    backgroundColor: COLOR.DARK_GREY,
  },
  text: {
    fontFamily: FONT.MEDIUM,
    fontSize: getPixel(12),
    color: COLOR.DARK_GREY,
  },
  disabledText: {
    fontFamily: FONT.MEDIUM,
    fontSize: getPixel(12),
    color: COLOR.WHITE,
  },
});


export default class RightRoundedButton extends PureComponent {
  static propTypes = {
    onPress: func.isRequired,
    text: string,
    id: string,
    disabled: bool,
  }

  static defaultProps = {
    disabled: false,
    text: 'button',
    id: '',
  }

  render() {
    const {
      onPress, text, disabled, id,
    } = this.props;
    const textStyle = disabled ? styles.disabledText : styles.text;

    return (
      <Button
        containerStyle={styles.container}
        disabledStyle={styles.disabled}
        disabled={disabled}
        id={id}
        onPress={onPress}>
          <Text style={textStyle}>{text}</Text>
      </Button>
    );
  }
}
