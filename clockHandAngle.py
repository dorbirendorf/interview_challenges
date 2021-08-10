
def calc_angle(time):
    hour=int(time.split(':')[0])%12
    min=int(time.split(':')[1])

    hour_angle=((60*hour+min)/2) 
    min_angle=min*6

    diff_angle=abs(hour_angle-min_angle)

    return diff_angle

print(calc_angle('07:28'))
    



    