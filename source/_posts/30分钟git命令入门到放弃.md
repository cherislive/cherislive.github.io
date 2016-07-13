---
title: Git 简单使用说明
date: 2016-07-11 17:09:08
tags: git
category: 前端
---
git——现在的火爆程度非同一般，它被广泛地用在大型开源项目，团队开发，以及独立开发者，甚至学生之中。 
<!--more-->
初学者非常容易被各种命令，参数吓哭。但实际上刚上手你并不需要了解所有命令的用途。你可以从掌握一些简单，强大的命令开始，逐步去学习。（这就是这篇文章要讲的）。好了，上来！
![30分钟git命令入门到放弃](http://oa59b6bv6.bkt.clouddn.com/git1.webp)

## learn-git

### 基本了解

git命令是一些命令行工具的集合，它可以用来跟踪，记录文件的变动。比如你可以进行保存，比对，分析，合并等等。这个过程被称之为版本控制。已经有一系列的版本控制系统，比如SVN, Mercurial, Perforce, CVS, Bitkeepe等等。

Git是分布式的，这意味着它并不依赖于中心服务器，任何一台机器都可以有一个本地版本的控制系统，我们称之为仓库。如果是多人协作的话，你需要还需要一个线上仓库，用来同步信息。这就是GitHub, BitBucket的工作。


1. 安装Git
安装git非常直接：
* Linux - 打开控制台，然后通过包管理安装，在Ubuntu上命令是：

``` javascript
$ sudo apt-get install git-all
```

* Windows - 推荐使用git for windows，它包括了图形工具以及命令行模拟器。

* OS X - 最简单的方式是使用homebrew安装，命令行执行

``` javascript
$ brew install git
```
如果你是在是先用图形工具的话，那么推荐你使用Github desktop,Sourcetree。但我还是推荐你使用命令行，下面的内容就都是命令行的。

2. 配置Git
安装完git,首要任务是配置我们的信息，最重要的是用户名及邮箱，打开终端，执行以下命令。

``` javascript
$ git config --global user.name "My Name"
$ git config --global user.email myEmail@example.com
```
配置好这两项，用户就能知道谁做了什么，并且一切都更有组织性了不是吗？

3. 创建一个新仓库 - git init
git 会把所有文件以及历史记录保存在你的项目中，创建一个新的仓库，首先要去到项目路径，执行 git 
init。然后git会创建一个隐藏的文件夹.git，所有的信息都储存在其中。
在桌面创建一个联系文件夹 git_exercise, 打开终端：

``` javascript
$ cd Desktop/git_exercise/
$ git init
```
OK，现在项目还什么都没有，新建一个 hello.txt 文件试试~

4. 检查状态 - git status
git status 是另一个非常重要的命令，它会告诉我们创库的当前状态：是否为最新代码，有什么更新等等执行git status:

``` javascript
$ git status

On branch master

Initial commit

Untracked files:
  (use "git add ..." to include in what will be committed)

	hello.txt
```
git 告诉我们，hello.txt尚未跟踪，这是因为这个文件是新的，git不知道是应该跟踪它的变动呢，还是直接忽略不管呢。为了跟踪我们的新文件，我们需要暂存它。

5. 暂存 - git add
git 有个概念叫暂存区，你可以把它看成一块空白帆布，包裹着所有你可能会提交的变动。它一开始为空，你可以通过 git add 命令添加内容，并使用 git commit 
提交。
这个例子中只有一个文件：

``` javascript
$ git add hello.txt
```
如果需要提交目录下的所有内容，可以这样：

``` javascript
$ git add -A
```
再次使用git status查看：

``` javascript
$ git status

On branch master

Initial commit

Changes to be committed:
  (use "git rm --cached ..." to unstage)

	new file:   hello.txt
```
我们的文件已经提交了。状态信息还会告诉我们暂存区文件发生了什么变动，不过这里我们提交的是一个全新文件。

6. 提交 - git commit
一次提交代表着我们的仓库到了一个交付状态，通常是完成了某一块小功能。它就像是一个快照，允许我们像使用时光机一样回到旧时光。
创建提交，需要我们提交东西到暂存区（git add），然后：

``` javascript
$ git commit -m "Initial commit."
```
这就创建了一次提交，-m 
“Initial commit.”表示对这次提交的描述，建议使用有意义的描述性信息。

## 远端仓库
到目前为止，我们的操作都是在本地的，它存在于.git文件中。为了能够协同开发，我们需要把代码发布到远端仓库上。
1. 链接远端仓库 - git remote add
为了能够上传到远端仓库，我们需要先建立起链接，这篇教程中，远端仓库的地址为：https://github.com/tutorialzine/awesome-project,但你应该自己在Github, 
BitBucket上搭建仓库，自己一步一步尝试。
添加测试用的远端仓库

``` javascript
$ git remote add origin https://github.com/tutorialzine/awesome-project.git
```
一个项目可以同时拥有好几个远端仓库为了能够区分，通常会起不同的名字。通常主远端仓库被称为origin。

2. 上传到服务器 - git push
每次我们要提交代码到服务器上时，都会使用到git push。
git push命令会有两个参数，远端仓库的名字，以及分支的名字：

``` javascript
$ git push origin master

Counting objects: 3, done.
Writing objects: 100% (3/3), 212 bytes | 0 bytes/s, done.
Total 3 (delta 0), reused 0 (delta 0)
To https://github.com/tutorialzine/awesome-project.git
 * [new branch]      master -> master
```
取决于你使用的服务器，push过程你可能需要验证身份。如果没有出差错，现在使用浏览器去你的远端分支上看，hello.txt已经在那里等着你了。

3. 克隆仓库 - git clone
放在Github上的开源项目，人们可以看到你的代码。可以使用 git clone进行下载到本地。

``` javascript
$ git clone https://github.com/tutorialzine/awesome-project.git
```
本地也会创建一个新的仓库，并自动将github上的分支设为远端分支。

4. 从服务器上拉取代码 - git pull
如果你更新了代码到仓库上，其他人可以通过git pull命令拉取你的变动：

``` javascript
$ git pull origin master
From https://github.com/tutorialzine/awesome-project
 * branch            master     -> FETCH_HEAD
Already up-to-date.
```
因为暂时没有其他人提交，所有没有任何变动分支
![branchs](http://oa59b6bv6.bkt.clouddn.com/git2.webp)
branchs

当你在做一个新功能的时候，最好是在一个独立的区域上开发，通常称之为分支。分支之间相互独立，并且拥有自己的历史记录。这样做的原因是：
* 稳定版本的代码不会被破坏
* 不同的功能可以由不同开发者同时开发。
* 开发者可以专注于自己的分支，不用担心被其他人破坏了环境
* 在不确定之前，同一个特性可以拥有几个版本，便于比较

1. 创建新分支 - git branch
每一个仓库的默认分支都叫master, 创建新分支可以这样：

``` javascript
$ git branch amazing_new_feature
```
创建了一个名为amazing_new_feature的新分支，它跟当前分支同一起点

2. 切换分支 - git checkout
单独使用git branch，可以查看分支状态：

``` javascript
$ git branch
  amazing_new_feature
* master
```
* 号表示当前活跃分支为master，使用git checkout切换分支。


``` javascript
$ git checkout amazing_new_feature
```
3. 合并分支 - git merge
我们的amazing_new_feature 分支的任务是增加一个featuer.txt。我们来创建，添加到暂存区，提交。

``` javascript
$ git add feature.txt
$ git commit -m "New feature complete."
```
新分支任务完成了，回到master分支

``` javascript
$ git checkout master
```
现在去查看文件，你会发现，之前创建的feature.txt文件不见了，因为master分支上并没有feature.txt。使用git merge 把 amazing_new_feature 分支合并到master上。

``` javascript
$ git merge amazing_new_feature
```
ok! 
然后再把amazing_new_feature 分支删掉吧。

``` javascript
$ git branch -d amazing_new_feature
```

## 高级
这篇文章的最后一节，我们来说些比较高级并且使用的技巧。
1. 比对两个不同提交之间的差别
每次提交都有一个唯一id，查看所有提交和他们的id，可以使用 git 
log:

``` javascript
$ git log

commit ba25c0ff30e1b2f0259157b42b9f8f5d174d80d7
Author: Tutorialzine
Date:   Mon May 30 17:15:28 2016 +0300

    New feature complete

commit b10cc1238e355c02a044ef9f9860811ff605c9b4
Author: Tutorialzine
Date:   Mon May 30 16:30:04 2016 +0300

    Added content to hello.txt

commit 09bd8cc171d7084e78e4d118a2346b7487dca059
Author: Tutorialzine
Date:   Sat May 28 17:52:14 2016 +0300

    Initial commit
```
id 很长，但是你并不需要复制整个字符串，前一小部分就够了。查看某一次提交更新了什么，使用 git show:


``` javascript
$ git show b10cc123

commit b10cc1238e355c02a044ef9f9860811ff605c9b4
Author: Tutorialzine
Date:   Mon May 30 16:30:04 2016 +0300

    Added content to hello.txt

diff --git a/hello.txt b/hello.txt
index e69de29..b546a21 100644
--- a/hello.txt
+++ b/hello.txt
@@ -0,0 +1 @@
+Nice weather today, isn't it?
```

查看两次提交的不同，可以使用git diff [commit-from]..[commit-to] 语法：

``` javascript
$ git diff 09bd8cc..ba25c0ff

diff --git a/feature.txt b/feature.txt
new file mode 100644
index 0000000..e69de29
diff --git a/hello.txt b/hello.txt
index e69de29..b546a21 100644
--- a/hello.txt
+++ b/hello.txt
@@ -0,0 +1 @@
+Nice weather today, isn't it?
```
比较首次提交和最后一次提交，我们可以看到所有的更改。当然使用git difftool命令更加方便。

2. 回滚某个文件到之前的版本
git 允许我们将某个特定的文件回滚到特定的提交，使用的也是 git checkout。
下面的例子，我们将hello.txt回滚到最初的状态，需要指定回滚到哪个提交，以及文件的全路径。

``` javascript
$ git checkout 09bd8cc1 hello.txt
```

3. 回滚提交
如果你发现最新的一次提交完了加某个文件，你可以通过 git commit —amend来修复，它会把最新的提交打回暂存区，并尝试重新提交。
如果是更复杂的情况，比如不是最新的提交了。那你可以使用git revert。
最新的一次提交别名也叫HEAD。

``` javascript
$ git revert HEAD
```

其他提交可以使用id:

``` javascript
$ git revert b10cc123
```
混滚提交时，发生冲突是非常频繁的。当文件被后面的提交修改了以后，git不能正确回滚。

4. 解决合并冲突
冲突经常出现在合并分支或者是拉去别人的代码。有些时候git能自动处理冲突，但大部分需要我们手动处理。
比如John 和 Tim 
分别在各自的分支上写了两部分代码。
John 喜欢 for:

``` javascript
// Use a for 
loop to console.log contents.
for(var i=0; i<arr.length; i++) 
{
console.log(arr[i]);
}
```
Tim 喜欢 forEach:

``` javascript
// Use forEach 
to console.log contents.
arr.forEach(function(item) 
{
console.log(item);
});
```
假设John 现在去拉取 
Tim的代码:

``` javascript
$ git merge tim_branch

Auto-merging print_array.js
CONFLICT (content): Merge conflict in print_array.js
Automatic merge failed; fix conflicts and then commit the result.
```
这时候git并不知道如何解决冲突，因为他不知道John和Tim谁写得更好。
于是它就在代码中插入标记。

``` javascript
<<<<<<< HEAD
// Use a for loop to console.log contents.
for(var i=0; i<arr.length; i++) {
    console.log(arr[i]);
}
=======
// Use forEach to console.log contents.
arr.forEach(function(item) {
    console.log(item);
});
>>>>>>> Tim s commit.
```
==== 号上方是当前最新一次提交，下方是冲突的代码。我们需要解决这样的冲突，经过组委会成员讨论，一致认定，在座的各位都是垃圾！两个都不要。改成下面的代码。


``` javascript
// Not using for loop or forEach.
// Use Array.toString() to console.log contents.
console.log(arr.toString());
```
好了，再提交一下：

``` javascript
$ git add -A
$ git commit -m "Array printing conflict resolved."
```

如果在大型项目中，这个过程可能容易出问题。你可以使用GUI 工具来帮助你。使用 git mergetool。

5. 配置 .gitignore
大部分项目中，会有写文件，文件夹是我们不想提交的。为了防止一不小心提交，我们需要gitignore文件：
在项目根目录创建.gitignore文件
在文件中列出不需要提交的文件名，文件夹名，每个一行
.gitignore文件需要提交，就像普通文件一样
通常会被ignore的文件有：
log文件
task runner 
builds
node_modules等文件夹
IDEs生成的文件
个人笔记
例如：

``` javascript
*.log
build/
node_modules/
.idea/
my_notes.txt
```
总结
教程结束~(撒花)
git有点复杂，并且有一大堆特性和技巧等着你去挖掘，这篇文章只是提供冰山一角，希望你不要因为太多繁琐的命令而停下前进的脚步！ 
怀挺！
更多学习资源：
* git 官方文档
* git GUI工具
* 在线创建.gitignore
* 廖雪峰 git 教程
* 图解git

> 本文根据@Danny Markov的文章所译。英文出处：Learn Git in 30 Minutes  [原文链接](http://w3ctrain.com/2016/06/26/learn-git-in-30-minutes/)
