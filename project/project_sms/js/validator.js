// 유효성 검증
class Validator {
  /**
   * 빈 문자열 검증
   * @param {String} 문자열값
   * @returns boolean
   */
  static hasText(value) {
    if (value == undefined || value.length === 0 || value == null) {
      return false;
    }
    return true;
  }
}

export { Validator };