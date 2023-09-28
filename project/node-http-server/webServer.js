const http = require('http');
const port = '3000';
const fs = require('fs').promises;
const server = http.createServer( async (request, response) => {
    if (request.url==='/') {
        response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        response.write('<h2>Hello, Web client</h2>');
        response.write('<h2>안녕하세요</h2>');
        response.end();
    } else if (request.url==='/hello') {
        const html = await fs.readFile('./hello.html');
        response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        response.end(html);
    }
});

server.listen(port);
server.on('listening', ()=>{
    console.log(`${port}번 포트에서 서버 리스닝 중`);
});
server.on('error', error=>{
    console.error(error);
});