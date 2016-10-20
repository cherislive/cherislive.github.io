---
title: 抛弃jquery，你仍然可以
date: 2016-10-20 16:06:06
tags: JavaScript
---
框架能够让我们走的更快，但只有了解原生的JS才能让我们走的更远。这里分享一些基础东西，这将可能帮你深入纯 JavaScript的世界，让你能更简单的做出决定——jQuery在你下个工程中是否需要。
<!--more-->
> 从来没有一个js库能像jQuery这般影响着这个行业，她不仅改变了人们对JavaScript的传统认知，更让人们给予了她一种新的语言地位。jQuery在前端开发领域可真是被宠坏了，她的关注指数是js的两倍，有人说是她成就了js，也有人说是它害了js，而无论舆论偏向何方，我们都必须正视这门传奇的库。

### Document Ready 事件
``` javascript
$(document).ready(function() {
  // do something
});
```
JavaScript 示例:
```
document.addEventListener("DOMContentLoaded", function() {
  // do something
}, false);
```


### 选择器
```
var el = $('div');
```
JavaScript 示例:
```
var el = document.querySelector("div");
// var el = document.querySelectorAll(".container div");
var navigation = document.querySelector("nav");
var links = navigation.querySelectorAll("a");


// This gives us simple dollar function and event binding
var $ = document.querySelectorAll.bind(document);
Element.prototype.on = Element.prototype.addEventListener;

// This is how you use it
$(".element")[0].on("touchstart", handleTouch, false);
```

### 遍历DOM
JavaScript 示例:
```
// Getting the parent node
var parent = document.querySelector("div").parentNode;

// Getting the next node
var next = document.querySelector("div").nextSibling;

// Getting the previous node
var next = document.querySelector("div").previousSibling;

// Getting the first child element
var child = document.querySelector("div").children[0];

// Getting the last child
var last = document.querySelector("div").lastElementChild;

```

### 添加和删除样式名（class name)
JavaScript 示例:
```
var element = document.querySelector(".some-class");
// Give class "foo" to the element
element.className = "foo";
element.className += " foo";
```

removeClass:
```
// removeClass, takes two params: element and classname
function removeClass(el, cls) {
  var reg = new RegExp("(\\s|^)" + cls + "(\\s|$)");
  el.className = el.className.replace(reg, " ").replace(/(^\s*)|(\s*$)/g,"");
}

removeClass(element, "foo");
```

hasClass:
```
// hasClass, takes two params: element and classname
function hasClass(el, cls) {
  return el.className && new RegExp("(\\s|^)" + cls + "(\\s|$)").test(el.className);
}

// Check if an element has class "foo"
if (hasClass(element, "foo")) {
  // Show an alert message if it does
  alert("Element has the class!");
}

```

### HTML5 的  classList API 简介
检测出浏览器是否支持
```
if ("classList" in document.documentElement) {
  // classList is supported, now do something with it
}
```

JavaScript 示例:
```
// Adding a class
element.classList.add("bar");

// Removing a class
element.classList.remove("foo");

// Checking if has a class
element.classList.contains("foo");

// Toggle a class
element.classList.toggle("active");
```
代码对比：
```
<div id="test" class="one two three"></div>
var element = document.querySelector("#test");
addClass(element, "two");
removeClass(element, "four");
```

```
<div id="test" class="one two three"></div>
var element = document.querySelector("#test");
element.classList.add("two");
element.classList.remove("four");
```
### 事件监听器
```
element.addEventListener("click", function() {
  alert("You clicked");
}, false);
```
```
// Select all links
var links = document.querySelectorAll("a");

// For each link element
links.forEach.call(links, function(el) {

  // Add event listener
  el.addEventListener("click", function(event) {
    event.preventDefault();
    alert("You clicked");
  }, false);

});
```
```
var button =  document.querySelector("#test");
var object = {
  init: function() {
    button.addEventListener("click", this, false);
    button.addEventListener("touchstart", this, false);
  },
  handleEvent: function(e) {
    switch(e.type) {
      case "click":
        this.action();
        break;
      case "touchstart":
        this.action();
        break;
    }
  },
  action: function() {
    alert("Clicked or touched!");
  }
};

// Init
object.init();
```

### 操作DOM
用纯JavaScript来操作DOM刚开始听起来就像一个可怕的想法，但比使用jQuery其实它并没有复杂多少。下面，我们会有一个例子，选择DOM的元素，克隆它，用JavaScript来操作克隆的样式，然后用被操纵的东西来替代原始的元素。
```
// Select an element
var element = document.querySelector(".class");

// Clone it
var clone = element.cloneNode(true);

// Do some manipulation off the DOM
clone.style.background = "#000";

// Replaces the original element with the new cloned one
element.parentNode.replaceChild(clone, element);
```

在DOM中，如果除了附加在<body>中新创建div，你不想替代任何东西，那么你可以这样做：
```
document.body.appendChild(clone);
```
### 在JS中决定响应图片的最大宽度
```
var maxWidth = img.naturalWidth;
```
这将会给我们提供最大宽度100%像素的图片，且IE9,Chrome,Firefox,Safari和Opera都支持这个方法。我们也可以保留这个特性然后通过加载图片到内存中添加老浏览器的支持：
```
// Get image's max-width:100%; in pixels
function getMaxWidth(img) {
  var maxWidth;

  // Check if naturalWidth is supported
  if (img.naturalWidth !== undefined) {
    maxWidth = img.naturalWidth;

  // Not supported, use in-memory solution as fallback
  } else {
    var image = new Image();
    image.src = img.src;
    maxWidth = image.width;
  }

  // Return the max-width
  return maxWidth;
}
```
你应该注意到在检查宽度前，图片必须完全被加载。这是我们一直使用的用于确定它们有尺寸的方法：
```
function hasDimensions(img) {
  return !!((img.complete && typeof img.naturalWidth !== "undefined") || img.width);
}
```
### 判断一个元素是否在视图窗口中:
通过使用getBoundingClientRect方法，你可以获取页面中任何元素的位置。以下是一个简单的函数来表明它有多简单和多强大。这个函数有一个参数，那就是你想要检查的元素。当元素为可见时，函数将返回true：
```
// Determine if an element is in the visible viewport
function isInViewport(element) {
  var rect = element.getBoundingClientRect();
  var html = document.documentElement;
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || html.clientHeight) &&
    rect.right <= (window.innerWidth || html.clientWidth)
  );
}
```

