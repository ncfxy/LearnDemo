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

<details>
<summary>Code Snippets</summary>

# QQQ

- abc
- def

</details>