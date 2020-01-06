const express = require('express'),
      app = express(),
      homeRoutes = require('./home/routes'),
      usersRoutes = require('./usuarios/routes'),
      bodyParser = require('body-parser');
      
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/', homeRoutes);
app.use('/users', usersRoutes);

app.listen(9002)