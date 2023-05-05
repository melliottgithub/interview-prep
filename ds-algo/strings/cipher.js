// https://www.hackerrank.com/challenges/caesar-cipher-1/problem

function caesarCipherEncryptor(string, key) {
    // Write your code here.
    //                      x y z 
    //   hashtable = { x: z, y: a, z: b}
    //  return zab
    // 
    //pseudocode
    //
    //   create alphabet in a list => O1 
    //  create the map
    // loop through alphabet and add to a hashTable the key value pair
    // create an empty string 
    // loop through the string and shift char using hashtable
    //
    //code
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'; // O1
    const table = new Map() // O1
  
    for (let i = 0; i < alphabet.length; i++){ // O(n) time complexity n = alphabet.length 
      const shiftIndex = (i + k) % alphabet.length 
      table.set(alphabet[i], alphabet[shiftIndex]) 
    }
  
    let result = '' // O(n) space complexity n = string.length (worst case scenario)
  
    for (let i = 0; i < string.length; i++){ // O(n) n = string.length
        const char = string[i]
        result += table.get(char)
    }

    return result 
  }