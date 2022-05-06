# Go语言实战

## 内容简介

1. Go语言是什么？Go语言的核心概念
2. 完成一个完整的go程序
3. 介绍打包的工具链
4. Go语言内置类型：数组、切片、映射
5. Go语言类型系统：类型、接口、类型嵌套
6. 深入Go调度器、并发和管道是如何工作的
7. 实际开发中用到的并发模式
8. 标准库介绍：log, json, io
9. 测试和基准测试框架

## 1. 关于Go语言的介绍

- 用Go解决现代变成难题
  - 更快的编译速度
  - 更轻型的并发模式：goroutine
  - 通道(chan): 让goroutine之间进行安全的数据通信
  - 类型系统：使用组合而不是继承
  - 接口：对一组行为建模
  - 内存管理：实现了垃圾回收

## 2. 快速开始一个Go程序

- 包名应该与代码文件夹同名
- Go编译器会自动初始化变量为零值
- 指针可以在函数和goroutine间共享数据
- goroutine+通道实现并发和同步
- Go接口可以编写通用的代码和框架

## 3. 打包和工具链

- 包package
  - 使用包所在目录的名字作为包名
  - main包：编译器会尝试将main下的代码编译成二进制可执行文件
  - 导入import
    - 查找顺序：标准库 > 当前项目 > GOPATH
    - go get 可以导入一个远程包，并下载到GOPATH
    - 导入时可以对包进行重命名
    - init函数会在main之前执行
- Go常用工具
  - go build/clean 编译和清理
  - go run 编译并执行
  - go vet 检查代码常见错误
  - go fmt 格式化代码
  - godoc -http=:6060 浏览器中浏览文档
- 分享为目的的代码库
  - 包应该包含在根目录
  - 包可以很小
  - 对代码执行go fmt
  - 给代码写文档

## 4. 数组、切片和映射

- 数组类型和长度不可变
  - 函数间传递数组会复制
  - `var array[5] int`
  - `array := [5]int{10,20,30,40,50}`
  - `array := [...]int{10,20,30,40,50}`
  - `array := [5]int{1: 10, 2:20}`
  - `var array [4][2]int`
  - `array := [4][2]int{ {10,11}, {20,21}, {30,31},{40,41} }`
  - `array := [4][2]int{1:{20,21}, 3:{40,41}}`
- 切片
  - 长度(len)、容量(cap)
  - `slice := make([]string, 5)`
  - `slice := make([]int, 3, 5)`
  - `slice := []int{10,20,30}`
  - `slice := []string{99:""}`
  - `var slice []int` (nil)
  - `slice := make([]int, 0)`, `slice := []int{}`  (空切片)
  - 不同切片可以共享同一数组
  - 使用append扩展切片
    - 如果底层数组有空间使用底层数组
    - 底层数组没有足够容量，创建新的底层数组
  - `slice[i:j:k]` 长度j-i, 容量k-i
  - range的用法: `for index, value := range slice{}`
    - 创建了每个元素的副本，而不是对该元素的引用
  - 多维切片: `slice := [][]int{ {10}, {100,200} }`
  - 函数间传递切片: 24字节(指针8 + 长度8 + 容量8)
- 映射
  - 映射是无序的
  - `dict := make(map[string]int)`
  - `dict := map[string]string{"Red", "Orange"}`
  - 键值可以内置类型、结构类型， 切片、函数、包含切片的结构体不行
  - `colors := map[string]string{}` (空映射)
  - `var colors map[string]string` (nil映射)
  - 键值是否存在: `if val, ok := color["Blue"]; ok {}`
  - `for key, value := range colors{}`
  - `delete(colors, "Coral")`
  - 函数间传递不会创建副本

## 5. Go语言的类型系统 

- 类型、接口和类型嵌套
- 用户定义类型： 
  - `type name struct{}`
  - 零值：数值(0), 字符串(""), 布尔(false)
  - 结构字面量：可选择带与不带字段名
  - 基于已有类型定义: `type Duration int64`
- 方法
  - 如果函数有接收者，那么它被称为方法
  - `func (u user) fn(){}`
  - 值接收者与指针接收者：是否共享接收者的值
- 类型的本质
  - 内置类型(数值、字符串、布尔): 使用值传递
  - 引用类型(切片、映射、通道、接口、函数): 本质是在共享底层数据结构，无须指针传递
  - 结构体本质是原始的：值传递
  - 结构体本质是非原始的：引用传递
  - 使用值还是指针接收者，不应该由方法是否修改了接收的值来决定，应该基于该类型的本质是否是原始的
