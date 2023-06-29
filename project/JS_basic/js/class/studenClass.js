// 학생객체 생성을 위한 틀(클래스)
// export
class StudentClass {

  // 정적 속성 및 메소드 추가
  static schoolName = 'EZEN 초등학교';
  static showSchoolName() {
    console.log(StudentClass.schoolName);
  }

  constructor(ssn, name, korean, english, math) {
    this.ssn = ssn;
    this.name = name;
    this.korean = korean;
    this.english = english;
    this.math = math;
  }

  getSum() {
    return this.korean + this.english + this.math;
  }

  // 평균 기능 추가
  getAvg() {
    return this.getSum() / 3;
  }

  // Object의 프로토타입 객체의 toString() 오버라이딩
  toString() {
    return `${this.ssn} \t ${this.name} \t ${this.korean} \t ${this.english} \t ${this.math} \t ${this.getSum()} \t ${this.getAvg()}`
  }
}

// let student = new StudentClass(10, '추길동', 70, 67, 96);
// console.log(student.toString());

// console.dir(StudentClass);

// // 프로토타입 상속 체인 검증
// // Object 프로토타입 객체의 메소드 재사용
// console.log(student.hasOwnProperty('name'));
// console.log(student.hasOwnProperty('valueOf'));

// StudentClass.showSchoolName();

let xxx = 500;

function yyy() {
  console.log('내보내기');
}

export {StudentClass, xxx, yyy};