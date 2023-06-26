// 콜백 함수는 왜 써야하는지
// 데이터 처리를 고정하는 것이 아닌 함수를 호출하는 쪽에 넘기는 방식
// 값까지 전달받아서 처리하는 방식
function calculate(fn, a, b){
  return fn(a, b);
}

let num1 = 100, num2 = 200;
let a = calculate(function (x, y) {
  return x * y;
}, num1, num2);
console.log(a);

let b = calculate(function (x, y) {
  return x + y;
}, num1, num2);
console.log(b);

// 위 함수를 화살표함수(람다식함수)로 변경하기
// 실행문이 한줄일경우 return, {} 생략 가능, 매개변수가 1개일 경우 ()까지 생략 가능
a = calculate((x, y) => x * y, num1, num2);
b = calculate((x, y) => x + y, num1, num2);
console.log(a, b);

// 셀프 호출(즉시 호출)
(function doTask() {
  console.log('즉시 호출 : 호출된 후 바로 메모리에서 사라진다');
})();
// doTask();를 하지 않아도 바로 호출된다
