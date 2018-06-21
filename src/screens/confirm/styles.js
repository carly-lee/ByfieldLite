import { StyleSheet } from 'react-native';
import { getPixel } from 'utils';
import { COLOR, FONT } from 'constants';

export default StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    marginTop: getPixel(64),
    paddingHorizontal: getPixel(20),
    paddingBottom: getPixel(20),
  },
  backButton: {
    paddingTop: getPixel(28),
    paddingLeft: getPixel(8),
  },
  title: {
    textAlign: 'center',
    fontFamily: FONT.BOLD,
    fontSize: getPixel(24),
    color: COLOR.DARK_GREY,
    marginBottom: getPixel(40),
  },
  border: {
    borderBottomWidth: 1,
    borderColor: COLOR.LINE,
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  // images
  bean: {
    position: 'absolute',
    top: getPixel(150),
    left: getPixel(-30),
  },
  parsley: {
    position: 'absolute',
    right: 0,
    top: getPixel(-60),
  },
});
