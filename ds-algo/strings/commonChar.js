function commonCharacters(strings) {
    // Write your code here.
    /*
                table: { a: 2, b: 3, c: 3, d: 1 }
              
              [  a   b  c,     b  c  d,   c  b  a  c  c d ]
                        ^
                                     ^           
                                                        ^
              [  a   b  c,     b  c  d,   c  b  a  d ]
                        ^
                                     ^           
                                                   ^
                  pseudocode
                  loop through the strings
                  make the string a set
                  loop through chars and add them to table
  
                  loop through table and check where there are values of 3
                  add it to commonChar array
                  return commonChar
    */
    //code
  
    const table = {}
    const commonChar = []
  
    for (let str of strings) {
      const uniqueChars = new Set(str)
      for (let char of uniqueChars) {
        if(char in table) table[char] += 1
        else table[char] = 1
      }
      for (let [char, count] of Object.entries(table)) {
        if (count === strings.length) commonChar.push(char)
      }
    }
    
    return commonChar;
  }
    