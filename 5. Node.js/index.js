const http = require('http')

const hostname = '127.0.0.1'
const port = 3000

const comments = ['1', '2', '3']
const requests = {}

const server = http.createServer((req, res) => {

    if (requests[req.headers['user-agent']] == undefined) requests[req.headers['user-agent']] = 1
    else requests[req.headers['user-agent']] += 1
    
    if (req.url === '/') {
        if (req.method === 'GET') {
            res.end('Hello World!')
        }
        else if (req.method === 'POST') {
            res.statusCode = 400;
            res.end('400 Bad Request!')
        }
    } else if (req.url === '/comments') {
        if (req.method === 'POST') {
            let body = ''
            req.on('data', (chunk) => {
                body += chunk
            })
            req.on('end', () => {
                if (body) comments.push(body)
                res.setHeader('Content-Type', 'application/json')
                res.end(JSON.stringify(comments))
            })
        }
        else {
            req.statusCode = 400;
            res.end('400 Bad Request!')
        }    
    } else if (req.url === '/stats') {
        if (req.method === 'GET') {
            res.setHeader('Content-Type', 'text/html')
            let text = '<table>'
            text += '<tr><th style="border: 1px solid black">User Agent</th><th style="border: 1px solid black">Requests</th></tr>'
            for (let key in requests) {
                text += `<tr><td style="border: 1px solid black">${key}</td><td style="border: 1px solid black">${requests[key]}</td></tr>`
            }
            text += '</table>'
            res.end(text)   
        }
        else if (req.method === 'POST') {
            res.statusCode = 400;
            res.end('400 Bad Request!')
        }
    } else {
        res.statusCode = 400;
        res.end('400 Bad Request!')
    }
})

server.on("connection", () => {
    console.log("New connection")
})

server.listen(port, hostname, () => {
console.log(`Server running at http://${hostname}:${port}`)
})