package com.byfieldlite;

import android.support.annotation.Nullable;

import com.facebook.react.ReactApplication;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.react.uimanager.UIImplementationProvider;

import java.util.Arrays;
import java.util.List;

import com.reactnativenavigation.NavigationApplication;
import com.reactnativenavigation.react.NavigationReactNativeHost;
import com.reactnativenavigation.react.SyncUiImplementation;

public class MainApplication extends NavigationApplication {

  @Override
  public void onCreate() {
      super.onCreate();
  }

  @Override
  protected ReactNativeHost createReactNativeHost() {
      return new NavigationReactNativeHost(this) {
          @Override
          protected String getJSMainModuleName() {
              return "index";
          }

          @Override
          protected UIImplementationProvider getUIImplementationProvider() {
              return new SyncUiImplementation.Provider();
          }
      };
  }

  @Override
  public boolean isDebug() {
      return BuildConfig.DEBUG;
  }

  @Nullable
  @Override
  public List<ReactPackage> createAdditionalReactPackages() {
      return null;
  }
}
