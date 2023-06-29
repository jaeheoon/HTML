console.log(location.href);
// 사용자가 동적으로 움직일 수도 있기 때문에 url을 변수로 받는다
// let url = 'https://www.naver.com';
// location.href = url;

function go() {
  let url = 'https://www.naver.com';
  // 밑 세개가 같다
  // location.href = url;
  // location.assign(url);
  location.replace(url);
  // location.reload();    //새로고침
}










