var express = require('express');
var app = express();


app.get('/',(req,res)=>{ 
    console.log('Inside Res')
    res.send('Hell yeah')
})

const port = process.env.PORT || 5000
app.listen(port)