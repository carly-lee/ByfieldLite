import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const SIZE_RATIO = width / 375; // Based on iPhone 8
const MIN_SCALE = 1;
const MAX_SCALE = 2;

export function getPixel(pt, minScale = MIN_SCALE, maxScale = MAX_SCALE) {
  return [SIZE_RATIO]
    .map(ratio => (minScale && ratio < minScale ? minScale : ratio))
    .map(ratio => (maxScale && ratio > maxScale ? maxScale : ratio))
    .map(ratio => Math.round(pt * ratio) || 1)[0]; // should be no less than 1.
}

export function convertFeetToCm(ft = 0) {
  return ft * 30.48;
}

export function convertInchToCm(inch = 0) {
  return inch * 2.54;
}

export function convertCmToFeet(cm = 0) {
  return cm * 0.032808;
}

export function convertFeetToInch(ft = 0) {
  return ft * 12;
}

export { default as Validations } from './Validations';
