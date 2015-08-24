/*
* AbsurdJS 作者写的一篇教程，一步步教你怎样用 Javascript 实现一个纯客户端的模板引擎。
* 整个引擎实现只有不到 20 行代码。
* 但是这个代码有点小缺陷，就是不支持预编译，这里加了2行代码使它能够支持预编译；
* */
var utils=utils||{};
utils.tplEngine = function(html, options) {
    var re = /<%([^%>]+)?%>/g, reExp = /(^( )?(if|for|else|switch|case|break|{|}))(.*)?/g, code = 'var r=[];\n', cursor = 0;
    var add = function(line, js) {
        js? (code += line.match(reExp) ? line + '\n' : 'r.push(' + line + ');\n') :
            (code += line != '' ? 'r.push("' + line.replace(/"/g, '\\"') + '");\n' : '');
        return add;
    }
    while(match = re.exec(html)) {
        add(html.slice(cursor, match.index))(match[1], true);
        cursor = match.index + match[0].length;
    }
    add(html.substr(cursor, html.length - cursor));
    code += 'return r.join("");';
    var newFun=new Function(code.replace(/[\r\t\n]/g, ''));
    return options?newFun.apply(options):function(options){return newFun.apply(options)};
};
