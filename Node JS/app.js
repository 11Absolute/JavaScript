const http = require('node:http');
const {parse} = require('querystring');
const host = "127.0.0.1";
const port = 3000

let commentsObj = [];
let comments = [];

const users = {user_agent: 0};


const server = http.createServer((req, res)=>{
    switch(req.method){
        case 'POST':
            postMethod(req, res)
            break;
        case 'GET':
            getMethod(req, res)
            break;
    }
}) 

server.listen(port, host, () => {
    console.log(`Server is started http://${host}:${port}`)
})

function getMethod(req, res){
    switch(req.url){
        case '/':
            mainGet(req, res)
            break;
        case '/stats':
            statsGet(req, res)
            break;
        default:
            error(res)
            break;
    }
}

function postMethod(req, res){
    switch(req.url){
        case '/comments':
            commentsPost(req, res)
            break;
        default:
            error(req, res)
            break;
    }
}

function mainGet(res){
    res.status = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello');
}

function statsGet(req, res){
    res.statuse = 200;
    users.user_agent++;
    res.setHeader('Content-Type', 'text/html');
    res.end(`<table>
        <tr><th>User-agent:</th><th>Request:</th></tr>
        <tr><td>${req.headers['user-agent']}</td><td>${users.user_agent}</td></tr>
        </table>`);
}

function commentsPost(req, res) {
    let body = "";
        req.on("data", (chunk) =>{
            body += chunk.toString();
        })
        req.on("end", ()=>{
            res.end(body);
                    })
}

function error(res){
    res.status = 404;
    res.setHeader('Content-Type', 'text/plain');   
    res.end('400 Bad Request');
}


