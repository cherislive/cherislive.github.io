---
title: Sublime Text 3建议配置
date: 2016-08-04 14:55:56
tags: Sublime
category: 编辑器
---
Sublime Text3 是一款非常优秀的跨平台编辑器，工欲善其事必先利其器，作为一名开发同学，这里简单记录下Sublime Text3的配置。
<!--more-->
## 安装
[Sublime Text3 官网](http://www.sublimetext.com/3)

## 注册

点击菜单： help－Enter License
licence key 如下:
```
// 如果失效 goooooo。。。
—– BEGIN LICENSE —–

Anthony Sansone

Single User License

EA7E-878563

28B9A648 42B99D8A F2E3E9E0 16DE076E

E218B3DC F3606379 C33C1526 E8B58964

B2CB3F63 BDF901BE D31424D2 082891B5

F7058694 55FA46D8 EFC11878 0868F093

B17CAFE7 63A78881 86B78E38 0F146238

BAE22DBB D4EC71A1 0EC2E701 C7F9C648

5CF29CA3 1CB14285 19A46991 E9A98676

14FD4777 2D8A0AB6 A444EE0D CA009B54

—— END LICENSE ——
```

## 安装 sublime3 Package Control
按下 ctrl+`
复制粘贴以下代码
适用于 Sublime Text 3：
```
import  urllib.request,os;pf='Package Control.sublime-package';ipp=sublime.installed_packages_path();urllib.request.install_opener(urllib.request.build_opener(urllib.request.ProxyHandler()));open(os.path.join(ipp,pf),'wb').write(urllib.request.urlopen('http://sublime.wbond.net/'+pf.replace(' ','%20')).read())
```
适用于 Sublime Text 2：
```
import  urllib2,os;pf='Package Control.sublime-package';ipp=sublime.installed_packages_path();os.makedirs(ipp)ifnotos.path.exists(ipp)elseNone;urllib2.install_opener(urllib2.build_opener(urllib2.ProxyHandler()));open(os.path.join(ipp,pf),'wb').write(urllib2.urlopen('http://sublime.wbond.net/'+pf.replace(' ','%20')).read());print('Please restart Sublime Text to finish installation')
```
## 安装sublime3插件
按下 ctrl+shift+p，输入'ip'（Install Package）
输入以下插件的名字，按顺序逐个进行安装：
* Emmet                               撸HTML、CSS必备的
* Color Highlighter&&Color Picker     这两个插件需要同时安装，然后就能显示十六进制的颜色的。但颜色这块没有webstorm的赞。
* Prettify                            HTML、CSS、JS、JSON..... Ctrl+Shift+H 一键就能格式化了
* ConvertToUTF8
* EditorConfig
* Sass
* SublimeLinter
* SublimeLinter-jscs
* SublimeLinter-jshint
* SublimeLinter-csslint
* SublimeLinter-contrib-scss-lint
* JSFormat
* CSScomb
*
*
*

## 分屏
```
Alt+Shift+1/2/3/4/5/8/9
```

## 插件的配置文件
将以下配置文件分别下载后放入项目根目录下：
EditorConfig [配置文件](http://alloyteam.github.io/CodeGuide/.editorconfig)
JSCS [配置文件](http://alloyteam.github.io/CodeGuide/.jscsrc)
JSHint [配置文件](http://alloyteam.github.io/CodeGuide/.jshintrc)
注意：全局变量需要手动加到配置文件的globals属性里，例：
```
{
    "globals": {
        "ImageHandle": true
    }
}
```
CSSLint [配置文件](http://alloyteam.github.io/CodeGuide/.csslintrc)
SCSS-Lint [配置文件](http://alloyteam.github.io/CodeGuide/.scss-lint.yml)

## 编辑器及插件设置
* sublime3 自身
Preferences->Setting-User，增加下面两个配置：
```
{
    "translate_tabs_to_spaces": true,
    "word_wrap": true
}
```
点击右下角的Spaces->Convert Indentation to Spaces可以将文件中的所有tab转换成空格

* JSFormat
```
Preferences->Package Settings->JSFormat->Setting-User，[下载配置文件](http://alloyteam.github.io/CodeGuide/jsformat_setting_user.json)覆盖
```
配置好后格式化的默认快捷键是 ctrl+alt+f

* SublimeLinter
右键->SublimeLinter->Lint Mode，有4种检查模式，建议选择 Load/save
右键->SublimeLinter->Mark Style，建议选择 Outline
右键->SublimeLinter->Choose Gutter Theme，建议选择 Blueberry-round
右键->SublimeLinter->Open User Settings，将linter里面jscs的args改成 ["--verbose"]，将linter里面csslint的ignore改成
```"box-model,adjoining-classes,box-sizing,compatible-vendor-prefixes,gradients,text-indent,fallback-colors,star-property-hack,underscore-property-hack,bulletproof-font-face,font-faces,import,regex-selectors,universal-selector,unqualified-attributes,overqualified-elements,duplicate-background-images,floats,font-sizes,ids,important,outline-none,qualified-headings,unique-headings"
```
当光标处于有错误的代码行时，详细的错误信息会显示在下面的状态栏中
右键->SublimeLinter可以看到所有的快捷键，其中 ctrl+k, a 可以列出所有错误

* CSScomb
Preferences->Package Settings->CSScomb->Setting-User，[下载配置文件](http://alloyteam.github.io/CodeGuide/csscomb_setting_user.json)覆盖
配置好后格式化的默认快捷键是 ctrl+shift+c
