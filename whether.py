# WAP to check whether the given input is
# digit, lowercase, uppercase or special character (use"if-else-if"ladder)

ch = input("Enter a character: ")

if ch >= '0' and ch <= '9':
    print("It is a Digit")

elif ch >= 'a' and ch <= 'z':
    print("It is a Lowercase Character")

elif ch >= 'A' and ch <= 'Z':
    print("It is an Uppercase Character")

else:
    print("It is a Special Character")