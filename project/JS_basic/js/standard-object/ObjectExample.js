// let user = new Object();
let user = {
  name : '홍재헌'
};

console.log(user.toString());
console.log(Object.prototype.isPrototypeOf(user));

// Object static메소드를 이용해 깊은 복사(얇은 복사는 그냥 user = user2;면 주소값이 복사됨)
let user2 = {};
Object.assign(user2, user);
console.dir(user2);

let prototypee = Object.getPrototypeOf(user);
console.dir(prototypee);

