---
title: Hexo 多设备管理
date: 2016-07-13 17:06:16
tags: Hexo
category: 前端
---
如何在不同设备快速、高效的管理自己的博客？
<!--more-->
这里采用分支的方法，在一个Github Pages项目上，实现不同终端的管理工作。

实现原理：
在项目上创建一个分支，暂定为hexo分支。
master分支和hexo分支互补干扰，当然了，如果你没有操作错误，他们也许永远都不需要 merge

* master 分支 存放线上静态站点

* Hexo 分支 保存项目数据 方便随时随地获取项目 并在本地发布站点 （hexo 分支 是直接发布到master分支上的）。

## 具体操作流程：

1. 创建仓库，example.github.io；
2. 创建两个分支：master 与 hexo；
3. 设置hexo为默认分支（因为我们只需要手动管理这个分支上的Hexo网站文件）；
4. 拷贝仓库到本地；
```
git clone git@github.com:example/example.github.io.git
```
4. 在本地 example.github.io 文件夹下通过Git bash(或其他shell)依次执行（此时当前分支应显示为hexo）如下命令;
```
$ npm install hexo
$ hexo init 
$ npm install 
$ npm install hexo-deployer-git
$ npm install hexo-deployer-git --save
```
需要注意的是，npm install hexo之后 git branch 查看当前分支为 hexo 分支，hexo init之后，发现找不到分支了，原因如下：
git是通过.git 文件来控制管理的，当在远端仓库clone项目时，项目中默认生成了一个.git 文件，然而操作hexo init 的时候，同样生成了一个.git 文件。
这样之前生成的.git文件丢失，整个项目就失去版本控制。
5. 配置hexo 博客
6. 提交项目文件到hexo 分支，依次执行如下命令：
```
$ git add .
$ git commit -m “…”
$ git push origin hexo
```
7. 执行hexo generate -d生成网站并部署到GitHub上。


## 日常维护
1. 依次执行如下指令将改动推送到GitHub（此时当前分支应为hexo）：
```
$ git add .
$ git commit -m “…”
$ git push origin hexo
```
2. 执行hexo generate -d发布网站到master分支上。

## 更换设备或者本地文件丢失的时候
1. 拷贝远端仓库（默认分支为hexo）:
```
git clone git@github.com:example/example.github.io.git
```
2. 在本地新拷贝的example.github.io文件夹下通过Git bash(或其他shell)依次执行下列指令：
```
$ npm install hexo
$ npm install
$ npm install hexo-deployer-git
$ npm install hexo-deployer-git --save
```
这里不再需要hexo init这条指令。

