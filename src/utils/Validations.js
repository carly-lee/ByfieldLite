import { MIN_AGE, MAX_AGE, MIN_HEIGHT, MAX_HEIGHT } from 'constants';

const Validations = {
  required: v => v.toString().trim(),

  age: v => v >= MIN_AGE && v <= MAX_AGE,

  height: v => v >= MIN_HEIGHT && v <= MAX_HEIGHT,
};

export default Validations;
