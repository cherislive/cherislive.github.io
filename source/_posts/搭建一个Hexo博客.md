---
title: 搭建一个Hexo 博客
date: 2016-07-13 16:06:16
tags: Hexo
category: 前端
---
博客使用 Github + Hexo 实现并托管整个网站
<!--more-->
Hexo 是一个优秀的静态博客生成器。至于怎么怎么好，这里就不在啰嗦了。

## 准备工作
* [Git](https://git-scm.com/book/zh/v2)
* [Github](https://github.com/)
* [Github Pages](https://pages.github.com/)
* [nodejs](http://nodejs.org/)
* [Hexo](https://hexo.io/)

## 安装Hexo
安装前确保电脑上已经安装：[nodejs](http://nodejs.org/)、[Git](https://git-scm.com/book/zh/v2)。
使用npm 安装Hexo

```
$ npm install -g hexo-cli
$ hexo init <folder>
$ cd <folder>
$ npm install
```
可以在项目目录下看到如下结构的文件：

```
├── _config.yml
├── package.json
├── scaffolds
├── source
|   ├── _drafts
|   └── _posts
└── themes
```

打开_config.yml文件，你就可以配置自己的博客了。[官方文档](https://hexo.io/docs/configuration.html)
站点配置用到两个文件，一个是对整站的配置 hexo\_config.yml ，另一个是对主题的配置 hexo\themes\config.yml 。
hexo\_config.yml 文件如下：

```
# Hexo Configuration
## Docs: http://zespia.tw/hexo/docs/configure.html
## Source: https://github.com/tommy351/hexo/

# Site 这里的配置，哪项配置反映在哪里，可以参考我的博客
title: Xiaomiya's blog #站点名，站点左上角
subtitle: Walk steps step by step #副标题，站点左上角
description: Walk steps step by step #给搜索引擎看的，对站点的描述，可以自定义
author: xiaomiya#在站点左下角可以看到
email: #你的联系邮箱
language: zh-CN #中国人嘛，用中文

# URL #这项暂不配置，绑定域名后，欲创建sitemap.xml需要配置该项
## If your site is put in a subdirectory, set url as 'http://yoursite.com/child' and root as '/child/'
url: http://yoursite.com
root: /
permalink: :year/:month/:day/:title/
tag_dir: tags
archive_dir: archives
category_dir: categories

# Writing 文章布局、写作格式的定义，不修改
new_post_name: :title.md # File name of new posts
default_layout: post
auto_spacing: false # Add spaces between asian characters and western characters
titlecase: false # Transform title into titlecase
max_open_file: 100
filename_case: 0
highlight:
  enable: true
  backtick_code_block: true
  line_number: true
  tab_replace:

# Category & Tag
default_category: uncategorized
category_map:
tag_map:

# Archives 默认值为2，这里都修改为1，相应页面就只会列出标题，而非全文
## 2: Enable pagination
## 1: Disable pagination
## 0: Fully Disable
archive: 1
category: 1
tag: 1

# Server 不修改
## Hexo uses Connect as a server
## You can customize the logger format as defined in
## http://www.senchalabs.org/connect/logger.html
port: 4000
logger: false
logger_format:

# Date / Time format 日期格式，不修改
## Hexo uses Moment.js to parse and display date
## You can customize the date format as defined in
## http://momentjs.com/docs/#/displaying/format/
date_format: MMM D YYYY
time_format: H:mm:ss

# Pagination 每页显示文章数，可以自定义，我将10改成了5
## Set per_page to 0 to disable pagination
per_page: 5
pagination_dir: page

# Disqus Disqus插件，我们会替换成“多说”，不修改
disqus_shortname:

# Extensions 这里配置站点所用主题和插件，暂默认，后面会介绍怎么修改
## Plugins: https://github.com/tommy351/hexo/wiki/Plugins
## Themes: https://github.com/tommy351/hexo/wiki/Themes
theme: light
exclude_generator:
plugins:
- hexo-generator-feed
- hexo-generator-sitemap

# Deployment 站点部署到github要配置，上一节中已经讲过
## Docs: http://zespia.tw/hexo/docs/deploy.html
deploy:
  type: github
  repository: https://github.com/xiaomiya/xiaomiya.github.com.git
  branch: master
```

  现在可以 hexo generate ， hexo server ，打开 localhost:4000 查看效果了。


hexo\themes\config.yml

```
menu: #站点右上角导航栏，暂时默认，后面介绍修改
  首页: /
  存档: /archives
  关于: /about
  ToDo: /todolist
  

widgets: #站点右边栏，暂时默认，后面介绍修改和添加
- search
- category
- tagcloud
- weibo
- blogroll


excerpt_link: 阅读全文 #替换为中文

plugins: 


twitter: #右边栏要显示twitter展示的话，需要在此设置
  username: moxie198
  show_replies: false
  tweet_count: 5

addthis: #SNS分享，身在天朝，当然用“百度分享”，暂时默认，后面会介绍
  enable: true
  pubid:
  facebook: true
  twitter: true
  google: true
  pinterest: true

fancybox: true #图片效果，默认

google_analytics: #要使用google_analytics进行统计的话，这里需要配置ID，暂时默认，后面介绍
rss:  #生成RSS，需要配置路径，暂时默认，后面介绍
```
为了能够使Hexo部署到GitHub上，需要安装一个插件：(在执行 hexo deploy 后,出现 error deployer not found:github 的错误也是这个原因。)


```
$ npm install hexo-deployer-git --save
```

下面是一些常用命令
```
hexo new "postName" #新建文章
hexo new page "pageName" #新建页面
hexo generate #生成静态页面至public目录
hexo server #开启预览访问端口（默认端口4000，'ctrl + c'关闭server）
hexo deploy #将.deploy目录部署到GitHub
```
常用复合命令：

```
hexo deploy -g
hexo server -g
```

简写：
```
hexo n == hexo new
hexo g == hexo generate
hexo s == hexo server
hexo d == hexo deploy
```