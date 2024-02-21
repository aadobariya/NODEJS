const http = require('http');

const server = http.createServer((req,res)=>{
    res.end('Welcome To Server 2...');
});     //Server Create

server.listen(2003,()=>{
    console.log('server start at port 2003');
});
