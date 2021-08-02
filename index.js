var express = require('express');


var app = express();


app.get('/',(req,res)=>{ 
    console.log('Inside Res')
    res.send('Hell yeah')
})

app.listen(3000)