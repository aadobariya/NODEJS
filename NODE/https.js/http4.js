const http = require('http');

const server = http.createServer((req,res)=>{
    res.end('Welcome To Server 5...');
});     //Server Create

server.listen(2006,()=>{
    console.log('server start at port 2006');
});
