import React, { PureComponent } from 'react';
import { View, ViewPropTypes } from 'react-native';
import { func, element, arrayOf, oneOfType } from 'prop-types';

export default class ValidationContainer extends PureComponent {
  static propTypes = {
    children: oneOfType([element, arrayOf(element)]),
    style: ViewPropTypes.style,
    onSubmit: func,
    onValidation: func,
  }

  static defaultProps = {
    children: null,
    onSubmit: () => {},
    onValidation: () => {},
  }

  isProcessing = false;

  constructor(props) {
    super(props);
    this.inputs = [];
    this.validationState = [];
    this.state = {
    };
  }

  isValid = () => this.inputs.reduce((a, input) =>
    input.value.isValid() && a, true)

  onValidation = ({ id, isValid }) => {
    this.validationState[id] = isValid;
    this.props.onValidation(this.validationState.reduce((a, c) => a && c, true));
  }

  getValues = () => this.inputs.reduce((a, input) =>
    Object.assign({}, a, { [input.id]: input.value.getValue() }), {})

  onSubmit = () => {
    if (this.isValid()) this.props.onSubmit();
  }

  registerInput = (input) => {
    this.inputs.push(input);
    this.validationState.push({ id: input.id, isValid: false });
  }

  renderChildren = () => {
    const { children } = this.props;
    return React.Children.map(children, (child) => {
      if (!child) return child;
      return React.cloneElement(child, {
        registerInput: this.registerInput,
        onValidation: this.onValidation,
      });
    });
  }

  render() {
    const { style } = this.props;

    return (
      <View style={style}>
        {this.renderChildren()}
      </View>
    );
  }
}
