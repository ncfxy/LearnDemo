# Python 基础

## CheatSheet

- LearnPythonInMinites: <https://learnxinyminutes.com/docs/python/>

## 常用语句

```python
print('Hello, World!');
1 / 2           # 0.5
1 // 2          # 1.0
2 * 3           # 6
2 ** 3          # 8 = pow(2,3)

# 读取用户输入
x = input('Please input: ')
print(int(x))

# 列表操作
greeting = 'Hello'
greeting[0]             # H
greeting[-1]            # o

numbers = [1,2,3,4,5,6,7,8,9,10]
numbers[3:6]            # [4,5,6]
numbers[-3:-1]          # [8,9]
numbers[0:10:2]         # [1,3,5,7,9] 步长为2

1 in numbers            # True
11 in numbers           # False

'python' * 3            # pythonpythonpython
[42] * 5                # [42,42,42,42,42]

lst = list('Hello')     # ['H', 'e', 'l', 'l', 'o']
len(lst)                # 列表长度 5
lst[1] = 'r'            # ['H', 'r', 'l', 'l', 'o']
del lst[1]              # ['H', 'l', 'l', 'o']
lst[1:] = list('appy')  # ['H', 'a', 'p', 'p', 'y']
lst.count('p')          # 2
lst.extend(list('Boy')) # ['H', 'a', 'p', 'p', 'y', 'B', 'o', 'y']
lst.index('a')          # 1
lst.insert(5, ',')      # ['H', 'a', 'p', 'p', 'y', ',', 'B', 'o', 'y']
lst.pop()                 # 'y'
lst.remove(',')         # ['H', 'a', 'p', 'p', 'y', 'B', 'o']
lst.reverse()           # ['o', 'B', 'y', 'p', 'p', 'a', 'H']
lst.sort()              # ['B', 'H', 'a', 'o', 'p', 'p', 'y']
sorted(lst)             # 返回排序结果列表，不改变原列表

# 元组 不可改变的列表
1,2,3                   # (1,2,3)
42,                     # (42,)
tuple([1,2,3])          # (1,2,3)
```

## 字典

```python
phonebook = {'Alice':'2341', 'Beth':'9102', 'Cecil': '3258'}
items = [('name', 'Gumby'), ('age', 42)]
d = dict(items)                     # {'name': 'Gumby', 'age': 42}
d = dict(name='Gumby', age=42)      # {'name': 'Gumby', 'age': 42}
len(d)                              # 2
d[2] = 10                           # {'name': 'Gumby', 'age': 42, 2: 10}
del d[2]                            # {'name': 'Gumby', 'age': 42}
'name' in d                         # true
"Alice's phone number is {Alice}".format_map(phonebook)     # Alice's phone number is 2341

# 字典方法
d = dict(items)                         # {'name': 'Gumby', 'age': 42}
d.clear()                               # {}
c = d.copy()                            # 浅复制
dc = deepcopy(d)                        # 深复制 from copy import deepcopy
dict.fromkeys(['name', 'age'])          # {'name': None, 'age': None}
dict.fromkeys(['name', 'age'], 'abc')   # {'name': 'abc', 'age': 'abc'}
d.get('notExist')                       # 更加安全的字典元素访问
d.items()                               # dict_items([('name', 'Gumby'), ('age', 42)])
d.keys()                                # dict_keys(['name', 'age'])
d.update({'age': 43})                   # {'name': 'Gumby', 'age': 43}
d.values()                              # dict_values(['Gumby', 43])

```

## 类方法

```python
class Filter:
    def init(self):
        pass
class SubFilter(Filter):
    def init(self):
        # 传入self表示实例本身
        pass
    def staticMethod(cls):
        # 传入cls为静态方法，cls为类本身
        pass
issubclass(SubFilter, Filter)           # True
s = SubFilter()
isinstance(s, SubFilter)                # True
isinstance(s, Filter)                   # True
hasattr(s, 'init')                      # True
callable(getattr(s, 'init', None))            # True

# 特殊函数
__init__()                 # 对象初始化方法
__del__()                  # 析构函数
__new__()                  # 创建对象时候执行的方法，单列模式会用到
__str__()                  # 当使用print输出对象的时候调用
__repr__()                 # 自定义输出某个实例化对象
__eq__()                   # 判断两个实例是否相等
__hash__()                 # 类似Java中的hash函数

# 元素集合
__len__(self)
__getitem__(self, key)                  # 支持实例使用 instance[key] 取值
__setitem__(self, key, value)
__delitem__(self, key)

```

## 常用常量

```python
if __name__ == '__main__': # 判断当前代码是作为模块使用还是作为主程序使用
print (__file__) # 当前文件的文件名
```

## 异常

```python
# 抛出异常
raise Exception
# 捕获异常的使用
try:
    x = int(input('first number: '))
    y = int(input('second number: '))

    print(x/y)
except ZeroDivisionError as e:
    print("The second number can't be zero!")
    print(e)
except TypeError:
    print("That wasn't a number, was it?")
except:
    print("Something wrong happened")
else:
    print("It went as planned.")
finally:
    print("Cleaning up.")
# 打出警告
import warnings
warnings.warn('This is warning.')
```

## 常用模块

```python
dir(obj)                        # 返回模块中包含的属性列表
import math                     # 算术模块
import os                       # 系统调用模块
from turtle import *            # 海龟绘图法    https://docs.python.org/3/library/turtle.html
import pprint                   # 更好的打印信息
import copy                     # 复制object
import sys                      # python解释器相关的变量和参数
import os                       # 操作系统服务
import fileinput                # 读写文件
from heapq import *             # 堆结构
from collections import deque   # 双端队列
import time                     # 时间相关的函数
import random                   # 随机数
import shelve                   # 将对象保存在文件中
import json                     # json模块
import re                       # 正则表达式模块

```

## 环境 & 常用第三方包安装

- 使用Anaconda进行环境管理
  - <https://docs.conda.io/projects/conda/en/latest/user-guide/getting-started.html>
  - conda create --name myenv python=3.8
  - conda create --prefix ./venv python=3.8
  - conda activate myenv
  - conda deactivate
- 第三方包搜索: <https://pypi.org/>
    - 快捷跳转：<https://pypi.org/search/?q=apache-airflow>
- `python -m pip install --upgrade pip     # pip 升级`
- `python -m virtualenv --version`         # 查看对应依赖的版本

| 命令                   | 作用                                                | 官方地址                                        |
| ---------------------- | --------------------------------------------------- | ----------------------------------------------- |
| pip install ipython    | 交互式 python 命令行，支持 jupyter 的 python 的内核 | <https://ipython.org/>                          |
| pip install jupyter    | 交互式开发                                          | <https://jupyter.org/>                          |
| pip install numpy      | python 科学计算包                                   | <https://numpy.org/>                            |
| pip install matplotlib | python 作图                                         | <https://matplotlib.org/>                       |
| pip install attrs      | 辅助进行 python 类的构建                            | <https://www.attrs.org/en/stable/overview.html> |
| pip install pandas     | python数据分析，给予numpy                           | <https://pandas.pydata.org/>                    |
| pip install scipy      | python 科学计算包                                   | <https://scipy.org>                            |


- webargs 转化和验证HTTP请求参数的library
  - <https://webargs.readthedocs.io/en/latest/index.html#>


### 创建和使用虚拟环境来安装包
```shell
    python3 -m venv path/to/venv
    source path/to/venv/bin/activate
    python3 -m pip install xyz
```
