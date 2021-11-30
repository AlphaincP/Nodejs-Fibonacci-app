const express = require('express');
const createError = require('http-errors');
const path = require('path');
const hbs = require('hbs');
const math = require('./fiboCalculate');


const app = express();

//set app variables
app.set('view engine','hbs');
app.set('views',path.join(__dirname,'views'));


//use variables
app.use(express.json());
app.use(express.urlencoded({extended : false}))
app.use(express.static(path.join(__dirname,'public')));
hbs.registerPartials(path.join(__dirname,'partials'));


//routes
app.get('/',(req,res,next) =>{
    if(req.query.fibonum){
      res.render('index',{
        title:'Calculate Fibonacci Numbers',
        fibonum: req.query.fibonum,
        fiboval: math.fibonacci(req.query.fibonum)
      })
    }else{
      res.render('index',{
        title:'Calculate Fibonacci Numbers',
        fiboval: undefined
      })
    }
})


//404 page
app.use((req,res,next) =>{
  next(createError(404));
})

//error handler
app.use((req,res,next) =>{
  res.status(err.status || 500);
  res.render('error',{
    message: err.message,
    error:{}
  })
})




//port
const PORT = 3000;
app.listen(PORT);