// 여러 학생 정보 관리를 위한 객체 생성 (간단하게 생성)
function StudentRepository() {
  // this = {};
  this.students = new Array();
  // return this;
}

  StudentRepository.prototype.addStudent = function (student) {
    this.students.push(student);
  }

  StudentRepository.prototype.getStudents = function () {
    return this.students;
  }

  // 학번으로 학생 검색
  StudentRepository.prototype.findBySsn = function (ssn) {
    return this.students.find(student => student.ssn === ssn ? true : false);
  }

  // 이름으로 학생 검색
  StudentRepository.prototype.findByName = function (name) {
    // 구현하기
    return this.students.filter(student => student.name === name ? true : false);
  }

  // 평균 범위로 검색 - 어려움
  StudentRepository.prototype.findByRange = function (start, end) {
    let array = new Array();
    this.students.forEach(student => {
      if (student.getAvg() >= start && student.getAvg() <= end) {
        array.push(student);
      }
    });
    return array;
  }

  // 학번으로 학생 정보 삭제
  StudentRepository.prototype.removeBySsn = function (ssn) {
    let deleted = false;
    this.students.forEach((student, i) => {
      if(student.ssn === ssn) {
         this.students.splice(i, 1);
         deleted = true;
        }
    });
    return deleted;
  }

  // 정렬하여 전체 검색
  StudentRepository.prototype.findAllBySort = function (fn) {
    return this.students.sort(fn);
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
let removeName = studentRepository.removeBySsn(11);
console.log(removeName);

console.log('------------------------------------------전체');
console.log(studentRepository.getStudents());


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

// 학점 평균 내림차순으로 정보 출력
console.log('------------------------------------------평균 내림차순');
let avgSortList = studentRepository.findAllBySort((student1, student2) => student2.getAvg() - student1.getAvg());
avgSortList.forEach(student => console.log(student.toString()));


