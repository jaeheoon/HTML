// 함수 리터럴 표현식
let myFunction = function (name) {
  console.log(`제 이름은 ${name}입니다`);
}

function doTask(fn, name) {
  // 콜백함수
  fn(name);
}

// 함수 호출
myFunction('김기정');

doTask(myFunction, '김기정');
