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