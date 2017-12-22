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
### 格式化输出
<pre>
//Go提供了几种打印格式，用来格式化一般的Go值，例如
//下面的%v打印了一个point结构体的对象的值
p := point{1, 2}
fmt.Printf("%v\n", p)//{1 2}

// 如果所格式化的值是一个结构体对象，那么`%+v`的格式化输出
// 将包括结构体的成员名称和值
fmt.Printf("%+v\n", p)//{x:1 y:2}

// `%#v`格式化输出将输出一个值的Go语法表示方式。
fmt.Printf("%#v\n", p)//main.point{x:1, y:2}

// 使用`%T`来输出一个值的数据类型
fmt.Printf("%T\n", p)//main.point

// 格式化布尔型变量
fmt.Printf("%t\n", true)//true

// 有很多的方式可以格式化整型，使用`%d`是一种
// 标准的以10进制来输出整型的方式
fmt.Printf("%d\n", 123)//123

// 这种方式输出整型的二进制表示方式
fmt.Printf("%b\n", 14)//1110

// 这里打印出该整型数值所对应的字符
fmt.Printf("%c\n", 33)//!

// 使用`%x`输出一个值的16进制表示方式
fmt.Printf("%x\n", 456)//1c8

// 浮点型数值也有几种格式化方法。最基本的一种是`%f`
fmt.Printf("%f\n", 78.9)//78.900000

// `%e`和`%E`使用科学计数法来输出整型
fmt.Printf("%e\n", 123400000.0)//1.234000e+08
fmt.Printf("%E\n", 123400000.0)//1.234000E+08

// 使用`%s`输出基本的字符串
fmt.Printf("%s\n", "\"string\"")//"string"

// 输出像Go源码中那样带双引号的字符串，需使用`%q`
fmt.Printf("%q\n", "\"string\"")//"\"string\""

// `%x`以16进制输出字符串，每个字符串的字节用两个字符输出
fmt.Printf("%x\n", "hex this")//6865782074686973

// 使用`%p`输出一个指针的值
fmt.Printf("%p\n", &p)//0x103a10c0

// 当输出数字的时候，经常需要去控制输出的宽度和精度。
// 可以使用一个位于%后面的数字来控制输出的宽度，默认
// 情况下输出是右对齐的，左边加上空格
fmt.Printf("|%6d|%6d|\n", 12, 345)//|    12|   345|

// 你也可以指定浮点数的输出宽度，同时你还可以指定浮点数
// 的输出精度
fmt.Printf("|%6.2f|%6.2f|\n", 1.2, 3.45)//|  1.20|  3.45|

// To left-justify, use the `-` flag.
fmt.Printf("|%-6.2f|%-6.2f|\n", 1.2, 3.45)//|1.20  |3.45  |

// 你也可以指定输出字符串的宽度来保证它们输出对齐。默认
// 情况下，输出是右对齐的
fmt.Printf("|%6s|%6s|\n", "foo", "b")//|   foo|     b|

// 为了使用左对齐你可以在宽度之前加上`-`号
fmt.Printf("|%-6s|%-6s|\n", "foo", "b")//|foo   |b     |

// `Printf`函数的输出是输出到命令行`os.Stdout`的，你
// 可以用`Sprintf`来将格式化后的字符串赋值给一个变量
s := fmt.Sprintf("a %s", "string")//a string
fmt.Println(s)

// 你也可以使用`Fprintf`来将格式化后的值输出到`io.Writers`
fmt.Fprintf(os.Stderr, "an %s\n", "error")//an error
</pre>

