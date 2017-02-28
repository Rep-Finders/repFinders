'use strict';

//Load

//Load Express
const express = require('express');

//Make Express fucntionality work
const app = express();

//Designated Port for express
const PORT = process.env.PORT || 4000;

//Express
app.get('/', (request, response) => response.sendFile('index.html', {root: './public'}));
app.use(express.static('./public'));
app.listen(PORT, () => console.log(`Sever has started on port ${PORT}!`));
