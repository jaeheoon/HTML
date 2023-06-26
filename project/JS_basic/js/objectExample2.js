//생성자 함수를 이용한 객체틀 - 이것을 도구 객체라고 한다
function Dog(name, age, kind) {
  // 처음 생성할때 묵시적으로 this 함수가 생성됨
  // this = {};
  this.name = name,
    this.age = age,
    this.kind = kind
  // 기능(메소드) 추가
  this.cry = function () {
    console.log(`${this.name} 강아지가 웁니다`);
  }
  // 끝날때 묵시적으로 this 함수가 리턴됨
  // return this;
}

// 자바스크립트에서는 new가 java랑 다른데 java에서는 메모리에 생성되는 것이고
// 자바스크립트에서 new를 제거하고 생성하면 this = {}, return this가 생성이 되지 않고 그냥 생성된다
// new를 사용하면 this = {}, return this가 생성됨
let dog = new Dog('루니', 8, '비숑');
console.log(dog);
let dog2 = new Dog('꼬미', 8, '고양이');
console.log(dog2);

dog.cry();
dog2.cry();

// 자바스크립트 표준 객체(자바에선 표준API를 말함)를 사용하는 예제 - 생성자 함수
let string = new String('문자열');
const count = string.length;
console.log(count);

// 자바스크립트 String 객체에서도 자바처럼 묵시적 생성이 가능하다
let ssn = "680313-1234567";
let ch = ssn.charAt(7);
switch (ch) {
  case '1': console.log('남자입니다');break;
  case '2': console.log('여자입니다');break;
}

let number = new Number(10);
let bool = new Boolean(true);
let date = new Date();

console.log(number);
console.log(bool);
console.log(date.toLocaleString());

// 자바스크립트의 배열은 자바의 List, Set, Queue, Stack 기능이 들어있다
let array = new Array();
console.log(array);

