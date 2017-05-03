
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


