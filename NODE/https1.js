// http Module
const http = require('http');
const fs = require('fs');
const data = fs.readFileSync('./hello.json','utf-8');

// const server = http.createServer((req,res)=>{
    // res.setHeader('Dummy','Dummy Value');
    // res.setHeader('Content-type','text/html');
    // res.setHeader('Content-type','application/json');
    // res.end('Welcome To Server...');
// }); 


const server = http.createServer();
// server.on('request',(req,res)=>{
//     // res.setHeader('Content-type','text/html');
//     //res.write('<h1 style="color:red">Hello</h1>');
// //    res.write('{"hello:123"}');
//     res.end();
// })

server.listen(1111,()=>{
    console.log('server start at port 1111');
});



