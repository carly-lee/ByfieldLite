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

---

## Thoughts 

It was such an excellent opportunity to use new tools and skills I've wanted to use so long.

Primarily I wanted to try out converting Objective-C based React Native project to Swift based React Native project.  I'm happy for that I moved the first step towards even though there is not much swift code.

I was so happy late last year and early this year while working on re-architecting and refactoring the entire application. Before that, I had felt  I know things vaguely and not comfortable, but after remaking, I got more confidence and a clear idea.

 I wanted to recap what I've learnt through that experience. I've spent the joyful time I was able to do so while coding this project. 

Of course, there were some obstacles.

I've tried to switch text while a user is typing but it didn't work. It turns out there's a bug in TextInput. So I had to fork the repository and use the forked one. Also, while doing that, I found an interesting fact the master branch of React Native has version 1,000!

In conclusion, through this project, I was able to make my knowledge clearer and more concrete. I definitely should do more like this. XD


----

[TextInput value can't be change during onChangeText [iOS] · Issue #18874 · facebook/react-native](https://github.com/facebook/react-native/issues/18874)