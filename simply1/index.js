import express from 'express';
var morgan = require('morgan');
const cors = require('cors');
const apiRouter = require('./routes/');
const path = require('path');

const app = express();
app.use(morgan('dev'));
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extend:true}));
app.use(express.static(path.join(__dirname, 'public')))

//Conexión BD
const mongoose = require('mongoose');

//const options = {useNewUrlParser: true, useUnifiedTopolgy: true};

mongoose.connect(url).then(
    () => {console.log('Conexión exitosa a la base de datos!!')},
    err=>{err}
);

app.use('/api', apiRouter);
const history = require('connect-history-api-fallback');
app.use(history());


//Si detecta un puerto diferente al 3000
app.set('PORT', process.env.PORT || 3000);
app.listen(app.get('PORT'),function(){
    console.log('Escuchando el puerto '+app.get('PORT'));
});
