function sortedSquaredArray(array) {
    // Write your code here.
    const squared = [] // O(n) space complexity
    for(num of array) {
      squared.push(num*num)
    } 
    return squared.sort((a,b) => a-b ); // O(nlogn) time complexity
  }
  