
// 디폴트 이벤트 해제
let anchors = document.querySelectorAll('a');
anchors.forEach(element => {
  element.addEventListener('click', event => {
    event.preventDefault();
  });
});

