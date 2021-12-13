const express=require('express');
const morgan=require('morgan')
const app=express();
const path=require('path')
const mysql=require('mysql');
const myconnect=require('express-myconnection');

//import
const customers=require('./routes/customer');
const { urlencoded } = require('express');

//Ajustes
app.set('port',process.nextTick.PORT||4000);
app.set('view engine','ejs');
app.set('views', path.join(__dirname,'views'));


//Midlewares
app.use(morgan('dev'));
app.use(myconnect(mysql,{
    host:'localhost',
    user:'root',
    password:'fines',
    port:3306,
    database:'colegio'
},'single'));

app.use(express.urlencoded({extended:false}));

//Rutas
app.use('/',customers);

//Archivos Estaticos
app.use(express.static(path.join(__dirname,'public')));

//start server
app.listen(app.get('port'),()=>{
    console.log('Server on port 4000');
});