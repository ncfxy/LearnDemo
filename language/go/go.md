# Go

## 官方网站
- 官网首页: <https://golang.org/>
- Play页面: <https://play.golang.org>

## A Tour of Go

- Packages
  - 程序从 main 包开始运行
  - 使用 import 来引入其他 package
  - 变量以大写字母开头表示 export
  - 函数： `func add(x int, y int) int{return x+y}`
  - 参数简写：`(x,y int)` == `(x int, y int)`
  - 函数返回多值：`func swap(x,y string) (string, string)`
  - 返回值起名：`func split(sum int) (x,y int)`
  - 使用 var 声明多个变量：`var a,b,c bool`
  - var 声明时可赋初始值：`var a,b,c=true, 123, false`
  - 函数中`:=`可以代替 var 的功能
  - 基础类型
    - bool, string
    - int, int8, int16, int32, int64
    - uint, uint8, uint16, uint32, uint64 uintptr
    - byte == uint8, rune == int32
    - float32, float64, complex64, complex128
  - 类型默认值：0, false, ""
  - 类型转换：`T(v)`
  - 可以使用`const`来声明变量
- 循环&条件
  - 只有 for 循环：`for i := 0;i<10;i++ {}`
  - 初始条件和后置条件可以没有：`for ;i<10; {}`
  - while 的实现：`for i<10 {}`
  - 无限循环：`for {}`
  - 条件：`if x < 0 {}`
  - 条件可以包含一个前置语句：`if v:=1+2; v < lim {}`
  - 前置语句声明的变量作用域是 if 和 else 块
  - switch： 只执行一个条件，无需 break 语句，case 后不一定是常量
  - `switch {}` == `switch true {}`
  - defer: 当前函数返回后再延迟执行的函数，存在多个时后进先出
- 指针、结构体、数组、Maps
  - `*T`读取指针指向的值，`&i`生成指向某个值的指针
  - 结构体指针`p`, `(*p).X` == `p.X`
  - 创建结构体可以设置部分值，剩余使用默认值
  - 数组声明：`var a [10]int`
  - 数组大小固定，slice 是数组的动态视图：`a[low: high]`
  - 使用默认值创建数组：`[]bool{true, true, false}`
  - slice 时如果忽略 low 或 high 时，使用默认的 0 或 length
  - `len(s)`当前 slice 包含元素的个数, `cap(s)`对应数组元素个数
  - `var s []int` -> `s == nil`
  - make 用来创建动态大小的数组: `a := make([]int, 2, 5)`
  - append 用来向 slice 中增加元素，会自动扩容：
    - `append(s []T, vs ...T) []T`
  - 循环中使用 Range：`for index, value := range array {}`
  - Map 声明：`var m map[string]string`
  - Map 初始化后才能使用：`m = make(map[string]string)`
  - 直接创建 Map：`var m = map[string]string{"a": "b"}`
  - Map 操作
    - 插入/更新：`m[key] = elem`
    - 获取：`elem, ok = m[key]`
    - 删除：`delete(m, key)`
  - 函数可以被作为参数传递
  - 支持函数闭包
- 类型方法和接口
  - Go 不支持类，但是可以在 type 上定义方法-
  - method 和 type 需要在同一个包里定义
    - `func (v TypeName) funcName() string{}`
  - 当需要改变 type 的值时，可以使用指针来传递
    - `func (v *TypeName) funcName() string{}`
  - Interfaces: 定义一系列函数声明，实现了这些函数的 type 可以赋值给它
  - Type 继承接口无需显式声明
  - Interface 可以理解成保存了`(value, type)`
  - 声明函数时加判断指针是否为 nil：
    - `func (t *T) M(){if t == nil{}}`
  - nil Interface & empty Interface
  - 类型断言，判断 i 的类型是否为 T：`t, ok := i.(T)`
  - 使用 switch 类型判断
    ```go
      switch v := i.(type) {
        case T:
        case S:
        default:
      }
    ```
  - 常用 Interface
    - Stringer：`type Stringer interface{String() string}`
    - error：`type error interface{Error() string}`
    - Readers
    - Images
- Go 协程
  - Goroutine: Go 运行时管理的轻量级线程： `go f(x,y,z)`
  - 运行在相同的地址空间
  - Channels: 发送方和接收方会自动阻塞
    - 创建： `ch := make(chan int)`
    - 带 buffer 的创建：`ch := make(chan int, 100)`
    - 发送： `ch <- v`
    - 接收： `v := <- ch`
  - Range & Close
    - Sender关闭channel：`close(ch)`
    - Receiver判断是否关闭： `v,ok := <- ch`
    - 遍历值直到close：`for i := range ch {}`
  - select等待多个通信
    ```go
      select {
        case ch1 <- x:
        case <- ch2:
        default:
      }
    ```
  - sync.Mutex: 标准库中提供的互斥锁


