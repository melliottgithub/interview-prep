'''
374. Guess Number Higher or Lower
Easy - 2.7K - 319
company: Amazon - Apple - Bloomberg

We are playing the Guess Game. The game is as follows:

I pick a number from 1 to n. You have to guess which number I picked.

Every time you guess wrong, I will tell you whether the number I picked is higher or lower than your guess.

You call a pre-defined API int guess(int num), which returns three possible results:

-1: Your guess is higher than the number I picked (i.e. num > pick).
1: Your guess is lower than the number I picked (i.e. num < pick).
0: your guess is equal to the number I picked (i.e. num == pick).
Return the number that I picked.

Example 1:

Input: n = 10, pick = 6
Output: 6
Example 2:

Input: n = 1, pick = 1
Output: 1
Example 3:

Input: n = 2, pick = 1
Output: 1


Constraints:

1 <= n <= 231 - 1
1 <= pick <= n
'''


# The guess API is already defined for you.
# @param num, your guess
# @return -1 if num is higher than the picked number
#          1 if num is lower than the picked number
#          otherwise return 0
# def guess(num: int) -> int:

class Solution:
    '''
      Example 1:

      Input: n = 10, pick = 6
      Output: 6
                                     0 1 2 3 4 5 6 7 8 9       num = mid = 5,8,6 | pick = 6    
                                    [1,2,3,4,5,6,7,8,9,10]     ===>  5 < 6 output 1
                                             ^                 
                                               6,7,8,9,10]     ===>  8 > 6 output -1
                                                   ^        
                                               6,7             ===>  6 = 6 output 0
                                               ^
    '''
    # O(logn) time
    # O(1) space
    #divide and conquer
    

    def guessNumber(self, n: int) -> int:
        start = 1
        end = n
        while start <= end:
            mid = start + (end - start) // 2
            if guess(mid) == 0:
                return mid
            elif guess(mid) == -1:
                end = mid - 1
            else:
                start = mid + 1
                
#Real-time search in a large dataset: In real-time search applications, 
# such as internet search engines, 
# binary search can be used to quickly find the most relevant results for a search query, 
# by narrowing down the search space in real-time as the user types.