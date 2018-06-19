import { StyleSheet } from 'react-native';
import { getPixel } from 'utils';
import { COLOR, FONT } from 'constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: getPixel(20),
    paddingBottom: getPixel(20),
  },
  title: {
    fontFamily: FONT.BOLD,
    fontSize: getPixel(24),
    color: COLOR.DARK_GREY,
    marginBottom: getPixel(40),
  },
});
