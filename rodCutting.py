def cutTheSticks(arr):
    arr.sort()
    result = []
    while arr:   # while arr is not
        result.append(len(arr))  # 1.count the number of rods
        cut = arr[0]            # 2.find shortest length
        # 3,4. discard short rods and cut the rest
        arr = [x - cut for x in arr if x > cut]
    return result


print(cutTheSticks([1,1,3,4]))
