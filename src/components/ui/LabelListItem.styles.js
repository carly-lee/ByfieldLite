import { StyleSheet } from 'react-native';
import { getPixel } from 'utils';
import { FONT, COLOR } from 'constants';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: getPixel(20),
  },
  label: {
    fontFamily: FONT.REGULAR,
    fontSize: getPixel(16),
    color: COLOR.BLACK,

  },
  value: {
    fontFamily: FONT.REGULAR,
    fontSize: getPixel(14),
    color: COLOR.VALUE,
  },
});
