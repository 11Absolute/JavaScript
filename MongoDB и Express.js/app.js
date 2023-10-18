const express = require('express');
const morgan = require("morgan");
const dbAPI = require("./controllers/controller");
const v1_router = require("./router");

const HOST = '127.0.0.1';
const PORT = 3000;

const app = express();
app.use(express.static('public'));

app.use(morgan('dev'));
app.use('/db', dbAPI);
app.use('/v1', v1_router);

app.listen(PORT, HOST, () => {
    console.log(`Сервер запущен http://${HOST}:${PORT}`);
});

app.use((req, res, next) => {
    res.status(400).send('Такой страницы не существует!');
});