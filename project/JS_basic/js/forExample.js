// for in문
// 배열 값
let array =[3, 4, 5, 6, 23, 4];
for (let i = 0; i < array.length; i++) {
  const num = array[i];
  console.log(num, '일반for문');
}

for (let i in array) {
  console.log(array[i], array, i);
}

for (let num of array) {
  console.log(num, '향상for문');
}