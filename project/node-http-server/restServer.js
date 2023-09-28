
const http = require('http');
const fs = require('fs').promises;
const path = require('path');

// 테스트 객체
const members = {
    result : "OK",
    list : [{name: "월요일"}, {name: "화요일"}, {name: "수요일"}]
};

const port = '3000';
const server = http.createServer(async (request, response) => {
    try {
        if (request.method === 'GET') {
            if (request.url === '/') {
                const data = await fs.readFile(path.join(__dirname, 'index.html'));
                response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
                return response.end(data);
            } else if (request.url === '/about') {
                const data = await fs.readFile(path.join(__dirname, 'about.html'));
                response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
                return response.end(data);
            } else if (request.url === '/member') {
                response.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
                return response.end(JSON.stringify(members));
            }
            try {
                const data = await fs.readFile(path.join(__dirname, request.url));
                return response.end(data);
            } catch (error) {
                response.writeHead(404);
                return response.end('NOT FOUND');
            }
        } else if (request.method === 'POST') {
            if (request.url === '/member') {
                console.log('post 요청');
                let body = '';
                request.on('data', (data) => {
                    body += data;
                });
              
                return request.on('end', () => {
                    console.log('요청메시지 : ', body);
                    const member = JSON.parse(body);
                    members.list.push(member);
                    response.writeHead(201, { 'Content-Type': 'text/plain; charset=utf-8' });
                    response.end('등록 성공');
                });
            }
        }
        response.writeHead(404);
        return response.end('NOT FOUND');
    } catch (error) {
        console.error(error);
        response.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
        response.end(error.message);
    }
});

server.listen(port);
server.on('listening', () => {
    console.log(`${port}포트에서 서버 실행 및 대기중입니다.`);
});
server.on('error', error => {
    console.error(error);
});

