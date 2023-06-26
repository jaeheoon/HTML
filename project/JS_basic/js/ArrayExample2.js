// Array 객체의 주요 메소드
let array = [2, 7, 1, 3, 4, 8, 6, 9, 5, 10];

// slice() : 부분 배열을 반환(배열에서 잘라낸 원소들을 담은 배열 반환)
let list = array.slice(2, 5);
console.dir(list);

// splice() : 배열의 원소를 제거, 추가 시 범용으로 사용 가능
let deleteList = array.splice(7, 1);
console.dir(deleteList);

// let addList = array.splice(2, 0, '김기정바보', '김기정최고');
console.dir(array);

// find() : 메서드는 주어진 판별 함수를 만족하는 첫 번째 요소의 값을 반환
// 판별함수 생성(콜백함수)
/*  기본 로직 설명
function findCondition(num) {
  if(num === 7){
    return true;
  }
  return false;
}
*/
/*
let findNum = array.find(function(num) {
  return num === 7 ? true : false;
});
*/
let findNum = array.find(num => num === 7 ? true : false );
console.dir(findNum);

// filter() : 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환
// 배열에서 짝수 목록만 검색하기
let findNums = array.filter(num => num % 2 === 0 ? true : false);
console.dir(findNums);

// foreach : 람다식 이용하여 값 출력
array.forEach((num, index) => {
  console.log(num, index);
});

// sort() : 배열 안의 원소들을 정렬하여 반환 - 숫자도 문자열로 변환한 후 유니코드 값에 따라 정렬
// array.sort();
array.sort((num1, num2) => {
  return num1 - num2;     //오름차순
  // return num2 - num1; 내림차순
});
console.log(array);



