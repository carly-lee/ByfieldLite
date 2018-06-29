import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import hoistNonReactStatics from 'hoist-non-react-statics';

import reducer from './reducers';

const store = createStore(reducer);

export default store;

export function storeWrapper(PassedComponent, store) {
  class SceneWrapper extends Component {
    render() {
      return <Provider store={store}><PassedComponent {...this.props} /></Provider>;
    }
  }
  return hoistNonReactStatics(SceneWrapper, PassedComponent);
}
