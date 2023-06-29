// DOM으로 속성 제어하기
let aElement = document.querySelector('a');
let value = aElement.getAttribute('href');
console.log(value);
aElement.setAttribute('href', 'https://www.google.com')

// 노드 생성 및 연결
// let liE = document.createElement('li');
// let text = document.createTextNode('아직 생성만 되고 연결 안됨');
// liE.appendChild(text);                            //li에 텍스트로 연결됨
// document.querySelector('ol').appendChild(liE);    // ol에 연결됨

// 노드 생성할때 한번에 쉽게 연결하는 방법
document.querySelector('ol').textContent = '첫번째 방법, 텍스트만 넣을때';
document.querySelector('ol').innerText = '<b>두번째 방법, 태그도 넣는데 이스케이프문자로 넣을때</b>';
document.querySelector('ol').innerHTML = '<b>세번째 방법, 태그도 넣을때</b>';
// 읽어올때
console.log(document.querySelector('ol').innerText);

// 응용 예제
// 버튼 눌렀을때 빨간 창 나오게끔 적용
function show() {
   let div = `<div>댓글 내용 ${aElement}테스트</div>`;
   let article = document.querySelector('article');
   article.innerHTML = div;
}















