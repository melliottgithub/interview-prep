class Solution(object):
    '''
                   Input: matrix = [[1,5,9],[10,11,13],[12,13,15]], k = 8
                  Output: 13
                  Explanation: The elements in the matrix are [1,5,9,10,11,12,13,13,15], 
                  and the 8th smallest number is 13 

                            3 column  
                    3       0  1  2  
                    r  0  [[1, 5, 9],
                    o  1  [10,11,13],
                    w  2  [12,13,15]], 

                    0 1 2    3  4  5    6  7  8
                  [[1,5,9],[10,11,13],[12,13,15]], k = 8, 9 elements, mid = 4, start = 0, end = 8
                                ^


    '''
    def kthSmallest(self, matrix, k):
        """
        :type matrix: List[List[int]]
        :type k: int
        :rtype: int
        """

        rows = len(matrix) # 2
        cols = len(matrix[0]) # 3 

        start, end = 0, (rows*cols) - 1 # 0, 8

        while start <= end:
          mid = start + (end - start) // 2  # 4 => (8 - 0) // 2 = 4


