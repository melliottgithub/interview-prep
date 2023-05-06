/* 
Run length encoding

*/

function runLengthEncoding(str) {
    // Write your code here.
    /*
                 A A A A A A A A A B B C C C C D D
                                 ^
                new string
  
      
                 
                 A A A A A A A A A A A A A B B C C D D
                                           ^
                 count = |||||||||
  
                 
                 pseudocode
                 if count is 9  if len is i if B is not equal to A
                 string + 9 + A
                 reset count to 1
                 else increment count
                 
    */
    let count = 1;
    let encodedStr = '';
  
    for (let i = 1; i <= str.length; i++){
        
      if(count === 9 || str.length === i || str[i - 1] !== str[i]){
        encodedStr += (count + str[i-1])
        count = 1
      } else count++
    }
    
    return encodedStr;
  }
  
  