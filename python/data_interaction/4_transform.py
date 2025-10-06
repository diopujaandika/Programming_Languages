kata = 'Dicoding'
kata = kata.upper() #Uppercase
print(kata)

kata = kata.lower() #Lowercase
print(kata)

print("Dicoding             ".rstrip())
print("             Dicoding".lstrip())
print("      Dicoding       ".strip())

kata = 'CodeCodeDicodingCodeCode'
print(kata.strip("Code"))
print('Dicoding Indonesia'.startswith('Dicoding'))
print('Dicoding Indonesia'.endswith('Dicoding'))