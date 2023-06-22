// ES6 이전 변수 선언
// var는 변수 재선언이 가능하다 - 잘 안씀
// let으로 변수를 변경하면 문법오류가 난다
var message;
var message; //변수 재선언 예시, 앞서 사용한 변수명을 재사용 가능하다
message = '웹 프로그래밍 언어의 최강자 JavaScript';
console.log(message);

// 선언 이전에도 사용 가능
console.log(age);
var age = 10;
console.log(age);
age = 15;
age = 20;
console.log(age);

var weight;
console.log(weight);

// 동적 타이핑 - 타입을 지정하지 않아도 들어간다
message = 10;
console.log(message);
message = 15.5;
console.log(message);

// 자바스크립트 출력방법 3가지
console.log(message);                 //디버깅용
//alert('메세지 출력');               //경고창 사용
document.write('문서에 동적 출력');   //안씀

// 상수 처리 - 변경되지 않는 값
const MAX = 100;
console.log(MAX);

