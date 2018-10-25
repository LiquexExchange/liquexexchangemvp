const express = require('express');

const app = express();

app.set('view engine', 'ejs');

//Index Page
app.get('/', function(req, res){
    res.render('pages/Index');
});


//Trade Page

app.get('/', function(req, res){
    res.render('pages/trade' )
});

app.listen(5000);

console.log('5000');


