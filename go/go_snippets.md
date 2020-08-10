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

## Go变成习惯

- 如果返回结果中err不为空，则值不可用; err为nil，表示值可用
- MustXXX函数：执行XXX函数，如果有err则panic
- 声明const常量时使用 iota

<details>
<summary>Code Snippets</summary>

# QQQ

- abc
- def

</details>