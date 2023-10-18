const express = require('express');
const router = express.Router();
const jsonParser = express.json();

const requests = {}
let com = " ";

router.use((req, res, next) => {
    if (requests[req.headers['user-agent']] == undefined) requests[req.headers['user-agent']] = 1
    else requests[req.headers['user-agent']] += 1
    // console.log(`${req.headers['user-agent']}\tcount: ${requests[req.headers['user-agent']]}\t${req.method}\t${req.url}\n`)
    next()
})

router.get('/', (req, res) => {
	res.send('Рады видеть вас на нашем сервере!');
});

router.get('/stats', (req, res) => {
	res.setHeader('Content-Type', 'text/html')
	let text = '<table>'
	text += '<tr><th style="border: 1px solid black">User Agent</th><th style="border: 1px solid black">Requests</th></tr>'
	for (let key in requests) {
		text += `<tr><td style="border: 1px solid black">${key}</td><td style="border: 1px solid black">${requests[key]}</td></tr>`
	}
	text += '</table>'
	res.end(text)   
});

router.get('/comments', (req, res) => {
	res.send(com);
});

router.post('/comments', jsonParser, (req, res) => {
	console.log(req.body);
	com += JSON.stringify(req.body);
	res.send('Спасибо, за вашу отзывчивость!');
});

module.exports = {router};