// 여러 학생 정보 관리를 위한 객체 생성
class StudentRepository {
  constructor() {
    this.students = new Array();
  }

  addStudent(student) {
    this.students.push(student);
  }

  getStudents() {
    return this.students;
  }

  // 학번으로 학생 검색
  findBySsn(ssn) {
    return this.students.find(student => student.ssn === ssn ? true : false);
  }

  // 이름으로 학생 검색
  findByName(name) {
    // 구현하기
    return this.students.filter(student => student.name === name ? true : false);
  }

  // 평균 범위로 검색 - 어려움
  findByRange(start, end) {
    let array = new Array();
    this.students.forEach(student => {
      if (student.getAvg() >= start && student.getAvg() <= end) {
        array.push(student);
      }
    });
    return array;
  }

  // 학번으로 학생 정보 삭제
  removeBySsn(ssn) {
    let deleted = false;
    this.students.forEach((student, i) => {
      if (student.ssn === ssn) {
        this.students.splice(i, 1);
        deleted = true;
      }
    });
    return deleted;
  }

  // 정렬하여 전체 검색
  findAllBySort(fn) {
    return this.students.sort(fn);
  }
}

export { StudentRepository };

