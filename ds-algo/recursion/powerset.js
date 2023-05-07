/* 
    Power Set: Write a method to return all subsets of a set.

    a b c
    
    '' =  ''
    a = 'a' ''
    ab = 'a' 'b' 'ab' ''
    abc = 'a' 'b' 'c' 'ab' 'ac' 'bc' 'abc' ''
                                                    build                                    depth
                                                     ''                                         0
                                            ''                      a                           1
                                        ''      b               a       ab                      2
                                    ''    c   b   bc          a   ac   ab  abc                  3    O(2^n) where n is the length of the input O(2^n + n) space
                pseudo code
                result = []
                helper(build, depth)
                base case:
                if(depth === input.length) result.push(build),return

                recursion case:
                left = helper(build, depth+1)
                right = helper(build+input[depth], depth+1)

                instantiation:
                helper('', 0)

                return result

                code
                ----------------------------
*/
function powerSet(input) {
  let result = [];
  function helper(build, depth) {
    // base case
    if (depth === input.length) {
      result.push(build);
      return;
    }
    // left
    helper(build, depth + 1);
    // right
    helper(build + input[depth], depth + 1);
  }
  // instantiation
  helper("", 0);
  return result;
}
