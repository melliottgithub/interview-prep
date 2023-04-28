class Solution(object):
    #Input: nums = [3,0,1]
    #Output: 2
    #Explanation: n = 3 since there are 3 numbers, 
    #so all numbers are in the range [0,3]. 
    #2 is the missing number in the range since it does not appear in nums.
    '''
                                                  [3,0,1]
                                                   0,1,2
                                                  [3,0,1]
                                                  sort array
                                                  [0,1,3]       start = 0, end = 2, mid = 1
                                                     ^
                                                  [0,1,3]     start = 2, end = 2, mid = 2

    
    '''
    #Input: nums = [9,6,4,2,3,5,7,0,1]
    #Output: 8
    #Explanation: n = 9 since there are 9 numbers, 
    # so all numbers are in the range [0,9]. 
    # 8 is the missing number in the range since it does not appear in nums.
    '''
                                                   0 1 2 3 4 5 6 7 8
                                                  [9,6,4,2,3,5,7,0,1] sort array
                                                   0 1 2 3 4 5 6 7 8
                                                  [0,1,2,3,4,5,6,7,9] start = 0, end = 8, mid = 4
                                                           ^            nums[mid] == mid
                                                             5,6,7,9] start = 5, end = 8, mid = 6
                                                               ^        nums[mid] == mid
                                                                 7,9] start = 7, end = 8, mid = 7
                                                                 ^      nums[mid] == mid
                                                                   9] start = 8, end = 8, mid = 8
                                                                   ^    nums[mid] != mid
                                                                    return start = 8
    '''

    #------------------------------------------------------------------------
    # runtime: O(nlogn)
    # space: O(1)
    def missingNumber(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        nums.sort()
        start, end = 0, len(nums) -1

        while start <= end:
            mid = start + (end - start) //2
            if nums[mid] == mid:
                start = mid + 1
            else:
                end = mid - 1
        return start