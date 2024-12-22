# 常用lib用法记录

## Mockito

```java
// Mock
doNothing().when(obj).func(any());
when(obj.func(any())).thenReturn(res1);

```