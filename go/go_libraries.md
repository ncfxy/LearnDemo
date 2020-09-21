# Go Libraries

## 测试相关

- 生成mock代码
  - github.com/vektra/mockery
  - `brew install vektra/tap/mockery`   
  - `brew upgrade mockery`
  - `mockery --dir=. --all --recursive --keeptree --output=./mocks --packageprefix=mocks_`
- Assert库
  - github.com/stretchr/testify