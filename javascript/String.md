
* 增加识别32bit字符，如“𠮷”("\uD842\uDFB7")
* 获取字符的码点，用char.codePointAt(index)代替char.charCodeAt(index)
* 从码点返回对应字符，用String.fromCodePoint(codepoint)代替String.fromCharCode(codepoint)
* for of才能识别32bit字符，正确分割码点 `var s = '𠮷a';for (let ch of s) { console.log(ch.codePointAt(0).toString(16));}`
* 将码点放入大括号,就能正确解读该字符"\u{20BB7}" 
* 大括号表示法与四字节的 UTF-16 编码是等价的 '\u{1F680}' === '\uD83D\uDE80' 
