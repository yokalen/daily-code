// array of nums, target num
// index of two nums whose sum is target
// [1, 2, 3], 4 => 0, 2 // [3, 2, 4], 6 => 1, 2 // [7, 12, 40, 42, 44, 47], 86 => 3, 4

function twoSum(numbers, target) {
  // starting with indx 0, add to each other num to find target, keep going until found
  let gotIt;
  for (let i = 0; i < numbers.length; i++) {
    const onIt = numbers[i];
    for (let j = 1; j < numbers.length; j++){
      const check = number[j];
      if(onIt + check === target){
        gotIt = [i, j];
      };
    };
  };
  // return indx of num in loop and match
  return gotIt;
}