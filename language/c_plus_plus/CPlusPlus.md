# C++

## gcc 编译

`gcc [options] [filenames]`

| 参数 	| 作用                        	| Sample                        	|
|------	|-----------------------------	|-------------------------------	|
| -E   	| 预处理(Pre-Processing)      	| gcc -E test.c -o test.i       	|
| -S   	| 编译成汇编代码              	| gcc -S test.i -o test.s       	|
| -c   	| 执行汇编                    	| gcc -c test.s -o test.o       	|
| -o   	| 目标文件名                  	| gcc test.o test.exe           	|
| -g   	| 添加gdb调试                 	| gcc -g test.c -o test.exe     	|
| -O   	| 对源代码进行编译优化(1,2,3) 	| gcc test.c -o test.exe -O1    	|
| -l   	| 链接库文件(去掉lib和.so)    	| gcc test.c -o test.exe -lmath 	|
| -I   	| 指定头文件目录              	| gcc test.c -I /myinclude       	|

References:
https://blog.csdn.net/zhaoyue007101/article/details/7699554


## C++ Insights

- <https://cppinsights.io/>
- 提供代码到代码的转换，了解编译器是怎么运行的
