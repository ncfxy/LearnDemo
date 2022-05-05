# Go 面试问题

## 考察Go routine启动时与外部共享变量

```go
func main() {
    wg := sync.WaitGroup{}
    wg.Add(10)
    for i := 0; i < 10; i++ {
        go func() {
            fmt.Println("i: ", i)
            wg.Done()
        }()
    }
    wg.Wait()
}
```

