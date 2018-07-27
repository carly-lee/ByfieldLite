# ByfieldLite

## Requirements

- [node.js](https://nodejs.org/en/) >= 4.0.0
- cocoapods >= 1.3.1

## Stack

- [React Native](https://facebook.github.io/react-native/)
- [Redux](http://rackt.github.io/redux/)
- [React Native Navigation v2](https://wix.github.io/react-native-navigation/v2/)

## Tools

- [Visual Studio Code](https://code.visualstudio.com)
- [Xcode](https://developer.apple.com/xcode/)
- [Android studio](https://developer.android.com/studio/)

## Installation

```bash
brew install node
brew install watchman
brew install yarn
npm install -g react-native-cli or yarn global add react-native-cli

git clone git@github.com:carly-lee/ByfieldLite.git && cd ByfieldLite
yarn install
```

## Build and running the application

### iOS

```bash
cd ios && pod install
cd .. && yarn run-ios
```

## Issue

[TextInput value can't be change during onChangeText [iOS] · Issue #18874 · facebook/react-native](https://github.com/facebook/react-native/issues/18874)