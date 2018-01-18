### mac iphone配置(截图，破解包，见当前文件夹)
####基本配置
* 1.安装charles4.1.4, 并破解(finder->应用程序->charles右键显示包内容->contents->java->charles.jar替换)
* 2.iphone 手机代理设置，必须与mac在同一个局域网，手机wifi点进去(android长按) 代理手动，填mac局域网ip 默认8888端口
#### http返回内容中文乱码
* rewrite返回的Content-Type字段(charles->tools->rewrite) 按需求填写Content-Type:application/text;charset=UTF-8
#### https开启
* 1.电脑端安装证书 charles->help->ssl proxying->install C R C->系统会弹出钥匙串，点开证书，点始终信任
* 2.电脑端ssl设置，charles->proxy->ssl proxying setting-> enable ssl proxying add host:*,post:*
* 3.移动端安装ssl  charles->help->ssl proxying->install ....mobile or browser 按要求浏览器打开chls.pro/ssl，完成安装(iphone需要进入通用-关于本机-证书信任设置-开启)
