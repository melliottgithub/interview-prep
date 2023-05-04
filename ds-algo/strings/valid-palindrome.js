function isPalindrome(string) {
    // Write your code here.
    //    a b c d c b a
    //    <
    //                >
    // 
    //   while left < right
    //   if(leftVal === rightVal)
    //    left++ && right--
    // else false
    // return true
    let [left, right] = [0, string.length-1]
    while ( left < right) { // O(n/2) => O(n) time 
    const [leftChar, rightChar] = [string[left], string[right]]
      
      if(leftChar !== rightChar) return false
      left++, right--
    }
    return true //  O(1) space
  }


  // recursive solution
  function isPalindrome(string) {
    // Write your code here.                        str                        i
    //                                   [ a, b, c, d, c, b, a ]               0
    //                                     0  1  2  3  4  5  6                       
    //                                              |                       
    //                                     [  b, c, d, c, b]                   1
    //                                              |
    //                                        [  c, d, c ]                     2
    //                                              |
    //                                            [ d ]                        3
    // 
    // if left index is greater than or equal to right index return true
    // then check if the left index is equal to the right index
    // if it is then call the function again with the left index + 1
    // else return false
    // 
    // O(n) time because we are calling the function n/2 times
    // O(n) space because of the call stack 
    function pal(str, i){ 
      let j = str.length - 1 - i
      
      if( i >= j) return true
  
      return str[i] === str[j] ? pal(str, i + 1) : false
    }
    return pal(string, 0)
  }