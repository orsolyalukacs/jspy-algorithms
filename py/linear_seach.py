# linear_search.py

from numpy import random
from datetime import datetime
#%%
newarray = random.randint(0, 20000, size=(15000,1)).flatten()
newarray.sort()
print(list(newarray))
#%%
print(range(len(newarray)))

def lin_search(array, element):
    # for i in range(len(array)):
    for i, value in enumerate(array):
        if element == value:
            return i
    return "Not found" 

start_time = datetime.now()
print(lin_search(newarray, 14062))
end_time = datetime.now()
print(end_time - start_time) #compare execution time of selection sort algorithm with binary search
# %%
