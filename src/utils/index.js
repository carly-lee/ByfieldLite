
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const SIZE_RATIO = width / 375; // Based on iPhone 8

export function getPixel(pt, minScale = MIN_SCALE, maxScale = MAX_SCALE) {
  return [SIZE_RATIO]
    .map(ratio => (minScale && ratio < minScale ? minScale : ratio))
    .map(ratio => (maxScale && ratio > maxScale ? maxScale : ratio))
    .map(ratio => Math.round(pt * ratio) || 1)[0]; // should be no less than 1.
}