# CURL常用命令备忘

## -H 添加Header

- `-H "Host: www.abc.com"`: 指定Host
- `-H "content-type: application/json"`: 设置传输内容为json格式

## -X 指定HTTP方法

- `-X GET`
- `-X POST`

## -d 指定传输参数

- `-d 'abc=abc'`
- `-d "{\"abc\":\"abc\"}"`

## 请求示例

```bash
curl -X POST -H "Content-Type: application/json" -d '{"key1":"value1", "key2":"value2"}' http://example.com/resource
```


## 代码转换

- 将CURL转换成代码: <https://curlconverter.com>

## 使用CURL下载文件
- `curl -O https://xxxx.com/abc`
