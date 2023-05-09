/**
 * @param {number} n
 * @return {number}
 */
var countVowelPermutation = function (n) {
  // Write your code here
  /*                                                              build                                        depth       length
                                           a        e               i                o          u                  0           1
                                           e      ea ei       ia  ie io iu        oi   ou       a                  1           2
  
                                           pseudo code
                                           result = 0
                                           // base case:
                                           if(depth === n) result += 1, return


                                             // recursion case:
                                                if(build[depth-1] === 'a') helper(build+'e', depth+1)
                                                if(build[depth-1] === 'e') helper(build+'a', depth+1)
                                                if(build[depth-1] === 'e') helper(build+'i', depth+1)
                                                if(build[depth-1] === 'i') helper(build+'a', depth+1)
                                                if(build[depth-1] === 'i') helper(build+'e', depth+1)
                                                if(build[depth-1] === 'i') helper(build+'o', depth+1)
                                                if(build[depth-1] === 'i') helper(build+'u', depth+1)
                                                if(build[depth-1] === 'o') helper(build+'i', depth+1)
                                                if(build[depth-1] === 'o') helper(build+'u', depth+1)
                                                if(build[depth-1] === 'u') helper(build+'a', depth+1)

                                             // instantiation
                                                helper('', 0)

                                                // return result
                                                return result

                                                code


  
       */
  if (n === 0) return 0;

  let result = 0;
  let string = "aeiou";

  // recursion case:
  function helper(currentStr, depth) {
    // base case:
    if (depth === n) {
      result += 1;
      return;
    }
    const lastChar = currentStr[currentStr.length - 1];
    const nextCharMap = {
      a: ["e"],
      e: ["a", "i"],
      i: ["a", "e", "o", "u"],
      o: ["i", "u"],
      u: ["a"],
    };
    // recursion cases:
    for (const nextChar of nextCharMap[lastChar]) {
      helper(currentStr + nextChar, depth + 1);
    }
  }
  // instantiation
  for (const vowel of string) { // O(5^n) where n is the length of the input O(n) space because of the call stack having at most n calls on it at a time
    helper(vowel, 1);
  }
  // return result
  return result % (Math.pow(10, 9) + 7);
};

console.log(countVowelPermutation(0));
console.log(countVowelPermutation(1));
console.log(countVowelPermutation(2));
