"""
For each game, you will get an array of clouds numbered  if they are safe or  if they must be avoided.

jumpingOnClouds has the following parameter(s):

int c[n]: an array of binary integers
Returns

int: the minimum number of jumps required

jump can be size 1 or 2
"""
def jumpingOnClouds(c):
    i=0
    count=0
    n=len(c)
    while i <= n-2:
        if  i+2>=n or c[i+2]==0:
            count+=1
            i+=1
        else:
            count+=1
        i+=1
    return count