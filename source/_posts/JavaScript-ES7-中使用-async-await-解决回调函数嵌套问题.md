---
title: JavaScript ES7 中使用 async/await 解决回调函数嵌套问题
date: 2017-04-07 10:26:30
tags:
---
JavaScript 中最蛋疼的事情莫过于回调函数嵌套问题。以往在浏览器中，因为与服务器通讯是一种比较昂贵的操作，因此比较复杂的业务逻辑往往都放在服务器端，前端 JavaScript 只需要少数几次 AJAX 请求就可拿到全部数据。
<!--more-->
但是到了 webapp 风行的时代，前端业务逻辑越来越复杂，往往几个 AJAX 请求之间互有依赖，有些请求依赖前面请求的数据，有些请求需要并行进行。还有在类似 node.js 的后端 JavaScript 环境中，因为需要进行大量 IO 操作，问题更加明显。这个时候使用回调函数来组织代码往往会导致代码难以阅读。
现在比较流行的解决这个问题的方法是使用 Promise，可以将嵌套的回调函数展平。但是写代码和阅读依然有额外的负担。
另外一个方案是使用 ES6 中新增的 generator，因为 generator 的本质是可以将一个函数执行暂停，并保存上下文，再次调用时恢复当时的状态。co 模块是个不错的封装。但是这样略微有些滥用 generator 特性的感觉。
ES7 中有了更加标准的解决方案，新增了 async/await 两个关键词。async 可以声明一个异步函数，此函数需要返回一个 Promise 对象。await 可以等待一个 Promise 对象 resolve，并拿到结果。
比如下面的例子，以往我们无法在 JavaScript 中使用常见的 sleep 函数，只能使用 setTimeout 来注册一个回调函数，在指定的时间之后再执行。有了 async/await 之后，我们就可以这样实现了：
```
jsasync function sleep(timeout) {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      resolve();
    }, timeout);
  });
}

(async function() {
  console.log('Do some thing, ' + new Date());
  await sleep(3000);
  console.log('Do other things, ' + new Date());
})();
```
执行此段代码，可以在终端中看到结果：
```
Do some thing, Mon Feb 23 2015 21:52:11 GMT+0800 (CST)
Do other things, Mon Feb 23 2015 21:52:14 GMT+0800 (CST)
```
另外 async 函数可以正常的返回结果和抛出异常。await 函数调用即可拿到结果，在外面包上 try/catch 就可以捕获异常。下面是一个从豆瓣 API 获取数据的例子：
```
jsvar fetchDoubanApi = function() {
  return new Promise((resolve, reject) => {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if (xhr.status >= 200 && xhr.status < 300) {
          var response;
          try {
            response = JSON.parse(xhr.responseText);
          } catch (e) {
            reject(e);
          }
          if (response) {
            resolve(response, xhr.status, xhr);
          }
        } else {
          reject(xhr);
        }
      }
    };
    xhr.open('GET', 'https://api.douban.com/v2/user/aisk', true);
    xhr.setRequestHeader("Content-Type", "text/plain");
    xhr.send(data);
  });
};

(async function() {
  try {
    let result = await fetchDoubanApi();
    console.log(result);
  } catch (e) {
    console.log(e);
  }
})();
```

