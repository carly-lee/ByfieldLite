import { StyleSheet } from 'react-native';
import { getPixel } from 'utils';
import { COLOR, FONT } from 'constants';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: getPixel(20),
    paddingVertical: getPixel(50),
    alignItems: 'center',
  },
  backgroundImageContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  welcomeMessage: {
    fontFamily: FONT.MEDIUM,
    fontSize: getPixel(12),
    letterSpacing: 1,
    color: COLOR.DARK_GREY,
    paddingTop: getPixel(16),
  },
  question: {
    fontFamily: FONT.BOLD,
    fontSize: getPixel(24),
    color: COLOR.DARK_GREY,
    paddingVertical: getPixel(30),
  },
  cardGap: {
    marginBottom: getPixel(20),
  },

  // images
  bean: {
    position: 'absolute',
    top: getPixel(95),
  },
  mat: {
    position: 'absolute',
    bottom: getPixel(14),
    right: 0,
  },
  dumbbell: {
    position: 'absolute',
    right: 0,
    bottom: getPixel(40),
  },
});
