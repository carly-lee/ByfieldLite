import React from 'react';
import { View, StyleSheet } from 'react-native';
import { number } from 'prop-types';

import { COLOR } from 'constants';
import { getPixel } from 'utils';

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.MINT,
    height: getPixel(4),
  },
});

const ProgressBar = ({ progress }) => (
    <View style={[styles.container, { width: `${progress}%` }]} />
);

ProgressBar.propTypes = {
  progress: number,
};

ProgressBar.defaultProps = {
  progress: 100,
};

export default ProgressBar;

