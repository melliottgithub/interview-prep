function firstNonRepeatingCharacter(string) {
    // Write your code here.
    /* 
      table = {a:2, b:1, c:2, d:1, f:1 }
      
      a b c d c a f
                  ^
      2 1 2 1 2 2 1
      a b c d c a f
        ^            b = 1
        
      pseudocode
      ----------------
      create a table
  
      loop through string
      if it char does not exist in table create it and add 1
      else add 1
  
      loop through the string 
      check which one has 1 in the table
      return index
  
      
      code
      --------------------
    */
    if (string.length < 1) return -1
  
    const freqMap = new Map() //O(26) space => O(1)
  
    for(const char of string) { // O(n) time
      if(!(freqMap.has(char))) freqMap.set(char, 1)
      else freqMap.set(char, freqMap.get(char) + 1)
    }
  
    for (const index in string) {
      if(freqMap.get(string[index]) === 1) return +index
    }
    return -1;
  }
  
  