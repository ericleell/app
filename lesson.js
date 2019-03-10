// function printHello(){
//     console.log( "Hello, World!");
// }
// // 两秒后执行以上函数
// setInterval(printHello, 2000);
//
// console.log('Hello world');
// console.log('byvoid%diovyb', 'hhhhh');
// console.log('byvoid%diovyb', 1991);

// console.info("程序开始执行：");

// var counter = 10;
// console.log("计数: %d", counter);

// console.time("获取数据");
//
// 执行一些代码
//
// console.timeEnd('获取数据');

// console.info("程序执行完毕。")

// // 输出到终端
// process.stdout.write("Hello World!" + "\n");
//
// // 通过参数读取
// process.argv.forEach(function(val, index, array) {
//     console.log(index + ': ' + val);
// });
//
// // 获取执行路径
// console.log(process.execPath);
//
// // 平台信息
// console.log(process.platform);
// console.time();
// console.timeEnd();
// console.log(process.pid + '\n' + process.arch);

// console.log(process.uptime());
// var a = process.hrtime();
//
// console.log(process.hrtime(a));
// // 输出当前目录
// console.log('当前目录: ' + process.cwd());
//
// // 输出当前版本
// console.log('当前版本: ' + process.version);
//
// // 输出内存使用情况
// console.log(process.memoryUsage());



// var util = require('util');
// function Base() {
//     this.name = 'base';
//     this.base = 1991;
//     this.sayHello = function() {
//         console.log('Hello ' + this.name);
//     };
// }
// Base.prototype.showName = function() {
//     console.log(this.name);
// };
// function Sub() {
//     this.name = 'sub';
// }
// util.inherits(Sub, Base);
// var objBase = new Base();
// objBase.showName();
// objBase.sayHello();
// console.log(objBase);
// var objSub = new Sub();
// objSub.showName();
// //objSub.sayHello();
// console.log(objSub);

// var util = require('util');
// function Person() {
//     this.name = 'byvoid';
//     this.toString = function() {
//         return this.name;
//     };
// }
// var obj = new Person();
// console.log(util.inspect(obj));
// console.log(util.inspect(obj, true, color=true));

// var fs = require("fs");
//
// // 异步读取
// fs.readFile('input.txt', function (err, data) {
//     if (err) {
//         return console.error(err);
//     }
//     console.log("异步读取: " + data.toString());
// });
//
// // 同步读取
// var data = fs.readFileSync('input.txt');
// console.log("同步读取: " + data.toString());
//
// console.log("程序执行完毕。");

// var http = require('http');
// var url = require('url');
// var util = require('util');
//
// http.createServer(function(req, res){
//     res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
//     res.end(util.inspect(url.parse(req.url, true)));
// }).listen(3000);


var http = require('http');
var querystring = require('querystring');

var postHTML =
    '<html><head><meta charset="utf-8"><title>菜鸟教程 Node.js 实例</title></head>' +
    '<body>' +
    '<form method="post">' +
    '网站名： <input name="name"><br>' +
    '网站 URL： <input name="url"><br>' +
    '<input type="submit">' +
    '</form>' +
    '</body></html>';

http.createServer(function (req, res) {
    var body = "";
    req.on('data', function (chunk) {
        body += chunk;
    });
    req.on('end', function () {
        // 解析参数
        body = querystring.parse(body);
        // 设置响应头部信息及编码
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});

        if(body.name && body.url) { // 输出提交的数据
            res.write("网站名：" + body.name);
            res.write("<br>");
            res.write("网站 URL：" + body.url);
        } else {  // 输出表单
            res.write(postHTML);
        }
        res.end();
    });
}).listen(3000);