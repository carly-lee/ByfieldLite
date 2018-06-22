import React, { PureComponent } from 'react';
import { Animated } from 'react-native';
import { object } from 'prop-types';

export default WrappedComponent => class withAnimation extends PureComponent {
  static propTypes = {
    animationStyle: object.isRequired,
  }

  render() {
    return (
      <Animated.View style={[{ width: '100%' }, this.props.animationStyle]}>
        <WrappedComponent {...this.props} />
      </Animated.View>
    );
  }
};

