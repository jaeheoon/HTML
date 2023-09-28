//모듈 사용하기
const odd = '홀수';
const even = '짝수';

//이 두개를 index.js에서 사용할때 아래처럼 정해준다
module.exports.odd = odd;
module.exports.even = even;

function checkOddOrEven(num) {
    if (num % 2) {
        return odd;
    } else {
        return even;
    }
}

//객체로 내보내기
module.exports = {
    odd,
    even,
    checkOddOrEven
}