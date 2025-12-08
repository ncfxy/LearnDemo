# Go note

vscode使用到的包:
gocode
gopkgs
go-outline
go-symbols
guru
gorename
gotests
gomodifytags
impl
fillstruct
goplay
godoctor
dlv
gocode-gomod
godef
goreturns
golint
staticcheck
gopls

go get github.com/mdempsky/gocode
go get github.com/ramya-rao-a/go-outline
go get github.com/uudashr/gopkgs/v2/cmd/gopkgs
go get github.com/acroca/go-symbols
go get github.com/ramya-rao-a/go-outline
go get golang.org/x/tools/cmd/guru
go get github.com/acroca/go-symbols
go get golang.org/x/tools/cmd/gorename
go get golang.org/x/tools/cmd/guru
go get github.com/cweill/gotests/...
go get golang.org/x/tools/cmd/gorename
go get github.com/fatih/gomodifytags
go get github.com/cweill/gotests/...
go get github.com/josharian/impl
go get github.com/fatih/gomodifytags
go get github.com/davidrjenni/reftools/cmd/fillstruct
go get github.com/josharian/impl
go get github.com/haya14busa/goplay/cmd/goplay
go get github.com/davidrjenni/reftools/cmd/fillstruct
go get github.com/godoctor/godoctor
go get github.com/haya14busa/goplay/cmd/goplay
go get github.com/go-delve/delve/cmd/dlv
go get github.com/godoctor/godoctor
go get github.com/stamblerre/gocode
go get github.com/go-delve/delve/cmd/dlv
go get github.com/rogpeppe/godef
go get github.com/stamblerre/gocode
go get github.com/sqs/goreturns
go get github.com/rogpeppe/godef
go get golang.org/x/lint/golint


## Go 代理设置

- <https://github.com/goproxy/goproxy.cn>
- go env -w GO111MODULE=on
- go env -w GOPROXY=https://goproxy.cn,direct

## Go 包管理

- 全局安装 `go install -v golang.org/x/tools/gopls@latest`

## vscode检查需要安装的几个包
```
go install -v golang.org/x/tools/gopls@latest
go install -v github.com/cweill/gotests/gotests@v1.6.0
go install -v github.com/fatih/gomodifytags@v1.17.0
go install -v github.com/josharian/impl@v1.4.0
go install -v github.com/haya14busa/goplay/cmd/goplay@v1.0.0
go instlal -v github.com/go-delve/delve/cmd/dlv@latest
go install -v golang.org/x/lint/golint@latest
go install -v honnef.co/go/tools/cmd/staticcheck@latest
```

## GoLand Debug启动慢

问题在于GoLand会在每次调试调用时强制进行重建。因此，如果您有很多依赖关系，它将非常缓慢。
解决方法是进入Settings > Build, Execution, Deployment > Debugger并禁用Rebuild transitive packages。这样可以将调试启动速度提高20倍（90秒和5秒）
