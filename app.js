// app.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Configurar EJS como motor de plantillas
app.set('view engine', 'ejs');


// Rutas y controladores
const indexRoute = require('./routes/index');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Rutas
app.use('/', indexRoute);



// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
