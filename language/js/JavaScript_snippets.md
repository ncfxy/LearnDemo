# JavaScript常用代码段

## 获取当前页面下所有的请求URL

```javascript
function getCurrentUrls() {
    var result = []
    window.performance.getEntries().forEach((item) => { 
        result.push(
        { 
        'url': item.name, 
        'entryType': item.entryType, 
        'type': item.initiatorType, 
        'duration(ms)': item.duration 
        }); 
    }); 
    return result;
}
// window.performance 提供了一组精确的数据，经过简单的计算就能得出一些网页性能数据。
```

