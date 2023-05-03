/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  // Write your code here.
  //  [ -10, 1, 2, 3, 4 ,5 ,6 ,8 , 9]
  //               s
  //               e
  // check if abs(s) > abs(e)
  // add the biggest one the end of the squared list
  // then move left or right accordingly
  //  [ 1, 4, 9, 16 ,25 ,36 , 64 , 81, 100]
  //                                     ^  <=====
  //
  //code
  let [s, e] = [0, nums.length - 1];
  const sortedArr = Array.from({ length: nums.length }); // O(n) space complexity

  for (let i = nums.length - 1; i >= 0; i--) { // O(n) time complexity
    let squaringNum = 0;
    const [leftValue, rightValue] = [nums[s], nums[e]]
    squaringNum = Math.abs(leftValue) > Math.abs(rightValue) ? nums[s++] : nums[e--];
    sortedArr[i] = squared(squaringNum);
  }

  return sortedArr;
}
function squared(num) {
  return num * num;
}

// Test case 1
const input1 = [-10, -5, 0, 5, 10];
const expectedOutput1 = [0, 25, 25, 100, 100];
const output1 = sortedSquaredArray(input1);
console.log(output1); // should print [0, 25, 25, 100, 100]
console.log(
  output1.length === expectedOutput1.length &&
    output1.every((val, idx) => val === expectedOutput1[idx])
); // should print true

// Test case 2
const input2 = [-3, -2, -1];
const expectedOutput2 = [1, 4, 9];
const output2 = sortedSquaredArray(input2);
console.log(output2); // should print [1, 4, 9]
console.log(
  output2.length === expectedOutput2.length &&
    output2.every((val, idx) => val === expectedOutput2[idx])
); // should print true

// Test case 3
const input3 = [1, 2, 3, 4];
const expectedOutput3 = [1, 4, 9, 16];
const output3 = sortedSquaredArray(input3);
console.log(output3); // should print [1, 4, 9, 16]
console.log(
  output3.length === expectedOutput3.length &&
    output3.every((val, idx) => val === expectedOutput3[idx])
); // should print true
