# Van_Remlee_Challenge3.py

# Task 1: List Comprehensions
names = ['Alice', 'Ethan', 'Oscar', 'Uma', 'Ivy', 'Ben', 'Charlie', 'David']

vowel_names = [name for name in names if name[0].lower() in 'aeiou']
print(vowel_names)  

# Task 2: Dictionary Comprehensions
students = ['Jack', 'Emma', 'Oliver', 'Sophia']
scores = [85, 92, 78, 88]

student_scores = {students[i]: scores[i] for i in range(len(students))}
print(student_scores)  

# Task 3: Set Comprehensions
city_names = ['London', 'Paris', 'New York', 'Sydney', 'Tokyo']

unique_letters = {letter for city in city_names for letter in city}
print(unique_letters)