### 类型声明

#### 布尔类型
`var finished bool = false`
#### 数字型
<pre>var level int = 3
var kpi   float32 = 3.3</pre>
#### 字符串型
`var desc string = "description"`
#### 数组(32个类型为byte的数组)
`var arr [32]byte`
#### 切片(可以认为是动态数组，即元素个数不固定的数组)---[引用]
`var multi []string`
#### 结构体
<pre>var student struct {
  stuNo int
  stuName string
}</pre>
#### 指针---[引用]
`var ptr *int`
#### 函数类型
`var say func(msg string) string`
#### 接口类型
`var plugin interface {}`
#### 映射类型---[引用]
`var obj map[string]string`
#### 管道类型---[引用]
`var ch chan int`

#### 自定义类型
<pre>type Age int
var age Age
func main() {
 age = 29
 fmt.Println(finished)
 fmt.Println(level)
 fmt.Println(kpi)
 fmt.Println(desc)
 fmt.Println(ch)
 fmt.Println(age)
}</pre>
