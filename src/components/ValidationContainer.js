import React, { PureComponent } from 'react';
import { View, ViewPropTypes } from 'react-native';
import { func } from 'prop-types';

export default class ValidationContainer extends PureComponent {
  static propTypes = {
    children: func.isRequired,
    style: ViewPropTypes.style,
    onSubmit: func,
    onValidation: func,
    customValidation: func,
  }

  static defaultProps = {
    children: null,
    onSubmit: () => {},
    onValidation: () => {},
    customValidation: () => true,
  }

  constructor(props) {
    super(props);
    this.inputs = [];
  }

  isValid = () => this.inputs.reduce((a, input) =>
    input.value.isValid() && a, true)

  onValidation = () => {
    this.props.onValidation({ isValid: this.isValid() && this.props.customValidation(this.getValues()) });
  }

  getValues = () => this.inputs.reduce((a, input) =>
    a.concat([{ id: input.id, value: input.value.getValue() }]), [])

  onSubmit = () => {
    if (this.isValid()) this.props.onSubmit();
  }

  registerInput = (input) => {
    this.inputs.push(input);
  }

  render() {
    const { style, children } = this.props;

    return (
      <View style={style}>
        {children({
          registerInput: this.registerInput,
          onValidation: this.onValidation,
        })}
      </View>
    );
  }
}
