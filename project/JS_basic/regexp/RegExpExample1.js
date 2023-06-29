// 유효성검증 true, false 나오게끔 하는 것 - test 
// 일치하는 것 반환 - match

// 일치하는 단어 검색
(function () {
  let message = 'Java, HTML, CSS, JavaScript, SQL';
  let regex = /Java/gm;
  let result = message.match(regex);
  console.log(result);
})();


// 임의의 한 문자(.)
(function () {
  let message = 'Java, HTML, CSS, JavaScript, SQL';
  // let regex = /./gm;
  let regex = /Ja.a/gm;
  let result = message.match(regex);
  console.log(result);
})();

// 수량 관련 메타문자(?, *, +)
(function () {
  let message = 'I love griy, gray, grey color gry graay graaaay';
  // let regex = /gra*y/gm;
  // let regex = /gra+y/gm;
  // let regex = /gra?y/gm;
  // let regex = /gra{2}y/gm;
  // let regex = /gra{2,3}y/gm;
  let regex = /gra{2,}y/gm;
  let result = message.match(regex);
  console.log(result);
})();

console.clear();

// OR 메타문자(|)
(function () {
  let message = 'Hi there, Nice to meet you. And Hello there and hi.';
  let regex = /Hi|Hello/gm;
  let result = message.match(regex);
  console.log(result);
})();

// 경계 관련 메타문자( ^, $)
(function () {
  let message = "JavaScript, HTML, CSS, JavaScript, Java\n" +
    "JavaScript, HTML, CSS, JavaScript, Java.";
  let regex = /^JavaScript/gm;
  // let regex = /^JavaScript/g;
  let result = message.match(regex);
  console.log(result);
})();

// 그룹 메타문자('()')
(function () {
  let message = 'HelloHelloHello';
  // let regex = /Hello/gm;
  let regex = /(Hello){3}/gmi;
  let result = message.match(regex);
  console.log(result);
})();

(function () {
  let message = 'I love griy, gray, grey color';
  let regex = /gr(i|a|e)y/gm;
  let result = message.match(regex);
  console.log(result);
})();

console.clear();

// '[]' 문자클래스
(function () {
  let message = 'I love griy, gray, grey color';
  // let regex = /[ae]/gm; // a or e
  // let regex = /gr[ae]y/gm;
  let regex = /gr[a-z]y/gm; // 소문자 알파벳
  let result = message.match(regex);
  console.log(result);
})();

(function () {
  let message = 'I love griy, gray, grey color';
  // let regex = /[a-zA-Z0-9]/gm;
  let regex = /[^a-zA-Z0-9]/gm; // 부정
  let result = message.match(regex);
  console.log(result);
})();

console.clear();
// 축약 문자 클래스(\w, \W, \d, \D, \s, \S)
(function () {
  let message = 'I love griy, gray, grey color';
  // let regex = /\w/gm;
  // let regex = /\s/gm;
  let regex = /\S/gm;
  let result = message.match(regex);
  console.log(result);
})();

// 이스케이프 문자
(function () {
  let message = 'Java/HTML/CSS/JavaScript';
  let regex = /\//gm; // 이스케이스 문자 처리 
  let result = message.split(regex);
  console.log(result);
})();