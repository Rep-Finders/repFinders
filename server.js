'use strict';

//Load

//Load Express
const express = require('express');

//Make Express fucntionality work
const app = express();

//Designated Port for express
const PORT = process.env.PORT || 4000;

app.use(express.static('./public'));

//Express
app.get('/', (request, response) => response.sendFile('index.html', {root: './public'}));
app.get('/results', (request, response) => response.sendFile('index.html', {root: './public'}));
app.get('/city-county', (request, response) => response.sendFile('index.html', {root: './public'}));
app.get('/state', (request, response) => response.sendFile('index.html', {root: './public'}));
app.get('/federal', (request, response) => response.sendFile('index.html', {root: './public'}));
app.get('/about', (request, response) => response.sendFile('index.html', {root: './public'}));


app.listen(PORT, () => console.log(`Sever has started on port ${PORT}!`));
