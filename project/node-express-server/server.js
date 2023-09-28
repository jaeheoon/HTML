const express = require('express');
const path = require('path');
const server = express();

const port = '3000';


//요청 매핑(라우터) - 브라우처 요청에 대한 핸들러(세부컨트롤러) 생성
server.get("/", (request, response) =>{
    response.send("<h2>get 방식으로 요청, express 프레임워크 사용</h2>");
});

server.get("/hello", (request, response) =>{
    response.sendFile(path.resolve("./public/CSS.html"));
});

server.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});    