// string
// an array of string split into two characters, '_' added to complete if needed
// 'abc' => ['ab', 'c_'] // 'abcdef' => ['ab', 'cd', 'ef'] // 'letsgo' => ['le', 'ts', go']

function solution(str){
//check if the length is odd, if so add the _
  let result = []
  let i = 0
  if(str.length % 2 !== 0){
      str += '_';
    }
  //add characters to a new array two at a time
  while(i < str.length - 1){
    let twins = str[i] + str[i + 1]
    result.push(twins);
    i = i + 2
  }
  return result; 
}

console.log(solution('abc'), `['ab', 'c_']`)
console.log(solution('abcdef'), `['ab', 'cd', 'ef']`)
console.log(solution('letsgo'), `['ab', 'c_']`, `['le', 'ts', go']`)