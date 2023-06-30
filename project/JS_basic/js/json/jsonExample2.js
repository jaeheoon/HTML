
// 객체 리터럴 표현식
let user = {
    name : "김기정",
    age  : 30,
    weight : 65.78
};

// 객체를 JSON으로 변환
let userJson = JSON.stringify(user);
console.log(typeof userJson);
console.log(userJson);

// 배열을 이용한 직렬화 대상 필터링
// userJson = JSON.stringify(user, ['name', 'age']);
// console.log(userJson);


// JSON을 객체로 변환
let user2 = JSON.parse(userJson);
console.log(typeof user2);
console.dir(user2);
console.log(user2.name);

// DOM API를 활용한 사용자 정보 출력
document.querySelector('body').innerHTML =
    `이름: ${user2.name}, 나이: ${user2.age}, 몸무게: ${user2.weight}`;

