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

    // 전체 학생 목록 출력
    window.addEventListener('load', event => {
      this.findAllStudent(event);
    });

    // 정렬======================================================
    document.tableForm.ssn.addEventListener('click', event => {
      this.sortSsn(event);
      this.activeReset();
      this.sortActive('tdSsn')
      this.setSortCondition('학번');
    });

    document.tableForm.name.addEventListener('click', event => {
      this.sortName(event);
      this.activeReset();
      this.sortActive('tdName')
      this.setSortCondition('이름');
    });

    document.tableForm.kor.addEventListener('click', event => {
      this.sortKor(event);
      this.activeReset();
      this.sortActive('tdKor')
      this.setSortCondition('국어');
    });

    document.tableForm.eng.addEventListener('click', event => {
      this.sortEng(event);
      this.activeReset();
      this.sortActive('tdEng')
      this.setSortCondition('영어');
    });

    document.tableForm.math.addEventListener('click', event => {
      this.sortMath(event);
      this.activeReset();
      this.sortActive('tdMath')
      this.setSortCondition('수학');
    });

    document.tableForm.sum.addEventListener('click', event => {
      this.sortSum(event);
      this.activeReset();
      this.sortActive('tdSum')
      this.setSortCondition('총점');
    });

    document.tableForm.avg.addEventListener('click', event => {
      this.sortAvg(event);
      this.activeReset();
      this.sortActive('tdAvg')
      this.setSortCondition('평균');
    });

    document.tableForm.rank.addEventListener('click', event => {
      this.sortRank(event);
      this.activeReset();
      this.sortActive('tdRank')
      this.setSortCondition('등수');
    });
  }

  // 기본 정렬 메소드
  sortBySsn() {
    let list = studentRepository.findBySort((num1, num2) => num1.ssn - num2.ssn);
    this.tbSetting(list);
  }

  // 학생 목록 메소드
  findAllStudent(event) {
    this.resetTable();
    let list = this.rankSum();
    this.tbSetting(list);
    this.sortSsn(event);
  }

  // 순위 구하는 메소드
  rankSum() {
    let list = studentRepository.findBySort((num1, num2) => num2.getAvg() - num1.getAvg());
    let rankedList = [];
    list.forEach((e, i) => {
      e.rank = i + 1;
      rankedList.push(e);
    });
    return rankedList;
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
        this.tbSetting(allList);
        // 입력 값 초기화
        document.inputForm.reset();
      }
    }
  }

  // ================ sort Method ====================
  // 학번으로 정렬
  sortSsn(event) {
    let list = studentRepository.findBySort((num1, num2) => num1.ssn - num2.ssn);
    this.tbSetting(list);
  }

  // 이름으로 정렬
  sortName(event) {
    let list = studentRepository.findBySort((num1, num2) => num1.ssn - num2.ssn);
    list = studentRepository.findBySort((num1, num2) => num1.name.localeCompare(num2.name));
    this.tbSetting(list);
  }

  // 국어 점수로 정렬
  sortKor(event) {
    let list = studentRepository.findBySort((num1, num2) => num1.ssn - num2.ssn);
    list = studentRepository.findBySort((num1, num2) => num2.korean - num1.korean);
    this.tbSetting(list);
  }

  // 영어 점수로 정렬
  sortEng(event) {
    let list = studentRepository.findBySort((num1, num2) => num1.ssn - num2.ssn);
    list = studentRepository.findBySort((num1, num2) => num2.english - num1.english);
    this.tbSetting(list);
  }

  // 수학 점수로 정렬
  sortMath(event) {
    let list = studentRepository.findBySort((num1, num2) => num1.ssn - num2.ssn);
    list = studentRepository.findBySort((num1, num2) => num2.math - num1.math);
    this.tbSetting(list);
  }

  // 총점으로 정렬
  sortSum(event) {
    let list = studentRepository.findBySort((num1, num2) => num1.ssn - num2.ssn);
    list = studentRepository.findBySort((num1, num2) => num2.getSum() - num1.getSum());
    this.tbSetting(list);
  }

  // 평균 점수로 정렬
  sortAvg(event) {
    let list = studentRepository.findBySort((num1, num2) => num1.ssn - num2.ssn);
    list = studentRepository.findBySort((num1, num2) => num2.getAvg() - num1.getAvg());
    this.tbSetting(list);
  }

  // 등수로 정렬
  sortRank(event) {
    let list = studentRepository.findBySort((num1, num2) => num1.ssn - num2.ssn);
    list = studentRepository.findBySort((num1, num2) => num1.rank - num2.rank);
    this.tbSetting(list);
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

  // ================ table Method ====================
  // 테이블 표시
  tbSetting(list) {
    let tbList = this.addRow(list);
    let tfList = this.tfCreate(list);
    document.querySelector('tbody').innerHTML = tbList;
    document.querySelector('tfoot').innerHTML = tfList;
  }

  // 표에 등록해주는 메소드
  addRow(list) {
    let tbody = '';
    for (const i of list) {
      tbody += '<tr>';
      tbody += '  <td name="tdSsn">' + i.ssn + '</td>';
      tbody += '  <td name="tdName">' + i.name + '</td>';
      tbody += '  <td name="tdKor">' + i.korean + '</td>';
      tbody += '  <td name="tdEng">' + i.english + '</td>';
      tbody += '  <td name="tdMath">' + i.math + '</td>';
      tbody += '  <td name="tdSum">' + i.getSum() + '</td>';
      tbody += '  <td name="tdAvg">' + i.getAvg().toFixed(2) + '</td>';
      tbody += '  <td name="tdRank">' + i.rank + '</td>';
      tbody += '</tr>';
    }
    return tbody;
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
      let tbList = this.tBodyCreate(list);
      document.querySelector('tbody').innerHTML = tbList;
      document.querySelector('tfoot').innerHTML = '';
    }
    document.searchRow.searchSome.value = '';
  }

// table footer create
tfCreate(list) {
  let tfoot = '';
  let avgSum = 0;
  list.forEach(i => avgSum += i.getAvg());
  let allAvg = avgSum / list.length;
  tfoot += '<tr>';
  tfoot += '  <td class="fw-bold" colspan="5">전체 평균</td>';
  tfoot += '  <td colspan="3">' + allAvg.toFixed(2) + '</td>';
  tfoot += '</tr>';
  return tfoot;
}

// 테이블 헤더 강조 초기화
activeReset() {
  let tableHeads = document.getElementsByTagName('th');
  for (const e of tableHeads) {
    e.setAttribute('class', '');
  }
}

// 정렬 시 강조 표시
sortActive(name) {
  let tableNames = document.getElementsByName(name);
  for (const e of tableNames) {
    e.setAttribute('class', 'table-active')
  }
}

// 현재 정렬 조건 표시
setSortCondition(state) {
  let stateSort = document.querySelector('#sortState');
  stateSort.setAttribute('placeholder', state);
}

resetTable() {
  const tableBody = document.querySelector('tbody');
  // 기존 테이블 내용 초기화
  tableBody.innerHTML = '';
}

  
}

export { EventHandler };










