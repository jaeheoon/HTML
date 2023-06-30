// 이벤트 처리
import { studentRepository } from "./app.js";
import { StudentClass } from "./studenClass.js";
import { Validator } from "./validator.js";
class EventHandler {
  constructor() { }

  // 이벤트 소스에 이벤트핸들러 등록
  eventRegist() {
    // 등록 버튼 눌렀을때 학생 추가
    document.querySelector('#addBtn').addEventListener('click', event => {
      this.addStudent(event);
    });

    // 삭제 버튼 눌렀을때 학생 삭제
    document.querySelector('#deleteBtn').addEventListener('click', event => {
      this.deleteStudent(event);
      this.findAllStudent(event);
    });

    // 검색 버튼 눌렀을때 해당 학생 검색
    document.searchRow.searchBtn.addEventListener('click', event => {
      this.findName(event);
    });
    // 엔터쳤을때 검색
    document.searchRow.searchSome.addEventListener('keypress', event => {
      if (event.keyCode == 13) {
        this.findName(event);
      }
    });
    
    // 학번으로 선택됐을때 정렬
    document.querySelector('#sortSelect').addEventListener('click', event => {
      let sortMenu = document.querySelector('#sortSelect');
      if (sortMenu.value === '기본') {
        console.log('기본');
        this.sortBySsn();
        
      } else if (sortMenu.value === 'ssn') {
        console.log('성적');
      } else {
        console.log('이름');
      }
    })
    
    // 전체 학생 목록 출력
    window.addEventListener('load', event => {
      this.findAllStudent(event);
    });
  }

  // 기본 정렬 메소드
  sortBySsn() {
     // 총점으로 순위 구하기
     const rankings = this.rankSum(studentRepository);
     
     // 결과 출력
     rankings.forEach(({ rank }) => {
       console.log(`${rank}`);
      });
    }

    // 총점으로 순위 구하는 메소드
    rankSum(studentRepo) {
      const sortedStudents = studentRepo.findAllBySort((a, b) => b.getSum() - a.getSum());
      const rankings = [];
  
      sortedStudents.forEach((index) => {
        const rank = index + 1;
        rankings.push({rank});
      });
      return rankings;
    }
    
    //  학생 등록 메소드
    addStudent(event) {
      const ssn = Number(document.inputForm.ssn.value);
      const name = document.inputForm.studentName.value;
      const korean = Number(document.inputForm.korScore.value);
      const english = Number(document.inputForm.engScore.value);
      const math = Number(document.inputForm.matScore.value);
      
      
      if (!Validator.hasText(ssn)) {
        alert('학번을 입력하여주세요');
      } else {
        const allList = studentRepository.getStudents();
        if (studentRepository.findBySsn(ssn)) {
          alert('이미 등록된 학번입니다');
        } else {
        const student = new StudentClass(ssn, name, korean, english, math);
        studentRepository.addStudent(student);
        alert('등록이 완료되었습니다');

        this.addRow(ssn, name, korean, english, math);

        // 입력 값 초기화
        document.inputForm.reset();
      }
    }
  }

  //  학생 삭제 메소드
  deleteStudent(event) {
    const ssn = Number(document.inputForm.ssn.value);
    if (studentRepository.removeBySsn(ssn)) {
      alert('삭제가 완료되었습니다');
      document.inputForm.reset();
    } else if (!Validator.hasText(ssn)) {
      alert('학번을 입력하여주세요');
      document.inputForm.reset();
    } else {
      alert('다시 한번 시도해주시기 바랍니다');
      document.inputForm.reset();
    }
  }


  // 표에 등록해주는 메소드
  addRow(ssn, name, korean, english, math) {
    const newRow = document.createElement('tr');
    const sum = korean + english + math;
    const avg = (sum / 3).toFixed(1);
    const rank = 0;

    newRow.innerHTML = `
  <td>${ssn}</td>
  <td>${name}</td>
  <td>${korean}</td>
  <td>${english}</td>
  <td>${math}</td>
  <td>${sum}</td>
  <td>${avg}</td>
  <td>${rank}</td>`;

    document.querySelector('tbody').appendChild(newRow);
  }

  // 학생 검색 메소드
  findName(event) {
    let list = studentRepository.getStudents();
    let find = document.searchRow.searchSome.value;
    let ok = studentRepository.findByName(find);
    if (find === '') {
      this.resetTable();
      this.findAllStudent();
    } else {
      this.resetTable();
      for (let i = 0; i < list.length; i++) {
        const element = list[i];
        if (element.name === find) {
          const ssn = element.ssn;
          const name = element.name;
          const korean = element.korean;
          const english = element.english;
          const math = element.math;

          this.addRow(ssn, name, korean, english, math);
        }
      }
    }
    document.searchRow.searchSome.value = '';
  }

  resetTable() {
    const tableBody = document.querySelector('tbody');
    // 기존 테이블 내용 초기화
    tableBody.innerHTML = '';
  }

  // 학생 목록 메소드
  findAllStudent(event) {
    this.resetTable();
    let list = studentRepository.getStudents();
    for (let i = 0; i < list.length; i++) {
      const element = list[i];
      const ssn = element.ssn;
      const name = element.name;
      const korean = element.korean;
      const english = element.english;
      const math = element.math;


      this.addRow(ssn, name, korean, english, math);

    }
    const rank = this.rankSum(studentRepository);
  }
}

export { EventHandler };










