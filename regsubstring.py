import re
main_string = input("Enter main string: ")
substring = input("Enter substring: ")
match = re.search(substring, main_string)
if match:
    print("Substring is present")
else:
    print("Substring is not present")