
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

### bug：【Duplicate module name: Text】
This warning is caused by a @providesModule declaration with the same name across two different files.
Failed to build DependencyGraph: @providesModule naming collision:
Duplicate module name: Text

解决方法 删除 你自己组件中的@providesModule Text
`/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule Text
 * @flow
 */`


