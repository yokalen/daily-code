// 3 num - begin, end, step
// if begin > end => 0 : sum seq of nums 
// 2,2,2 => 2
// 2,6,2 => (2 + 4 + 6) => 12
// 1,5,1 => (1 + 2 + 3 + 4 + 5) => 15
// 1,5,3 => (1 + 4) => 5
// 0,7,2 => (2 + 4 + 6) => 12

const sequenceSum = (begin, end, step) => {
  // starting with begin, create sequence by step until end
  let sequence = []
  
  for (let i = begin; i <= end; i+= step){
    sequence.push(i)
  }
  // reduce the sequence to sum
  const result = sequence.reduce((a,b) => a + b, 0)
  return result;
};

console.log(sequenceSum(2,2,2), 2)
console.log(sequenceSum(2,6,2), 12)
console.log(sequenceSum(1,5,1), 15)
console.log(sequenceSum(1,5,3), 5)
console.log(sequenceSum(0,7,2), 12)