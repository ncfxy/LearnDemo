# PDF处理记录

## 图片转pdf

使用打印功能输出成pdf

## 合并pdf

```python
import os
from PyPDF2 import PdfFileMerger

dir = './'

files = ["1.pdf","2.pdf", "3.pdf"]
pdf_lst = [os.path.join(dir, filename) for filename in files]
file_merger = PdfFileMerger()
for pdf in pdf_lst:
    file_merger.append(pdf)     # 合并pdf文件

file_merger.write(dir + "/merge.pdf")
```