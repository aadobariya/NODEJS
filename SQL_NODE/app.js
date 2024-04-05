const express = require('express');
const app = express();
const mysql = require('mysql2');

app.use(express.json());
app.use(express.urlencoded());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin@123',
    database: 'akshay'
});

connection.connect(()  => {
    console.log('MySQL is connected');
});

app.get('/',(req,res) => {
    res.send('Welcome to Express');
});

app.post('/api/user', (req, res) => {
    const { firstName, lastName, email, password, mobileNo } = req.body;
    let user = {
        firstName, lastName, email, password, mobileNo
    };
    connection.query('insert into user set ?', user, (err, data) => {
        if(err)
            res.json(err)
        else
            res.json({ data, message: 'User Added'});
    });
});

app.get('/api/user', (req, res) => {
    connection.query('select * from user',(err, data) => {
        if(err) 
            res.json(err)
        else   
            res.json(data);
    });
});

app.get('/api/get-user', (req, res) => {

    let Id = req.query.id;
    console.log(Id);
    connection.query('select * from user where firstName = ' + `"${Id}"`, (err,data) => {
        if(err)
           res.json(err)
        else
           res.json(data);
    });
});

app.listen (7777, () => {
    console.log('server Start at http:/localhost:7777')
})

