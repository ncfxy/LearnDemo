# Go Libraries

## Go源码学习

### reflect

- 使用反射的一些规则: <https://blog.golang.org/laws-of-reflection>
  - interface实际保存的是一个键值对 <value, type>
  - 1. 从interface值转化为反射对象
    - `reflect.TypeOf(x)`, `v := reflect.ValueOf(x)`, `v.Kind()`
  - 2. 从反射对象转化为interface值
    - `v.Interface()`
  - 3. 修改一个反射对象时，它的value必须是可设置的(settable)
    - `v.CanSet()` 判断一个对象是否可被设置
    - `v.Elem()` 当value是一个指针时，使用该函数可以获取它指向的对象value 
    - 传入指针，并通过Elem拿到的Value才可以被修改
- go反射介绍: <https://juejin.cn/post/7026140790380298270>

### runtime

## 测试相关

- 生成mock代码
  - <https://github.com/vektra/mockery>
  - `brew install vektra/tap/mockery`   
  - `brew upgrade mockery`
  - `mockery --dir=. --all --recursive --keeptree --output=./mocks --packageprefix=mocks_`
- Assert库
  - github.com/stretchr/testify
- mock redis
  - <https://github.com/alicebob/miniredis>
- mock sql
  - <https://github.com/DATA-DOG/go-sqlmock>

## go cli

- 构建go的cli程序
  - <https://github.com/spf13/cobra>

## go代码检查工具

- golangci-lint: <https://golangci-lint.run/>

## 并发

- singleflight:  来源于准官方库golang.org/x/sync/singleflight，能够在抑制对下游的多次重复请求

## go Ast

- 两个常用的package
  - go/ast
  - golang.org/x/tools/go/ast/astutil
- Golang AST语法树使用教程及示例： <https://juejin.cn/post/6844903982683389960>

## GoWeb框架

- Gin框架
  - <https://www.topgoer.com/gin%E6%A1%86%E6%9E%B6/> <https://github.com/gin-gonic/gin>


## Go语言学习文章

- 为什么要在代码中使用errgroup.WithContext: <https://bionic.fullstory.com/why-you-should-be-using-errgroup-withcontext-in-golang-server-handlers>
- Go 语言优秀资源整理，为项目落地加速: <https://github.com/shockerli/go-awesome>