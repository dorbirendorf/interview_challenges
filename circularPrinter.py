def getTime(s):
    s = s.upper()
    # create array which represent the letters index
    arr = [0]+[ord(x)-ord('A') for x in s]

    i = 1
    count = 0
    while i < len(arr):
        distance = abs(arr[i]-arr[i-1])
        steps = min(distance, 26-distance)  # take distance or it complementary
        count += steps
        i += 1

    return count


print(getTime('azgb'))
