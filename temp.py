# Recursive function to convert Fahrenheit to Celsius
def fahrenheit_to_celsius(f):
    if f == 32:
        return 0
    return (f - 32) * 5 / 9

# Recursive function to convert Celsius to Fahrenheit
def celsius_to_fahrenheit(c):
    if c == 0:
        return 32
    return (c * 9 / 5) + 32

# Input from user
choice = int(input("Enter 1 for Fahrenheit to Celsius\nEnter 2 for Celsius to Fahrenheit\n"))

if choice == 1:
    f = float(input("Enter temperature in Fahrenheit: "))
    print("Temperature in Celsius =", fahrenheit_to_celsius(f))

elif choice == 2:
    c = float(input("Enter temperature in Celsius: "))
    print("Temperature in Fahrenheit =", celsius_to_fahrenheit(c))

else:
    print("Invalid Choice")