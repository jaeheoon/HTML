// DOM으로 동적 스타일 적용하기

// 하나만 적용할때
// let h1Element = document.querySelector('h1');
// h1Element.style.color = 'white';
// h1Element.style['background-color'] = 'blue';

// 전체 적용할때
// let list = document.querySelectorAll('h1');
// list.forEach(element => {
//   element.style.color = 'white';
//   element.style['background-color'] = 'blue';
// });

  // 일관되게 적용하기 - className으로 적용
  // let list = document.querySelectorAll('h1');
  // list.forEach(element => {
  //   element.className = 'head';
  // });
  // console.dir(list);
  
  // 좀 더 유연하게 적용하기 - 기존에 적용되어있는 클래스를 유지하고 추가하거나 삭제하는 기능
  let list = document.querySelectorAll('h1');
  list.forEach(element => {
      // element.classList.add('head');     //추가하기
      // element.classList.remove('head');  //삭제하기
      setInterval(() => {
        element.classList.toggle('head');   //toggle처럼 추가 / 삭제 반복
      }, 100000);
    });
    console.dir(list);













