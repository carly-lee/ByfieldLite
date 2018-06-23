import React, { PureComponent } from 'react';
import { ViewPropTypes } from 'react-native';
import { func, string, number, bool, arrayOf } from 'prop-types';

export default WrappedComponent => class withValidation extends PureComponent {
  static propTypes = {
    registerInput: func,
    validations: arrayOf(func),
    onChange: func,
    onValidation: func,
    id: string,
    value: string,
    maxLength: number,
    autoFocus: bool,
    style: ViewPropTypes.style,
  }

  static defaultProps = {
    id: '',
    onChange: () => {},
    registerInput: () => {},
    onValidation: () => {},
    value: '',
    maxLength: 0,
    autoFocus: true,
    style: {},
    validations: [],
  }

  constructor(props) {
    super(props);
    this.state = {
      isEdited: false,
      value: props.value || '',
    };
  }

  componentDidMount() {
    this.props.registerInput({ id: this.props.id, value: this });
  }

  getValue = () => this.state.value;

  isValid = () => {
    const { validations } = this.props;
    const value = this.state.value.toString().trim();
    return validations.reduce((a, predicate) =>
      a && predicate(value), true);
  }

  onChangeText = (text) => {
    const { id, onChange, onValidation } = this.props;
    this.setState({
      isEdited: true,
      value: text,
    }, () => {
      onChange({ id, text });
      onValidation({ id, isValid: this.isValid() });
    });
  }

  render() {
    return (
      <WrappedComponent
        onChangeText={this.onChangeText}
        {...this.props} />
    );
  }
};

