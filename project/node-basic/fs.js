
const fs = require('fs');

var data = '노드 파일 쓰기 TEST!';
//  비동기적 파일 쓰기
fs.writeFile('text1.txt', data, 'utf8', function (error) {
  if (error) {
    console.log(error);
  } else {
    console.log('비동기적 파일 쓰기 완료!');
  }
});

//  동기적 파일 쓰기
// 동기적 파일 쓰기가 먼저 실행됨
try {
  fs.writeFileSync('text2.txt', data, 'utf8');
  console.log('동기적 파일 쓰기 완료');
} catch (error) {
  console.log(error);
}

// 동기적 읽기
var text = fs.readFileSync('text2.txt', 'utf8');
console.log('동기적 읽기 : ' + text);

// 비동기적 읽기
fs.readFile('text1.txt', 'utf8', (err, data) => {
  console.log('비동기적 읽기 : ' + data);
});


