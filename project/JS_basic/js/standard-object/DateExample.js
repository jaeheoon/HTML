let toDay = new Date();
console.log(toDay.toString());
console.log(toDay.toLocaleString());
console.log(toDay.toLocaleDateString());
console.log(toDay.toLocaleTimeString());
// 밀리세컨 : getTime();
console.log(toDay.getTime());

toDay = Date.now();
toDay = new Date().setTime(toDay);
console.log(toDay.constructor);
console.log(toDay.toLocaleString());