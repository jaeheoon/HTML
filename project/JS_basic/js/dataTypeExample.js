// 문자열 타입(템플릿 스트링)
let name = '김기정';
let message = `템플릿 스트링 ${name}`;
console.log(message);

// typeof 연산자
let age = 10;
console.log(typeof age);
console.log(typeof message);

// 특수 숫자리터럴(키워드)
console.log(10/0);      //Java에서는 Exception 오류 뜸, JavaScript는 Infinity로 나옴
console.log('나는 문자열'/0);

// 논리형
let flag = true;

let flag2 = '인심';    //true로 인식함 - 0은 false고 나머진 다 true로 인식함(음수도 인식)
if (flag2) {
  console.log('실행됨');
}

// 자바스크립트는 자동형변환이 엄청 많이 발생함
console.log(1000 * '10');     //문자 10이 숫자로 형변환돼서 연산이 됨
console.log('1000' * '10');   //문자들이 숫자로 형변환돼서 연산이 됨