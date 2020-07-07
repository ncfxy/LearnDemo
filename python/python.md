# Python

## 私有源设置 (~/.pip/pip.conf)

```
[global]
index-url=地址
```

## venv/virtualenv/pipenv/poetry/virtualenvwrapper

- 创建独立的python执行环境，下载的包安装到当前目录，不会污染全局

## 安装pip

- 下载ez_setup.py: https://bootstrap.pypa.io/ez_setup.py
- 安装easy_install工具: `python ez_setup.py`
- 安装pip: `easy_install pip`