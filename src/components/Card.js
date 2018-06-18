import React, { PureComponent } from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Image } from 'react-native';
import { func, string } from 'prop-types';

import { FONT, COLOR } from 'constants';
import { getPixel } from 'utils';
import { chevronRight } from 'images';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: getPixel(100),
    padding: getPixel(20),
    borderRadius: getPixel(20),
    backgroundColor: COLOR.WHITE,
  },
  title: {
    fontFamily: FONT.BOLD,
    fontSize: getPixel(20),
  },
  subTitle: {
    fontFamily: FONT.REGULAR,
    fontSize: getPixel(16),
  },
});

export default class Card extends PureComponent {
  static propTypes = {
    onPress: func.isRequired,
    title: string,
    subTitle: string,
  }

  static defaultProps = {
    text: 'title',
    subTitle: 'sub title',
  }

  render() {
    const { title, subTitle, onPress } = this.props;

    return (
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subTitle}>{subTitle}</Text>
        </View>
        <Image source={{ uri: chevronRight }} />
      </TouchableOpacity>
    );
  }
}
