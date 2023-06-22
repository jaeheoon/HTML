// 전역변수 선언
let global = '전역 데이터입니다';

// 사용자 정의 함수 생성
function sum(x, y) {
  return x + y;
}

// 구구단 호출 함수 생성
function printGugudan() {
  document.write('<h2>for문을 이용한 구구단 출력</h2>')
  document.write('<table border = 1;>');
  for (let i = 2; i < 10; i++) {
    document.write('<tr>');
    for (let j = 1; j < 10; j++) {
      document.write(`<td>${i} * ${j} = ${i * j}</td>`);
    }
    document.write('</tr>');
  }
  document.write('</table>');
}

// 
function doTask() {
  let some = 100;
  let i = 0;
  for (i = 0; i < 10; i++) {
    console.log(i);
  }
  console.log(i);
  // return undefied;     - 함수에서 무언가를 명시적으로 반환하지 않으면 return undefined;가 실행된다
}

// 디폴트 파라메터 사용 예제
function sendMessage(message = '헐...') {
  console.log(message + '을(를) 서버에 전달합니다');
}

// Rest Parameter(비정형 인자)
function sum(...nums) {
  let sum = 0;

  for (let i of nums) {
    sum += i;
  }

  return sum;
}

// 함수 호출해서 사용
let result = sum(5, 6);
console.log(result);

printGugudan();

// 함수 호출 시, 정의된 매개변수와 전달인자의 개수가 일치하지않더라도 호출됨
result = sum(5);
console.log(result);

result = doTask();
console.log(result);

sendMessage('김기정 바보');
sendMessage();

result = sum(1);
console.log(result);
result = sum(1, 2);
console.log(result);
result = sum(1, 2, 3);
console.log(result);