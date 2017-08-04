//webpack已经有字段extensions: [".web.js", ".js"]优雅解决

//自己底层实现方法
////////////////////
//1.得到某目录下.web.js文件到可识别require路径的对照关系
//////////////////

const fs = require("fs");
class SwitchNativePathToWebPath {
    constructor(dirArr) {
        this.dirArr = dirArr || ["./node_modules/audaque-ssz"];//需要处理的目录 需要在node_modules目录下
        this.pathArr = [];
        this.alias = {};
    }
    getFileName(dirPath) {
        let files = fs.readdirSync(dirPath);
        files.forEach(v => {
            let stat = fs.statSync(dirPath + "/" + v);
            if (stat.isDirectory()) {
                //是目录 就遍历
                this.getFileName(dirPath + "/" + v);
            } else {
                //如果是文件
                this.pathArr.push(dirPath + "/" + v);
            }
        });
    }
    getPathArr() {
        this.dirArr.forEach(v => {
            this.getFileName(v);
        });
    }
    filterWebPath() {
        this.pathArr.forEach(v => {
            if (/\.web\.js$/.test(v)) {
                let filepath = v.substring(15);
                if (filepath !== undefined) {
                    let subIndex = filepath.lastIndexOf(".") - 4;
                    let substr = filepath.substring(0, subIndex);

                    //path非index正常结尾
                    this.alias[substr + "$"] = filepath;
                    //如果index结尾
                    if (/\/index$/.test(substr)) {
                        this.alias[substr.substring(0, substr.lastIndexOf("/")) + "$"] = filepath;
                    }
                }
            }
        });
    }
    getAlias() {
        this.getPathArr();
        this.filterWebPath();
        console.log(this.alias);
        return this.alias;
    }
}

////////////////////
//2.将对照关系配置进webpack
//////////////////
resolve: {
    alias: Object.assign(
        {},
        {"react-native": "react-native-web"}
        new SwitchNativePathToWebPath(["./lib/audaque-ssz"]).getAlias()
    )
}
