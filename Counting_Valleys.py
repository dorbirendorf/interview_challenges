"""
A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.

countingValleys has the following parameter(s):

int steps: the number of steps on the hike
string path: a string describing the path

Returns

int: the number of valleys traversed
"""

def countingValleys(steps, path):
    level=0
    count=0
    for step in path:
        if step=='D':
            if level==0:
                count+=1
            level -=1 
        if step=='U':
            level +=1
            
    return count
        