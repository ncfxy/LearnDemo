# Python 常用代码段

## 获取剪切板内容(Mac)
```python
import subprocess

def get_clipboard_data():
  p = subprocess.Popen(['pbpaste'], stdout=subprocess.PIPE)
  ret_code = p.wait()
  data = p.stdout.read()
  return data

a = get_clipboard_data()
b = str(a, 'utf-8')
c = bytes(b, 'utf-8')
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

## 下载文件

```python
def download_file(url, filePath):
    import requests

    cookies = {'abc':'abc'}

    headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'}
    params = {}

    file_name = 'abc.jpg'
    url = 'http://abc.abc.com/%s' % file_name
    response = requests.get(url, params=params, cookies=cookies, headers=headers)
    with open(file_name, 'wb') as output_file:
        output_file.write(response.content)
```

## 将python的Class转成json输出

```python
def default_func(obj):
    if hasattr(obj, '__dict__'):
        return obj.__dict__
    else:
        return "this obj not has __dict__"

def class_obj_to_json(obj):
    try:
        res = json.dumps(obj, default=default_func, sort_keys=True, indent=4)
        return res
    except Exception as ex:
        print(ex)
        res = str(obj)
        return res
```

## python多进程实例(使用了进程池)
```python
def multiprocessing_sample():
    import multiprocessing
    pool = multiprocessing.Pool(processes=4)
    for idx in range (1, 10):
        pool.apply_async(sample_func, (idx,))
    pool.close()
    pool.join()

def sample_func(idx):
    import time
    print(idx)
    time.sleep(5)

if __name__ == '__main__':
    multiprocessing_sample()
```

## python打开浏览器链接
```python
import webbrowser

url='http://www.baidu.com'
webbrowser.open(url)
```

## 文件操作

```python
path = 'dir/abc.txt'
f.open(path)
f.close()
with open(path) as f:
    lines = [x.rstrip() for x in f]
```