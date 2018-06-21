import { Navigation } from 'react-native-navigation';

import { SCREEN_TYPE, COLOR } from 'constants';
import store, { storeWrapper } from 'store';

import Landing from 'screens/landing';
import Age from 'screens/entry/age';
import Height from 'screens/entry/height';
import Confirm from 'screens/confirm';

function registerScreens() {
  Navigation.registerComponent(SCREEN_TYPE.LANDING, () => storeWrapper(Landing, store));
  Navigation.registerComponent(SCREEN_TYPE.AGE, () => storeWrapper(Age, store));
  Navigation.registerComponent(SCREEN_TYPE.HEIGHT, () => storeWrapper(Height, store));
  Navigation.registerComponent(SCREEN_TYPE.CONFIRM, () => storeWrapper(Confirm, store));
}

registerScreens();

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setDefaultOptions({
    topBar: {
      visible: false,
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
