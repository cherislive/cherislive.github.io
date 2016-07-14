---
title: Git 的安装和使用
date: 2016-07-14 10:46:06
tags: Git
category: 前端
---
Git 是一个很强大的分布式版本控制系统。它不但适用于管理大型开源软件的源代码，管理私人的文档和源代码也有很多优势。
<!--more-->
## 安装
在windows下安装git比较常用的有以下几种方式：
* [Git 官方版本的安装](http://git-scm.com/download/win)
* [GitHub for Windows](https://desktop.github.com/)
* [TortoiseGit  1.8.12.0-64](http://cdn.github.cheris.com.cn/file/git/TortoiseGit-1.8.12.0-64bit.msi)(点击直接下载)
* [TortoiseGit-LanguagePack-zh_CN  1.8.12.0-64](http://cdn.github.cheris.com.cn/file/git/TortoiseGit-LanguagePack-1.8.12.0-64bit-zh_CN.msi)(点击直接下载)

## 配置
当安装完Git应该做的第一件事情就是设置用户名称和邮件地址。这样做很重要，因为每一个Git的提交都会使用这些信息，并且它会写入你的每一次提交中，不可更改：
``` bash
 git config --global user.name "username"
$ git config --global user.email "username@example.com"
```
对于user.email，因为在GitHub的commits信息上是可见的，所以如果你不想让人知道你的email，可以Keeping your email address private:
1. 在GitHub右上方点击你的头像，选择”Settings”；
2. 在右边的”Personal settings”侧边栏选择”Emails”；
3. 选择”Keep my email address private”。

这样，你就可以使用如下格式的email进行配置：
``` bash
$ git config --global user.email "username@users.noreply.github.com"
```

![git速查表](http://cdn.github.cheris.com.cn/images/github/20140730150425_610.jpg) 
![git常用命令](http://cdn.github.cheris.com.cn/images/github/git%E9%80%9F%E6%9F%A5%E8%A1%A8.png)
## 创建
复制一个已创建的仓库:
``` bash
$ git clone git@github.com:example/example.github.io.git
```

创建一个新的本地仓库:
``` bash
$ git init
```

## 本地修改
显示工作路径下已修改的文件：
``` bash
$ git status
```

显示与上次提交版本文件的不同：
``` bash
$ git diff
```

把当前所有修改添加到下次提交中：
``` bash
$ git add
```

把对某个文件的修改添加到下次提交中：
``` bash
$ git add -p <file>
```

提交本地的所有修改：
``` bash
$ git commit -a
```

提交之前已标记的变化：
``` bash
$ git commit
```

附加消息提交：
``` bash
$ git commit -m 'message here'
```

提交，并将提交时间设置为之前的某个日期:
``` bash
git commit --date="`date --date='n day ago'`" -am "Commit Message"
```

修改上次提交
请勿修改已发布的提交记录!
``` bash
$ git commit --amend
```

把当前分支中未提交的修改移动到其他分支
``` bash
git stash
git checkout branch2
git stash pop
```
## 搜索
从当前目录的所有文件中查找文本内容：
``` bash
$ git grep "Hello"
```

在某一版本中搜索文本：
``` bash
$ git grep "Hello" v2.5
```

## 提交历史
从最新提交开始，显示所有的提交记录（显示hash， 作者信息，提交的标题和时间）：
``` bash
$ git log
```

显示所有提交（仅显示提交的hash和message）：
``` bash
$ git log --oneline
```

显示某个用户的所有提交：
``` bash
$ git log --author="username"
```

显示某个文件的所有修改：
``` bash
$ git log -p <file>
```

谁，在什么时间，修改了文件的什么内容：
``` bash
$ git blame <file>
```

#分支与标签
列出所有的分支：
``` bash
$ git branch
```

切换分支：
``` bash
$ git checkout <branch>
```

创建并切换到新分支:
``` bash
$ git checkout -b <branch>
```

基于当前分支创建新分支：
``` bash
$ git branch <new-branch>
```

基于远程分支创建新的可追溯的分支：
``` bash
$ git branch --track <new-branch> <remote-branch>
```

删除本地分支:
``` bash
$ git branch -d <branch>
```

给当前版本打标签：
``` bash
$ git tag <tag-name>
```

## 更新与发布
列出当前配置的远程端：
``` bash
$ git remote -v
```

显示远程端的信息：
``` bash
$ git remote show <remote>
```

添加新的远程端：
``` bash
$ git remote add <remote> <url>
```

下载远程端版本，但不合并到HEAD中：
``` bash
$ git fetch <remote>
```

下载远程端版本，并自动与HEAD版本合并：
``` bash
$ git remote pull <remote> <url>
```

将远程端版本合并到本地版本中：
``` bash
$ git pull origin master
```

将本地版本发布到远程端：
``` bash
$ git push remote <remote> <branch>
```

删除远程端分支：
``` bash
$ git push <remote> :<branch> (since Git v1.5.0)
或
git push <remote> --delete <branch> (since Git v1.7.0)
```

发布标签:
``` bash
$ git push --tags
```

## 合并与重置
将分支合并到当前HEAD中：
``` bash
$ git merge <branch>
```

将当前HEAD版本重置到分支中:
请勿重置已发布的提交!
``` bash
$ git rebase <branch>
```

退出重置:
``` bash
$ git rebase --abort
```

解决冲突后继续重置：
``` bash
$ git rebase --continue
```

使用配置好的merge tool 解决冲突：
``` bash
$ git mergetool
```

在编辑器中手动解决冲突后，标记文件为已解决冲突
``` bash
$ git add <resolved-file>
$ git rm <resolved-file>
```

## 撤销
放弃工作目录下的所有修改：
``` bash
$ git reset --hard HEAD
```

移除缓存区的所有文件（i.e. 撤销上次git add）:
``` bash
$ git reset HEAD
```

放弃某个文件的所有本地修改：
``` bash
$ git checkout HEAD <file>
```

重置一个提交（通过创建一个截然不同的新提交）
``` bash
$ git revert <commit>
```

将HEAD重置到指定的版本，并抛弃该版本之后的所有修改：
``` bash
$ git reset --hard <commit>
```

将HEAD重置到上一次提交的版本，并将之后的修改标记为未添加到缓存区的修改：
``` bash
$ git reset <commit>
```

将HEAD重置到上一次提交的版本，并保留未提交的本地修改：
``` bash
$ git reset --keep <commit>
```
