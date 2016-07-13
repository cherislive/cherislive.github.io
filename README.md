# Cheris blogs for Hexo

## 如何使用(How to use it)
 123142

## 博客特色功能:

* Pagination
* Rss feed
* Code Syntax Highlight
* Author's profile with picture header
* Twitter/Sina share buttons
* Archive posts list under each post
* Duoshuo comments


## 代码规范
虽然这些细节是小事，但是却体现了一个coder的专业程度。


### 标准文件结构

	[mainfolder]
	 |--[js]		//js文件夹
	 |   |-- main.js
	 |--[style]		//所有样式相关的css和image
	 |   |-- [image]	//主要image文件夹
	 |   |    |-- img1.png
	 |   |    ...
	 |   |-- [style_name_a]	//皮肤A的文件夹
	 |   |    |-- [image]	//皮肤A的image
	 |   |    |-- style_name_a.css	//皮肤A的css文件
	 |   |    ...
	 |   |-- [style_name_b]	//皮肤B的文件夹
	 |   |-- [style_name_c]	//皮肤C的文件夹
	 |   |-- main.css	//主要css文件
	 |--[audio]		//所有样式相关的audio音频文件
	 |   |-- sound.mp3	//audio文件
 	 |-- index.html		//index文件
 	 |-- page1.html		//其他页面
 	 ...
	  
	  
文件名全部英文小写，用下划线分隔。

	  
	  
### 标准html5代码

	<!DOCTYPE html>
	<html>
	<head>
		<meta charset="utf-8" />
		<meta name="author" content="CHERIS" />
		<meta name="copyright" content="CHERIS.CN" />
		<meta name="keywords" content="FED" />
		<meta name="description" content="FED" />
		
		<title>FED 标准文档</title>
		<link href="./style/main.css" rel="stylesheet" type="text/css" />
	</head>
	<body>
		<!-- 注释 -->
		<h1 id="title" class="title">FED 标准文档</h1>
		<div>
			<h3>Title</h3>
			<p>
				标准文档
			</p>
		</div>

		<script type="text/javascript" src="./js/jq.min.js"></script>
		<script type="text/javascript">

			var J = new Jx();

		</script>
	</body>
	</html>



### 标准javascript代码

	/**
	 * === Javascript eXtension 模块 =========================================================================
	 * Copyright (c) 2015 Cheris, All rights reserved.
	 * http://www.cheris.cn/
	 * Code licensed under the BSD License:
 	 * http://www.cheris.cn/license.txt
	 * 
	 * @version 2.0
	 * @author	cheris <cherislive@163.com>
	 * @description 描述文字
	 * ---2015.6.1 ----------------------------
	 */

	/**
	 * 注释
	 */
	Jx().$package('fed.cheris', function(J) {
		var self = this,
			$D = J.dom,
			$E = J.event,
			$H = J.http;

		// 输出字符串'Hello world!'
		J.out('Hello world!');

		// 输出this === fed.cheris的判断结果
		J.out(this === fed.cheris);
	});


### 标准css代码
	
	.copyright {
	    margin: 50px 0 0 0;
	    height: 50px;
	
	    font-family: Tahoma;
	    font-size: 12px;
	    text-align: center;
	
	    color: #999;
	}
	
	.copyright a {
	    text-decoration: none;
	
	    color: #999;
	}
	
	/* 注释 */
	.copyright a:hover,
	.copyright a:focus {
	    text-decoration: underline;
	
	    outline: none;
	}

### 标准版权声明代码

  	<div class="copyright">Copyright &copy; <script>document.write(new Date().getFullYear());</script> <a href="http://www.cheris.cn/" target="_blank">cheris.cn</a>. All Rights Reserved.</div>


### 标准访问统计代码

	<!--Tencent Analytics-->
	<script type="text/javascript" src="http://tajs.qq.com/stats?sId=39379138" charset="UTF-8"></script>
	<!--Google Analytics-->
	<script type="text/javascript">

	  	var _gaq = _gaq || [];
	  	_gaq.push(['_setAccount', 'UA-23019343-9']);
	  	_gaq.push(['_trackPageview']);

		(function() {
		   	var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
		    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
		    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
		})();

	</script>

## 许可证(License)

	MIT License.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sellc
opies of the Software.

