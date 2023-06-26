console.clear();
console.dir(Student);   //최상위 객체는 Function 프로토타입 객체
console.dir(student1);  //최상위 객체는 Object 프로토타입 객체
let string = new String('김기정입니다');
console.dir(String);
console.dir(string);

let array = [5, 3, 6];
console.dir(array);

// 객체 리터럴 표현식을 이용한 객체 즉시 생성
let person = {
  name: '홍재헌',
  age: 27,
  doLearn: function () {
    console.log('강의를 배웁니다');
  }
};

console.log(person.constructor === Object);
console.dir(person);
console.log(person.hasOwnProperty('age'));