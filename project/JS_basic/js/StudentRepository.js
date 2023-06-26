// 여러 학생 정보 관리를 위한 객체 생성 (자바처럼 생성)
function StudentRepository() {
  // this = {};
  this.students = new Array();

  this.addStudent = function (student) {
    this.students.push(student);
  }

  this.getStudents = function () {
    return this.students;
  }

  // 학번으로 학생 검색
  this.findBySsn = function (ssn) {
    for (let student of this.students) {
      if (student.ssn === ssn) {
        return student;
      }
    }
    return undefined;
  }

  // 이름으로 학생 검색
  this.findByName = function (name) {
    // 구현하기
    let array = new Array();
    for (let student of this.students) {
      if (student.name === name) {
        array.push(student.toString());
      }
    }
    return array;
  }

  // 평균 범위로 검색 - 어려움
  this.findByRange = function (start, end) {
    let array = new Array();
    for (let student of this.students) {
      if (student.getAvg() >= start && student.getAvg() <= end) {
        array.push(student);
      }
    }
    return array;
  }

  // 학번으로 학생 정보 삭제
  this.removeBySsn = function (ssn) {
    for (let i = 0; i < this.students.length; i++) {
      if (this.students[i].ssn === ssn) {
        // delete this.students[i];
        this.students.splice(i, 1);
        return `${this.students[i].toString()} 가 삭제되었습니다`;
        return true;
      }
    }
    return false;
  }

  // return this;
}

// 임시 테스트
// 학생 정보 저장
let studentRepository = new StudentRepository();
studentRepository.addStudent(new Student(10, '홍길동', 70, 67, 97));
studentRepository.addStudent(new Student(11, '김기정', 67, 64, 58));
studentRepository.addStudent(new Student(12, '이기정', 89, 77, 62));
studentRepository.addStudent(new Student(13, '최기정', 93, 96, 57));
studentRepository.addStudent(new Student(14, '최기정', 100, 79, 43));

// 학생 정보 전체 출력
console.log('------------------------------------------전체');
let allList = studentRepository.getStudents();
for (const student of allList) {
  console.log(student.toString());
}


// 학생 이름으로 정보 출력
console.log('------------------------------------------이름');
let searchName = studentRepository.findByName('최기정');
for (const student of searchName) {
  console.log(student.toString());
}

// 학번으로 학생 정보 삭제
console.log('------------------------------------------삭제');
let removeName = studentRepository.removeBySsn(10);
console.log(removeName);

// 학번으로 학생 정보 출력
console.log('------------------------------------------학번');
let searchSsn = studentRepository.findBySsn(14);
console.log(searchSsn.toString());

// 학생 평균 범위로 정보 출력
console.log('------------------------------------------범위');
let avgSearch = studentRepository.findByRange(70, 80);
for (const student of avgSearch) {
  console.log(student.toString());
}