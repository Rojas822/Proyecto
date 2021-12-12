const express=require('express');
const morgan=require('morgan')
const app=express();
const path=require('path')
const mysql=require('mysql');
const myconnect=require('express-myconnection');

//Ajustes
app.set('port',process.nextTick.PORT||4000);
app.set('view engine','ejs');
app.set('views', path.join(__dirname,'views'));


//Midlewares
app.use(morgan('dev'));
app.use(myconnect(mysql,{
    host:'localhost',
    user:'root',
    password:'8228',
    port:3306,
    database:'colegio'
},'single'))
//Rutas

app.listen(app.get('port'),()=>{
    console.log('Server on port 4000');
});