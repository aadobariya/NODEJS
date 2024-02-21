// http Module
const http = require('http');

const server = http.createServer((req,res)=>{
    res.end('Welcome To Server 1...');
});     //Server Create

server.listen(1509,()=>{
    console.log('server start at port 1509');
});



