class Solution(object):

    '''        start = 1, end = 1
                     0 1 2
                    [0,1,0]  
                       ^
    -------------------------------------------------
               start = 1, end = 3
                     0 1 2 3 4
                    [0,2,1,0,0]  mid = 2,  start = 1 , end = 2
                         ^ 
                    [0,2,1,0,0]  mid = 1, end = 1 start = 2  
                       ^ 
    -------------------------------------------------
               start = 1, end = 3
                     0 1 2 3 4
                    [0,0,1,2,0]  
                         ^ 
    '''
    def peakIndexInMountainArray(self, arr):
        """
        :type arr: List[int]
        :rtype: int
        """
        start, end = 1, len(arr) - 2

        while start <= end:
            mid = start + (end - start)//2
            if  arr[mid - 1] < arr[mid] > arr[mid + 1]:
                return mid
            elif arr[mid] > arr[mid - 1]: #or arr[mid] < arr[mid + 1]:
                start = mid + 1
            else: 
                end = mid