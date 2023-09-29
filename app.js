const express = require('express');
const session = require('express-session');
const app = express();
const port = process.env.PORT || 8080;

app.use(express.static('app/public'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', './app/views');
var rotas = require('./app/routes/router');
app.use('/', rotas);
app.listen(port, () => {
    console.log(`Servidor ouvindo na porta: ${port}`);
}); 
