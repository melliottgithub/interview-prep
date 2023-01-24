from typing import List


class Solution1:
    # [1, 2, 3, 4, 5, 6]
    #  l
    #                 r
    #        m
    #      t
    # --------------------------
    # [1, 2, 3, 4, 5, 6]
    #           l
    #                 r
    #        m
    #           t
    # --------------------------
    # [1, 2, 3, 4, 5, 6, 7]
    #  l
    #                    r
    #           m
    # ------------------------------------------
    # O(log(n)) time
    # ------------------------------------------
    # n = size => 8 => [1,2,3,4,5,6,7,8]
    # T(n) = T(n/2) + C
    #     8/2^1 = 4  => 1    [1,2,3,4
    #     8/2^2 = 2  => 2    [1,2
    #     8/2^3 = 1  => 3    [1
    # ----n/2^k = 1 => n = 2^k => logn = k =>
    #                                                     Left                                  Right
    #                                                                          n = 8                                k
    #                                                                    [1,2,3,4,5,6,7,8]                          0
    #                                                                /                       \
    #                                                       [1,2,3,4                        5,6,7,8]                1
    #                                                   [1,2        3,4                  5,6       7,8]             2
    #                                                 [1    2     3     4              5     6    7     8]          3
    #
    #

    # Using Master Theorem T(n) = O(logn)
    #
    #  Assuming already sorted
    #
    #
    #
    # O(logn) Space
    # Recursive Solution
    def search(self, nums: List[int], target: int) -> int:
        def BinarySearch(nums, left, right, target):
            # base case
            if left > right:
                return -1
            mid = (left + right) // 2
            if nums[mid] == target:
                return mid
            elif nums[mid] < target:
                # right
                return BinarySearch(nums, mid+1, right, target)
            else:
                # left
                return BinarySearch(nums, left, mid - 1, target)
        return BinarySearch(nums, 0, len(nums) - 1, target)
        # ------------------------------------------------------------------------

# O(log(n)) time
# O(1) space
# Iterative Solution
class Solution2:
    def search(self, nums: List[int], target: int) -> int:
        length = len(nums)
        right = length - 1
        left = 0

        while (left <= right):
            mid = (right + left)//2
            if (target == nums[mid]):
                return mid
            elif target > nums[mid]:
                left = mid + 1
            else:
                right = mid - 1
        return -1
