const express = require('express');
const app = express();

const port = process.env.PORT || 9000;

app.get('/', (req,res)=> {
    res.send('Running My Node CRUD Server');
});

app.listen(port, ()=> {
    console.log('Crud server is running');
} )