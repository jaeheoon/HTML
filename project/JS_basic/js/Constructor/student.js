// 학생객체 생성을 위한 틀(생성자 함수)
function Student(ssn, name, korean, english, math) {
  // this = {};     - 빈 객체가 항상 생성되어있다고 생각하기
  this.ssn = ssn;
  this.name = name;
  this.korean = korean;
  this.english = english;
  this.math = math;

  // Student 생성자에 만들면 메모리 낭비가 너무 심하기 때문에 따로 프로토타입을 만들어주어야함
  // // 총점 기능 추가
  // this.getSum = function () {
  //   return this.korean + this.english + this.math;
  // }

  // // 평균 기능 추가
  // this.getAvg = function () {
  //   return this.getSum() / 3;
  // }

  // this.toString = function () {
  //   return `${this.ssn} \t ${this.name} \t ${this.korean} \t ${this.english} \t ${this.math} \t ${this.getSum()} \t ${this.getAvg()}` 
  // }

  // return this;    - this 객체가 자동으로 생성되어있다고 생각하기
}

// 정적 속성 및 메소드 추가
Student.schoolName = 'EZEN 초등학교';
Student.showSchoolName = function () {
  alert(Student.schoolName);
}

// 생성자 함수(객체)의 메소드를 Student의 프로토타입 객체에 할당
// 총점 기능 추가
Student.prototype.getSum = function () {
  return this.korean + this.english + this.math;
}

// 평균 기능 추가
Student.prototype.getAvg = function () {
  return this.getSum() / 3;
}

// Object의 프로토타입 객체의 toString() 오버라이딩
Student.prototype.toString = function () {
  return `${this.ssn} \t ${this.name} \t ${this.korean} \t ${this.english} \t ${this.math} \t ${this.getSum()} \t ${this.getAvg()}`
}

let student1 = new Student(10, '추길동', 70, 67, 96);
console.log(student1.schoolName);
let student2 = new Student(10, '추길동', 70, 67, 96);
let student3 = new Student(10, '추길동', 70, 67, 96);
// 프로토타입 객체의 toString() 메소드 호출
console.log(student1.toString());
console.log(student2.toString());
console.log(student3.toString());

// 프로토타입 상속 체인 검증
// Object 프로토타입 객체의 메소드 재사용
console.log(student1.hasOwnProperty('name'));
console.log(student1.hasOwnProperty('valueOf'));

// constructor 쓰임새
function doTask(object) {
  // if(object.constructor === Student){
  if (object instanceof Object) {
    console.log('학생일때만 수행하는 메소드');
  }
}

doTask({});

Student.showSchoolName();