const express = require('express'),
      path = require('path'),
      morgan = require('morgan'),
      mysql = require('mysql'),
      myConnection = require('express-myconnection');
const app = express();

// importing routes
const customerRoutesE = require('./routes/estudiante');
const customerRoutesD = require('./routes/docente');
const customerRoutes = require('./routes/inicio');


// settings
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql, {
  host: 'localhost',
  user: 'root',
  password: 'fines',
  port: 3306,
  database: 'colegio'
}, 'single'));
app.use(express.urlencoded({extended: false}));

// routes
app.use('/', customerRoutesD);
app.use('/docente', customerRoutesD);
app.use('/estudiante', customerRoutesE);



// static files
app.use(express.static(path.join(__dirname, 'public')));

// starting the server
app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`);
});
