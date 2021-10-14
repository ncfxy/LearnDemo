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

<details>
<summary>Code Snippets Sample</summary>

# QQQ

- abc
- def

</details>

<details>
<summary>Recover来捕获panic</summary>

```go
func(){
  defer func(){
    if r := recover(); r != nil {
      fmt.Println("Recovered in f", r)
    }
  }()
}
```
</details>

<details>
<summary>Go排序</summary>

```go
list := []int64{2,4,8,3}
sort.Slice(list, func(i, j int) bool{
  return list[i] < list[j]
})
```
</details>