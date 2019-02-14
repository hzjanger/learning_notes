#### 安装supervisor

`sudo npm install -g supervisor`

使用supervisor启动js程序

supervisor app.js

这个会监视你对代码的改动，并且重启nodejs，不需要每次修改后关闭nodejs在重启nodejs

#### 使用 node-inspector 调试 Node.js

`sudo npm install -g node-inspector`

在终端中通过 node --debug-brk=5858 debug.js 命令连接你要除错的脚本的调试服务器,启动 node-inspector

`node-inspector`

在浏览器中打开 http://127.0.0.1:8080/debug?port=5858 , 即可显示出优雅的 Web 调试工具