'''
week1 Problem day 3: (Since we missed one on Monday)
https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
34. Find First and Last Position of Element in Sorted Array
tag: Binary search
Medium
Facebook Amazon Bloomberg
Given an array of integers nums sorted in non-decreasing order, 
find the starting and ending position of a given target value.
If target is not found in the array, return [-1, -1].
You must write an algorithm with O(log n) runtime complexity.
Example 1:
Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
Example 2:
Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
Example 3:
Input: nums = [], target = 0
Output: [-1,-1]
Constraints:
0 <= nums.length <= 105
-109 <= nums[i] <= 109
nums is a non-decreasing array.
-109 <= target <= 109
'''


class Solution(object):

    '''                                           
                                              start = 0, end = 5 target = 8
                                                  0 1 2 3 4 5   
                                                 [5,7,7,8,8,10]  start = 3, end = 5, mid = 2 target = 8
                                                      ^         
                                                        8,8,10]  start = 3, end = 3, mid = 4 target = 8
                                                          ^    
                                                        8,8      start = 3, end = 2, mid = 3 target = 8
                                                        ^ 
                                                         Leftmost boundary found at index 3
                                                         
                                                         
                                            redo for rightmost:
                                      start = 0, end = 5 target = 8
                                            0 1 2 3 4 5   
                                           [5,7,7,8,8,10]  start = 3, end = 5, mid = 2 target = 8
                                                ^                  
                                                  8,8,10]  start = 5, end = 3, mid = 4 target = 8
                                                    ^
                                                    rightmost boundary found at index 4
                                                 


    
    '''
    # runtime: O(logn) x 2 => O(logn)
    # space: O(1)
    def searchRange(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        if(len(nums) == 0):
            return [-1,-1]

        start, end = 0, len(nums) - 1
        leftmost, rightmost = -1, -1

        while start <= end:
            mid = start + (end - start) // 2
            if nums[mid] < target:
              start = mid + 1
            else: # nums[mid] >= target:
              end = mid - 1
        # if target is not found in the array, return [-1, -1]
        if start == len(nums) or nums[start] != target:
            return [-1, -1]
        leftmost = start
        # find the ending position of a given target value.
        
        end = len(nums) - 1
        while start <= end:
          mid = start + (end - start) // 2
          if nums[mid] > target:
            end = mid - 1
          else: # nums[mid] <= target:
            start = mid + 1
        rightmost = end

        return [leftmost, rightmost]
       

        