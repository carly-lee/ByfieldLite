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
    
    let jsCodeLocation:URL = RCTBundleURLProvider.sharedSettings().jsBundleURL(forBundleRoot: "index", fallbackResource:nil);
    ReactNativeNavigation.bootstrap(jsCodeLocation, launchOptions: launchOptions)

    return true
  }
}
