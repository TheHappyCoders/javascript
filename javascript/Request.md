##### 常见Content-Type

### application/x-www-form-urlencoded
* key1=val1&key2=val2 的方式进行编码
* key 和 val 都进行了 URL 转码

### multipart/form-data
* 它会将表单的数据处理为一条消息，以标签为单元，用分隔符（这就是boundary的作用）分开
* 文件上传时，就需要使用该格式

### application/json

### text/plain 
* 纯文本格式

### application/octet-stream
* 二进制流数据（如常见的文件下载）
