function generateDocument(characters, document) {
  // Write your code here.

  /* 
       chars = a b c c d
                       ^
                  table = {a:1, b:1, c:2, d:1}
       document = a b c d
                        ^
                  table = {a:0, b:0, c:1, d:0}

        pseudocode
        ---------------------
        create a hashmap
        loop through the chars
        if the char does not exist create it
        else add 1

        loop through the document
        check if it exist in the hashmap 
          substract 1
          if hashmap value is equal to 0 or is not in the table
            return false
        
  */
  //code
  if (document.length > characters.length) {
    return false;
  }

  const charFreq = new Map(); // O(n) space where n is the number of unique characters in the characters string
  for (let char of characters) { // O(n) time where n is the number of characters in the characters string
    const freq = charFreq.get(char) || 0;
    charFreq.set(char, freq + 1);
  }
  for (let char of document) { // O(m) time where m is the number of characters in the document string
    if (!charFreq.has(char) || charFreq.get(char) === 0) {
      return false;
    }
    charFreq.set(char, charFreq.get(char) - 1);
  }
  return true; // O(n + m) time and O(n) space
} 
/* 
const table = {}

for (let char of characters) {
 if(char in table) table[char]++
 else table[char] = 1
}

for(let c of document) {
 if(table[c] === 0 || !(c in table)) return false
 else table[c]--
}

return true; */
