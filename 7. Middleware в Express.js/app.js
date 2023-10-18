const express = require("express");
const router = require("./router");
const morgan = require("morgan");
const helmet = require("helmet");

const HOST = "127.0.0.1";
const PORT = 3000;
const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(express.static("public"));

app.use("/v1", router);

app.use(function (err, req, res, next) {
    if (err.statusCode) {
        res.status(err.statusCode).json(err.message);
    } else {
        res.status(400).json("Отправьте запрос корректно!");
    }
});

app.listen(PORT, HOST, () => {
    console.log(`Сервер запущен http://${HOST}:${PORT}`);
});
