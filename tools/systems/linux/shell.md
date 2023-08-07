# Shell

## 变量赋值

```shell
abc="123" # 直接赋值，等号左右不要加空格
bcd=$(echo $abc) # 通过执行语句赋值
```

## 文件操作
```shell
current_file_dir=$(realpath $(dirname $0))  # 当前执行脚本所在的文件夹
```
