import React, { PureComponent } from 'react';
import { TouchableOpacity, Text, View, Image, ViewPropTypes } from 'react-native';
import { func, string, any } from 'prop-types';

import { chevronRight } from 'images';
import withAnimation from './withAnimation';
import styles from './Card.styles';

export default class Card extends PureComponent {
  static propTypes = {
    onPress: func.isRequired,
    title: string,
    subTitle: string,
    containerStyle: ViewPropTypes.style,
    data: any,
  }

  static defaultProps = {
    title: 'title',
    subTitle: 'sub title',
    containerStyle: {},
    data: null,
  }

  onPress = () => {
    this.props.onPress(this.props.data);
  }

  render() {
    const {
      title, subTitle, containerStyle,
    } = this.props;

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

export const AnimatedCard = withAnimation(Card);
