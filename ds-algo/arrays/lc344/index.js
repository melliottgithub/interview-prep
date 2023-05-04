/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {

    // [ h, e, l, l, o]
    //   ^
    //               ^
    // while l < r
    // swap positions
    // return array
    //code
    const len = s.length - 1
    let [l, r] = [0, len]

    while (l < r) swap(l++, r--, s)
    return s
};

var swap = function (swap1, swap2, array) {
    [array[swap1], array[swap2]] = [array[swap2], array[swap1]]
}