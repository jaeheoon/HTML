let x = 10/3;
console.log(Number.MAX_VALUE);

// x = new Number(x);
console.log(x.toString());
console.log(x.toFixed(2));

// Number를 new로 생성 안하고 바로 넣으면 parsInt()랑 같은 역할을 한다
// 대신 Number는 뒤에 한글이나 영어가 붙어있으면 NaN 오류가 나온다
let y = 34343;
console.log(Number(y));



