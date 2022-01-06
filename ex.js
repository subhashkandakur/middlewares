
const express = require('express');

const bodyParser = require('body-parser');
const  app=  express();
app.use(bodyParser.urlencoded({extended:false}));

app.use('/add-product',(req,res, next)=>{
    res.send('<form action="/" method = "POST"><input type="text" name="title"><input type="text" name="size"><button type="submit">Add Product</button></input></input></form>');
});



app.use('/',(req,res,next)=>{
    console.log(req.body);
    res.send('<h1> Hello from Express</h1>');
})

app.listen(3500);