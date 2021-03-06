import { StyleSheet } from 'react-native';
import { getPixel } from 'utils';
import { COLOR, FONT } from 'constants';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-between',
    paddingTop: getPixel(26),
    paddingBottom: getPixel(20),
    paddingHorizontal: getPixel(20),
  },
  question: {
    fontFamily: FONT.BOLD,
    fontSize: getPixel(24),
    color: COLOR.DARK_GREY,
  },
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    width: '100%',
    borderBottomWidth: 1,
    borderColor: COLOR.LINE,
    fontFamily: FONT.BOLD,
    fontSize: getPixel(32),
    color: COLOR.DARK_GREY,
    textAlign: 'center',
  },
  halfInput: {
    width: '46%',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
});
