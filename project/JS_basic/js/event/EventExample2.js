// 폼 관련 이벤트(focus, blur, input) 처리
document.querySelector('#name').addEventListener('focus', event => {
  event.target.style.backgroundColor = 'yellow';
});

document.querySelector('#name').addEventListener('blur', event => {
  event.target.style.backgroundColor = '';
});

document.querySelector('#name').addEventListener('input', event => {
  console.log(event.target.value);
});

