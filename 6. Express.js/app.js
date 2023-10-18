const express = require('express');
const {router} = require("./router");
const HOST = '127.0.0.1';
const PORT = 3000;

const app = express();
app.use(express.static('public'));

app.use('/v1', router);

app.listen(PORT, HOST, () => {
	console.log(`Сервер запущен http://${HOST}:${PORT}`);
});

app.use((req, res) => {
	res.status(404).send('Данная страница не найдена!');
});

app.use((err, req, res) => {
	res.status(500).send('Ошибка сервера')
});