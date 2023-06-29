console.dir(document.firstChild);             //<!DOCTYPE html> DOCTYPE에 접근
console.dir(document.firstElementChild);      //<html lang="en"> html에 접근
console.dir(document.firstElementChild.constructor);

// #1 돔 트리 계층 구조로 검색 - 잘 안쓰긴 함 

// Node의 공통 속성 3가지
console.log(document.firstElementChild.nodeName);
console.log(document.firstElementChild.nodeType === Node.ELEMENT_NODE);
console.log(document.firstElementChild.nodeValue);

// body 요소 접근
// 빈 공백도 자식으로 생각하기때문에 Element로 접근해야한다
console.log(document.firstElementChild.lastElementChild.nodeName);

// #2 get 메소드로 특정 요소 접근
let pArray = document.getElementsByTagName('p');
// 리턴타입은 배열이 아니고 유사배열이다 - 유사배열은 for in, for of만 된다
// 유사배열은 각종 메소드(push, pop 등등..)을 못쓰는 배열이다
console.log(pArray.constructor);
for (const i of pArray) {
  console.log(i.nodeName);
}

let pElement= document.getElementById('myP');
console.dir(pElement);

let htmlCollection = document.getElementsByClassName('container');
console.dir(htmlCollection);

// #3 CSS 선택자로 특정 요소 접근 - 요샌 거의 이거 씀
// console.dir(document.querySelector('p'));
// console.dir(document.querySelectorAll('p'));
let nodeList = document.querySelectorAll('p');
nodeList.forEach(element => {
  console.log(element.nodeName);
});
console.clear();
// 아이디 선택자로 선택하기
let pEl = document.querySelector('#myP2');
console.log(pEl.nodeName);
let textNode = pEl.firstChild;
console.log(textNode.nodeName);
console.log(textNode.nodeValue);

// 클래스 선택자로 선택하기
console.log(document.querySelector('.container').firstChild.nodeValue);

// 가상 클래스 선택자로 선택하기
console.log(document.querySelector('li:first-child').firstChild.nodeValue);
console.log(document.querySelector('li:last-child').firstChild.nodeValue);
console.log(document.querySelector('li:nth-child(3)').firstChild.nodeValue);
let List = document.querySelectorAll('li:nth-child(2n+1)');
List.forEach(element => {
  console.log(element.firstChild.nodeValue);
});










