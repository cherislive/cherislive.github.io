---
title: 发布自己模块到NPM
date: 2017-08-10 09:09:18
tags:
---
把自己写的 node.js 模块发布到 npm 开源社区。
<!--more-->

### 准备工作
node环境，[npm官网](https://www.npmjs.com/) 账号。
### 创建项目
```
$ npm init
```
一路Enter
```
{
  "name": "npm-name",
  "version": "1.0.1",
  "description": "desc...",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/cherislive/snb.git"
  },
  "keywords": [
    "keywords"
  ],
  "author": "cheris",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/cherislive/snb/issues"
  },
  "homepage": "https://github.com/cherislive/snb#readme"
}

```
* **name**:  模块名，之后发布之后就可以让用户npm install xxxx来引用你的开源模块了。
* **version**:  版本号，语义版本号分为 **X.Y.Z** 三位，分别代表主版本号、次版本号和补丁版本号。当代码变更时，版本号按以下原则更新。
-  如果只是修复bug，需要更新**Z**位。
- 如果是新增了功能，但是向下兼容，需要更新**Y**位。
- 如果有大变动，向下不兼容，需要更新**X**位。
* **description**:  简单介绍自己的模块。
* **main**:  入口文件，必要，当通过require('xxx')时，是读取main里声明的文件。
* **test command**:  测试命令。
* **git repository**:  git仓库地址。
* **keywords**:  关键词，可以通过npm搜索你填写的关键词找到你的模块。
* **author**:  作者信息，可以之后编辑更详细一些。
* **license**:  代码授权许可。

### 编写代码
这里需要考虑不同的引入方式（import | require | src）。
```
;(function (root, factory) {
  if (typeof exports === 'object' && typeof module !== 'undefined') {
    module.exports = factory()
  } else if (typeof define === 'function' && define.amd) {
    define([], factory)
  } else if (typeof exports === 'object') {
    exports['snb'] = factory()
  } else {
    global['snb'] = factory()
  }
})(this, function () {
  class snb {
    ...
    }
  return snb
})
```

### 发布模块
1、 在npm  [注册用户](https://www.npmjs.com/signup)。
2、 在本地登录自己的npm账号 `$ npm login` 。
3、发布模块。
```
$ npm publish
+ snb@1.0.2 // 返回本条信息就是发布成功了
```
4、撤销发布自己发布过的某个版本代码。
```
$ npm unpublish <package>@<version>
```
5、 其他命令
```
// 更新模块至最新版
$ npm update <package>

// 可以清空NPM本地缓存（使用了相同版本号发布新版本的情况）。
$ npm cache clear
```

还可以给自己的模块的来个图片徽章，可以放在github仓库的README.md里可以让访问到这项目的人看到项目的状态
http://shields.io/
https://nodei.co/


<center>
[![Version](https://img.shields.io/npm/v/snb.svg)](https://www.npmjs.com/package/snb)  [![Download](https://img.shields.io/npm/dm/snb.svg)](https://www.npmjs.com/package/snb)  [![GitHub forks](https://img.shields.io/github/forks/cherislive/snb.svg)](https://github.com/cherislive/snb/network)  [![GitHub stars](https://img.shields.io/github/stars/cherislive/snb.svg)](https://github.com/cherislive/snb/stargazers)</center>
<center>
[![NPM](https://nodei.co/npm/snb.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/snb/)
</center>