- 接口
  - 接口是声明了一组行为并支持多态的类型
  - 用户自定义类型实现了接口的方法，就可以赋值给这个接口类型
  - 接口值包含: iTable地址 + 值的地址
  - iTable包含: 值/指针类型 + 方法集
  - 值的方法集只包含值接收者声明的方法
  - 指针的方法集包含两种方式定义的方法
  - 原因：编译器不总是能获取一个类型值的地址
  - 接口可以用来实现多态
- 嵌入类型（扩展类型）
  - 内部类型提升: 内部类型实现的属性和方法会自动提升到外部类型
  - 外部类型重新实现方法可以覆盖内部的实现
- 公开或未公开的标识符
  - 小写：未公开，大写：公开
  - 使用New实现工厂方法

## 6. 并发

- 通信顺序进程(CSP)， 一种消息传递模型
- 并发和并行
  - Go会在逻辑处理器上调度goroutine
  - goroutine创建 --> 进入全局运行队列 --> 放到逻辑处理器执行
  - goroutine阻塞 --> 线程移出逻辑处理器 --> 创建新线程绑定到处理器
  - 单处理器并发，多处理器并行
- goroutine
  - runtime.GOMAXPROCS(1) 设置使用的逻辑处理器数
  - runtime.NumCPU() 机器逻辑处理器的数量
  - `var wg sync.WaitGroup`, `wg.Add(2)`, `wg.Wait()`, `wg.Done()`
  - 检查竞态条件: go build -race
  - 共享资源加锁: 
    - atomic.AddInt64(&counter, 1)
    - atomic.LoadInt64, atomic.StoreInt64
    - var mutex sync.Mutex, Lock, Unlock
  - 通道：
    - 无缓冲(保证同时): unbuffered := make(chan int)
    - 有缓冲(不保证同时): buffered := make(chan string, 10)
    - 发送: buffered <- "abc"
    - 接收: name := <- buffered
    - 无缓冲通道例子: 模拟网球，模拟接力赛
    - 有缓冲通道例子: 
      - 通道关闭后依然可以接收数据，但是不能发送数据

## 7. 并发模式

- 控制程序的生命周期
- 管理可复用的资源池
- 创建可以处理任务的goroutine池
- runner:
  - 程序可以在分配的时间内完成工作，正常终止
  - 程序没有在规定时间完成工作，自杀
  - 接收到操作系统的中断事件，程序立刻试图清理状态并停止工作
- pool:
  - 有缓冲通道管理一组可复用的资源
- work:
  - 无缓冲通道来创建一个goroutine池

## 8. 标准库

- Go 标准库列表: <https://golang.org/pkg/>
- log包：
  - Ldata | Ltime | Llongfile 等使用iota的声明方法， 使用在SetFlags
  - log.Logger定制日志记录器
  - ioutil.Discard, os.Stdout, os.Stderr, io.MultiWriter
- 编码/解码
  - json结构体的定义: \`json:"url"\`
  - `json.NewDecoder(reader).Decode(&obj)`
  - 字符串直接解码: `json.Unmarshal([]byte(JSON), &obj)`
  - 无法定义结构时，可以解码到map中
  - 编码： `json.Marshal()`, `json.MarshalIndent()`
- 输入和输出
  - io.Write接口和io.Reader接口
  - io.Write规则
    - 写入的字节数 n < len(p)时必须要返回非nil的err
    - Write绝不能修改切片里的数据
  - io.Read规则
    - 允许读入的字节数 n < len(p) 出现
    - 处理EOF: 可以在本次返回(n, err=EOF)， 或者下次读取时返回(0, err=EOF)
    - 调用者总是应该先处理读入的数据，在处理err
    - 不要返回(0, nil)，如果是0的话要返回非nil的err


## 9. 测试和性能

- 基础测试
  - 文件以_test结尾 | 函数以Test开头 | 接收 `(t *testing.T)`参数
  - `go test -v`
- 表组测试
  - 接受一组不同输入并产生不同输出
  - httptest模拟网络调用
  - httptest模拟请求测试服务节点
  - `go test -v -run=....`支持用正则表达式匹配特定的函数
  - Example+已有函数 -> 在文档中生成代码示例
- 基准测试
  - 测试代码性能
  - 文件以_test结尾 | 函数以Benchmark开头 | 接收 `(b *testing.B)`参数
  - `go test -v -run="none" -bench="BenchmarkSprintf"`
  - benchtime & benchmem 参数

