let nums = [6, 1, 4, 3, 5];
nums.sort((e1, e2) => {
  return e1 - e2;
});
nums.forEach( num => console.log(num));