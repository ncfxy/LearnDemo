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