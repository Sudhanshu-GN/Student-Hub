for num in range(20, 51):
    is_prime = True

    if num < 2:
        is_prime = False
    else:
        for i in range(2, num // 2 + 1):
            if num % i == 0:
                is_prime = False
                break

    if is_prime:
        print(num, end=" ")
  
#  sum_even= 0
#
#for i in range(1, 51):
#    if i % 2 == 0:
 #         sum_even += i
#print("Sum of even numbers from 1 to 50 =", sum_even)

sum_even = 0

for i in range(1, 51):
    if i % 2 == 0:
        sum_even += i

print("Sum of even numbers from 1 to 50 =", sum_even)