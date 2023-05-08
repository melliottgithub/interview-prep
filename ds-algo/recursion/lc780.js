/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @param {number} d
 * @return {boolean}
 */
var reachingPoints = function(a, b, c, d) {
    // Write your code here
    /*                                             a, b
                                                     1, 1
                                  1+1, 1                     
                                  2,1                                   1,2
                          3,1           2,3                   3,2                1,3
                      4,1     3,4    5,3                     5,2  3,5 
                      
                      pseudocode
                      
                      base case:
                      if(a === c && b === d) return 'Yes'
                      if(a > c || b > d) return 'No'
                      
                      recursive case
                      value(a +b, b, c,d)
                      value(a,a+b, c,d)
                      
       */
  
    //base case: 
    if (a === c && b === d) return true;
    if (a > c || b > d) return false;
  
    //recursive case
    const left = reachingPoints(a + b, b, c, d);
    const right = reachingPoints(a, a + b, c, d);
  
    return left === true || right === true ? true : false;
    // O(2^n) where n is the length of the input O(n) space because of the depth of the recursion stack
  };
