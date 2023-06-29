// 데이터 검증 관련 공통 메소드
class Validator {

  static hasText(str) {
    if ((str != undefined) && str.length !== 0) {
      return true;
    }
    return false;
  }

  static isTelephone(telephone) {
    let regex = /\d{2,3}[- .]\d{3,4}[- .]\d{4}/gm;
    return regex.test(telephone);
  }
}

//  테스트
console.log(Validator.hasText(undefined));
console.log(Validator.hasText(null));
console.log(Validator.hasText(''));
console.log(Validator.hasText('010'));
console.log(Validator.isTelephone('010-1111'));
console.log(Validator.isTelephone('010-1111-2222'));

console.dir(Math.constructor === Object);
