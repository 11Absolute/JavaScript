const express = require('express');
const path = require('path');
const helmet = require('helmet');
const routerDB = require("./router/mongodb.js")

const app = express()

app.use(express.json())

const hostname = '127.0.0.1'
const port = 3000

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/\nStart: ${new Date()}`)
})

app.use(express.static(path.resolve(__dirname, 'public')));

app.use('/v2', routerDB)

app.use((req, res, next) => {
  res.status(400).send('Такой страницы не существует!');
});