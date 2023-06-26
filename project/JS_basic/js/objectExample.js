// 강아지 객체 즉시 생성(틀없이)
// 객체 리터럴 표현식
let dog = {
  // Map 형태로 key : value로 구성됨
  name : 'Looney',
  age : 8,
  kind : '비숑',
  eat : function () {
    console.log(`${this.name}이(가) 밥을 먹습니다`);
  },
// 자바스크립트의 오버라이딩
  toString : function () {
    return "헐";
  }

};

// 객체의 속성 검색
let name = dog.name;
console.log(name);
console.log(dog['name']);   
//dog[키 이름]으로도 접근이 가능하다, 
// 이렇게 하는 이유 : 변수 이름을 name-xxx라고도 할 수 있는데 이때는 ['name-xxx']안에 넣어놓고 사용한다
// css에서는 '-'를 가끔 사용하기 때문에 동적으로 얻어올때 []를 많이 사용한다
let age = dog.age;
console.log(age);
let kind = dog.kind;
console.log(kind);
dog.eat();

// 객체의 속성 변경
dog.name = '로니';
console.log(dog['name']);

// 객체의 속성 삭제
delete dog.age;
console.log(dog.age);

// 원래 기능 대신 추가된 기능
dog.work = function () {
  console.log(`${this.name}이(가) 걷습니다`);
}

dog.work();

// in 연산자 : 객체 안에 속성 존재 여부 반환
if ('age' in dog) {
  console.log('age' in dog);
} else {
  dog.age = 8;
  console.log('나이가 추가되었습니다');
}

// for in 반복문
// 객체 안에 전체 속성 가져올때
for (const key in dog) {
    console.log(key, dog[key]);
}

// javascript는 map형태에 순서가 없이 저장되기 때문에 for of를 사용하면 오류가 난다, 하지만 배열이 있는 경우엔 사용 가능
let array = [5, 3, 9, 1];
// for (const value of dog) {
for (const value of array) {
  console.log(value);
}

// 콘솔창에 디버깅 내용이 많아서 지우고싶을땐 clear를 사용하면 됨
console.clear();

// 자바스크립트의 toString
console.log(dog);
console.dir(dog);



