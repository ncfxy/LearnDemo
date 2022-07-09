# Python 常用代码段

## 获取剪切板内容(Mac)
```python
import webbrowser
import subprocess

def getClipboardData():
  p = subprocess.Popen(['pbpaste'], stdout=subprocess.PIPE)
  retcode = p.wait()
  data = p.stdout.read()
  return data

a = getClipboardData()
b = str(a, 'utf-8')
c = bytes(b, 'utf-8)
```

## 打印调用栈
```python
import traceback
traceback.print_stack()
```

## python注解的使用
```python
def wrapper_func(fn):
    def add_before_and_after(*args):
        print('before run')
        fn(*args)
        print('after run')
    return add_before_and_after
@wrapper_func
def inner_func(a,b):
    print('start run')
    print('cal res: %s'%(a*b))
inner_func(2, 5)
```