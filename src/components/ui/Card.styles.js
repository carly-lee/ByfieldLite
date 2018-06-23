import { StyleSheet } from 'react-native';
import { getPixel } from 'utils';
import { FONT, COLOR } from 'constants';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
    height: getPixel(100),
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: getPixel(100),
    padding: getPixel(20),
    borderRadius: getPixel(10),
    backgroundColor: COLOR.WHITE,
    borderWidth: 1,
    borderColor: COLOR.LIGHT_GREY,
  },
  shadow: {
    position: 'absolute',
    top: getPixel(10),
    width: '92%',
    height: getPixel(88),
    borderRadius: getPixel(10),
    backgroundColor: COLOR.WHITE,
    shadowColor: COLOR.BLACK,
    shadowOpacity: 0.8,
    shadowRadius: getPixel(4),
    shadowOffset: {
      width: 0,
      height: getPixel(3),
    },
  },
  title: {
    fontFamily: FONT.BOLD,
    fontSize: getPixel(20),
    lineHeight: getPixel(30),
    color: COLOR.DARK_GREY,

  },
  subTitle: {
    fontFamily: FONT.REGULAR,
    fontSize: getPixel(16),
    lineHeight: getPixel(30),
    color: COLOR.DARK_GREY,
  },
});
