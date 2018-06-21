import React from 'react';
import { View, StyleSheet } from 'react-native';
import { node } from 'prop-types';

import { COLOR } from 'constants';
import { getPixel } from 'utils';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: COLOR.MINT,
    height: getPixel(4),
  },
});

const ProgressBar = () => (
    <View style={styles.container} />
);

export default ProgressBar;

