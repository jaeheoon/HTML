// 함수를 만드는 방법 세가지
// 1. 함수 선언문 
// 2. 함수 리터럴 표현식 
// 3. Function 생성자 함수를 이용한 동적 함수 생성 = java의 리플렉션이랑 비슷

// 프로그램 준비단계때 생성됨
/* function Function(){
      //~~~~
   }
// 자바스크립트 표준 내장 객체는 Function 생성자 함수에 의해 동적 생성된다
let Object = new Function('~~~~');
let Date = new Function('~~~~');
let String = new Function('~~~~');
let Number = new Function('~~~~');
let Boolean = new Function('~~~~');
*/

// 동적 함수 생성
let sum = new Function('x', 'y', 'return x + y');
let result = sum(10, 20);
console.log(result);



