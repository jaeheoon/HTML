//vars.js에서 가져온 변수를 맵처럼 사용할 수 있다
const object = require('./vars');
console.log(object.odd);

//구조분해 할당
// const {odd, even} = require('./vars');
// const result = checkOddOrEven(10);
// console.log(result);

const {odd, even, checkOddOrEven} = require('./vars');
const result = checkOddOrEven(10);
console.log(result);

//노드에서의 this는 module.exports를 가리킨다 하지만 함수 안에서의 this는 global(전역) 객체를 가리킨다
//그 외에는 브라우저의 자바스크립트(window)와 동일하다
console.log(this);
console.log(this === module.exports);
console.time('수행시간');
// 함수 안에서의 this
function doTask() {
    console.log(this);
}

doTask();

console.log('헬로');
console.timeEnd('수행시간');