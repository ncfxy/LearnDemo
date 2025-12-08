# Go 常用代码段

## Recover来捕获panic

```go
func(){
  defer func(){
    if r := recover(); r != nil {
      fmt.Println("Recovered in f", r)
    }
  }()
}
```

## Go编程习惯

- 如果返回结果中err不为空，则值不可用; err为nil，表示值可用
- MustXXX函数：执行XXX函数，如果有err则panic
- 声明const常量时使用 iota
- context用于管理request作用域的值、取消信号、deadline，推荐路径上的函数都使用context作为第一个参数

## Recover来捕获panic

```go
func(){
  defer func(){
    if r := recover(); r != nil {
      fmt.Println("Recovered in f", r)
    }
  }()
}
```

## Go排序

```go
list := []int64{2,4,8,3}
sort.Slice(list, func(i, j int) bool{
  return list[i] < list[j]
})
```

## Go时间处理

```go
time.Now()  // 获取当前时间
time.Unix(seconds, nanoSeconds)   // 根据秒和纳秒初始化时间
time.Date(year, month, day, hour, min, sec, nsec, time.Local) // 使用年月日来初始时间
var layout = "2006-01-02 15:04:05"    // 标准Layout格式
time.ParseInLocation(layout, dateStr, time.Local)   // 根据layout转化str成时间类型
endTime.Sub(startTime)                              // 求两个时间的差值
```

## 带最大限制的Goroutine
```go
import "golang.org/x/sync/errgroup"
ctx := context.Background()
maxGoroutine := make(chan int, 5)
g, ctx := errgroup.WithContext(ctx)
for idx = 0;idx < 10;idx++ {
  g.Go(func(idxInner int) func()error {
    return func() error {
      maxGoroutine <- 1
      fmt.Println("run: %d", idxInner)
      _ = <- maxGoroutine
      return nil
    }
  }(idx))
}
if err := g.Wait(); err != nil {
  fmt.Printf("err: %+v", err)
}
fmt.Println("success")
```

## 将一个interface转成String输出
```go
func MustToString(k interface{}) string {
	s, _ := json.Marshal(k)
	return *(*string)(unsafe.Pointer(&s))
}
```

## Go启动Server方式对比
```go
import (
	"github.com/gin-gonic/gin"
	"net/http"
)

func main() {
	// 1. 创建路由
	r := gin.Default()
	// 2. 绑定路由规则，执行的函数
	r.GET("/", func(ctx *gin.Context) {
		ctx.String(http.StatusOK, "hello world!")
	})
	// 3. 监听端口，默认在8080
	r.Run(":8000")
}
```
```go
import (
	"fmt"
	"net/http"
)

func main() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "Hello world!")
	})
	http.ListenAndServe(":8000", nil)
}
```

