/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {

    // [ h, e, l, l, o]
    //   ^
    //               ^
    // [ h, e, l, l, o]
    //    [ e, l, l]
    //         l
    // if l >= r return true
    // else return false
    // swap positions
    // return array
    //code
    const len = s.length - 1
    let [l, r] = [0, len]

    function reverse(l, r, arr) {
        if (l >= r) return arr
        else swap(l, r, arr)
        return reverse(l + 1, r - 1, arr)
    }
    return reverse(l, r, s)
};

var swap = function (swap1, swap2, array) {
    [array[swap1], array[swap2]] = [array[swap2], array[swap1]]
}