import { Navigation } from 'react-native-navigation';

import { SCREEN_TYPE, COLOR } from 'constants';

import Landing from 'screens/landing';
import Age from 'screens/entry/age';
import Height from 'screens/entry/height';
import Confirm from 'screens/confirm';

function registerScreens() {
  Navigation.registerComponent(SCREEN_TYPE.LANDING, () => Landing);
  Navigation.registerComponent(SCREEN_TYPE.AGE, () => Age);
  Navigation.registerComponent(SCREEN_TYPE.HEIGHT, () => Height);
  Navigation.registerComponent(SCREEN_TYPE.CONFIRM, () => Confirm);
}

registerScreens();

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setDefaultOptions({
    topBar: {
      drawBehind: true,
      backButtonImage: require('./images/icArrowLeft.png'),
      buttonColor: COLOR.DARK_GREY,
      hideBackButtonTitle: true,
    },
  });

  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: SCREEN_TYPE.LANDING,
            },
          },
        ],
      },
    },
  });
});
