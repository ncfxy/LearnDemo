# Python生态

## 私有源设置 (~/.pip/pip.conf)

```
[global]
index-url=地址
```

- 安装时带上镜像地址: `pip install matplotlib -i https://pypi.tuna.tsinghua.edu.cn/simple/`

## venv/virtualenv/pipenv/poetry/virtualenvwrapper

- 创建独立的python执行环境，下载的包安装到当前目录，不会污染全局

## 安装pip

- 下载ez_setup.py: https://bootstrap.pypa.io/ez_setup.py
- 安装easy_install工具: `python ez_setup.py`
- 安装pip: `easy_install pip`

## 环境管理

### 使用Anaconda进行环境管理
  - <https://www.anaconda.com/>
  - <https://docs.conda.io/projects/conda/en/latest/user-guide/getting-started.html>
  - 创建全局环境: `conda create --name myenv python=3.8`
  - 在指定目录创建环境: `conda create --prefix ./venv python=3.8`
  - 激活使用某环境: `conda activate myenv`
  - 停止使用虚拟环境: conda deactivate
  - 删除某环境: `conda remove -n env_name --all`
  - 列出当前环境: `conda env list`

### 创建和使用虚拟环境来安装包
```shell
    python3 -m venv path/to/venv
    source path/to/venv/bin/activate
    python3 -m pip install xyz
```

- 常用环境管理脚本
```shell
    python3 -m venv venv
    source venv/bin/activate
    pip3 install -r requirements.txt
```

```shell
    pip freeze > requirements.txt # 把当前环境的依赖写入到requirement.txt中
```


## 常用第三方包

- 第三方包搜索: <https://pypi.org/>
    - 快捷跳转：<https://pypi.org/search/?q=apache-airflow>
- `python -m pip install --upgrade pip     # pip 升级`
- `pip list` # 列出当前环境安装的包
- `pip install xxx==0.0.2 --force-reinstall` # 强制重新安装某个版本的依赖
- `python -m virtualenv --version`         # 查看对应依赖的版本

| 命令                   | 作用                                                | 官方地址                                        |
| ---------------------- | --------------------------------------------------- | ----------------------------------------------- |
| pip install ipython    | 交互式 python 命令行，支持 jupyter 的 python 的内核 | <https://ipython.org/>                          |
| pip install jupyter    | 交互式开发                                          | <https://jupyter.org/>                          |
| pip install numpy      | python 科学计算包                                   | <https://numpy.org/>                            |
| pip install matplotlib | python 作图                                         | <https://matplotlib.org/>                       |
| pip install attrs      | 辅助进行 python 类的构建                            | <https://www.attrs.org/en/stable/overview.html> |
| pip install pandas     | python数据分析，给予numpy                           | <https://pandas.pydata.org/>                    |
| pip install scipy      | python 科学计算包                                   | <https://scipy.org>                             |
| pip install pydantic   | python 数据验证                                     | <https://pydantic-docs.helpmanual.io/>          |
| pip install fastapi    | python 高性能Web框架                                | <https://fastapi.tiangolo.com/>                 |
| pip install pytest     | python 测试框架                                     | <https://docs.pytest.org/en/7.1.x/>             |
| pip install requests   | python 请求库                                       | <https://requests.readthedocs.io/en/latest/>    |
| pip install mcp        | python 官方mcp库                                    | <https://github.com/alibaba/MNN>                |


- webargs 转化和验证HTTP请求参数的library
  - <https://webargs.readthedocs.io/en/latest/index.html#>

## ipython

- Magic Commands
```python
%run xxx.py # 运行一个python文件
%load xxx.py # 加载一个python文件进来
%timeit abc() # 计算一个函数的平均执行时间
%pwd        # 输出当前文件夹

xxx?        # 输出命令的介绍文档

%load_ext autoreload  # 下边两个magic命令用来开启自动重新import module,否则更新代码后用的还时旧的
%autoreload 2
```

- 最前边添加!，可以用来执行command命令
  - `!pip install xxx`

