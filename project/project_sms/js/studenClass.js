// 학생객체 생성을 위한 틀
class StudentClass {

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

export {StudentClass};













