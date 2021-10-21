# binary_search.py
#%%
from numpy import random

newarray = random.randint(0, 100, size=(15,1)).flatten()
newarray.sort()
print(newarray)
#%%
def binary_search(array, element):
    length = len(array)
    indices = list(range(length))

    low_index = 0 
    high_index = length - 1 #high index
    #true divide, rounds down
    mid_index = length // 2

    while True:
        if element < array[mid_index]: # 8 < 7 
            high_index = mid_index - 1
        elif element > array[mid_index]:
            low_index = mid_index + 1
        mid_index = ((high_index - low_index) // 2) + low_index
        if element == array[mid_index]:
            return mid_index
        #print(f"low index= {low_index}, high index= {high_index}, mid index = {mid_index}")

        if low_index >= high_index: 
            break
    return "Not found"


# binary_search(x, 5) #return index of the element
binary_search(newarray, 89)
# %%

# todo: implement exponential search, heaps algorithm, steinhaus-johnson-trotter, fisher-suffer, linear search
# todo: make git repo