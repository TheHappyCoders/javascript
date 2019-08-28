# 常用行内元素
* 表单`(label button textarea select input...)`
* span img
# 常用块元素
* `address 地址,section一个页面区段, article文章内容, aside伴随内容, header头, footer脚`
* `audio video canvas`
* `div form ul ol h1-6 table p`
# 移动端viewport设置
 `<meta name="viewport" content="width=device-width,user-scalable=no,initial-scale=1.0, maximum-scale=1.0">`
 # 忽略电话号码识别
 `<meta content="telephone=no" name="format-detection" />`
 # 忽略邮箱
 `<meta content="email=no" name="format-detection" />`
 # seo优化
 1. `<meta name="keywords" content="your tags" />`
 2. `<meta name="description" content="150 words" />`
 # script 解析过程
* 正常 html解析=>遇到script下载然后执行=>继续html解析
* defer html解析=>下载script同时继续html解析=>解析完后按顺序执行defer的script 
* async html解析=>下载script同时继续html解析=>下载完就马上执行当前下载完的script=>恢复html解析
# 语意化标签
* <header></header>：页眉通常包括网站标志、主导航、全站链接以及搜索框。
* <nav></nav>：标记导航，仅对文档中重要的链接群使用。
* <main></main>：页面主要内容，一个页面只能使用一次。如果是web应用，则包围其主要功能。
* <article></article>：包含像报纸一样的内容= =||是这么理解的，表示文档、页面、应用或一个独立的容器
* <section></section>：具有相似主题的一组内容，比如网站的主页可以分成介绍、新闻条目、联系信息等条块。
* <aside></aside>：指定附注栏，包括引述、侧栏、指向文章的一组链接、广告、友情链接、相关产品列表等。
* <footer></footer>：页脚，只有当父级是body时，才是整个页面的页脚。
* <small></small>：指定细则，输入免责声明、注解、署名、版权。
