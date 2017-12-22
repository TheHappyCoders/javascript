
### [新版rn0.42 node_modules中文件修改后reload不更新](http://stackoverflow.com/questions/41555050/how-to-watch-react-native-node-modules-changes)

* 方法1. you need to edit node_modules/react-native/packager/defaults.js and add your project name to providesNodeModules, like this: exports.providesModuleNodeModules = [ 'react-native', 'react-native-windows', 'react-native-menu', ];
* 方法2. 启动方式  react-native start  --providesModuleNodeModules react-native,{any_node_module}

### bundle 打包
#### android
* $ `mkdir -p android/app/src/main/assets`
* $ `react-native bundle --platform android --dev true --entry-file index.android.js  --bundle-output android/app/src/main/assets/index.android.bundle   --assets-dest android/app/src/main/res/`
#### ios
* $ `mkdir -p ios/app/src/main/assets`
* $ `react-native bundle --platform ios --dev true --entry-file index.ios.js   --bundle-output ios/app/src/main/assets/main.jsbundle  --assets-dest  ios/app/src/main/res/`

### bug：【declaration with the same name across two different files】
This warning is caused by a @providesModule declaration with the same name across two different files.
Failed to build DependencyGraph: @providesModule naming collision:
Duplicate module name: Text

解决方法 删除你自己组件中的@providesModule Text

 * Copyright (c) 2015-present, Facebook, Inc
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the     
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory
 * @providesModule Text
 * @flow

### [bug:Android studio - Failed to complete gradle execution - error in opening zip file](http://stackoverflow.com/questions/23828085/android-studio-failed-to-complete-gradle-execution-error-in-opening-zip-file)
* 解决方法: delete the .gradle directories in both your home directory and in your project's root directory and try building again.

### ios工具pod 安装、使用(相当于js的npm)
<pre>
1.gem sources --remove https://rubygems.org/      //去掉ruby软件源
2.gem sources -a https://ruby.taobao.org/    //添加淘宝的源  (谢谢提醒修改。)
3.gem sources -l     //查看ruby软件源
4.sudo gem update --system //
5.sudo gem install -n /usr/local/bin cocoapods
(如果使用‘sudo gem install cocoapods’，报错：
ERROR:  While executing gem ... (Errno::EPERM)
        Operation not permitted - /usr/bin/xcodeproj
原因：在stackoverflow搜到的解释是这样的，This is happening because 
Apple has enabled rootless on the new install，也就是说在10.11系统上苹果已经启用无根的安装。)
6.pod --version //查看是否安装成功
7.Create a Podfile by run ‘pod init’
8.edit Podfile 配置文件
=================
source 'https://github.com/CocoaPods/Specs.git'
platform :ios, ‘8.0’
target ‘myshenyang’ do
pod 'BaiduMapKit'
pod 'AFNetworking', '~> 3.1’
pod 'UMengAnalytics'
end
================
9.pod install
10.Open App.xcworkspace and build
</pre>

### 查看文件夹大小
进入某个文件夹执行 du -sh *

### 查看某个文件是否有不合法字符
cat -e 文件名

### app打包
#### android使用gradle打包apk
* 修改配置文件android/app/src/main/assets/config.properties
<pre>
#######正式测试环境
#isDebug=true
isDebug=false

######日志输出控件
isLog=false
#isLog=true

######接口地址zz
#url=https://xxx
#url=http://xxx
url=http://xxx

######文件保存路径
fileCatalog=filename

######react更新配制文件的接口地址
#reactUpdateUrl = http://xxx
#正式
reactUpdateUrl = https://xxx
#lizhi
#reactUpdateUrl = http://xxx

######react更新zip下载地址的前
#reactZipDownloadUrl = http://xxx
#正式
reactZipDownloadUrl = https://xxx
#lizhi
#reactZipDownloadUrl = http://xxx

######react跳转到下一个界面的名字
reactNextActivityName = com.xxx.MainActivity
</pre>
* 修改bundle入口模块名android/app/src/main/java/com/appname/MainActivity.java
<pre>
package com.rn_demo;
import com.facebook.react.ReactActivity;
public class MainActivity extends ReactActivity {
    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "SimpleApp";
    }
}
</pre>
* 修改build.gradle 的versionCode和versionName android/app/build.gradle
<pre>
defaultConfig {
   applicationId "com.appname"
   minSdkVersion 16
   targetSdkVersion 23
   versionCode 123
   versionName "3.1.1.15"
   ndk {
       abiFilters "armeabi-v7a", "x86"
   }
   // 默认的渠道
   manifestPlaceholders = [UMENG_CHANNEL_VALUE: "appname"]
}
</pre>
* 用gradle打包生成apk 
<pre>
$ cd android && ./gradlew assembleRelease 
会根据build.gradle的productFlavors配置生成所有平台apk
$ cd android && ./gradlew assemble[PlatformName]Release
会生成特定平台apk，如assembleXiaomiRelease
</pre>
* 在android/app/build/outputs下找到对应的apk
### react-native-web 实现的component和api
#### Components
<pre>
Button
ListView
ScrollView
Image
View
Text
TextInput
TouchableHighlight (mirrors React Native)
TouchableOpacity (mirrors React Native)
TouchableWithoutFeedback
Switch
ProgressBar
ActivityIndicator
</pre>
#### APIs
<pre>
Animated (mirrors React Native)
AppRegistry
AppState
AsyncStorage
Clipboard
Dimensions
I18nManager
NativeMethods
NetInfo
PanResponder (mirrors React Native)
PixelRatio
Platform
StyleSheet
Vibration
</pre>
