const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
app.set('view engine', 'ejs');

const viewListRoutes = require('./routes/viewList');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));
app.use('/css', express.static(path.join(__dirname, 'node_modules/bulma/css')));
app.use('/css', express.static(path.join(__dirname, 'node_modules/@mdi/font/css')));
app.use('/fonts', express.static(path.join(__dirname, 'node_modules/@mdi/font/fonts')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')));

app.use(viewListRoutes);

app.listen(3000);