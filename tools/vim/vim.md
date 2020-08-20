# Vim

## vimtutor

- 第一讲
  - 移动: hjkl
  - 编辑文件: vim 文件名
  - 退出: q!, 保存退出: wq
  - 删除字符: x
  - 插入: i, 行末尾添加: A
- 第二讲
  - 删除单词: dw
  - 删除到行尾: d$
  - 删除到单词末尾: de
  - 移动: w, e, b, 2w, e3, 0, $
  - 删除多个单词: d2w
  - 删除整行: dd
  - 撤销最后命令: u
  - 撤销对整行的修改: U
  - 撤销撤销的操作: CTRL-R
- 第三讲
  - 将最后一次删除内容置于光标之后: p
  - 替换光标所在位置字符: r
  - 改变文本直到末尾: cw, ce
  - 更改更多: c2w, c$
- 第四讲
  - 显示行及状态信息: CTRL-G
  - 跳到第一行: gg
  - 跳到最后一行: G 
  - 跳到指定行: 行号 + G
  - 搜索: /+字符, 下一下n, 上一个N
  - 逆向搜索: ?+字符
  - 返回到之前位置: CTRL-O
  - 跳转到较新位置: CTRL-I
  - 查找配对的括号: %
  - 替换: :s/old/new/g
  - 全文替换并提示: :%s/old/new/gc
- 第五讲
  - VIM中执行外部命令: :!+命令
  - 保存文件: w
  - 进入可视模式选择: v
  - 将文件内容插入到光标后边: r fileName
  - 将命令输出插入: r 命令
- 第六讲
  - 在新的一行插入: o
  - 直接打开新的一行: O
  - 在光标后插入: a
  - 在行尾插入: A 
  - 连续替换多个字符: R
  - 复制粘贴: y, p
  - 复制一个单词: yw
  - set hlsearch 和 incsearch
  - 查找忽略大小写: set ic
- 第七讲
  - 帮助: `:help w`
  - 配置: edit ~/.vimrc, :help vimrc-intro 
	- 命令自动补全: Tab 或者 CTRL-D

## 其他用的命令

- 缩进行: `:10,20>`

## 常用配置

- vim ~/.vimrc
```vim
set nu          	  "显示行号
set tabstop=4   	  "设定tab长度为4
syntax on       	  "自动语法高亮
set ruler       	  "打开状态栏标尺
set cursorline  	  "突出显示当前行
set incsearch   	  "输入时高亮显示被找到的文本
set hlsearch    	  "搜索时高亮
set autoindent  	  "继承上一行缩进
set shiftwidth=4    "行之间交错使用4个空格
set expandtab       "使用空格代替tab
set syntax=cpp 		  "设置使用的语法高亮形式
```


