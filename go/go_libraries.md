# Go Libraries

## 测试相关

- 生成mock代码
  - <https://github.com/vektra/mockery>
  - `brew install vektra/tap/mockery`   
  - `brew upgrade mockery`
  - `mockery --dir=. --all --recursive --keeptree --output=./mocks --packageprefix=mocks_`
- Assert库
  - github.com/stretchr/testify

## go cli

- 构建go的cli程序
  - <https://github.com/spf13/cobra>