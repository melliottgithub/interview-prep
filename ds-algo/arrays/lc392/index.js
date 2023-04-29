function isValidSubsequence(array, sequence) {
    // Write your code here.
    // [ 5, 1, 22, 6, -1, 8, 10 ] [ 1, 6, -1, 10 ]
    //                       l                       
    //                                         r 
    // 
    // pseudocode
    // while l and r <= length of the correspondent lists continue
    // if l = r move r forward r++
    // if l <> r move l++
    // return 
  
    //code
    let [l,r]= [0,0]
    
    while (l < array.length && r < sequence.length){
      if(array[l] === sequence[r]) r++
      l++
    }
    return r === sequence.length
  }
// Example test cases
const testCases = [
    { array: [5, 1, 22, 6, -1, 8, 10], sequence: [1, 6, -1, 10], expected: true },
    { array: [1, 2, 3, 4, 5], sequence: [1, 3, 5], expected: true },
    { array: [1, 2, 3, 4, 5], sequence: [5, 4, 3, 2, 1], expected: false },
    { array: [1, 2, 3, 4, 5], sequence: [1, 2, 2, 4, 5], expected: false },
    { array: [], sequence: [], expected: true },
    { array: [1], sequence: [1], expected: true },
    { array: [1], sequence: [2], expected: false },
    { array: [1, 2], sequence: [2, 1], expected: false },
    { array: [1, 2, 3], sequence: [1, 3, 2], expected: false },
    { array: [1, 1, 2, 2, 3, 3], sequence: [1, 2, 3], expected: true },
    { array: [1, 1, 2, 2, 3, 3], sequence: [1, 2, 1, 2, 3], expected: false },
  ];
  
  testCases.forEach((testCase, index) => {
    const result = isValidSubsequence(testCase.array, testCase.sequence);
    if (result === testCase.expected) {
      console.log(`Test case ${index + 1} passed`);
    } else {
      console.log(`Test case ${index + 1} failed`);
      console.log(`  Array: [${testCase.array}]`);
      console.log(`  Sequence: [${testCase.sequence}]`);
      console.log(`  Expected: ${testCase.expected}`);
      console.log(`  Actual: ${result}`);
    }
  });
  