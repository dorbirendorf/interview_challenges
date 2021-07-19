
"""
Complete the sockMerchant function in the editor below.

sockMerchant has the following parameter(s):

int n: the number of socks in the pile
int ar[n]: the colors of each sock
Returns

int: the number of pairs
"""


def sockMerchant(n, ar):
    ar.sort()
    found = 0
    i = 1
    while i < n:
        if ar[i] == ar[i-1]:
            found += 1
            i += 1
        i += 1
    return found
