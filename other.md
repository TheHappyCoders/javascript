
### 杀死某个端口号的服务
1. 查看端口PID linux: netstat -nlp查看开启的服务信息；mac: lsof -i :8880
2. kill -9 PID号

### ssh命令
* 上传：`scp /path/file（这部分为本地的路径） user（远端目标用户名）@host（远端目标IP):/pathorfile（文件存储路径）`（文件夹先压缩）
* 下载：`scp user（远端用户名）@host（远端IP):/path/file（下载文件在远端的路径） localpathorfile（本地文件存放路径）`
* 登录连接ecs `ssh root@ip`

### git 命令
* 克隆仓库 `$ git clone git://github.com/schacon/ticgit.git`
* 创建分支 `arc feature 分支名 `
* 查看分支状态  `arc feature`
* 删除某分支 `git branch -d 分支名`
* 查看分支情况 `git branch`
* 某文件远程覆盖本地 `git checkout 文件名`
* 显示有变更的文件 `git status `
* 显示当前分支的版本历史 `git log `
* 查看修改情况 `git diff `
* 把一个分支的修改合并到当前分支 如果有冲突会提醒 git rebase (在解决完冲突后，用"git add -A"命令去更新这些内容的索引(index), 然后，你无需执行 git commit,只要执行:git rebase --continue)

#### 提交代码
1. `git add [file|.|-A] `
2. `git commit -a --amend` (修改上一次commit信息) `git commit -m` “注释” (添加本次commit的注释) `arc diff --only`(可以在网页查看修改日志，非必需)
3. `arc feature master`
4. `git fetch && git rebase`
5. `arc feature 某分支` 
6. `git rebase`
7. `arc diff` 提交代码送审
8. 代码审核通过后（arc feature查看审核状态) 执行`arc land`提交代码到服务端

#### 撤回代码
* 语法 git reset －－[mixed默认|hard|soft] commit号|HEAD~n
* hard－>add之前文件也还原(回到1) mixed－>add之前(回到2) soft－>commit之前，保留add(回到3)
* <--1-modify--2--add--3--commit--4-- 

### Mac find、 which 、whereis命令
* 查找文件 http://www.macx.cn/thread-2070979-1-1.html
* 查看软件安装位置 `which 软件名`
* 查看软件安装的文件 `whereis  包名`

### chrome打开控制台
* mac打开chrome控制台 `option＋command＋i`
* window打开chrome控制台 `f12`

### windows Mac 键盘对应
* commend变成Win(田字) 
* option变成alt(苹果键盘上也有写）

### mac 系统快捷键
* 强制关闭程序(某个程序卡死) `option ＋command＋esc`

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
warning：还是报类似[!] Unable to find a specification for `BaiduMapKit` 错误，
可以安装cocoapod app代替 不用命令行工具
</pre>
