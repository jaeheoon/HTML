// 이벤트처리를 함수단위가 아닌 객체 단위로 변경하기
class EventHandler {
  constructor() {
    // this = {}
    // return this;
  }

  // 이벤트 소스에 이벤트핸들러 등록
  eventRegist() {
    document.querySelector('button').addEventListener('click', event => {
      this.addStudent(event);

      });
    }
  //  학생 등록 메소드
  addStudent(event){
      console.log('학생 등록 처리 완료');
    }

  // 학생 전체 리스트 메소드
  allStudent(){

    }

}

// 밑에는 app.js 역할을 하는 곳에서 생성
let eventHandler = new EventHandler();
eventHandler.eventRegist();



















