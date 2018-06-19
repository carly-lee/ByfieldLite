import React, { PureComponent } from 'react';
import { TouchableOpacity, ViewPropTypes } from 'react-native';
import { func, node, bool, string } from 'prop-types';

export default class Button extends PureComponent {
  static propTypes = {
    onPress: func.isRequired,
    children: node,
    disabled: bool,
    containerStyle: ViewPropTypes.style,
    disabledStyle: ViewPropTypes.style,
    id: string,
  }

  static defaultProps = {
    children: null,
    disabled: false,
    containerStyle: {},
    disabledStyle: {},
    onPress: () => {},
    id: '',
  }

  getContainerStyle = () => {
    const { disabled, containerStyle, disabledStyle } = this.props;

    if (disabled) {
      return [containerStyle, disabledStyle];
    }
    return containerStyle;
  }

  onPressButton = () => {
    const { disabled, onPress, id } = this.props;
    if (disabled) return;
    onPress(id);
  }

  render() {
    const { disabled } = this.props;

    return (
      <TouchableOpacity
        style={this.getContainerStyle()}
        onPress={this.onPressButton}
        activeOpacity={disabled ? 1 : 0.4}>
        {this.props.children}
      </TouchableOpacity>
    );
  }
}
