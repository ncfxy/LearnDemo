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

## 管道命令

- 查询日志、切分、排序、统计数量: `cat log.txt | cut -d ' ' -f 10 | sort | uniq -c`
- grep进行正则匹配: -E使用正则， -o 只显示匹配内容
  - 提取数字部分 `grep -o '[0-9]*'`
- tail -f filename 会把 filename 文件里的最尾部的内容显示在屏幕上，并且不断刷新 `tail -f abc.log | grep 'aaa'`
- head 取前几行: `head -n 20`
