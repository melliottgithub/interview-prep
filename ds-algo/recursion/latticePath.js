/* 
    Lattice Paths                                ^      value(m,n)       <                     level
                                                             3,2                                   0
                                                2,2                         3,1                    1
                                           1,2          2,1            2,1     (3,0)               2
                                        0,2  1,1      1,1  2,0        1,1  2,0                     3
*/

// pseudo code
/*  
     row = 0 col = 0
    base case: 
    if(row === m && col === n) return 1
    if(row > m || col > n) return 0

    recursion: 
    
    down = value(row, col+1)
    right = value(row+1, col)

    return down + right
*/

// code
function latticePath(m, n) {
    //base cases
    if( m === 1 && n === 1) return 1
    if( m < 1 || n < 1) return 0

    // recursion cases ^ and < 
    let up = latticePath(m-1, n)
    let left = latticePath(m, n-1)

    return left + up
}

console.log(latticePath(3,2)) // 3
