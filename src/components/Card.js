import React, { PureComponent } from 'react';
import { TouchableOpacity, Text, View, Image, ViewPropTypes } from 'react-native';
import { func, string } from 'prop-types';

import { chevronRight } from 'images';
import styles from './Card.styles';

export default class Card extends PureComponent {
  static propTypes = {
    onPress: func.isRequired,
    title: string,
    subTitle: string,
    id: string,
    containerStyle: ViewPropTypes.style,
  }

  static defaultProps = {
    id: '',
    title: 'title',
    subTitle: 'sub title',
    containerStyle: {},
  }

  onPress = () => {
    const { onPress, id } = this.props;
    onPress(id);
  }

  render() {
    const { title, subTitle, containerStyle } = this.props;

    return (
      <TouchableOpacity
        style={[styles.container, containerStyle]}
        onPress={this.onPress}>
        <View style={styles.shadow} />
        <View style={styles.content}>
          <View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subTitle}>{subTitle}</Text>
          </View>
          <Image source={chevronRight} />
        </View>
      </TouchableOpacity>
    );
  }
}
