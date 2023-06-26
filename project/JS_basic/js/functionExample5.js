// 표준 내장 함수
// const yn = confirm('사용자가 물어볼 내용을 true, false로 반환');
// if (yn) {
//   console.log('true로 나옴');
// } else {
//   console.log('false로 나옴');
// }

// 딜레이 건 후 실행
// setTimeout(() => console.log('2초 후 실행됨'), 2000);

// 일정 시간마다 콜백함수를 반복해서 실행함
// let second = 0;
// let timer = setInterval(() => {
//   if (second>59) {
//     second = 0;
//   }
//   console.log(`${second} 초`);
//   second++;
// }, 1000);

// 일정 시간 후 함수를 한번 실행한 것을 중지함 - 10초 후 정지
// setTimeout(() => {
//   clearTimeout(timer);
// }, 10000);

// Java에서 parseInt는 오류가 나지만 Javascript는 int만 추출해서 출력해준다
let money = '100원';
money = parseInt(money);
console.log(money + 100);

// NaN(Not a Number)이 맞는지 아닌지 반환
let result = 1000/'김기정';
if (isNaN(result)) {
  console.log('NaN이 맞습니다');
}