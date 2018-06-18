import React, { PureComponent } from 'react';
import { TouchableOpacity, ViewPropTypes } from 'react-native';
import { func, node, bool } from 'prop-types';

export default class Button extends PureComponent {
  static propTypes = {
    onPress: func.isRequired,
    children: node,
    disabled: bool,
    containerStyle: ViewPropTypes.style,
    disabledStyle: ViewPropTypes.style,
  }

  static defaultProps = {
    children: null,
    disabled: false,
    containerStyle: {},
    disabledStyle: {},
    onPress: () => {},
  }

  getContainerStyle = () => {
    const { disabled, containerStyle, disabledStyle } = this.props;

    if (disabled) {
      return [containerStyle, disabledStyle];
    }
    return containerStyle;
  }

  onPressButton = () => {
    if (this.props.disabled) return;
    this.props.onPress();
  }

  render() {
    return (
      <TouchableOpacity style={this.getContainerStyle()} onPress={this.onPressButton}>
        {this.props.children}
      </TouchableOpacity>
    );
  }
}
