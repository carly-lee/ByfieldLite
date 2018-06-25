//
//  AppDelegate.swift
//  ByfieldLite
//
//  Created by Eunjeong Lee on 22/06/2018.
//  Copyright © 2018 Facebook. All rights reserved.
//

import UIKit

@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate {
  var window: UIWindow?
  var bridge: RCTBridge!
  
  func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplicationLaunchOptionsKey : Any]? = nil) -> Bool {
    
    var jsCodeLocation:URL?
#if DEBUG
    jsCodeLocation = RCTBundleURLProvider.sharedSettings().jsBundleURL(forBundleRoot: "index", fallbackResource:nil);
#else
    jsCodeLocation = Bundle.main.url(forResource: "main", withExtension: "jsbundle");
#endif
    
    ReactNativeNavigation.bootstrap(jsCodeLocation, launchOptions: launchOptions)

    return true
  }
}
