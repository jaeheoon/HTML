// 캔버스 설정
const canvas = document.querySelector('#canvas');
canvas.width = window.innerWidth;
canvas.height = 700;

let context = canvas.getContext("2d");
let start_background_color = "whitesmoke";
context.fillStyle = start_background_color;
context.fillRect(0, 0, canvas.width, canvas.height);

// 기본 펜설정 
let draw_color = "black";
let draw_width = "3";
let is_drawing = false;

// 이전으로 돌리기를 위한 빈배열 생성
let restore_array = [];
let index = -1;

// 컬러변경
function change_color(element) {
    draw_color = element.style.background;
}

canvas.addEventListener("touchstart", start);
canvas.addEventListener("touchmove", draw);
canvas.addEventListener("mousedown", start);
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("touchend", stop);
canvas.addEventListener("mouseup", stop);
canvas.addEventListener("mouseout", stop);

// 이미지 그리는 부분
function start(event) {
    is_drawing = true;
    context.beginPath();
    context.moveTo(event.clientX - canvas.offsetLeft,
        event.clientY - canvas.offsetTop);
    event.preventDefault();

    // 이전 그리기 위치값 저장
    if (event.type != 'mouseout') {
        restore_array.push(context.getImageData(0, 0, canvas.width, canvas.height));
        index += 1;
    }
}

function draw(event) {
    if (is_drawing) {
        context.lineTo(event.clientX - canvas.offsetLeft,
            event.clientY - canvas.offsetTop);
        context.strokeStyle = draw_color;
        context.lineWidth = draw_width;
        context.lineCap = "round";
        context.lineJoin = "round";
        context.stroke();
    }
}

function stop(event) {
    if (is_drawing) {
        context.stroke();
        context.closePath();
        is_drawing = false;
    }
    event.preventDefault();
}

// 지우기
function clear_canvas() {
    context.fillStyle = start_background_color;
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillRect(0, 0, canvas.width, canvas.height);

    restore_array = [];
    index = -1;
}

// 뒤로가기
function undo_last() {
    if (index <= 0) {
        clear_canvas();
    } else {
        index -= 1;
        restore_array.pop();
        context.putImageData(restore_array[index], 0, 0);
    }
}

// 저장하기
function save() {
    canvas.toBlob((blob) => {
        const a = document.createElement('a');
        document.body.append(a);
        a.download = 'export{timestamp}.png';
        a.href = URL.createObjectURL(blob);
        a.click();
        a.remove();
    });
}