## Other Tips I Meet

- struct中可以嵌套其他的struct，名字默认使用struct的名字

- `fmt.Printf("Hello, %s\n", "World")`
- `ftm.Stringer`
- `io.Writer`
- `io.MultiWriter`
- `hex.Dumper`
- `json.Marshal()`
- `json.MarshalIndent()`

## Go 代理配置

- `go env -w GO111MODULE=on`
- `go env -w GOPROXY=https://goproxy.cn,direct`
- `go env -w GOPROXY=https://proxy.golang.org,direct`

## 其他

- Golang中JSON的使用小技巧: <http://jsoniter.com/go-tips.cn.html>

## 编码规范

- Uber Go 语言编码规范: <https://github.com/xxjwxc/uber_go_guide_cn>

## OtherCheatSheet

- LearnGoInMinites: <https://learnxinyminutes.com/docs/go/>

## 代码格式化

- `gofmt -l -w .` 对代码进行格式化
- `goimports -l -w .` 对代码进行格式化的同时，整理imports

## Go Debug

- VsCode Debugging: <https://code.visualstudio.com/docs/languages/go#_debugging>

## Go Test

- go test 后边跟package
- go test -test.run=Testxxxxx(运行某个具体的函数) -v(输入日志) -count=1(关闭自动cache)
- `-cover -covermode=atomic -coverpkg=代码所在package/... -test.coverprofile=cov.out` 生成代码覆盖信息到cov.out中
- `go tool cover` 可用于生成html版本的报告

## Go并发

- sync.Map揭秘: <https://colobu.com/2017/07/11/dive-into-sync-Map/>

## Go诊断工具
- 官方诊断工具集合: <https://go.dev/doc/diagnostics>

## 其他页面跳转

- [Go常用library](./go_libraries.md)
- [Go常用代码段](./go_snippets.md)
- [Go笔记](./go_note.md)

## Go语言常见问题集合

- goroutine 调度时机有哪些? <https://www.bookstack.cn/read/qcrao-Go-Questions/goroutine%20%E8%B0%83%E5%BA%A6%E5%99%A8-goroutine%20%E8%B0%83%E5%BA%A6%E6%97%B6%E6%9C%BA%E6%9C%89%E5%93%AA%E4%BA%9B.md>
- 同步原语与锁 <https://draveness.me/golang/docs/part3-runtime/ch06-concurrency/golang-sync-primitives/>
- Go语言设计与实现 <https://draveness.me/golang/>
- Go中锁的一些使用注意事项 <https://mozillazg.com/2019/04/notes-about-go-lock-mutex.html>
- Golang Scheduler的那些事儿
- Go如何打开GC日志： 环境变量GODEBUG=gctrace=1
- Go提供的性能分析API： runtime/pprof, net/http/pprof, runtime/trace
- Go 的 GC 如何调优: <https://www.bookstack.cn/read/qcrao-Go-Questions/spilt.14.GC-GC.md>
- Go语言问题集: <https://www.bookstack.cn/read/qcrao-Go-Questions/README.md>

## GMP模型学习

- GMP原理与调度: <https://www.topgoer.com/%E5%B9%B6%E5%8F%91%E7%BC%96%E7%A8%8B/GMP%E5%8E%9F%E7%90%86%E4%B8%8E%E8%B0%83%E5%BA%A6.html>


## Go语言泛型学习

- Go 1.18 泛型全面讲解：一篇讲清泛型的全部: <https://segmentfault.com/a/1190000041634906>
- When To Use Generics: <https://go.dev/blog/when-generics>
- An Introduction To Generics: <https://go.dev/blog/intro-generics>
- 简单易懂的 Go 泛型使用和实现原理介绍: <https://mp.weixin.qq.com/s/5a0_Gl0LeLfs32UnE0T1Pw>

## Go的AST包学习(抽象语法树)

- Go的AST(抽象语法树): <https://zhuanlan.zhihu.com/p/28516587>
- Go语法树可视化: <https://github.com/yuroyoro/goast-viewer>
- ast package官方介绍: <https://pkg.go.dev/go/ast>

## 其他

- 《Go学习路线图》<https://juejin.cn/post/7119123646471208968>
- Go学习书籍: <https://github.com/dariubs/GoBooks>
