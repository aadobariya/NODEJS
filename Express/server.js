const express = require('express');
const server = express();
const path = require('path');

server.get('/',(req, res) => {
    res.end('Welcome to Express...');
});
server.post('/',(req, res) => {
    res.send('post Method');
});
server.put('/',(req, res) => {
    res.json({ message: 'put method call'});
});
server.patch('/',(req, res) => {
    res.sendFile(path.join(__dirname, 'abc.txt'));
});
server.delete('/',(req, res) => {
    res.sendStatus(404);
});


server.listen(3000, () => {
    console.log('Server is running on port 3000');
});