def twoNumberSum(array, targetSum):
    # Write your code here.
    # [ 3, 5, -4, 8, 11, 1, -1, 6 ]
    #  l                       r
    # [ -4, -1, 1, 3, 5, 6, 8, 11 ]
    #        l                 r
    #  -4  + 11 = 7 <> 10 --- find = 7 < targetSum = 10 left ++
    #   -1 + 11 = 10 !!!
    array.sort()
    [l, r] = [0, len(array) -1]
    while r > l:
        findTargetSum = array[l] + array[r]
        if findTargetSum < targetSum:
            l += 1
        elif findTargetSum > targetSum:
            r -= 1
        else:
            return [array[l], array[r]]
    return []