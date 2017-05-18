### mongodb 安装与配置
1. 下载二进制包、解压
2. 在bin同级目录创建文件夹：data(存放数据库数据)、log(存放日志,里面新建mongod.conf文件)，创建文件：mongod.conf(配置文件，数据库启动时指定)，
<pre>最终目录结构 bin data log mongod.conf</pre>
3. mongod.conf 配置：
<pre>
port =27017
#数据存储目录
dbpath= data 
#开启用户认证 登录需要密码
auth=true
#日志记录文件
logpath=log/mongod.log
#以追加的方式记录日志
logappend = true
fork=true
</pre>
4. 启动 `sudo mongod [--config|-f]  file/to/path/mongod.conf`
5. mongo终端连接数据库 
<pre>
a.mongo ip:port
b.use admin; 
c.db.auth("user",pwd)
d.use xxdb
e.其它操作
</pre>
6.nodejs mongoose连接数据库 `mongoose.connect("mongodb://user:pwd@ip:port/db");`

### 导出数据
<pre>
landchendeMacBook-Air:conf land$ bin/mongoexport -u root -p xxxabcd  
-h 112.74.xxx.xx:27017 -d ssz -c rabbitsuser -o user.dat

格式：mongoexport -h 主机地址 -d 数据库名 -c 集合名（表名） -u 用户名 -p 密码  
-f item_id,user_id,title,price,quantity --csv -o 输出CSV文件名
说明：-f 参数指定字段列表，即CSV表头。
</pre>
