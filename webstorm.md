
webstorm设置、命令
1.格式化缩进 ctr+a 选择所有，ctr+alt+i 代码缩进格式化。
( mac 下 选择所有 command＋a  缩进option＋command＋L[小写] )
2.insert 按键可以改变sublime输入光标的方式或——或|
3.输入/**+回车 可以生成文档注释(sublime需要安装docblockr插件)
4.web storm乱码：设置--editor--file encodings 编码都设置为utf-8

webstorm 远程调试
     1.下载远程代码

- 远程执行   --node-br=5858 启动服务//调试端口

- 本地执行 ssh -L 5859:127.0.0.1:5858 root@112.74.218.75 -N  端口转发 //webstorm 配置127.0.0.1:5859

- 远程的请求会转发到本地，可以在webstorm中调试

http://stackoverflow.com/questions/21633924/connecting-webstorm-to-a-remote-node-js-debugging-session#

Webstorm破解
http://blog.sina.com.cn/s/blog_71fcb0970102wqdr.html
http://15.idea.lanyus.com/    x
http://idea.qinxi1992.cn/

chrome打开控制台
1.mac打开chrome控制台 option＋command＋i
2.window打开chrome控制台 f12

windows Mac 键盘对应
commend变成Win
option变成alt(苹果键盘上也有写）

mac 系统快捷键
关闭进程 option ＋command＋esc

web app调试
http://www.cnblogs.com/zhoujg/p/4386611.html
android pc chrome浏览器输入  chrome://inspect/#devices

git 命令
——仓库－－
$ git clone git://github.com/schacon/ticgit.git
$ git remote -v
$ git remote add pb git://github.com/paulboone/ticgit.git
$ git fetch pb
git  arc
－－分支－－
arc feature 分支名 创建分支并切换到新创建的分支
git checkout master 切换分支
git branch -d feature_x 删除分支
git branch  查看分支
－－查看状态－－
git status 显示有变更的文件
git log 显示当前分支的版本历史
git diff 查看修改情况
git rebase 把一个分支的修改合并到当前分支 如果有冲突会提醒
在解决完冲突后，用"git-add"命令去更新这些内容的索引(index), 然后，你无需执行 git-commit,只要执行:git rebase --continue
arc feature 查看diff状态
－－提交－－
1.git add [file|.|-A]
2.git commit -a --amend //修改上一次commit信息
git commit -m “注释” 添加本次commit的注释
6.执行arc diff 提交代码审核 ；arc diff —only 生成一个地址查看改动情况
7.代码审核通过后（arc feature查看审核状态），git fetch origin  git rebase origin／master
8.执行arc land提交代码到本机master和服务端master

－－撤回－－
git reset －－[mixed默认|hard|soft] commit号|HEAD~n
回退 mixed－>add之前 hard－>add之前文件也还原 soft－>commit之前，保留add
修改文件前 hard
add之前mixed
commit之前soft

git reset --hard HEAD 远程覆盖本地

常见问题
1.恢复本地某个改动的文件
a. 查看文件的历史版本信息 git log 文件名
b. 恢复该文件 git reset 版本号  文件名
c. git checkout —  文件名
git pull
2.Your branch is ahead of 'orgin/master' by * commits
解决方法:
git pull --rebase
3.输入arc找不到命令

解决方法：
编辑配置文件  vi ~/.bash_profile ［～代表用户主文件夹下］
添加一句 export PATH="$PATH:/Users/land/Audaque/arcanist/bin”
重启命令行

－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
ssh命令
ssh 传文件（压缩后）
上传：
scp /path/file（这部分为本地的路径） user（远端目标用户名）@host（远端目标IP):/pathorfile（文件存储路径）
下载：
scp user（远端用户名）@host（远端IP):/path/file（下载文件在远端的路径） localpathorfile（本地文件存放路径）
查看目录或文件：
ssh user@host command ls "/path/*.tgz"

登录连接ecs
ssh root@ip

－－－－－－－－－－－－－－－－－－－－－－－－－
解压缩解、压缩命令
tar [-cxtzjvfpPN] 文件与目录 ....
参数：
-c ：建立一个压缩文件的参数指令(create 的意思)；
-x ：解开一个压缩文件的参数指令！
-t ：查看 tarfile 里面的文件！
特别注意，在参数的下达中， c/x/t 仅能存在一个！不可同时存在！
因为不可能同时压缩与解压缩。
-z ：是否同时具有 gzip 的属性？亦即是否需要用 gzip 压缩？
范例一：将整个 /etc 目录下的文件全部打包成为 /tmp/etc.tar
[root@linux ~]# tar -cvf /tmp/etc.tar /etc         <==仅打包，不压缩！
[root@linux ~]# tar -zcvf /tmp/etc.tar.gz /etc       <==打包后，以 gzip 压缩

范例二：查阅上述 /tmp/etc.tar.gz 文件内有哪些文件？
[root@linux ~]# tar -ztvf /tmp/etc.tar.gz
# 由於我们使用 gzip 压缩，所以要查阅该 tar file 内的文件时，
# 就得要加上 z 这个参数了！这很重要的！

范例三：将 /tmp/etc.tar.gz 文件解压缩在 /usr/local/src 底下
[root@linux ~]# cd /usr/local/src
[root@linux src]# tar -zxvf /tmp/etc.tar.gz
1、*.tar 用 tar –xvf 解压
 2、*.gz 用 gzip -d或者gunzip 解压
 3、*.tar.gz和*.tgz 用 tar –xzf 解压
 4、*.bz2 用 bzip2 -d或者用bunzip2 解压
 5、*.tar.bz2用tar –xjf 解压
 6、*.Z 用 uncompress 解压
 7、*.tar.Z 用tar –xZf 解压
 8、*.rar 用 unrar e解压
 9、*.zip 用 unzip 解压
解压tar.xz文件：先 xz -d xxx.tar.xz 将 xxx.tar.xz解压成 xxx.tar 然后，再用 tar -xvf xxx.tar来解包。

－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
centos node安装
1.下载二进制
2.解压缩
3.将目录加入~/.bash_profile
4.重启系统或者执行source ~/.bash_profile

－－－－－－－－－－－－－－－－－－－－－－－－－－
Mac find、 which 、whereis命令
查找文件http://www.macx.cn/thread-2070979-1-1.html
查看软件安装位置 which 软件名
查看软件安装的文件 whereis  包名

linux查看文件大小
系统剩余/总 硬盘大小： df －h
某个目录占用大小： du －h 路径
linux查看内存使用情况
cat /proc/meminfo

－－－－－－－－－－－－－－－－－－－－－－－－－
grunt环境搭建
1. 安装Node.js
 2. 打开cmd.exe node.js安装jquery:
      npm install jquery
3. grunt 安装  node.js安装grunt:
     npm install -g grunt-cli
4. cd相应项目目录 node.js安装grunt插件：
      npm install --save-dev grunt-contrib-concat grunt-contrib-jshint
      grunt-contrib-sass grunt- contrib-uglify grunt-contrib-watch
      grunt-contrib-connect
5.node.js安装服务器插件http-server：
     npm install http-server -g

*Sass 安装(先安装Ruby，sass需要ruby环境，苹果自带)
6.安装Ruby
7.打开Start commond Prompt with Ruby
8.输入gem sources -l查看源
9.删除源 gem sources --remove https://rubygems.org/（墙得厉害）
10.添加国内源gem sources -a https://ruby.taobao.org/
11.安装Sass: gem install sass
http://yujiangshui.com/grunt-basic-tutorial/
http://www.w3cplus.com/sassguide/

*使用方法
1.输入 http-server p80 ；退出node ctr+c
2.监听文件 打开另一个命令窗口 cd到项目文件夹cmd
cd到文件夹(輸入e:回車到e然後cd到指定文件)，
输入grunt watch
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－

Linux、Mac杀死端口的服务
1.netstat -nlp查看开启的服务信息/mac为 lsof -i :8880

2.然后kill 24475

phabricator搭建
http://blog.csdn.net/u011244794/article/details/60875295
https://secure.phabricator.com/book/phabricator/article/arcanist_quick_start/
