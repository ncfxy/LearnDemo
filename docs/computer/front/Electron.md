# Electron

- 官网: <https://www.electronjs.org/>
- 官方文档: <https://www.electronjs.org/zh/docs/latest/>

## 日志输出
- electron-log
- 默认日志位置: 
  - Windows: `%USERPROFILE%\AppData\Roaming\[app name]\logs`
  - macOS: `~/Library/Logs/[app name]`
  - Linux: `~/.config/[app name]/logs`

## 构建工具
- electron-forge
- 官方文档: <https://www.electronforge.io/>

## MacOS需要使用sudo执行的命令
- sudo-prompt

## VSCode调试配置

- .vscode/launch.json
```json
{
  "version": "0.2.0",
  "compounds": [
    {
      "name": "Main + renderer",
      "configurations": ["Main", "Renderer"],
      "stopAll": true
    }
  ],
  "configurations": [
    {
      "name": "Renderer",
      "port": 9222,
      "request": "attach",
      "type": "chrome",
      "webRoot": "${workspaceFolder}"
    },
    {
      "name": "Main",
      "type": "node",
      "request": "launch",
      "cwd": "${workspaceFolder}",
      "runtimeExecutable": "${workspaceFolder}/node_modules/.bin/electron",
      "windows": {
        "runtimeExecutable": "${workspaceFolder}/node_modules/.bin/electron.cmd"
      },
      "args": [".", "--remote-debugging-port=9222"],
      "outputCapture": "std",
      "console": "integratedTerminal"
    }
  ]
}
```