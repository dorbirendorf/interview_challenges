from string import ascii_lowercase
def almostEquivelntStrings(list1, list2):
    result=[]
    for s1,s2 in zip(list1, list2):
         result.append(EquivelntStrings(s1,s2))

    return result

def EquivelntStrings(s1, s2):
    if len(s1)!=len(s2):
        return 'NO'
    
    letterCount1=countOccurrences(s1)
    letterCount2=countOccurrences(s2)

    for char in letterCount1.keys():
        if abs(letterCount1[char] - letterCount2[char])>3:
            return 'NO'
    return 'Yes'


        
    

def countOccurrences(s):
    letterCount={char:0 for char in ascii_lowercase}
    for x in s:     
        if not x.islower():
            continue
        letterCount[x]+=1
    return letterCount
    
print(almostEquivelntStrings(['aaabbc' ,'aaaa'],['aabbbb' ,'bbbc']))