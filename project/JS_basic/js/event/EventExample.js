// 이벤트 소스에 이벤트 리스너(핸들러) 등록

// 클릭 이벤트 ----------------------------------------------

// function eventListener(event) {
  //   console.log('눌렀을때 이벤트 발생');
// } - 간단한건 람다식 이용해서 사용
document.querySelector('button').addEventListener('click', (event) => {
  // console.dir(event);
  if(event.ctrlKey){
    event.target.style.backgroundColor = 'blue';
    console.log('눌렀을때 이벤트 발생')
  }
});

document.querySelector('button').addEventListener('mouseenter', event => {
  event.target.style.backgroundColor = 'yellow';
  console.log('마우스 올렸을때');
});

document.querySelector('button').addEventListener('mouseleave', event => {
  event.target.style.backgroundColor = '';
  console.log('마우스 나갔을때');
});


// 키 이벤트 ----------------------------------------------
// 엔터쳤을때 메세지 전송해주기
function sendMessage(message) {
  console.log(`${message} 전송 완료`);
}

let input = document.querySelector('[type = text]');
input.addEventListener('keypress', event => {
  if (event.keyCode == 13) {
    sendMessage(event.target.value);
    event.target.value = '';
  }
})

// 체인지 이벤트 ----------------------------------------------
// name에다가 이름을 지정하면 개발자 편의성으로 바로 접근 가능하다

// console.dir(document.frm.search); - 이벤트 소스
document.frm.search.addEventListener('change', event => {
  // console.dir(event.target.options);
  let options = event.target.options
  let selectValue = options[options.selectedIndex].value;
  console.log(selectValue);
});

document.frm.search.addEventListener('change', event => {
  let options = document.querySelector('option');
  options.forEach( function (element) {
    if(element.selected){
      console.log(element.value);
    }    
  });
})



























