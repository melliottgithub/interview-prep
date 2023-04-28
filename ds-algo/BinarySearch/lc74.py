class Solution(object):
    '''
                         Output: true 
                         Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3 

                              4 column  
                    3        0  1  2  3
                    r  0  [[1, 3, 5, 7],
                    o  1  [10,11,16,20],
                    w  2  [23,30,34,60]], 

                                      mid =  matrix[1][1]
                                     mid(5) =  [row][column]
                                     row =  mid(5)/column(4) => row(1)
                                     column = mid(5) % column(4) => column(1)

                               0           1            2        start = 0, end = 11
                           0 1 2 3    4  5  6  7    8  9 10 11
                         [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3, mid = 5, start = 0, end = 4
                                         ^
                         [[1,3,5,7],[10, target = 3, mid = 2, start = 0, end = 1
                               ^
                         [[1,3, target = 3, mid = 0, start = 1, end = 1
                           ^
                             3, target = 3, mid = 0, start = 1, end = 1
                             ^
    '''
    def searchMatrix(self, matrix, target):
        """
        :type matrix: List[List[int]]
        :type target: int
        :rtype: bool
        """
        # time O(log(rows)) + O(log(columns)) => O(log(rows*columns))
        # space O(1)
        rows = len(matrix)
        if rows == 0: return False
        columns = len(matrix[0])
                      
        start, end = 0, (rows * columns) - 1
        while start <= end:
            mid = start + (end - start) //2
            if matrix[mid / columns][mid % columns] == target:
                return True
            elif matrix[mid / columns][mid % columns] > target:
                end = mid - 1
            else:
                start = mid + 1
        return False