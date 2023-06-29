class Person{

  // 공통(정적) 속성(static)
  static commonAttribute = '공통속성';
  static commonMethod() {
    console.log('공통 메소드입니다');
  }

  constructor(name, age){
    // this = {};

    this.name = name;
    this.age = age;

    // return this;
  }

  // setter/getter
  get name(){
    return this._name;
  }

  set name(name){
    if (name == undefined || name == '') {
      throw new Error("이름을 입력해주세요")
    }
    this._name = name;
  }
  
  get age(){
    return this._age;
  }

  set age(age){
    if (age < 10 || age > 100) {
      throw new Error("10~100세 사이만 입력해주세요")
    } 
    this._age = age < 0 ? 0 : age;
  }

  showInfo(){
    console.log(`이름 : ${this.name}, 나이 : ${this.age}`);
  }
}

let person = new Person('홍재헌', 27);
console.log(person.name);
console.log(person.age);

try {
  // person.name = undefined;
  // person.age = 900;
} catch (e) {
  alert(e.message);
}

person.showInfo();

console.log(Person.commonAttribute);
Person.commonMethod();

