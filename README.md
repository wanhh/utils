# utils
utils for javascript

###   tplEngine.js
  AbsurdJS 作者写的一篇教程，一步步教你怎样用 Javascript 实现一个纯客户端的模板引擎。整个引擎实现只有不到 20 行代码。
  但是这个代码有点小缺陷，就是不支持预编译，这里加了2行代码使它能够支持预编译；
  
    var newFun=new Function(code.replace(/[\r\t\n]/g, ''));
    return options?newFun.apply(options):function(options){return newFun.apply(options)};
