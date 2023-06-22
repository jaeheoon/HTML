// 중첩함수(Helper function) 정의
function main() {
  console.log('주기능입니다');
  function sub(num) {
    return Math.pow(num, 2);
  }

  let x = 10;
  let result = sub(x);
  console.log(result);
}

main();