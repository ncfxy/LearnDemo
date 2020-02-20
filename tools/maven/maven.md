# Maven

## Maven 常用命令

| 命令                | 作用                 |
| ------------------- | -------------------- |
| mvn install         |                      |
| mvn dependency:tree | 显示当前项目的依赖树 |
|                     |                      |

## 常用参数

| 参数                   | 作用                               |
| ---------------------- | ---------------------------------- |
| -DskipTests            | 不执行测试用例，但编译测试用例类   |
| -Dmaven.test.skip=true | 不执行测试用例，也不编译测试用例类 |

## 设置国内源

<https://maven.aliyun.com/mvn/view>

```xml
    <settings> 
        <mirror>
            <id>alimaven</id>
            <name>aliyun maven</name>
            <url>https://maven.aliyun.com/repository/central</url>
            <!--mirrorOf>central</mirrorOf-->   
            <mirrorOf>*</mirrorOf>   
        </mirror>
    </settings>
```
