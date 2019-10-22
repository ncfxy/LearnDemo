# Node

## Node import

```javascript
import defaultExport from 'module-name';
import * as name from 'module-name';
import { export } from 'module-name';
import { export as alias } from 'module-name';
import { export1, export2 } from 'module-name';
import { foo, bar } from 'module-name/path/to/specific/un-exported/file';
import { export1, export2 as alias2, [...] } from 'module-name';
import defaultExport, { export [ , [...]] } from 'module-name';
import defaultExport, * as name from 'module-name';
import 'module-name';
var promise = import(module-name);
```

## FAQ

### 1. npm 和 yarn 在windows下install非常慢

- 原因： windows的LSASS.EXE进程的Encrypting File System (EFS)功能占用大量CPU。
  - <https://support.microsoft.com/en-ca/help/2550044/how-to-troubleshoot-high-lsass-exe-cpu-utilization-on-an-active-direct>
  - <https://docs.microsoft.com/en-us/windows/win32/fileio/file-encryption>

- 方案： 关闭EFS功能

    <https://thegeekpage.com/enable-disable-windows-encrypting-file-system-efs-feature/>

    ```powershell
        fsutil behavior set disableencryption 1
        fsutil behavior set disableencryption 0
    ```

    更好的方案：关闭对应文件夹上的加密选项
