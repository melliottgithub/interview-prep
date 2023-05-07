function semordnilap(words) {
    // Write your code here.
  
    /*    
          table = {diaper, abc, test, cba, repaid}
        [ diaper abc test cba repaid]
            ^
         repaid
         table = {abc, test, cba}
        [ diaper abc test cba repaid]
                  ^
                  cba
         table = {test}
        [ diaper abc test cba repaid]
                       ^
                  cba
    pseudocode
    ------------------------
    create set
    create array
  
    add the words to the set
  
    loop through array of words
    reverse word(function)
    check if it is in the table and that is not the same // example oio oio
    if it is add it to the new array and remove from table
    it is not continue
    return ne array
    */
    //code
    //-----------------------
    const result = [] // O(n) space where n is the number of words
    const distinctWords = new Set(words) //O(n) space where n is the number of words
  
    for (const word of words){ //O(n) time where n is the number of words
      const reversed = reverseWord(word) //O(m) time where m is the length of the word
        if(distinctWords.has(reversed) && reversed !== word){ 
          result.push([word,reversed])
          distinctWords.delete(word)
          distinctWords.delete(reversed)
          // distinctWords.delete(...[word,reversed])
        }
    }
    return result; //O(n*m) time where n is the number of words and m is the length of the word and O(n + n*m) => O(n*m) space where n is the number of words and m is the length of the word
  }
  
  function reverseWord(word){
    return word.split('').reverse().join('') //O(m) time where m is the length of the word and O(m) space where m is the length of the word
  }
  
  