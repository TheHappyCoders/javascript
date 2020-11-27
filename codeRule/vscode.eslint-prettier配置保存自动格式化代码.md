

# vscode插件
* Prettier - Code formatter

# settings.json重要配置(文件-首选项-设置)
```
"editor.formatOnSave": true,  //按保存键时触发格式化
"files.autoSave": "off"，//不自动保存，按保存键触发格式化
"eslint.alwaysShowStatus": true，//编辑器下面显示eslint的状态栏，!!!如果显示禁用要点击下开启，不开启eslint编辑器不报错提醒
//语言格式化配置，分多条写如[javascript]:{}
"[javascript|vue|html|typescript|html|scss|css]": {
  "editor.defaultFormatter": "esbenp.prettier-vscode"
},
```

# package.json相关包
*  "@vue/cli-plugin-babel": "^4.4.0",    //cli工具初始化自带
*  "@vue/cli-plugin-eslint": "~4.5.0",   //cli工具初始化自带
*  "babel-eslint": "^10.1.0",            //cli工具初始化自带
*  "eslint": "^6.7.2",                   //cli工具初始化自带
*  "eslint-plugin-vue": "^6.2.2",        //cli工具初始化自带
*  "eslint-config-prettier": "^6.12.0",
*  "eslint-plugin-prettier": "^3.1.4"

# 规则配置
* eslint(语法规则检测)见 .eslintrc.js (在```rules:{'prettier/prettier': 'error'}```开启prettier)
* prettier(代码格式化)见  .prettierrc.js 


# .eslintrc.js参考
```
module.exports = {
    root: true,
    parserOptions: {
        parser: 'babel-eslint'
    },
    env: {
        browser: true,
        es6: true,
        node: true
    },
    extends: [
        'plugin:vue/essential', //https://eslint.vuejs.org/rules/
        'eslint:recommended', //https://eslint.bootcss.com/docs/rules/
        'plugin:prettier/recommended'
    ],
    // required to lint *.vue files
    plugins: ['vue'],
    // add your custom rules here
    rules: {
        'prettier/prettier': 'error',
        'no-unused-vars': 'error',
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
    }
};

```

# .prettierrc.js参考
```
module.exports = {
    // tab缩进大小,默认为2
    tabWidth: 4,
    // 超过最大值换行 默认80(项目实践出结果)
    printWidth: 120,
    // 使用tab缩进，默认false
    useTabs: false,
    // 句尾添加分号
    semi: true,
    // 使用单引号, 默认false(在jsx中配置无效, 默认都是双引号)(项目实践出结果)
    singleQuote: true,
    // 默认值。因为使用了一些折行敏感型的渲染器（如GitHub comment）而按照markdown文本样式进行折行
    proseWrap: 'preserve',
    // (x) => {} 箭头函数参数只有一个时是否要有小括号。avoid：省略括号 always 总是有括号
    arrowParens: 'always',
    // 在对象，数组括号与文字之间加空格 "{ foo: bar }"
    bracketSpacing: true,
    // 结尾是 \n \r \n\r auto
    endOfLine: 'auto',
    htmlWhitespaceSensitivity: 'ignore',
    // 不使用prettier格式化的文件填写在项目的.prettierignore文件中
    ignorePath: '.prettierignore',
    // Require a "prettierconfig" to format prettier
    requireConfig: false,
    // 行尾逗号,默认none,可选 none|es5|all {name: 'audaque'}
    // es5 包括es5中的数组、对象
    // all 包括函数对象等所有可选
    trailingComma: 'none'
};

```
