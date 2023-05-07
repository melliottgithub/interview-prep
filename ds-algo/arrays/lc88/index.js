/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    /*
                   [ 1, 2, 4  0  0  0 ]
                           ^         
                   [ 1, 3, 4 ]
                           ^
          [ 1, 1, 2, 3 , 4 , 4 ]                     
    /*
                     [ 1, 2, 3  0  0  0]
                             ^         
                     [ 4, 5, 6 ]
                       ^
          [ 1, 2, 3 , 4 , 5, 6 ]                     

      pseudocode
      new array is the len of list 1 + 2 ==> 6

      leftP at 0 and rightP from list 1 rightP at 0 from list 2

      loop through new array
      if one is less than the other append it to the array

      loops through the rest of the arrays if needed

      return new array                           

    */
    const len1 = m - 1
    const len2 = n - 1
    let len = m + n - 1
    let [arr1Idx, arr2Idx] = [len1, len2]

    while (arr1Idx >= 0 && arr2Idx >= 0) { // O(n) time and O(1) space where n is the number of elements in the array
        const [leftVal, rightVal] = [nums1[arr1Idx], nums2[arr2Idx]]
        leftVal <= rightVal ? nums1[len--] = nums2[arr2Idx--] : nums1[len--] = [nums1[arr1Idx--]]
    }
    while (arr2Idx >= 0) nums1[len--] = nums2[arr2Idx--]

    return nums1
};