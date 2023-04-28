function twoNumberSum(array, targetSum) {
  // Write your code here.

  // [ 3, 5, -4, 8, 11, 1, -1, 6 ]
  //   l                       r
  // [ -4, -1, 1, 3, 5, 6, 8, 11 ]
  //        l                 r
  //   -4  + 11 = 7 <> 10 --- find = 7 < targetSum = 10 left ++
  //   -1 + 11 = 10 !!!

  // pseudocode

  //code
  // O(nlogn) time | O(1) space
  if (array.length < 2) return [];
  array.sort((a, b) => a - b); // nlogn
  
  let [left, right] = [0, array.length - 1];
  while (right > left) {
    const findTargetSum = array[left] + array[right];
    if (findTargetSum < targetSum) left++;
    else if (findTargetSum > targetSum) right--;
    else return [array[left], array[right]];
  }
  return [];
}

// Test case 1: Empty input array
const input1 = [];
const targetSum1 = 10;
const expectedOutput1 = [];
const actualOutput1 = twoNumberSum(input1, targetSum1);
console.log(`Test case 1: expected ${expectedOutput1}, got ${actualOutput1}`);

// Test case 2: Array with one element that matches the target sum
const input2 = [5];
const targetSum2 = 5;
const expectedOutput2 = [];
const actualOutput2 = twoNumberSum(input2, targetSum2);
console.log(`Test case 2: expected ${expectedOutput2}, got ${actualOutput2}`);

// Test case 3: Array with one element that does not match the target sum
const input3 = [5];
const targetSum3 = 10;
const expectedOutput3 = [];
const actualOutput3 = twoNumberSum(input3, targetSum3);
console.log(`Test case 3: expected ${expectedOutput3}, got ${actualOutput3}`);

// Test case 4: Array with two elements that match the target sum
const input4 = [2, 3];
const targetSum4 = 5;
const expectedOutput4 = [2, 3];
const actualOutput4 = twoNumberSum(input4, targetSum4);
console.log(`Test case 4: expected ${expectedOutput4}, got ${actualOutput4}`);

// Test case 5: Array with two elements that do not match the target sum
const input5 = [2, 3];
const targetSum5 = 6;
const expectedOutput5 = [];
const actualOutput5 = twoNumberSum(input5, targetSum5);
console.log(`Test case 5: expected ${expectedOutput5}, got ${actualOutput5}`);

// Test case 6: Array with multiple elements that match the target sum
const input6 = [2, 3, 4, 5, 6];
const targetSum6 = 7;
const expectedOutput6 = [2, 5];
const actualOutput6 = twoNumberSum(input6, targetSum6);
console.log(`Test case 6: expected ${expectedOutput6}, got ${actualOutput6}`);

// Test case 7: Array with multiple elements that do not match the target sum
const input7 = [2, 3, 4, 5, 6];
const targetSum7 = 20;
const expectedOutput7 = [];
const actualOutput7 = twoNumberSum(input7, targetSum7);
console.log(`Test case 7: expected ${expectedOutput7}, got ${actualOutput7}`);

// Test case 8: Array with negative numbers
const input8 = [-2, 3, -4, 5, -6];
const targetSum8 = -1;
const expectedOutput8 = [-6, 5];
const actualOutput8 = twoNumberSum(input8, targetSum8);
console.log(`Test case 8: expected ${expectedOutput8}, got ${actualOutput8}`);

// Test case 9: Array with all zeroes
const input9 = [0, 0, 0, 0, 0];
const targetSum9 = 0;
const expectedOutput9 = [0,0];
const actualOutput9 = twoNumberSum(input9, targetSum9);
console.log(`Test case 9: expected ${expectedOutput9}, got ${actualOutput9}`);

// Test case 10: Array with duplicate numbers that match the target sum
const input10 = [2, 3, 4, 7, 5];
const targetSum10 = 8;
const expectedOutput10 = [3, 5];
const actualOutput10 = twoNumberSum(input10, targetSum10);
console.log(`Test case 10: expected ${expectedOutput10}, got ${actualOutput10}`);

  