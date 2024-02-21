const http = require('http');

const server = http.createServer((req,res)=>{
    res.end('Welcome To Server 4...');
});     //Server Create

server.listen(2005,()=>{
    console.log('server start at port 2005');
});
