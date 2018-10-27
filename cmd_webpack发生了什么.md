# cmd webpack 代码发生了什么

cmd会找到webpack的执行文件；通过环境变量path可以找到webpack在npm包里面

代码里面就只执行了node npm\node_modules\webpack-cli\cli.js

使用import-local（npm\node_modules\webpack-cli\node_modules\import-local\index.js"）

这个是为了做cli的,提供了一个方法importLocal

使用了resolve-cwd、pkg-dir
分别用到pkg-dir sync和resolve-cwd 的silent
pkg-dir找到package.json目录
resolve-cwd里面返回null可以定位到报错的信息
Resolve the path of a module like require.resolve() but from the current working directory
