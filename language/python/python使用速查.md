# python使用速查

## 文件操作

```python
path = 'dir/abc.txt'
f.open(path)
f.close()
with open(path) as f:
    lines = [x.rstrip() for x in f]
```

## ipython

- Magic Commands
```python
%run xxx.py # 运行一个python文件
%load xxx.py # 加载一个python文件进来
%timeit abc() # 计算一个函数的平均执行时间
%pwd        # 输出当前文件夹

xxx?        # 输出命令的介绍文档

%load_ext autoreload  # 下边两个magic命令用来开启自动重新import module,否则更新代码后用的还时旧的
%autoreload 2
```

- 最前边添加!，可以用来执行command命令