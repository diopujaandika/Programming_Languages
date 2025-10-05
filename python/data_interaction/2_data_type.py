#NUMBER
x = 6 #Integer
print(type(x))

x = 6.0 #Float
print(type(x)) 

x = 1+2j
print(type(x))

#Imutable Variable 
var = 10
print(var)
print(id(var))
var = 11
print(var)
print(id(var))

"""
Output :
10
<memory address>
11
<memory address>
"""

#Boolean
x = True
print(type(x))
x = False
print(type(x))

"""
Output:
<class 'bool'>
<class 'bool'>
"""

#String
x = 'Dicoding'
print(type(x))

"""
Output
<class 'str>
"""

multi_line = """Hallo!
Kapan terakhir kali kita bertemu?
Kita bertemu hari Jum'at yang lalu.
"""
print(multi_line)

"""
Output:
Halo!
Kapan terakhir kali kita bertemu?
Kita bertemu hari Jum’at yang lalu.
"""

x = 'Dicoding'
print(x[0])

""" 
Output:
D
"""

# x = 'Dicoding'
# x [0] = 'F' # Error karena String bersifat Immutable
# print(x)

x = 'Dicoding'
print(x[2:])
"""
Output:
coding
"""

#Formatted String
name = 'Perseus Evans'
print(f"Hello, nama saya adalah {name}") # 'f' digunakan untuk formating text variable
"""
Output: 
Hello, nama saya Perseus Evans
"""

#%-formatting
name = "Perseus Evans"
print("Name Saya %s" %(name))
"""
Output: 
Nama saya Perseus Evans
"""

#str.format()
name = "Perseus Evans"
print("Nama Saya {}".format(name))
"""
Output: 
Nama saya Perseus Evans
"""

#List
x = [1, 2.2, 'Dicoding', True]
print(x)
print(type(x))
print(x[2])
x[2] = 'Indonesia'
print(x[2])

x = ["laptop", "monitor", "mouse", "mousepad", "keyboard", "webcam", "microphone"]
print(x[0])
print(x[2])
print(x[-1])
print(x[-3])
"""
Output:
laptop
mouse
microphone
keyboard
"""

x = ["laptop", "monitor", "mouse", "mousepad", "keyboard", "webcam", "microphone"]

print(x[0:5:2])
print(x[1:])
print(x[:3])

"""
Output:
['laptop', 'mouse', 'keyboard']
['monitor', 'mouse', 'mousepad', 'keyboard', 'webcam', 'microphone']
['laptop', 'monitor', 'mouse']
"""

#TUPLE
x = (1, "Dicoding", 1+3j)
print(x)
print(type(x))

"""
Output:
<class 'tuple'>
"""

x = (5, 'program', 1+3j)
print(x[1])
print(x[0:3])

""" 
Output:
program
(5, 'program', (1+3j))
"""

#SET
x = {1, 2, 7, 2, 3, 13, 3}
print(x)
print(type(x))

"""
Output:
{1, 2, 3, 7, 13}
<class 'set'>
"""
set1 = {1, 2, 3, 4, 5}
set2 = {4, 5, 6, 7, 8}

union = set1.union(set2)
print("Union:", union)

intersection = set1.intersection(set2)
print("Intersection:", intersection)

"""
Output:
Union: {1, 2, 3, 4, 5, 6, 7, 8}
Intersection: {4, 5}

"""

#DICTIONARY
x = { 'name': 'Perseus Evans', 'age': 20, 'isMarried': False }
print(x['name'])
print(type(x))

"""
Output:
Perseus Evans
<class 'dict'>
"""

x = { 'name': 'Perseus Evans', 'age': 20, 'isMarried': False }
x ['Job'] = "Web Developer"

print(x)

"""
Output:
{'name': 'Perseus Evans', 'age': 20, 'isMarried': False, 'Job': 'Web Developer'}
"""

x = { 'name': 'Perseus Evans', 'age': 20, 'isMarried': False }
del x['isMarried']

print(x)

"""
Output:
{'name': 'Perseus Evans', 'age': 20}
"""

x = { 'name': 'Perseus Evans', 'age': 20, 'isMarried': False }
x ['name'] = "Dicoding"

print(x)

"""
Output:
{'name': 'Dicoding', 'age': 20, 'isMarried': False}
"""
