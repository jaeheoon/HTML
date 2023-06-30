const canvas = document.querySelector('#myCanvas');

// 2d모드의 그리기 객체를 취득
const ctx = canvas.getContext("2d");

// 색 설정
ctx.fillStyle = 'green';

// 사각형 그리기(x, y, width, height)
ctx.fillRect(10, 10, 100, 50);
// 사각형 지우기
ctx.clearRect(10, 10, 50, 20);
// 윤곽선 사각형 그리기
ctx.strokeRect(120, 50, 100, 50);

// 직사각형 이외의 도형를 그리기 위해 Path(점들의 집합) 활용
// 삼각형 그리기
ctx.beginPath();
ctx.moveTo(75, 50);
ctx.lineTo(100, 75);
ctx.lineTo(100, 25);
ctx.fillStyle = 'red';
ctx.fill();

// 원 그리기
ctx.beginPath();
// 원의 중심 x좌표, y좌표, 반지름, 원호를 그리기 시작할 각도, 원호 그리기를 마칠 각도
ctx.arc(100, 100, 30, 0, 2 * Math.PI);
ctx.closePath();
ctx.stroke();
ctx.fillStyle = 'blue';
ctx.fill();

// 텍스트 그리기
ctx.font = "20px Arial";
ctx.fillText("김기정 최고", 130, 90);
ctx.strokeText("JavaScript Canvas", 130, 120);

// 이미지 그리기
let img = new Image();
img.src = './flower.jpg';
img.addEventListener('load', () => {
    // ctx.drawImage(img, 200, 20);
    ctx.drawImage(img, 200, 20, 50, 50);
});