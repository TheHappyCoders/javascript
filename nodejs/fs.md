# 常用的标记蓝色，方法默认异步，同步Sync， f filehand，L不解析符号链接
### 【信息】
* [fs.constants]()
* fs.exists(path, callback) 废弃: 改为使用 fs.stat() 或 fs.access()
* [fs.existsSync(path) 没废弃 通过检查文件系统来测试给定的路径是否存在]()
##### realpath
* fs.realpath(path[, options], callback) 获取真实路径
* fs.realpath.native(path[, options], callback)
* [fs.realpathSync(path[, options])]()
* fs.realpathSync.native(path[, options])
##### stat
* fs.stat(path[, options], callback) 获取文件信息
* [fs.statSync(path[, options])]()
* fs.fstat(fd[, options], callback) 返回文件的详细信息
* fs.fstatSync(fd[, options])
* fs.lstat(path[, options], callback) 获取文件信息(不解析符号链接)
* fs.lstatSync(path[, options])

### 【权限】
* fs.access(path[, mode], callback)  测试用户对 path 指定的文件或目录的权限
* [fs.accessSync(path[, mode])]()
* fs.chmod(path, mode, callback)更改文件的权限
* [fs.chmodSync(path, mode)]()
* fs.chown(path, uid, gid, callback) 更改文件的所有者和群组
* [fs.chownSync(path, uid, gid)]()
##### F
* fs.fchmod(fd, mode, callback)
* fs.fchmodSync(fd, mode)
* fs.fchown(fd, uid, gid, callback)
* fs.fchownSync(fd, uid, gid)
##### L
* fs.lchmod(path, mode, callback) 更改文件权限(不解析符号链接)
* fs.lchmodSync(path, mode)
* fs.lchown(path, uid, gid, callback) 更改文件所有权（不解析符号链接）
* fs.lchownSync(path, uid, gid)

### 【目录】
* fs.mkdir(path[, options], callback) 创建文件目录，如果目录已存在，将抛出异常
* [fs.mkdirSync(path[, options])]()
* fs.mkdtemp(prefix[, options], callback) 创建临时目录
* [fs.mkdtempSync(prefix[, options])]()
* fs.rmdir(path[, options], callback) 删除文件目录
* [fs.rmdirSync(path[, options])]()
* fs.opendir(path[, options], callback)
* [fs.opendirSync(path[, options])]()
* fs.readdir(path[, options], callback)
* [fs.readdirSync(path[, options])]()
 
### 【文件】
* fs.appendFile(path, data[, options], callback) 将数据追加到文件，如果文件尚不存在则创建该文件
* [fs.appendFileSync(path, data[, options])]()
* fs.open(path[, flags[, mode]], callback) 打开文件
* [fs.openSync(path[, flags, mode])]()
* fs.close(fd, callback)
* [fs.closeSync(fd)]()
* fs.copyFile(src, dest[, flags], callback) src 拷贝到 dest
* [fs.copyFileSync(src, dest[, flags])]()
##### read
* fs.read(fd, buffer, offset, length, position, callback) 读取文件内容
* [fs.readSync(fd, buffer, offset, length, position)]()
* fs.readFile(path[, options], callback)
* [fs.readFileSync(path[, options])]()
* fs.readlink(path[, options], callback) 读取软连接信息
* [fs.readlinkSync(path[, options])]()
##### write
* fs.write(fd, buffer[, offset[, length[, position]]], callback)
* fs.write(fd, string[, position[, encoding]], callback)
* [fs.writeSync(fd, buffer[, offset[, length[, position]]])]()
* [fs.writeSync(fd, string[, position[, encoding]])]()
* fs.writeFile(file, data[, options], callback)
* [fs.writeFileSync(file, data[, options])]()
* fs.writev(fd, buffers[, position], callback)
* [fs.writevSync(fd, buffers[, position])]()
##### truncate
* fs.ftruncate(fd[, len], callback) 截取文件内容
* [fs.ftruncateSync(fd[, len])]()
* fs.truncate(path[, len], callback) 文件内容截取操作
* [fs.truncateSync(path[, len])]()

### 【其它】
* fs.fdatasync(fd, callback) 刷新数据到磁盘
* fs.fdatasyncSync(fd)
* fs.fsync(fd, callback) 同步缓存数据到磁盘
* fs.fsyncSync(fd)
* fs.rename(oldPath, newPath, callback) 重命名路径
* [fs.renameSync(oldPath, newPath)]()
##### link
* fs.link(existingPath, newPath, callback) 创建硬链接(只能在本券中)
* [fs.linkSync(existingPath, newPath) 复制文件到某个地方]()
* fs.symlink(target, path[, type], callback) 创建符号链接
* fs.symlinkSync(target, path[, type])
* fs.unlink(path, callback) 删除文件操作
* [fs.unlinkSync(path)  删除文件操作]()
##### watch
* [fs.watchFile(filename[, options], listener)]()
* [fs.unwatchFile(filename[, listener]) 解除文件监控]()
* fs.watch(filename[, options][, listener])
##### time
* fs.utimes(path, atime, mtime, callback) 修改文件时间戳
* fs.utimesSync(path, atime, mtime)
* fs.futimes(fd, atime, mtime, callback) 更改一个文件所提供的文件描述符引用的文件的时间戳
* fs.futimesSync(fd, atime, mtime)

### 【流】
* [fs.createReadStream(path[, options])]()
* [fs.createWriteStream(path[, options])]()


