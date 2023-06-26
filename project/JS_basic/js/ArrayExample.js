// let array = new Array(); == let array = []; 같은 말이다
let array = [];
array.push(10);
array.push('김기정바보');
array.push(new Student(11, '홍길동', 50, 86, 79));
array.push(new Student(12, '박상훈', 87, 62, 98));
array.unshift(new Student(10, '이희영', 78, 74, 95));

for (const value of array) {
  console.log(value);
}

console.log(array[0]);
console.dir(array);
console.log(array.length);

// pop : 맨 뒤에 값 제거 후 반환, shift : 맨 앞에 값 삭제, delete : 삭제
// delete array[0];
array.shift();
// array.pop();
console.log(array[0]);