
### 杀死某个端口号的服务
1. 查看端口PID linux: netstat -nlp查看开启的服务信息；mac: lsof -i :8880
2. kill -9 PID号

### ssh命令
* 上传：`scp /path/file（这部分为本地的路径） user（远端目标用户名）@host（远端目标IP):/pathorfile（文件存储路径）`（文件夹先压缩）
* 下载：`scp user（远端用户名）@host（远端IP):/path/file（下载文件在远端的路径） localpathorfile（本地文件存放路径）`
* 登录连接ecs `ssh root@ip`

### mac终端命令
* 获取权限 `shdo -s`
* 列出文件 `ls [文件路径] [-w 显示中文] [-l 详细文件] [-a 包含隐藏文件]`
* 创建新目录 `mkdir 目录名`
* 拷贝文件 `cp [-R 递归操作(文件夹)] 源文件路径 目标文件路径`
* 删除文件 `rm [-rf 递归和强制] 文件或文件夹`
* 移动文件 `mv 源文件路径 目标文件路径`
* 更改文件权限 `chmod [-R 递归] 权限(读写执行777) 文件或文件夹`
* 更改文件属主 `chown [-R 递归] 用户:组 文件`
* 编辑文件 `vi 文件; 1.输入i开始编辑; 2.输入esc,输入:[q|w]!;回车退出`
* 显示当前路径 `pwd`
* 显示日期 `date`
* 显示日历 `cal [月份 年] 如cal 8 1987`
* 命令行历史记录 `history`
* 环境变量 `env`
* 清屏 `clear`
* 当前操作的用户名 `whoami`
* 当前目录文件大小 `du`
* 系统空间使用情况 `df`

### git 命令
* 克隆仓库 `$ git clone git://github.com/schacon/ticgit.git`
* 创建分支 `arc feature 分支名 ` `git branch 分支名;git checkout分支名||git checkout -b 分支名`
* 查看分支状态  `arc feature`
* 删除某分支 `git branch -d 分支名`
* 查看分支情况 `git branch`
* 优先级为:从暂存区,当前最后一次commit,拿此文件替换工作区此文件 `git checkout --文件名`
* 显示有变更的文件 `git status `
* 显示当前分支的版本历史 `git log [--pretty=oneline]`
* 显示历史操作记录 `git reflog`
* 查看修改情况 `git diff `
* 不通过审核提交代码 `git push 远程分支(origin)`
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
* 语法 git reset －－[mixed默认|hard|soft] commit号|HEAD~n|HEAD^^^|HEAD^
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
* command变成Win(田字) 
* option变成alt(苹果键盘上也有写）

### mac 系统快捷键
* 强制关闭程序(某个程序卡死) `option ＋command＋esc`



