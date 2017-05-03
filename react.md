
### [新版rn node_modules中文件修改后reload不更新(How to watch react-native node_modules changes)](http://stackoverflow.com/questions/41555050/how-to-watch-react-native-node-modules-changes)

* 方法1. you need to edit node_modules/react-native/packager/defaults.js and add your project name to providesNodeModules, like this: exports.providesModuleNodeModules = [ 'react-native', 'react-native-windows', 'react-native-menu', ];
* 方法2. 启动方式  react-native start  --providesModuleNodeModules react-native,{any_node_module}
