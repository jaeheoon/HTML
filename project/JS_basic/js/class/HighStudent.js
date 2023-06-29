// 상속
import { StudentClass } from "./StudenClass.js";

// export
class HighStudent extends StudentClass {
  constructor (ssn, name, korean, english, math, age) {
    super(ssn, name, korean, english, math);
    this.age = age;
  }
  // setter/getter는 편의상 생략, 원래는 만듦

  // toString 오버라이딩
  toString() {
    return super.toString() + `\t ${this.age}`
  }
}

// let highStudent = new HighStudent(10, '추길동', 70, 67, 96, 17);
// console.log(highStudent.toString());

// let string = new String('문자열');
// console.dir(string)

export {HighStudent};