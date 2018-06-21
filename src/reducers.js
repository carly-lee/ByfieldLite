import { camelCase } from 'lodash';

const createReducer = (initialState, reducer) => (state = initialState, action = {}) => {
  const { type, payload, error } = action;
  const r = reducer[camelCase(type)];
  return (r) ? r(state, payload, error) : state;
};

const initialState = {
  progress: 0,
  height: 0,
  age: 0,
  goal: '',
};

const reducer = {
  setGoal(state, payload) {
    return { ...state, ...{ goal: payload } };
  },

  updateProgress(state, payload) {
    return { ...state, ...{ progress: payload } };
  },

  setAge(state, payload) {
    return { ...state, ...{ age: payload } };
  },

  setHeight(state, payload) {
    return { ...state, ...{ height: payload } };
  },

};

export default createReducer(initialState, reducer);
