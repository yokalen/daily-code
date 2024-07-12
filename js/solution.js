function twoSum(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    const onIt = numbers[i];
    for (let j = 1; j < numbers.length; j++){
      const check = numbers[j];
      if(onIt + check === target){
        return [i, j];
      };
    };
  };
};
// test
console.log(twoSum([1, 2, 3], 4), "0, 2");
console.log(twoSum([3, 2, 4], 6), "1, 2");
console.log(twoSum([7, 12, 40, 42, 44, 47], 86), "3, 4");