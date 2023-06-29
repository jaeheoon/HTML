// 전역함수 선언
function doTask() {
  // console.log('어떤 일을 합니다');
  console.dir(this);
  console.log(`이름 : ${this.name}, 나이 : ${this.age}`);
}

// 객체 생성
let person = {
  name: '홍재헌',
  age: 27,
  doLearn: function () {
    console.log('수업을 배웁니다');
  }
}

// 함수 직접 호출
doTask(); // 독립적으로 돌아가기때문에 this를 사용해도 undefined가 뜬다

// 함수 간접 호출(동적 호출 - 자바의 리플렉션)
// 사용 이유 : 함수 내부에서의 this와 객체에서의 this가 다르기 때문에 사용함
// 주로 전역 함수를 객체의 메소드로 포함하여 호출할때 사용함
// doTask.call();      // Function이 가지고 있는 call이라는 메소드로 호출함
doTask.call(person);      // 포함시키고싶은 인자를 call 다음에 넣어줌

// 특정 객체에 동적 속성 추가 기능
function addAttribute(key, value) {
  this[key] = value;     //key에 특수문자가 들어올 수 있기 때문에 .으로 호출하지않고 []에 추가  
}

addAttribute('name', '김기정');   //직접 추가하면 window에 추가된다
addAttribute('age', 30);          //따라서 간접 호출로 추가해야지 원하는 객체에 추가된다
console.dir(window);

// call() 함수, 대부분 이걸 사용함
let user = {};
addAttribute.call(user, 'name', '홍재헌');    //간접 추가 방식
addAttribute.call(user, 'age', 27);           //Object에 추가된 모습
console.dir(user);

// apply() 함수는 call()함수와 동일한 기능이나 전달 인자를 배열로 전달
addAttribute.apply(user, ['name', '홍재헌']);    //간접 추가 방식
addAttribute.apply(user, ['age', 27]);           //Object에 추가된 모습
console.dir(user);

// bind() 함수는 addAttribute() 함수를 user에 binding 함수를 반환
let addProperty = addAttribute.bind(user);
addProperty('name', '홍재헌');    //간접 추가 방식
addProperty('age', 27);           //Object에 추가된 모습
console.dir(user);

let array = [6, 2, 9, 1];
for (const key in array) {
  if (Object.hasOwnProperty.call(array, key)) {
    const value = array[key];
    console.log(value);
  }
}






