const http = require('http');

const server = http.createServer((req,res)=>{
    res.end('Welcome To Server 3...');
});     //Server Create

server.listen(2004,()=>{
    console.log('server start at port 2004');
});
