import type { SubtopicContent } from '@/types';
import { EXPANDED_SUBTOPIC_CONTENT } from '@/data/expandedSubtopicContent';
import { EXPANDED_SUBTOPIC_CONTENT_2 } from '@/data/expandedSubtopicContent2';
import { EXPANDED_TOPICS } from '@/data/expandedContent';

export const SUBTOPIC_CONTENT: Record<string, SubtopicContent> = {
  // ============================================================
  // PHASE 1 - PYTHON BASICS
  // ============================================================
  "st-pybas-1": {
    title: "Variables",
    definition: "A variable is a named storage location that holds a value you can refer to and change later.",
    explanation: "In Python, you create a variable by assigning a value with the = sign. Python is dynamically typed, so you don't declare the type — it's inferred from the value. Variable names must start with a letter or underscore, can contain letters, digits, and underscores, and are case-sensitive.",
    example: `name = "Alice"\nage = 25\nscore = 95.5\nprint(name, age)  # Alice 25`,
    keyTakeaways: [
      "Use = to assign a value to a name.",
      "Variable names are case-sensitive and cannot start with a digit.",
      "Python infers the type automatically (dynamic typing).",
      "Use snake_case by convention for variable names."
    ],
    commonMistakes: [
      "Starting a variable name with a number (e.g., 1st_name).",
      "Using a Python keyword like 'class' or 'for' as a variable name.",
      "Confusing = (assignment) with == (comparison)."
    ],
    whenToUse: "Use variables whenever you need to store and reuse a value in your program.",
    interviewTip: "Mention that Python uses dynamic typing and references — variables point to objects, not memory boxes.",
    tryYourself: "Create variables for a student's name, grade, and GPA, then print them together."
  },
  "st-pybas-2": {
    title: "Data Types",
    definition: "Data types define the kind of value a variable holds, such as integers, floats, strings, and booleans.",
    explanation: "Python has built-in types like int (whole numbers), float (decimals), str (text), bool (True/False), list, tuple, set, and dict. You can check a value's type with type() and convert between types with int(), float(), str(), etc.",
    example: `x = 10          # int\npi = 3.14       # float\ntext = "hi"     # str\nis_valid = True  # bool\nprint(type(x))   # <class 'int'>`,
    keyTakeaways: [
      "Common types: int, float, str, bool, list, tuple, set, dict.",
      "Use type() to inspect a value's type.",
      "Python is dynamically typed — types can change at runtime.",
      "Strings are immutable sequences of characters."
    ],
    commonMistakes: [
      "Treating user input (always a str) as a number without converting.",
      "Confusing 1 (int) and 1.0 (float) when precision matters.",
      "Forgetting that bool is a subclass of int (True == 1)."
    ],
    whenToUse: "Understanding data types is essential for every program — it determines what operations are valid.",
    interviewTip: "Note that everything in Python is an object, and each type is a class with methods.",
    tryYourself: "Create one variable of each basic type (int, float, str, bool) and print their types."
  },
  "st-pybas-3": {
    title: "Input and Output",
    definition: "Input collects data from the user; output displays data to the screen.",
    explanation: "Use input() to read user input (always returned as a string) and print() to display output. You can format output with f-strings, which let you embed expressions inside curly braces.",
    example: `name = input("Enter your name: ")\nprint(f"Hello, {name}!")\nage = int(input("Enter your age: "))\nprint(f"Next year you'll be {age + 1}")`,
    keyTakeaways: [
      "input() always returns a string, even if the user types a number.",
      "print() can take multiple arguments separated by commas.",
      "f-strings are the cleanest way to format output.",
      "Convert input with int() or float() when you need numbers."
    ],
    commonMistakes: [
      "Forgetting to convert input() to int/float before doing math.",
      "Not stripping whitespace from user input.",
      "Using commas inside f-string expressions incorrectly."
    ],
    whenToUse: "Use input() for interactive programs and print() for displaying results or debugging.",
    interviewTip: "Mention that input() blocks execution until the user presses Enter — important in CLI tools.",
    tryYourself: "Write a program that asks for two numbers and prints their sum using an f-string."
  },
  "st-pybas-4": {
    title: "Type Conversion",
    definition: "Type conversion (casting) changes a value from one data type to another.",
    explanation: "Python provides int(), float(), str(), bool(), and list() to convert between types. Explicit conversion is when you write it yourself; implicit conversion happens automatically, like when mixing int and float in arithmetic.",
    example: `num_str = "42"\nnum = int(num_str)   # "42" -> 42\nprice = float("9.99")\ntext = str(100)      # 100 -> "100"\nprint(num + 8)       # 50`,
    keyTakeaways: [
      "Use int(), float(), str(), bool() for explicit conversion.",
      "Implicit conversion happens automatically (int + float = float).",
      "Not all conversions are valid — int('abc') raises ValueError.",
      "bool(0), bool(''), bool([]) are False; most others are True."
    ],
    commonMistakes: [
      "Trying to convert a non-numeric string like 'hello' to int.",
      "Assuming int('3.5') works — it doesn't; use float() first.",
      "Forgetting that converting to bool follows truthiness rules."
    ],
    whenToUse: "Use type conversion when reading numeric input, parsing data, or preparing values for output.",
    interviewTip: "Mention that int('3.9') fails but int(float('3.9')) works — a common gotcha.",
    tryYourself: "Convert the string '15.7' to an int by first converting to float, then print the result."
  },
  "st-pybas-5": {
    title: "Operators",
    definition: "Operators are symbols that perform operations on variables and values, such as arithmetic, comparison, and logical operations.",
    explanation: "Python has arithmetic operators (+, -, *, /, //, %, **), comparison operators (==, !=, <, >, <=, >=), logical operators (and, or, not), assignment operators (=, +=, -=), and membership operators (in, not in).",
    example: `a = 10\nb = 3\nprint(a + b)    # 13\nprint(a // b)   # 3 (floor division)\nprint(a % b)    # 1 (remainder)\nprint(a ** b)   # 1000 (power)\nprint(a > b and b > 0)  # True`,
    keyTakeaways: [
      "/ always returns a float; // returns an int (floor division).",
      "** is exponentiation, not ^ (which is bitwise XOR).",
      "and, or, not are keywords, not &&, ||, !.",
      "% gives the remainder — useful for checking even/odd."
    ],
    commonMistakes: [
      "Using ^ for exponentiation instead of **.",
      "Expecting 7 / 2 to return 3 — it returns 3.5.",
      "Confusing = (assignment) with == (equality)."
    ],
    whenToUse: "Operators are used in every calculation, comparison, and logical decision in a program.",
    interviewTip: "Remember that // with negative numbers rounds toward negative infinity, not zero.",
    tryYourself: "Use the % operator to check if a number entered by the user is even or odd."
  },

  // ============================================================
  // PHASE 1 - CONTROL FLOW
  // ============================================================
  "st-cf-1": {
    title: "Boolean Logic",
    definition: "Boolean logic evaluates expressions to True or False using comparison and logical operators.",
    explanation: "Comparisons (==, !=, <, >, <=, >=) produce bool values. Logical operators combine them: and (both must be True), or (at least one True), not (inverts). Python uses short-circuit evaluation — it stops as soon as the result is determined.",
    example: `age = 20\nhas_id = True\nprint(age >= 18 and has_id)  # True\nprint(age < 13 or age > 65)  # False\nprint(not has_id)            # False`,
    keyTakeaways: [
      "and returns True only if both operands are True.",
      "or returns True if at least one operand is True.",
      "not inverts the boolean value.",
      "Python short-circuits: 'a and b' skips b if a is False."
    ],
    commonMistakes: [
      "Writing 'if x = 5' instead of 'if x == 5'.",
      "Chaining comparisons incorrectly like '5 < x < 10' works, but 'x > 5 and < 10' does not.",
      "Forgetting that empty strings, 0, and None are falsy."
    ],
    whenToUse: "Use boolean logic whenever a decision depends on multiple conditions.",
    interviewTip: "Mention short-circuit evaluation — it can prevent errors like checking a list before testing its length.",
    tryYourself: "Write a condition that checks if a number is between 1 and 100 inclusive."
  },
  "st-cf-2": {
    title: "If Statements",
    definition: "An if statement runs a block of code only when a condition is True.",
    explanation: "The if keyword starts the statement, followed by a condition and a colon. The indented block beneath it runs only if the condition is True. Python uses indentation (not braces) to define blocks.",
    example: `score = 85\nif score >= 60:\n    print("You passed!")\nprint("Done checking.")`,
    keyTakeaways: [
      "The condition must be followed by a colon.",
      "The body is defined by indentation (usually 4 spaces).",
      "Only the indented block runs conditionally.",
      "Zero, empty sequences, None, and False are all falsy."
    ],
    commonMistakes: [
      "Forgetting the colon after the condition.",
      "Using inconsistent indentation (mixing tabs and spaces).",
      "Putting the if body on the same line without proper syntax."
    ],
    whenToUse: "Use if when you want code to run only under certain conditions.",
    interviewTip: "Emphasize that Python relies on indentation — no braces — so consistent spacing is critical.",
    tryYourself: "Write an if statement that prints 'Too hot' when a temperature variable is above 30."
  },
  "st-cf-3": {
    title: "If-Else",
    definition: "An if-else statement provides an alternative block of code that runs when the condition is False.",
    explanation: "The else block is optional and runs only when the if condition is False. You can also chain multiple conditions with elif (else if), which is checked only if the previous conditions were False.",
    example: `age = 17\nif age >= 18:\n    print("Adult")\nelse:\n    print("Minor")`,
    keyTakeaways: [
      "else has no condition — it catches everything else.",
      "elif lets you check multiple exclusive conditions.",
      "Only one block in an if/elif/else chain runs.",
      "Order matters: Python checks conditions top to bottom."
    ],
    commonMistakes: [
      "Putting a condition after else (else cannot have one).",
      "Using multiple if statements instead of elif when only one should match.",
      "Forgetting the colon after else or elif."
    ],
    whenToUse: "Use if-else when you need to choose between two paths, and elif for more than two.",
    interviewTip: "Use elif instead of stacked ifs when conditions are mutually exclusive — it's clearer and more efficient.",
    tryYourself: "Write an if-elif-else that grades a score: 90+ A, 80+ B, 70+ C, else F."
  },
  "st-cf-4": {
    title: "Nested Conditions",
    definition: "Nested conditions are if statements placed inside other if statements to check multiple levels of conditions.",
    explanation: "You can place an if inside another if to check a secondary condition only when the outer one is True. Each level adds indentation. Deep nesting can make code hard to read, so it's often better to combine conditions with 'and'.",
    example: `age = 25\nhas_license = True\nif age >= 18:\n    if has_license:\n        print("You can drive")\n    else:\n        print("Get a license first")\nelse:\n    print("Too young to drive")`,
    keyTakeaways: [
      "Each nested level increases indentation.",
      "The inner condition is checked only if the outer one is True.",
      "Deep nesting reduces readability — prefer combining with 'and'.",
      "Logical operators can often replace one level of nesting."
    ],

    commonMistakes: [
      "Nesting too deeply when a single 'and' condition would suffice.",
      "Misaligning indentation so the wrong block is nested.",
      "Repeating the same condition in both levels unnecessarily."
    ],
    whenToUse: "Use nested conditions when a secondary check only makes sense after a primary one passes.",
    interviewTip: "If your nesting goes beyond 2-3 levels, refactor with early returns or combined conditions.",
    tryYourself: "Rewrite the driving example using a single if with 'and' instead of nesting."
  },
  "st-cf-5": {
    title: "For Loops",
    definition: "A for loop repeats a block of code for each item in a sequence (like a list, string, or range).",
    explanation: "Python's for loop iterates over iterable objects. range(n) generates numbers 0 to n-1. You can loop over lists, strings, dictionaries, and more. Use enumerate() to get both index and value.",
    example: `for i in range(3):\n    print(i)  # 0, 1, 2\n\nfruits = ["apple", "banana"]\nfor fruit in fruits:\n    print(fruit)\n\nfor idx, val in enumerate(fruits):\n    print(idx, val)`,
    keyTakeaways: [
      "range(5) gives 0,1,2,3,4 — it stops before 5.",
      "You can iterate over any iterable: lists, strings, dicts, files.",
      "enumerate() gives you both index and value.",
      "range(start, stop, step) lets you customize the sequence."
    ],
    commonMistakes: [
      "Expecting range(5) to include 5.",
      "Modifying a list while iterating over it (causes skipped items).",
      "Using a manual index counter instead of enumerate()."
    ],
    whenToUse: "Use for loops when you know how many times to repeat or when iterating over a collection.",
    interviewTip: "Prefer enumerate() over a manual counter — it's more Pythonic and avoids off-by-one errors.",
    tryYourself: "Use a for loop and range() to print the squares of numbers 1 through 5."
  },
  "st-cf-6": {
    title: "While Loops",
    definition: "A while loop repeats a block of code as long as a condition remains True.",
    explanation: "The condition is checked before each iteration. If it's True, the body runs; if False, the loop ends. You must update something inside the loop so the condition eventually becomes False — otherwise you get an infinite loop.",
    example: `count = 0\nwhile count < 3:\n    print(count)\n    count += 1\n# Output: 0, 1, 2`,
    keyTakeaways: [
      "The condition is checked before each iteration.",
      "You must modify a variable inside the loop to avoid infinite loops.",
      "Use while when the number of iterations isn't known in advance.",
      "A while True loop runs forever unless you break out of it."
    ],
    commonMistakes: [
      "Forgetting to update the loop variable (infinite loop).",
      "Using while when a for loop would be clearer.",
      "Assuming the condition is checked after the body runs."
    ],
    whenToUse: "Use while when you don't know how many iterations you need, like waiting for user input or a condition.",
    interviewTip: "Always have a clear exit condition — infinite loops are the most common while-loop bug.",
    tryYourself: "Write a while loop that counts down from 5 to 1 and prints each number."
  },
  "st-cf-7": {
    title: "Break",
    definition: "The break statement immediately exits the nearest enclosing loop.",
    explanation: "When Python encounters break, it stops the loop entirely and moves to the code after it. It's commonly used to exit a loop early when a condition is met, such as finding a target value.",
    example: `for num in range(10):\n    if num == 5:\n        break\n    print(num)\n# Output: 0, 1, 2, 3, 4`,
    keyTakeaways: [
      "break exits the loop immediately, skipping remaining iterations.",
      "It only affects the innermost loop in nested loops.",
      "Often used with while True to create controlled infinite loops.",
      "Code after break in the same block never runs."
    ],
    commonMistakes: [
      "Expecting break to exit all loops in a nested structure.",
      "Using break where a loop condition change would be clearer.",
      "Forgetting that break only works inside loops (not if statements alone)."
    ],
    whenToUse: "Use break to exit a loop early when a goal is reached or an error occurs.",
    interviewTip: "In nested loops, remember break only exits the inner loop — use a flag or function return for outer loops.",
    tryYourself: "Loop through a list of names and break when you find 'Alice', printing 'Found!'."
  },
  "st-cf-8": {
    title: "Continue",
    definition: "The continue statement skips the rest of the current loop iteration and moves to the next one.",
    explanation: "Unlike break, continue doesn't exit the loop — it just jumps back to the top for the next item. It's useful for skipping items that don't meet a condition without stopping the whole loop.",
    example: `for num in range(6):\n    if num % 2 == 0:\n        continue\n    print(num)\n# Output: 1, 3, 5`,
    keyTakeaways: [
      "continue skips the rest of the current iteration only.",
      "The loop continues with the next item.",
      "It's useful for filtering or skipping unwanted values.",
      "Code after continue in the same iteration is not executed."
    ],
    commonMistakes: [
      "Confusing continue with break (continue skips, break stops).",
      "Forgetting to put the condition before continue, causing logic errors.",
      "Using continue excessively when an if-else would be clearer."
    ],
    whenToUse: "Use continue to skip specific iterations without ending the loop.",
    interviewTip: "Overusing continue can make loops hard to read — sometimes an if block is cleaner.",
    tryYourself: "Loop through numbers 1-10 and use continue to skip multiples of 3."
  },
  "st-cf-9": {
    title: "Pass",
    definition: "The pass statement is a null operation — it does nothing and acts as a placeholder.",
    explanation: "Python requires a body in every block. If you want an empty block (like an empty function or a placeholder if), use pass. It's also used as a stub for code you'll write later.",
    example: `for i in range(5):\n    if i == 3:\n        pass  # do nothing for 3\n    else:\n        print(i)\n\ndef not_yet_implemented():\n    pass  # placeholder`,
    keyTakeaways: [
      "pass does nothing — it's a syntactic placeholder.",
      "It prevents syntax errors when a block must have a body.",
      "Common in empty classes, stub functions, and unused if branches.",
      "Unlike break or continue, pass doesn't affect loop flow."
    ],
    commonMistakes: [
      "Using pass when you actually need break or continue.",
      "Leaving pass in production code instead of implementing logic.",
      "Confusing pass with return (pass continues execution, return exits)."
    ],
    whenToUse: "Use pass as a placeholder where Python expects a statement but you have nothing to do yet.",
    interviewTip: "pass is great for stubs during development — just don't forget to replace it before shipping.",
    tryYourself: "Create an empty class called Placeholder using pass as the body."
  },

  // ============================================================
  // PHASE 1 - FUNCTIONS
  // ============================================================
  "st-fn-1": {
    title: "Function Basics",
    definition: "A function is a reusable block of code that performs a specific task.",
    explanation: "Define a function with the def keyword, a name, parentheses, and a colon. The indented body contains the code. Call it by its name with parentheses. Functions help avoid repetition and make code organized.",
    example: `def greet():\n    print("Hello, World!")\n\ngreet()  # Hello, World!`,
    keyTakeaways: [
      "Use def to define a function.",
      "Call a function by its name followed by parentheses.",
      "Functions make code reusable and organized.",
      "A function must be defined before it's called."
    ],
    commonMistakes: [
      "Forgetting the colon after the function signature.",
      "Calling a function before it's defined in the file.",
      "Forgetting parentheses when calling (greet vs greet())."
    ],
    whenToUse: "Use functions whenever you repeat the same logic or want to organize code into named units.",
    interviewTip: "Name functions with verbs (calculate_total, not total) to describe what they do.",
    tryYourself: "Write a function called say_hi that prints a greeting, then call it twice."
  },
  "st-fn-2": {
    title: "Parameters",
    definition: "Parameters are variables listed in a function definition that receive values when the function is called.",
    explanation: "Parameters act as placeholders for data the function needs. When you call the function, you pass arguments that fill those placeholders. A function can have zero or many parameters.",
    example: `def add(a, b):\n    return a + b\n\nresult = add(3, 5)\nprint(result)  # 8`,
    keyTakeaways: [
      "Parameters are defined in the function signature.",
      "Arguments are the actual values passed when calling.",
      "Parameters are local to the function.",
      "You can have multiple parameters separated by commas."
    ],
    commonMistakes: [
      "Confusing parameters (definition) with arguments (call site).",
      "Passing the wrong number of arguments.",
      "Assuming parameter names affect the caller's variables."
    ],
    whenToUse: "Use parameters when a function needs input data to do its job.",
    interviewTip: "Keep the number of parameters small — too many suggests the function does too much.",
    tryYourself: "Write a function with two parameters, name and age, that prints both."
  },
  "st-fn-3": {
    title: "Arguments",
    definition: "Arguments are the actual values passed to a function's parameters when calling it.",
    explanation: "Python supports positional arguments (matched by order), keyword arguments (matched by name), and default arguments. You can pass arguments by position or by keyword, and mix both (positional first, then keyword).",
    example: `def describe(name, age):\n    print(f"{name} is {age} years old")\n\ndescribe("Bob", 30)           # positional\ndescribe(age=25, name="Sue")  # keyword\ndescribe("Joe", age=40)       # mixed`,
    keyTakeaways: [
      "Positional arguments are matched by order.",
      "Keyword arguments are matched by parameter name.",
      "Keyword arguments can appear in any order.",
      "Positional arguments must come before keyword arguments."
    ],
    commonMistakes: [
      "Putting keyword arguments before positional ones (syntax error).",
      "Passing the same argument twice (once positional, once keyword).",
      "Misspelling a keyword argument name."
    ],
    whenToUse: "Use keyword arguments for clarity, especially with functions that have many parameters.",
    interviewTip: "Keyword arguments improve readability and prevent bugs when a function has many parameters.",
    tryYourself: "Call a function with 3 parameters using all keyword arguments."
  },
  "st-fn-4": {
    title: "Return Values",
    definition: "A return statement sends a value back from a function to the caller and ends the function.",
    explanation: "Use return to give back a result. If no return is executed, the function returns None. A function can return any type, and you can return multiple values as a tuple. Code after return never runs.",
    example: `def square(x):\n    return x * x\n\nresult = square(4)\nprint(result)  # 16\n\ndef min_max(nums):\n    return min(nums), max(nums)  # returns a tuple`,
    keyTakeaways: [
      "return sends a value back and exits the function.",
      "Without return, the function returns None.",
      "You can return multiple values (they come back as a tuple).",
      "Code after a return statement is unreachable."
    ],
    commonMistakes: [
      "Forgetting to return a value (function returns None).",
      "Printing instead of returning when the caller needs the value.",
      "Expecting multiple return statements to all execute."
    ],
    whenToUse: "Use return whenever the function should produce a result for the caller to use.",
    interviewTip: "Print is for humans, return is for code — never substitute one for the other.",
    tryYourself: "Write a function that takes two numbers and returns their product."
  },
  "st-fn-5": {
    title: "Variable Scope",
    definition: "Scope determines where a variable is accessible — local variables exist inside a function, global variables exist outside.",
    explanation: "Variables created inside a function are local — they can't be used outside. Variables created outside are global and can be read inside, but to modify them inside a function you need the 'global' keyword.",
    example: `x = 10  # global\n\ndef show():\n    y = 5  # local\n    print(x)  # can read global\n    print(y)\n\nshow()\n# print(y)  # Error: y is not defined here`,
    keyTakeaways: [
      "Local variables exist only inside the function.",
      "Global variables can be read inside functions.",
      "Use 'global' keyword to modify a global inside a function.",
      "Prefer passing arguments over using globals."
    ],
    commonMistakes: [
      "Trying to modify a global without 'global' (creates a local instead).",
      "Assuming local variables persist after the function ends.",
      "Overusing global variables, making code hard to debug."
    ],
    whenToUse: "Understand scope to avoid naming conflicts and manage data flow in functions.",
    interviewTip: "Avoid globals — pass data through parameters and return values for testable, predictable code.",
    tryYourself: "Write a function that tries to print a global variable, then test it."
  },
  "st-fn-6": {
    title: "Default Arguments",
    definition: "Default arguments provide a fallback value used when the caller doesn't supply one.",
    explanation: "You assign a default in the function signature with param=value. If the caller omits that argument, the default is used. Parameters with defaults must come after parameters without defaults.",
    example: `def greet(name, greeting="Hello"):\n    print(f"{greeting}, {name}!")\n\ngreet("Alice")           # Hello, Alice!\ngreet("Bob", "Hi")       # Hi, Bob!`,
    keyTakeaways: [
      "Defaults are used when the caller omits the argument.",
      "Defaulted parameters must come after non-defaulted ones.",
      "You can override defaults by passing a value.",
      "Avoid mutable defaults like lists — they persist between calls."
    ],
    commonMistakes: [
      "Putting a defaulted parameter before a non-defaulted one (syntax error).",
      "Using a mutable default like [] or {} — it's shared across calls.",
      "Assuming the default is re-created each call (it's not)."
    ],
    whenToUse: "Use defaults to make functions flexible while keeping common cases simple.",
    interviewTip: "The mutable default trap (def f(x=[])) is a classic interview question — use None instead.",
    tryYourself: "Write a function with a default greeting and call it with and without the second argument."
  },
  "st-fn-7": {
    title: "Keyword Arguments",
    definition: "Keyword arguments are passed by parameter name, making calls clearer and order-independent.",
    explanation: "Instead of relying on position, you write param=value at the call site. This improves readability and lets you skip optional parameters. You can also use **kwargs to accept any number of keyword arguments as a dictionary.",
    example: `def create_user(name, age, role="user"):\n    print(f"{name}, {age}, {role}")\n\ncreate_user(name="Eve", role="admin", age=28)\n\ndef show_all(**kwargs):\n    for k, v in kwargs.items():\n        print(k, v)\n\nshow_all(a=1, b=2)`,
    keyTakeaways: [
      "Keyword arguments are matched by name, not position.",
      "They make calls self-documenting.",
      "**kwargs collects extra keyword arguments into a dict.",
      "Order doesn't matter for keyword arguments."
    ],
    commonMistakes: [
      "Misspelling a keyword argument name (TypeError).",
      "Passing the same value twice (once positional, once keyword).",
      "Confusing **kwargs (dict) with *args (tuple)."
    ],
    whenToUse: "Use keyword arguments for clarity and when a function has many optional parameters.",
    interviewTip: "**kwargs is great for flexible APIs and forwarding arguments to other functions.",
    tryYourself: "Write a function that accepts **kwargs and prints each key-value pair."
  },
  "st-fn-8": {
    title: "Lambda Functions",
    definition: "A lambda is a small anonymous function defined in a single expression.",
    explanation: "Lambdas are useful for short, throwaway functions, especially as arguments to map(), filter(), and sorted(). They can have any number of parameters but only one expression, which is automatically returned.",
    example: `square = lambda x: x * x\nprint(square(5))  # 25\n\nnums = [3, 1, 2]\nsorted_nums = sorted(nums, key=lambda n: -n)  # [3, 2, 1]\n\ndoubled = list(map(lambda x: x * 2, [1, 2, 3]))\nprint(doubled)  # [2, 4, 6]`,
    keyTakeaways: [
      "Lambdas are single-expression anonymous functions.",
      "They return the expression's value automatically (no return keyword).",
      "Best for short operations passed to higher-order functions.",
      "Use def for anything more complex than one expression."
    ],
    commonMistakes: [
      "Trying to put multiple statements in a lambda (not allowed).",
      "Using lambda where a named function would be clearer.",
      "Forgetting that the expression is returned implicitly."
    ],
    whenToUse: "Use lambdas for short, inline functions, especially as keys or callbacks.",
    interviewTip: "Prefer named functions for readability — lambdas are best for one-liners like sort keys.",
    tryYourself: "Use a lambda with sorted() to sort strings by their length."
  },

  // ============================================================
  // PHASE 1 - DATA STRUCTURES
  // ============================================================
  "st-ds-1": {
    title: "Lists",
    definition: "A list is an ordered, mutable collection that can hold items of any type.",
    explanation: "Lists are created with square brackets. They support indexing, slicing, appending, inserting, and removing elements. Lists are dynamic — they grow and shrink as needed.",
    example: `fruits = ["apple", "banana", "cherry"]\nfruits.append("date")\nprint(fruits[0])     # apple\nprint(fruits[-1])    # date\nprint(fruits[1:3])   # ['banana', 'cherry']\nfruits.remove("banana")\nprint(len(fruits))   # 3`,
    keyTakeaways: [
      "Lists are ordered and mutable.",
      "Use append() to add, remove() to delete by value, pop() to remove by index.",
      "Negative indices count from the end.",
      "Slicing [start:stop] returns a sublist (stop is exclusive)."
    ],
    commonMistakes: [
      "Using = to copy a list (creates a reference, not a copy — use copy() or [:]).",
      "Expecting list1 + list2 to modify in place (it creates a new list).",
      "Indexing out of range (IndexError)."
    ],
    whenToUse: "Use lists for ordered collections that need to change size or be modified.",
    interviewTip: "Remember that list assignment shares the reference — use copy() or slicing to duplicate.",
    tryYourself: "Create a list of 5 numbers, append a 6th, and print the first and last elements."
  },
  "st-ds-2": {
    title: "Tuples",
    definition: "A tuple is an ordered, immutable collection of items.",
    explanation: "Tuples are like lists but cannot be changed after creation. They're created with parentheses (or just commas). Use them for fixed collections, like coordinates or function return values.",
    example: `point = (3, 4)\nprint(point[0])    # 3\nprint(len(point)) # 2\n\n# point[0] = 5  # Error: tuples are immutable\n\nx, y = point  # unpacking\nprint(x, y)    # 3 4`,
    keyTakeaways: [
      "Tuples are ordered and immutable.",
      "Created with parentheses or just commas.",
      "Support indexing and slicing like lists.",
      "Can be unpacked into multiple variables."
    ],
    commonMistakes: [
      "Trying to modify a tuple after creation (TypeError).",
      "Creating a single-element tuple without a trailing comma: (5) is just 5.",
      "Forgetting that tuples can contain mutable objects (like lists)."
    ],
    whenToUse: "Use tuples for fixed data that shouldn't change, like coordinates or constants.",
    interviewTip: "A single-element tuple needs a trailing comma: (5,) — a common trick question.",
    tryYourself: "Create a tuple with a person's name and age, then unpack it into two variables."
  },
  "st-ds-3": {
    title: "Sets",
    definition: "A set is an unordered collection of unique elements.",
    explanation: "Sets automatically remove duplicates and support mathematical set operations like union, intersection, and difference. They're created with curly braces or set().",
    example: `a = {1, 2, 3, 3}  # {1, 2, 3} — duplicates removed\nb = {3, 4, 5}\nprint(a | b)  # union: {1, 2, 3, 4, 5}\nprint(a & b)  # intersection: {3}\nprint(a - b)  # difference: {1, 2}\nprint(2 in a) # True`,
    keyTakeaways: [
      "Sets store only unique values — duplicates are removed.",
      "Support union (|), intersection (&), and difference (-).",
      "Sets are unordered — no indexing.",
      "Use 'in' for fast membership testing (O(1) average)."
    ],
    commonMistakes: [
      "Trying to index a set (sets are unordered — no s[0]).",
      "Creating an empty set with {} (that's a dict — use set()).",
      "Expecting sets to preserve insertion order."
    ],
    whenToUse: "Use sets to remove duplicates or perform mathematical set operations.",
    interviewTip: "Set membership is O(1) on average — much faster than checking 'in' on a list.",
    tryYourself: "Create a set from a list with duplicates and print it to confirm they're removed."
  },
  "st-ds-4": {
    title: "Dictionaries",
    definition: "A dictionary is an unordered collection of key-value pairs.",
    explanation: "Dictionaries map keys to values. Keys must be unique and immutable (strings, numbers, tuples). You access values by key, add new pairs with assignment, and iterate with .items().",
    example: `student = {"name": "Alice", "age": 20, "grade": "A"}\nprint(student["name"])      # Alice\nstudent["age"] = 21           # update\nstudent["city"] = "NYC"      # add new key\n\nfor key, value in student.items():\n    print(key, value)\n\nprint("name" in student)  # True`,
    keyTakeaways: [
      "Dictionaries store key-value pairs.",
      "Keys must be unique and immutable.",
      "Access values with dict[key], check keys with 'in'.",
      ".items() gives key-value pairs, .keys() and .values() for just one."
    ],
    commonMistakes: [
      "Accessing a missing key with [] (KeyError — use .get() instead).",
      "Using a mutable type like a list as a key (TypeError).",
      "Expecting dictionaries to maintain order (they do in Python 3.7+, but don't rely on it conceptually)."
    ],
    whenToUse: "Use dictionaries when you need to map keys to values, like a lookup table.",
    interviewTip: "Use .get(key, default) to avoid KeyError — it returns the default if the key is missing.",
    tryYourself: "Build a dictionary mapping three country names to their capitals and print each pair."
  },
  "st-ds-5": {
    title: "List Comprehensions",
    definition: "A list comprehension is a concise way to create lists using a single line with a loop and optional condition.",
    explanation: "The syntax is [expression for item in iterable if condition]. It's faster and more readable than building a list with a loop and append().",
    example: `squares = [x * x for x in range(5)]\nprint(squares)  # [0, 1, 4, 9, 16]\n\nevens = [x for x in range(10) if x % 2 == 0]\nprint(evens)  # [0, 2, 4, 6, 8]\n\npairs = [(x, y) for x in [1, 2] for y in [3, 4]]\nprint(pairs)  # [(1,3), (1,4), (2,3), (2,4)]`,
    keyTakeaways: [
      "Syntax: [expression for item in iterable if condition].",
      "More concise and often faster than a for loop with append().",
      "The condition is optional.",
      "Can nest multiple for clauses."
    ],
    commonMistakes: [
      "Making comprehensions too complex to read — use a regular loop instead.",
      "Forgetting that the expression comes before the for.",
      "Using comprehensions for side effects instead of building a list."
    ],
    whenToUse: "Use list comprehensions for simple transformations or filtering of iterables.",
    interviewTip: "If a comprehension spans more than one line, a regular for loop is usually more readable.",
    tryYourself: "Use a list comprehension to create a list of the first 5 cubes (1³, 2³, ...)."
  },
  "st-ds-6": {
    title: "Nested Data Structures",
    definition: "Nested data structures are collections inside collections, like lists of lists or dicts of lists.",
    explanation: "You can nest any combination of lists, dicts, tuples, and sets. Access nested elements with chained indexing. Common examples: a list of student records (each a dict), or a matrix (list of lists).",
    example: `students = [\n    {"name": "Alice", "scores": [85, 90, 78]},\n    {"name": "Bob", "scores": [70, 88, 92]}\n]\nprint(students[0]["name"])          # Alice\nprint(students[1]["scores"][2])      # 92\n\nmatrix = [[1, 2], [3, 4]]\nprint(matrix[0][1])  # 2`,
    keyTakeaways: [
      "You can nest lists, dicts, tuples, and sets inside each other.",
      "Access nested values with chained indexing: data[0][\"key\"][2].",
      "Common for tabular data, matrices, and JSON-like structures.",
      "Be careful with deep nesting — it can get hard to read."
    ],
    commonMistakes: [
      "Using the wrong index type (list[\"key\"] or dict[0]).",
      "Forgetting which level of nesting you're accessing.",
      "Modifying a nested structure while iterating over it."
    ],
    whenToUse: "Use nested structures for complex data like records, matrices, or hierarchical data.",
    interviewTip: "When working with nested data, print each level to understand the structure before coding.",
    tryYourself: "Create a list of 2 dicts, each with a 'name' and 'hobbies' list, and print the second hobby of the first person."
  },

  // ============================================================
  // PHASE 1 - OOP
  // ============================================================
  "st-oop-1": {
    title: "Classes",
    definition: "A class is a blueprint for creating objects that groups data and behavior together.",
    explanation: "Define a class with the 'class' keyword. Inside, you define attributes (data) and methods (functions). Classes let you model real-world entities and reuse code through instantiation.",
    example: `class Dog:\n    species = "Canis lupus"  # class attribute\n\n    def __init__(self, name):\n        self.name = name  # instance attribute\n\n    def bark(self):\n        return f"{self.name} says woof!"\n\nmy_dog = Dog("Rex")\nprint(my_dog.bark())  # Rex says woof!`,
    keyTakeaways: [
      "A class is a template; an object is an instance of a class.",
      "Class attributes are shared; instance attributes are per-object.",
      "Methods are functions defined inside a class.",
      "Use PascalCase for class names by convention."
    ],
    commonMistakes: [
      "Forgetting 'self' as the first parameter of methods.",
      "Confusing class attributes with instance attributes.",
      "Forgetting the colon after the class name."
    ],
    whenToUse: "Use classes when you need to model entities with both data and behavior.",
    interviewTip: "Classes shine when you have multiple instances sharing behavior but holding different data.",
    tryYourself: "Create a Car class with a brand attribute and a method that returns the brand."
  },
  "st-oop-2": {
    title: "Objects",
    definition: "An object is an instance of a class that holds its own data and can use the class's methods.",
    explanation: "You create an object by calling the class name like a function. Each object has its own copy of instance attributes but shares the class's methods. Multiple objects can be created from one class.",
    example: `class Cat:\n    def __init__(self, name):\n        self.name = name\n\ncat1 = Cat("Whiskers")\ncat2 = Cat("Mittens")\nprint(cat1.name)  # Whiskers\nprint(cat2.name)  # Mittens`,
    keyTakeaways: [
      "An object is created by calling the class name.",
      "Each object has its own instance attribute values.",
      "Objects share the class's methods.",
      "Use isinstance() to check an object's class."
    ],
    commonMistakes: [
      "Confusing the class with an instance (Dog vs Dog('Rex')).",
      "Forgetting to pass required arguments when creating an object.",
      "Assuming two objects share instance data (they don't)."
    ],
    whenToUse: "Create objects when you need individual instances with their own data.",
    interviewTip: "Each object is independent — changing one instance's attributes doesn't affect others.",
    tryYourself: "Create two objects from the same class and show they have different attribute values."
  },
  "st-oop-3": {
    title: "Constructors",
    definition: "A constructor is a special method that initializes a new object's attributes when it's created.",
    explanation: "In Python, the constructor is the __init__ method. It runs automatically when you create an object. It takes 'self' plus any parameters needed to set up the object's initial state.",
    example: `class Book:\n    def __init__(self, title, author):\n        self.title = title\n        self.author = author\n\nb = Book("1984", "Orwell")\nprint(b.title)   # 1984\nprint(b.author)  # Orwell`,
    keyTakeaways: [
      "__init__ is the constructor — it runs on object creation.",
      "It takes 'self' as the first parameter.",
      "Use it to set initial attribute values.",
      "It doesn't return anything (returns None implicitly)."
    ],
    commonMistakes: [
      "Forgetting 'self' as the first parameter.",
      "Returning a value from __init__ (not allowed).",
      "Forgetting to pass arguments when creating the object."
    ],
    whenToUse: "Use the constructor to set up an object's initial state when it's created.",
    interviewTip: "__init__ doesn't create the object — it initializes it. Object creation is handled by __new__.",
    tryYourself: "Add a constructor to a Student class that sets name and grade from parameters."
  },
  "st-oop-4": {
    title: "Instance Variables",
    definition: "Instance variables are attributes unique to each object, stored on the instance via 'self'.",
    explanation: "Instance variables are set in __init__ (or other methods) using self.variable = value. Each object has its own copy. They differ from class variables, which are shared across all instances.",
    example: `class Account:\n    bank = "MyBank"  # class variable, shared\n\n    def __init__(self, owner, balance):\n        self.owner = owner      # instance variable\n        self.balance = balance  # instance variable\n\na1 = Account("Alice", 100)\na2 = Account("Bob", 200)\nprint(a1.balance, a2.balance)  # 100 200`,
    keyTakeaways: [
      "Instance variables are unique per object.",
      "Set with self.name = value inside methods.",
      "Class variables are shared; instance variables are not.",
      "Access them with object.variable_name."
    ],
    commonMistakes: [
      "Defining instance variables at class level (they become class variables).",
      "Forgetting to use 'self.' when assigning in __init__.",
      "Expecting a change to one object's variable to affect others."
    ],
    whenToUse: "Use instance variables for data that differs between objects.",
    interviewTip: "Class variables are shared; instance variables are per-object — know the difference cold.",
    tryYourself: "Create a class where each object has a unique ID, and demonstrate two objects have different IDs."
  },
  "st-oop-5": {
    title: "Methods",
    definition: "Methods are functions defined inside a class that operate on the object's data.",
    explanation: "Methods always take 'self' as the first parameter, which refers to the current object. They can read and modify instance variables and call other methods. Call them with object.method().",
    example: `class Counter:\n    def __init__(self):\n        self.count = 0\n\n    def increment(self):\n        self.count += 1\n\n    def show(self):\n        return self.count\n\nc = Counter()\nc.increment()\nc.increment()\nprint(c.show())  # 2`,
    keyTakeaways: [
      "Methods are functions bound to a class.",
      "'self' refers to the current instance.",
      "Call methods with object.method().",
      "Methods can access and modify instance variables."
    ],
    commonMistakes: [
      "Forgetting 'self' as the first parameter.",
      "Calling a method without parentheses (just references it).",
      "Confusing 'self' with the class name."
    ],
    whenToUse: "Use methods to define the behavior of objects.",
    interviewTip: "'self' is just a convention — you could name it anything, but never do in practice.",
    tryYourself: "Add a method to a Rectangle class that calculates and returns the area."
  },
  "st-oop-6": {
    title: "Inheritance",
    definition: "Inheritance lets a class (child) reuse and extend the attributes and methods of another class (parent).",
    explanation: "The child class is defined with class Child(Parent). It inherits all parent methods and can override or add new ones. Use super() to call the parent's methods, including its constructor.",
    example: `class Animal:\n    def __init__(self, name):\n        self.name = name\n\n    def speak(self):\n        return f"{self.name} makes a sound"\n\nclass Dog(Animal):\n    def speak(self):\n        return f"{self.name} says woof"\n\nd = Dog("Rex")\nprint(d.speak())  # Rex says woof`,
    keyTakeaways: [
      "A child class inherits from a parent class.",
      "Use super() to call parent methods.",
      "Child classes can override parent methods.",
      "Inheritance promotes code reuse."
    ],
    commonMistakes: [
      "Forgetting to call super().__init__() when the parent has a constructor.",
      "Overriding a method without understanding the parent's behavior.",
      "Creating deep inheritance hierarchies that are hard to maintain."
    ],
    whenToUse: "Use inheritance when one class is a specialized version of another.",
    interviewTip: "Prefer composition over inheritance when behavior, not identity, is shared.",
    tryYourself: "Create a Vehicle class and a Car subclass that adds a number_of_wheels attribute."
  },
  "st-oop-7": {
    title: "Polymorphism",
    definition: "Polymorphism lets different classes be used through the same interface, each responding in its own way.",
    explanation: "Objects of different classes can be treated as if they're the same type if they share a method name. A function can call that method on any object without knowing its specific class.",
    example: `class Dog:\n    def speak(self):\n        return "Woof"\n\nclass Cat:\n    def speak(self):\n        return "Meow"\n\ndef make_sound(animal):\n    print(animal.speak())\n\nmake_sound(Dog())  # Woof\nmake_sound(Cat())  # Meow`,
    keyTakeaways: [
      "Different classes can share a method interface.",
      "The same function call works on different object types.",
      "Polymorphism often comes from inheritance or duck typing.",
      "Python uses duck typing — if it has the method, it works."
    ],
    commonMistakes: [
      "Assuming polymorphism requires inheritance (Python uses duck typing).",
      "Calling a method that doesn't exist on an object (AttributeError).",
      "Overcomplicating with type checks instead of trusting the interface."
    ],
    whenToUse: "Use polymorphism to write code that works with multiple types through a shared interface.",
    interviewTip: "Python's duck typing means you don't need inheritance for polymorphism — just matching method names.",
    tryYourself: "Create two classes with a 'draw' method and a function that calls draw on either."
  },
  "st-oop-8": {
    title: "Encapsulation",
    definition: "Encapsulation bundles data and methods together and restricts direct access to internal state.",
    explanation: "In Python, encapsulation is a convention. Prefix attributes with _ for 'protected' (signal: don't touch) and __ for 'private' (name mangling). Use getter and setter methods or @property to control access.",
    example: `class BankAccount:\n    def __init__(self, balance):\n        self.__balance = balance  # private\n\n    @property\n    def balance(self):\n        return self.__balance\n\n    def deposit(self, amount):\n        if amount > 0:\n            self.__balance += amount\n\nacc = BankAccount(100)\nacc.deposit(50)\nprint(acc.balance)  # 150\n# acc.__balance  # AttributeError (name-mangled)`,
    keyTakeaways: [
      "Encapsulation hides internal state from outside access.",
      "Use _ for protected, __ for private (name-mangled) attributes.",
      "Use @property for controlled read access.",
      "Python doesn't enforce privacy — it's a convention."
    ],
    commonMistakes: [
      "Thinking __ makes attributes truly private (it's name-mangling, not security).",
      "Accessing 'private' attributes directly instead of through methods.",
      "Not using setters to validate data before assignment."
    ],
    whenToUse: "Use encapsulation to protect data from unintended modification.",
    interviewTip: "Python's privacy is by convention — __ triggers name mangling, not real access control.",
    tryYourself: "Create a class with a private __password attribute and a method to check a guess against it."
  },
  "st-oop-9": {
    title: "Abstraction",
    definition: "Abstraction hides complex implementation details and shows only essential features.",
    explanation: "Use the abc module to define abstract base classes with @abstractmethod. Subclasses must implement these methods. Abstraction lets you define an interface without implementation.",
    example: `from abc import ABC, abstractmethod\n\nclass Shape(ABC):\n    @abstractmethod\n    def area(self):\n        pass\n\nclass Circle(Shape):\n    def __init__(self, radius):\n        self.radius = radius\n\n    def area(self):\n        return 3.14 * self.radius ** 2\n\n# s = Shape()  # Error: can't instantiate abstract class\nc = Circle(5)\nprint(c.area())  # 78.5`,
    keyTakeaways: [
      "Abstraction shows what an object does, not how.",
      "Use ABC and @abstractmethod to enforce implementation.",
      "Abstract classes can't be instantiated directly.",
      "Subclasses must implement all abstract methods."
    ],
    commonMistakes: [
      "Trying to instantiate an abstract class directly.",
      "Forgetting to implement an abstract method in a subclass (TypeError).",
      "Confusing abstraction (interface) with encapsulation (hiding data)."
    ],
    whenToUse: "Use abstraction to define interfaces that subclasses must implement.",
    interviewTip: "Abstraction defines the 'what'; implementation defines the 'how' — ABCs enforce the contract.",
    tryYourself: "Create an abstract class Vehicle with an abstract method start_engine, then implement it in a Car subclass."
  },

  // ============================================================
  // PHASE 1 - EXCEPTION AND FILE HANDLING
  // ============================================================
  "st-ef-1": {
    title: "Try",
    definition: "The try block wraps code that might raise an exception, allowing you to handle errors gracefully.",
    explanation: "Place risky code (like division, file access, or parsing) inside a try block. If an exception occurs, Python jumps to the matching except block instead of crashing.",
    example: `try:\n    result = 10 / 0\nexcept ZeroDivisionError:\n    print("Cannot divide by zero!")`,
    keyTakeaways: [
      "try wraps code that might fail.",
      "If an exception occurs, execution jumps to except.",
      "Without try, an unhandled exception crashes the program.",
      "Only catch exceptions you expect and can handle."
    ],
    commonMistakes: [
      "Catching too broadly with bare 'except:' (hides all bugs).",
      "Not catching the specific exception type.",
      "Putting too much code in try — only wrap the risky part."
    ],
    whenToUse: "Use try when code might fail at runtime and you want to handle it instead of crashing.",
    interviewTip: "Keep try blocks as small as possible — only wrap the line that might actually fail.",
    tryYourself: "Wrap an int('abc') conversion in a try block and catch the ValueError."
  },
  "st-ef-2": {
    title: "Except",
    definition: "The except block runs when a specific exception occurs in the try block.",
    explanation: "You can catch specific exception types (e.g., ValueError, FileNotFoundError) or use a tuple to catch multiple. A bare except catches everything but is discouraged. You can have multiple except blocks.",
    example: `try:\n    num = int("hello")\nexcept ValueError:\n    print("That's not a number!")\nexcept TypeError:\n    print("Wrong type!")\n\ntry:\n    value = int(input())\nexcept (ValueError, KeyboardInterrupt):\n    print("Invalid input or cancelled")`,
    keyTakeaways: [
      "Catch specific exceptions, not bare 'except:'.",
      "Multiple except blocks handle different error types.",
      "You can catch multiple types with a tuple.",
      "The first matching except block runs."
    ],
    commonMistakes: [
      "Using bare 'except:' which hides unexpected errors.",
      "Catching Exception too broadly, masking bugs.",
      "Not ordering except blocks from specific to general."
    ],
    whenToUse: "Use except to respond to specific errors like invalid input or missing files.",
    interviewTip: "Always catch the most specific exception first — Python checks except blocks top to bottom.",
    tryYourself: "Write a try block that opens a file and catch FileNotFoundError with a friendly message."
  },
  "st-ef-3": {
    title: "Finally",
    definition: "The finally block runs no matter what — whether an exception occurred or not.",
    explanation: "finally is used for cleanup code like closing files or releasing resources. It executes after the try and except blocks, even if an exception wasn't caught or a return was hit.",
    example: `f = None\ntry:\n    f = open("data.txt")\n    content = f.read()\nexcept FileNotFoundError:\n    print("File not found")\nfinally:\n    if f:\n        f.close()\n    print("Cleanup done")`,
    keyTakeaways: [
      "finally always runs, exception or not.",
      "Use it for cleanup: closing files, releasing locks.",
      "It runs even if try or except has a return.",
      "If an exception isn't caught, finally runs before it propagates."
    ],
    commonMistakes: [
      "Putting business logic in finally instead of cleanup.",
      "Forgetting that finally runs even on success.",
      "Not checking if a resource was opened before closing it in finally."
    ],
    whenToUse: "Use finally to guarantee cleanup, like closing files or database connections.",
    interviewTip: "finally runs even if you return in try — it's the last thing to execute before the return completes.",
    tryYourself: "Write a try-except-finally where finally prints 'Done' regardless of outcome."
  },
  "st-ef-4": {
    title: "Custom Exceptions",
    definition: "Custom exceptions are user-defined exception classes for application-specific error conditions.",
    explanation: "Create a custom exception by subclassing Exception (or a more specific built-in). Add an __init__ to store a custom message. This makes error handling more meaningful and domain-specific.",
    example: `class InvalidAgeError(Exception):\n    def __init__(self, age):\n        super().__init__(f"Age {age} is invalid. Must be 0-120.")\n\ndef set_age(age):\n    if age < 0 or age > 120:\n        raise InvalidAgeError(age)\n    print(f"Age set to {age}")\n\ntry:\n    set_age(-5)\nexcept InvalidAgeError as e:\n    print(e)`,
    keyTakeaways: [
      "Custom exceptions subclass Exception or a built-in.",
      "They make error handling more descriptive.",
      "Raise them with the 'raise' keyword.",
      "Catch them with except YourCustomError."
    ],
    commonMistakes: [
      "Subclassing BaseException instead of Exception (not caught by bare except).",
      "Not calling super().__init__() in the custom exception.",
      "Using custom exceptions when built-in ones would suffice."
    ],
    whenToUse: "Use custom exceptions for domain-specific errors that built-in exceptions don't cover.",
    interviewTip: "Always inherit from Exception, not BaseException — the latter is for system-exit errors.",
    tryYourself: "Create a custom exception called NegativeNumberError and raise it when a negative value is passed."
  },
  "st-ef-5": {
    title: "Reading Files",
    definition: "Reading files loads their content into your program for processing.",
    explanation: "Use open() with a file path and mode 'r' (read). The safest approach is the 'with' statement, which closes the file automatically. Read the whole file with read(), line by line with a for loop, or all lines into a list with readlines().",
    example: `with open("notes.txt", "r") as f:\n    content = f.read()  # entire file as one string\n    print(content)\n\nwith open("notes.txt", "r") as f:\n    for line in f:       # one line at a time\n        print(line.strip())`,
    keyTakeaways: [
      "Use 'with open()' to auto-close the file.",
      "read() gets everything; iterating gets lines one by one.",
      "Use .strip() to remove the trailing newline from each line.",
      "Mode 'r' is for reading (and is the default)."
    ],
    commonMistakes: [
      "Forgetting to close the file when not using 'with'.",
      "Not stripping newlines, causing extra blank lines in output.",
      "Reading huge files entirely into memory instead of line by line."
    ],
    whenToUse: "Use file reading when you need to process data stored in text files.",
    interviewTip: "Always use 'with' — it guarantees the file closes even if an exception occurs.",
    tryYourself: "Read a file line by line and print only lines that contain the word 'error'."
  },
  "st-ef-6": {
    title: "Writing Files",
    definition: "Writing files saves data from your program to disk for later use.",
    explanation: "Use open() with mode 'w' (write — overwrites) or 'a' (append — adds to end). The 'with' statement ensures the file is closed. Use write() for a string or writelines() for a list of strings.",
    example: `with open("output.txt", "w") as f:\n    f.write("Hello, file!\\n")\n    f.write("Second line\\n")\n\nwith open("output.txt", "a") as f:\n    f.write("Appended line\\n")`,
    keyTakeaways: [
      "Mode 'w' overwrites; mode 'a' appends.",
      "write() doesn't add newlines — you must add them.",
      "Use 'with' to ensure the file is closed.",
      "'w' creates the file if it doesn't exist."
    ],
    commonMistakes: [
      "Using 'w' when you meant 'a', accidentally erasing data.",
      "Forgetting to add '\\n' at the end of lines.",
      "Not closing the file, leaving data unwritten (buffered)."
    ],
    whenToUse: "Use file writing to save logs, results, or user-generated content.",
    interviewTip: "Remember that 'w' truncates the file — if you need to keep existing content, use 'a'.",
    tryYourself: "Write three lines of text to a file, then append a fourth line."
  },
  "st-ef-7": {
    title: "File Modes",
    definition: "File modes determine how a file is opened — for reading, writing, appending, or binary access.",
    explanation: "Common modes: 'r' (read), 'w' (write/overwrite), 'a' (append), 'r+' (read and write). Add 'b' for binary (e.g., 'rb', 'wb'). The mode is passed as the second argument to open().",
    example: `# Read text\nwith open("file.txt", "r") as f:\n    print(f.read())\n\n# Write binary\nwith open("image.png", "rb") as f:\n    data = f.read()\n\n# Append text\nwith open("log.txt", "a") as f:\n    f.write("New entry\\n")`,
    keyTakeaways: [
      "'r' = read, 'w' = write (truncate), 'a' = append.",
      "Add 'b' for binary mode (images, PDFs, etc.).",
      "'r+' opens for both reading and writing.",
      "'x' creates a file but fails if it already exists."
    ],
    commonMistakes: [
      "Opening a text file in binary mode or vice versa.",
      "Using 'w' on an existing file and losing its contents.",
      "Forgetting 'b' when reading non-text files like images."
    ],
    whenToUse: "Choose the mode based on whether you're reading, writing, appending, or working with binary data.",
    interviewTip: "Use 'x' mode when you want to create a file only if it doesn't already exist — it prevents accidental overwrites.",
    tryYourself: "Open a file in 'a' mode, write a line, and confirm the old content is preserved."
  },

  // ============================================================
  // PHASE 2 - ARRAYS AND STRINGS
  // ============================================================
  "st-arr-1": {
    title: "Array Operations",
    definition: "Array operations include traversal, insertion, deletion, searching, and updating elements in an array.",
    explanation: "In Python, lists serve as dynamic arrays. Common operations: access by index (O(1)), append (O(1) amortized), insert at index (O(n)), delete by value or index (O(n)), and search with 'in' (O(n)).",
    example: `arr = [10, 20, 30, 40]\narr.append(50)        # [10, 20, 30, 40, 50]\narr.insert(1, 15)     # [10, 15, 20, 30, 40, 50]\narr.remove(20)        # [10, 15, 30, 40, 50]\nprint(arr[2])         # 30\nprint(30 in arr)      # True\nprint(arr.index(40))  # 4`,
    keyTakeaways: [
      "Index access is O(1).",
      "Append is O(1) amortized; insert/delete at middle is O(n).",
      "Search with 'in' or .index() is O(n).",
      "Slicing creates a new list (O(k) where k is slice size)."
    ],
    commonMistakes: [
      "Using insert() at the front of a large list (O(n) shift).",
      "Modifying a list while iterating over it.",
      "Confusing .remove(value) with del list[index]."
    ],
    whenToUse: "Use array operations for basic data manipulation when order matters and random access is needed.",
    interviewTip: "Know the time complexity of each operation — insert at index 0 is O(n), not O(1).",
    tryYourself: "Create a list, insert a value at index 2, remove the last element, and print the result."
  },
  "st-arr-2": {
    title: "Two Pointers",
    definition: "The two pointers technique uses two indices to traverse an array from different directions or speeds to solve problems efficiently.",
    explanation: "Common patterns: two pointers from both ends moving inward (e.g., reverse or palindrome check), or a fast and slow pointer (e.g., finding duplicates or cycles). It often reduces O(n²) to O(n).",
    example: `def is_palindrome(s):\n    left, right = 0, len(s) - 1\n    while left < right:\n        if s[left] != s[right]:\n            return False\n        left += 1\n        right -= 1\n    return True\n\nprint(is_palindrome("racecar"))  # True\n\ndef two_sum_sorted(nums, target):\n    left, right = 0, len(nums) - 1\n    while left < right:\n        total = nums[left] + nums[right]\n        if total == target:\n            return [left, right]\n        elif total < target:\n            left += 1\n        else:\n            right -= 1`,
    keyTakeaways: [
      "Two pointers often reduce O(n²) brute force to O(n).",
      "Works on sorted arrays for pair-finding problems.",
      "Pointers can move from both ends or at different speeds.",
      "No extra space needed (O(1) space)."
    ],
    commonMistakes: [
      "Forgetting to sort the array first for pair-finding patterns.",
      "Moving the wrong pointer, causing infinite loops.",
      "Not handling the case where pointers cross."
    ],
    whenToUse: "Use two pointers for sorted array problems, palindromes, or pair-sum problems.",
    interviewTip: "If the array is sorted and you need a pair, think two pointers before anything else.",
    tryYourself: "Use two pointers to reverse a list in place."
  },
  "st-arr-3": {
    title: "Sliding Window",
    definition: "The sliding window technique maintains a subset (window) of elements that slides across an array to find optimal subranges efficiently.",
    explanation: "Instead of recomputing from scratch for each position, you add the new element and remove the old one as the window moves. This reduces O(n*k) to O(n). Common for finding max sum subarrays or longest substring problems.",
    example: `def max_sum_subarray(arr, k):\n    window_sum = sum(arr[:k])\n    max_sum = window_sum\n    for i in range(k, len(arr)):\n        window_sum += arr[i] - arr[i - k]\n        max_sum = max(max_sum, window_sum)\n    return max_sum\n\nprint(max_sum_subarray([1, 4, 2, 10, 23, 3, 1], 3))  # 36`,
    keyTakeaways: [
      "Sliding window reduces repeated computation to O(n).",
      "Add the new element, subtract the old one as the window moves.",
      "Great for fixed-size or variable-size subarray problems.",
      "Maintain a running sum/count instead of recomputing."
    ],
    commonMistakes: [
      "Recomputing the window sum from scratch each time (defeats the purpose).",
      "Not handling the initial window correctly.",
      "Forgetting to update the result when the window shrinks."
    ],
    whenToUse: "Use sliding window for subarray/substring problems involving sums, counts, or lengths.",
    interviewTip: "If a problem asks for the max/min/longest contiguous subarray, sliding window is a strong first thought.",
    tryYourself: "Find the maximum sum of any 2-element window in [5, 2, 8, 1, 9]."
  },
  "st-arr-4": {
    title: "String Manipulation",
    definition: "String manipulation involves transforming, splitting, joining, and searching text data.",
    explanation: "Strings are immutable in Python — operations return new strings. Common methods: split(), join(), replace(), strip(), upper(), lower(), find(), startswith(), endswith(). Slicing works like lists.",
    example: `text = "  Hello, World  "\nclean = text.strip()           # "Hello, World"\nwords = clean.split(", ")      # ["Hello", "World"]\njoined = "-".join(words)       # "Hello-World"\nreplaced = clean.replace("World", "Python")  # "Hello, Python"\nprint(clean.upper())           # "HELLO, WORLD"\nprint(clean[::-1])             # reverse: "dlroW ,olleH"`,
    keyTakeaways: [
      "Strings are immutable — methods return new strings.",
      "split() breaks on a delimiter; join() combines with one.",
      "strip() removes leading/trailing whitespace.",
      "Slicing [::-1] reverses a string."
    ],
    commonMistakes: [
      "Forgetting that string methods return new strings (not in-place).",
      "Using join() on non-string elements (convert first).",
      "Not handling case sensitivity in comparisons."
    ],
    whenToUse: "Use string manipulation for parsing, cleaning, and transforming text data.",
    interviewTip: "Remember strings are immutable — chaining methods like text.strip().lower().split() is common and safe.",
    tryYourself: "Take a sentence, split it into words, reverse each word, and join them back."
  },

  // ============================================================
  // PHASE 2 - LINKED LISTS
  // ============================================================
  "st-ll-1": {
    title: "Singly Linked Lists",
    definition: "A singly linked list is a linear data structure where each node points to the next node, ending with null.",
    explanation: "Each node has a value and a 'next' pointer. The head points to the first node. Unlike arrays, linked lists don't support random access — you traverse from the head. Insertion and deletion at the head are O(1).",
    example: `class Node:\n    def __init__(self, val):\n        self.val = val\n        self.next = None\n\nclass LinkedList:\n    def __init__(self):\n        self.head = None\n\n    def prepend(self, val):\n        node = Node(val)\n        node.next = self.head\n        self.head = node\n\n    def display(self):\n        cur = self.head\n        while cur:\n            print(cur.val, end=" -> ")\n            cur = cur.next\n        print("None")\n\nll = LinkedList()\nll.prepend(3)\nll.prepend(2)\nll.prepend(1)\nll.display()  # 1 -> 2 -> 3 -> None`,
    keyTakeaways: [
      "Each node stores a value and a pointer to the next node.",
      "Head insertion is O(1); access by index is O(n).",
      "No random access — must traverse from the head.",
      "The last node's next is None."
    ],
    commonMistakes: [
      "Losing the head reference when modifying the list.",
      "Forgetting to update next pointers during insertion/deletion.",
      "Creating a cycle by not setting the new node's next to None."
    ],
    whenToUse: "Use singly linked lists when you need frequent insertions/deletions at the beginning and don't need random access.",
    interviewTip: "Always draw the pointers on paper — linked list bugs come from wrong pointer updates.",
    tryYourself: "Add an append method that inserts at the end of the list."
  },
  "st-ll-2": {
    title: "Doubly Linked Lists",
    definition: "A doubly linked list has nodes with both next and prev pointers, allowing traversal in both directions.",
    explanation: "Each node stores a value, a next pointer, and a prev pointer. This enables O(1) deletion if you have a reference to the node, and backward traversal. It uses more memory than singly linked lists.",
    example: `class Node:\n    def __init__(self, val):\n        self.val = val\n        self.next = None\n        self.prev = None\n\nclass DoublyLinkedList:\n    def __init__(self):\n        self.head = None\n\n    def prepend(self, val):\n        node = Node(val)\n        node.next = self.head\n        if self.head:\n            self.head.prev = node\n        self.head = node`,
    keyTakeaways: [
      "Each node has next and prev pointers.",
      "Enables bidirectional traversal.",
      "O(1) deletion when you have the node reference.",
      "Uses more memory than singly linked lists."
    ],
    commonMistakes: [
      "Forgetting to update the prev pointer on insertion/deletion.",
      "Not handling the case where head is None.",
      "Creating inconsistent links between next and prev."
    ],
    whenToUse: "Use doubly linked lists when you need backward traversal or O(1) deletion at known positions.",
    interviewTip: "Doubly linked lists are the backbone of LRU caches — combined with a hash map for O(1) access.",
    tryYourself: "Add a method to print the list in reverse using prev pointers."
  },
  "st-ll-3": {
    title: "Cycle Detection",
    definition: "Cycle detection determines whether a linked list contains a loop where a node's next points back to an earlier node.",
    explanation: "Floyd's algorithm uses two pointers: a slow pointer (1 step) and a fast pointer (2 steps). If they meet, there's a cycle. If fast reaches None, there's no cycle. This is O(n) time and O(1) space.",
    example: `def has_cycle(head):\n    slow = fast = head\n    while fast and fast.next:\n        slow = slow.next\n        fast = fast.next.next\n        if slow == fast:\n            return True\n    return False`,
    keyTakeaways: [
      "Floyd's algorithm uses slow and fast pointers.",
      "If they meet, a cycle exists.",
      "If fast reaches None, no cycle.",
      "O(n) time, O(1) space — no extra memory needed."
    ],
    commonMistakes: [
      "Not checking fast and fast.next before accessing fast.next.next (NullPointerException).",
      "Using a hash set (works but uses O(n) space).",
      "Starting both pointers at the same position incorrectly."
    ],
    whenToUse: "Use cycle detection to verify linked list integrity or detect infinite loops.",
    interviewTip: "Floyd's algorithm is the classic answer — know it cold and be able to explain why it works.",
    tryYourself: "Extend the function to find the start node of the cycle, not just detect it."
  },
  "st-ll-4": {
    title: "Reversal",
    definition: "Linked list reversal changes the direction of all next pointers so the last node becomes the head.",
    explanation: "Iterate through the list, keeping track of prev, current, and next. At each step, set current.next to prev, then move all three forward. The final prev becomes the new head.",
    example: `def reverse(head):\n    prev = None\n    current = head\n    while current:\n        nxt = current.next   # save next\n        current.next = prev  # reverse pointer\n        prev = current       # move prev forward\n        current = nxt        # move current forward\n    return prev  # new head`,
    keyTakeaways: [
      "Reversal flips all next pointers.",
      "Keep prev, current, and next variables.",
      "The old tail becomes the new head.",
      "O(n) time, O(1) space for the iterative version."
    ],
    commonMistakes: [
      "Losing the rest of the list by not saving next before reversing.",
      "Forgetting to return the new head (prev at the end).",
      "Not handling an empty list (head is None)."
    ],
    whenToUse: "Use reversal for problems involving palindrome checks, reorder, or undo operations.",
    interviewTip: "Save next before flipping the pointer — forgetting this is the #1 reversal bug.",
    tryYourself: "Write a recursive version of linked list reversal."
  },

  // ============================================================
  // PHASE 2 - STACKS AND QUEUES
  // ============================================================
  "st-sq-1": {
    title: "Stack Operations",
    definition: "A stack is a LIFO (Last In, First Out) structure where you add and remove from the same end (the top).",
    explanation: "Use a Python list with append() (push) and pop() (remove from top). Peek at the top with stack[-1]. Stacks are used for undo, function call management, and expression evaluation.",
    example: `stack = []\nstack.append(1)  # push\nstack.append(2)\nstack.append(3)\nprint(stack[-1])  # peek: 3\nprint(stack.pop())  # pop: 3\nprint(stack)  # [1, 2]`,
    keyTakeaways: [
      "LIFO: last item added is first removed.",
      "push = append(), pop = pop(), peek = stack[-1].",
      "All operations are O(1).",
      "Used for undo, backtracking, and call stacks."
    ],
    commonMistakes: [
      "Popping from an empty stack (IndexError).",
      "Confusing LIFO with FIFO (queue behavior).",
      "Using insert(0, ...) which is O(n), not O(1)."
    ],
    whenToUse: "Use stacks for LIFO behavior: undo, backtracking, balanced parentheses, or DFS.",
    interviewTip: "Think stack whenever a problem involves matching, nesting, or 'most recent' order.",
    tryYourself: "Use a stack to check if a string of parentheses is balanced."
  },
  "st-sq-2": {
    title: "Queue Operations",
    definition: "A queue is a FIFO (First In, First Out) structure where items are added at the back and removed from the front.",
    explanation: "Use collections.deque for efficient O(1) operations: append() to enqueue, popleft() to dequeue. Lists work but pop(0) is O(n). Queues are used for BFS, scheduling, and buffering.",
    example: `from collections import deque\n\nqueue = deque()\nqueue.append("a")  # enqueue\nqueue.append("b")\nqueue.append("c")\nprint(queue.popleft())  # dequeue: 'a'\nprint(queue)  # deque(['b', 'c'])`,
    keyTakeaways: [
      "FIFO: first item added is first removed.",
      "Use deque for O(1) enqueue and dequeue.",
      "append() adds to back; popleft() removes from front.",
      "Used for BFS, task scheduling, and buffering."
    ],
    commonMistakes: [
      "Using list.pop(0) which is O(n) — use deque instead.",
      "Confusing FIFO with LIFO (stack behavior).",
      "Not checking if the queue is empty before dequeuing."
    ],
    whenToUse: "Use queues for FIFO behavior: BFS, task scheduling, print queues.",
    interviewTip: "Always use deque for queues — list.pop(0) is O(n) and will time out on large inputs.",
    tryYourself: "Simulate a print queue: add 3 jobs and process them in order."
  },
  "st-sq-3": {
    title: "Deque",
    definition: "A deque (double-ended queue) allows adding and removing from both ends in O(1) time.",
    explanation: "Python's collections.deque supports append(), appendleft(), pop(), and popleft() — all O(1). It's more efficient than a list for front operations and is used for sliding windows and palindromes.",
    example: `from collections import deque\n\nd = deque([1, 2, 3])\nd.appendleft(0)   # deque([0, 1, 2, 3])\nd.append(4)       # deque([0, 1, 2, 3, 4])\nd.popleft()       # 0\nd.pop()           # 4\nprint(d)           # deque([1, 2, 3])`,
    keyTakeaways: [
      "Deque supports O(1) operations on both ends.",
      "appendleft/popleft for the front; append/pop for the back.",
      "More efficient than lists for front insertions/deletions.",
      "Used as both stack and queue."
    ],
    commonMistakes: [
      "Using a list when deque is needed for front operations.",
      "Confusing popleft() with pop() (front vs back).",
      "Not importing from collections."
    ],
    whenToUse: "Use deque when you need efficient operations on both ends, like sliding window problems.",
    interviewTip: "deque is the go-to for sliding window problems — O(1) on both ends is essential.",
    tryYourself: "Use a deque to check if a string is a palindrome by comparing from both ends."
  },
  "st-sq-4": {
    title: "Applications",
    definition: "Stacks and queues are foundational structures used in many algorithms and real-world systems.",
    explanation: "Stacks power: function call management, undo/redo, expression evaluation, DFS, and balanced parentheses. Queues power: BFS, scheduling, buffering, and message passing. Deques handle sliding windows.",
    example: `# Stack: balanced parentheses\ndef is_balanced(s):\n    stack = []\n    for ch in s:\n        if ch == "(":\n            stack.append(ch)\n        elif ch == ")":\n            if not stack:\n                return False\n            stack.pop()\n    return len(stack) == 0\n\nprint(is_balanced("(())"))  # True\n\n# Queue: BFS\nfrom collections import deque\ndef bfs(graph, start):\n    visited = set([start])\n    queue = deque([start])\n    while queue:\n        node = queue.popleft()\n        for neighbor in graph[node]:\n            if neighbor not in visited:\n                visited.add(neighbor)\n                queue.append(neighbor)`,
    keyTakeaways: [
      "Stacks: DFS, undo, call stack, parentheses matching.",
      "Queues: BFS, scheduling, buffering.",
      "Deques: sliding window, palindrome checks.",
      "Choosing the right structure depends on access order needs."
    ],
    commonMistakes: [
      "Using a stack where a queue is needed (DFS vs BFS).",
      "Forgetting to mark nodes as visited in BFS (infinite loop).",
      "Not checking for empty before pop/popleft."
    ],
    whenToUse: "Use stacks for LIFO problems and queues for FIFO/BFS problems.",
    interviewTip: "DFS uses a stack (or recursion), BFS uses a queue — know which to reach for.",
    tryYourself: "Implement a simple undo system using a stack of actions."
  },

  // ============================================================
  // PHASE 2 - TREES AND GRAPHS
  // ============================================================
  "st-tg-1": {
    title: "Binary Trees",
    definition: "A binary tree is a hierarchical structure where each node has at most two children (left and right).",
    explanation: "The top node is the root. Each node has a value and optional left and right child pointers. A node with no children is a leaf. The depth is the number of edges from root to a node; height is the longest path to a leaf.",
    example: `class TreeNode:\n    def __init__(self, val):\n        self.val = val\n        self.left = None\n        self.right = None\n\nroot = TreeNode(1)\nroot.left = TreeNode(2)\nroot.right = TreeNode(3)\nroot.left.left = TreeNode(4)\n#       1\n#      / \\\n#     2   3\n#    /\n#   4`,
    keyTakeaways: [
      "Each node has at most two children.",
      "The root is the top; leaves have no children.",
      "Depth = edges from root; height = longest path to a leaf.",
      "A balanced tree has height ~log(n)."
    ],
    commonMistakes: [
      "Confusing depth and height.",
      "Not handling None children in recursive functions.",
      "Forgetting the base case (node is None) in tree recursion."
    ],
    whenToUse: "Use binary trees for hierarchical data, search structures, and expression parsing.",
    interviewTip: "Always include a base case for None in recursive tree functions — it's the most common omission.",
    tryYourself: "Build a binary tree with 5 nodes and write a function to count the total nodes."
  },
  "st-tg-2": {
    title: "BST Operations",
    definition: "A binary search tree (BST) is a binary tree where left children are smaller and right children are larger than the parent.",
    explanation: "BSTs support O(log n) search, insert, and delete when balanced. Search by comparing and going left or right. Insert by finding the correct position. Delete has three cases: leaf, one child, or two children (replace with in-order successor).",
    example: `class Node:\n    def __init__(self, val):\n        self.val = val\n        self.left = None\n        self.right = None\n\ndef insert(root, val):\n    if root is None:\n        return Node(val)\n    if val < root.val:\n        root.left = insert(root.left, val)\n    else:\n        root.right = insert(root.right, val)\n    return root\n\ndef search(root, val):\n    if root is None or root.val == val:\n        return root\n    if val < root.val:\n        return search(root.left, val)\n    return search(root.right, val)`,
    keyTakeaways: [
      "Left subtree values < node < right subtree values.",
      "Search, insert, delete are O(log n) if balanced.",
      "In-order traversal gives sorted order.",
      "An unbalanced BST degrades to O(n)."
    ],
    commonMistakes: [
      "Inserting duplicate values without a strategy (skip or count).",
      "Not rebalancing after deletions (can degrade to O(n)).",
      "Forgetting the base case in recursive insert/search."
    ],
    whenToUse: "Use BSTs when you need ordered data with fast search, insert, and delete.",
    interviewTip: "In-order traversal of a BST produces sorted output — a key property to remember.",
    tryYourself: "Insert 5, 3, 7, 1, 4 into a BST and do an in-order traversal to confirm sorted output."
  },
  "st-tg-3": {
    title: "Tree Traversals",
    definition: "Tree traversal visits every node in a tree in a specific order: pre-order, in-order, post-order, or level-order.",
    explanation: "Pre-order (root, left, right), in-order (left, root, right), post-order (left, right, root), and level-order (BFS by level). In-order of a BST gives sorted values. Recursive implementations are clean; iterative ones use stacks or queues.",
    example: `def inorder(node):\n    if node:\n        inorder(node.left)\n        print(node.val)\n        inorder(node.right)\n\ndef preorder(node):\n    if node:\n        print(node.val)\n        preorder(node.left)\n        preorder(node.right)\n\ndef postorder(node):\n    if node:\n        postorder(node.left)\n        postorder(node.right)\n        print(node.val)`,
    keyTakeaways: [
      "Pre-order: root -> left -> right.",
      "In-order: left -> root -> right (sorted for BST).",
      "Post-order: left -> right -> root.",
      "Level-order uses a queue (BFS)."
    ],
    commonMistakes: [
      "Mixing up the order of recursive calls.",
      "Forgetting the base case (node is None).",
      "Using the wrong traversal for the problem (e.g., post-order for expression trees)."
    ],
    whenToUse: "Use traversals to visit all nodes: in-order for sorted output, post-order for deletion, level-order for BFS.",
    interviewTip: "Post-order is used for deleting trees and evaluating expression trees — children before parent.",
    tryYourself: "Write a level-order traversal using a queue and print nodes level by level."
  },
  "st-tg-4": {
    title: "Graph Representation",
    definition: "Graph representation stores vertices and edges, commonly as an adjacency list or adjacency matrix.",
    explanation: "An adjacency list stores each node's neighbors in a list or dict — efficient for sparse graphs. An adjacency matrix is a 2D array where matrix[i][j] = 1 if there's an edge — efficient for dense graphs and edge lookups.",
    example: `# Adjacency list\ngraph = {\n    "A": ["B", "C"],\n    "B": ["A", "D"],\n    "C": ["A"],\n    "D": ["B"]\n}\n\n# Adjacency matrix (undirected)\n#     A  B  C  D\n# A [ 0, 1, 1, 0]\n# B [ 1, 0, 0, 1]\n# C [ 1, 0, 0, 0]\n# D [ 0, 1, 0, 0]`,
    keyTakeaways: [
      "Adjacency list: space O(V+E), good for sparse graphs.",
      "Adjacency matrix: space O(V²), good for dense graphs.",
      "Matrix gives O(1) edge lookup; list gives O(degree).",
      "Most real-world graphs are sparse — prefer adjacency lists."
    ],
    commonMistakes: [
      "Using a matrix for a sparse graph (wastes memory).",
      "Forgetting to add edges in both directions for undirected graphs.",
      "Not handling disconnected nodes in the representation."
    ],
    whenToUse: "Use adjacency lists for sparse graphs and matrices for dense graphs or frequent edge lookups.",
    interviewTip: "Most interview graph problems use adjacency lists — be comfortable building and traversing them.",
    tryYourself: "Represent a 5-node graph as an adjacency list and print each node's neighbors."
  },
  "st-tg-5": {
    title: "BFS",
    definition: "Breadth-First Search (BFS) explores a graph level by level, visiting all neighbors before moving deeper.",
    explanation: "BFS uses a queue. Start at a node, mark it visited, enqueue it. Dequeue a node, visit its unvisited neighbors, enqueue them. Repeat until the queue is empty. It finds the shortest path in unweighted graphs.",
    example: `from collections import deque\n\ndef bfs(graph, start):\n    visited = set([start])\n    queue = deque([start])\n    order = []\n    while queue:\n        node = queue.popleft()\n        order.append(node)\n        for neighbor in graph[node]:\n            if neighbor not in visited:\n                visited.add(neighbor)\n                queue.append(neighbor)\n    return order\n\ngraph = {"A": ["B", "C"], "B": ["D"], "C": ["D"], "D": []}\nprint(bfs(graph, "A"))  # ['A', 'B', 'C', 'D']`,
    keyTakeaways: [
      "BFS uses a queue (FIFO).",
      "It explores level by level.",
      "Finds shortest path in unweighted graphs.",
      "Mark visited when enqueuing, not when dequeuing."
    ],
    commonMistakes: [
      "Marking visited too late, causing duplicates in the queue.",
      "Using a stack instead of a queue (that's DFS).",
      "Forgetting to mark the start node as visited initially."
    ],
    whenToUse: "Use BFS for shortest path in unweighted graphs or level-order traversal.",
    interviewTip: "Mark nodes visited when you enqueue them, not when you dequeue — this prevents duplicates.",
    tryYourself: "Use BFS to find the shortest path from node A to node D in a small graph."
  },
  "st-tg-6": {
    title: "DFS",
    definition: "Depth-First Search (DFS) explores as deep as possible along each branch before backtracking.",
    explanation: "DFS uses a stack (or recursion). Go deep into one neighbor, then backtrack. It's simpler to implement recursively. DFS doesn't guarantee shortest path but is great for connectivity, cycle detection, and topological sort.",
    example: `def dfs(graph, node, visited=None):\n    if visited is None:\n        visited = set()\n    visited.add(node)\n    print(node)\n    for neighbor in graph[node]:\n        if neighbor not in visited:\n            dfs(graph, neighbor, visited)\n    return visited\n\ngraph = {"A": ["B", "C"], "B": ["D"], "C": [], "D": []}\ndfs(graph, "A")  # A, B, D, C`,
    keyTakeaways: [
      "DFS uses a stack or recursion.",
      "It goes deep before backtracking.",
      "Great for cycle detection, connectivity, and topological sort.",
      "O(V + E) time complexity."
    ],
    commonMistakes: [
      "Not passing the visited set correctly in recursion (creates a new one each call).",
      "Forgetting to mark nodes as visited (infinite recursion).",
      "Hitting recursion depth limits on very deep graphs."
    ],
    whenToUse: "Use DFS for connectivity, cycle detection, topological sort, or path finding.",
    interviewTip: "Use the default-None pattern for visited sets to avoid mutable default argument bugs.",
    tryYourself: "Use DFS to detect if a directed graph has a cycle."
  },

  // ============================================================
  // PHASE 2 - SORTING AND SEARCHING
  // ============================================================
  "st-ss-1": {
    title: "Binary Search",
    definition: "Binary search finds a target in a sorted array by repeatedly halving the search range.",
    explanation: "Compare the target to the middle element. If it matches, return the index. If the target is smaller, search the left half; if larger, search the right half. This gives O(log n) time instead of O(n) linear search.",
    example: `def binary_search(arr, target):\n    left, right = 0, len(arr) - 1\n    while left <= right:\n        mid = (left + right) // 2\n        if arr[mid] == target:\n            return mid\n        elif arr[mid] < target:\n            left = mid + 1\n        else:\n            right = mid - 1\n    return -1\n\nprint(binary_search([1, 3, 5, 7, 9], 7))  # 3`,
    keyTakeaways: [
      "Requires a sorted array.",
      "O(log n) time, O(1) space.",
      "Halve the search range each step.",
      "Watch out for off-by-one in left/right boundaries."
    ],
    commonMistakes: [
      "Applying binary search to an unsorted array.",
      "Using left < right instead of left <= right (misses single-element case).",
      "Integer overflow in mid calculation (use left + (right - left) // 2 in other languages)."
    ],
    whenToUse: "Use binary search when the data is sorted and you need fast lookup.",
    interviewTip: "Practice the boundary conditions — off-by-one errors are the most common binary search bug.",
    tryYourself: "Modify binary search to find the first occurrence of a duplicate target."
  },
  "st-ss-2": {
    title: "Merge Sort",
    definition: "Merge sort is a divide-and-conquer sorting algorithm that splits the array, sorts halves, and merges them.",
    explanation: "Recursively divide the array in half until single elements remain, then merge sorted halves back together. It's stable and guaranteed O(n log n) but uses O(n) extra space for merging.",
    example: `def merge_sort(arr):\n    if len(arr) <= 1:\n        return arr\n    mid = len(arr) // 2\n    left = merge_sort(arr[:mid])\n    right = merge_sort(arr[mid:])\n    return merge(left, right)\n\ndef merge(left, right):\n    result = []\n    i = j = 0\n    while i < len(left) and j < len(right):\n        if left[i] <= right[j]:\n            result.append(left[i]); i += 1\n        else:\n            result.append(right[j]); j += 1\n    result.extend(left[i:])\n    result.extend(right[j:])\n    return result\n\nprint(merge_sort([5, 2, 8, 1, 3]))  # [1, 2, 3, 5, 8]`,
    keyTakeaways: [
      "Divide and conquer: split, sort, merge.",
      "O(n log n) in all cases (best, average, worst).",
      "Stable sort — preserves relative order of equal elements.",
      "Uses O(n) extra space for merging."
    ],
    commonMistakes: [
      "Forgetting the base case (len <= 1).",
      "Not extending remaining elements after the main merge loop.",
      "Confusing stability with efficiency."
    ],
    whenToUse: "Use merge sort when you need stable, guaranteed O(n log n) sorting or for linked lists.",
    interviewTip: "Merge sort is the go-to for linked lists — no random access needed, just pointer relinking.",
    tryYourself: "Trace merge sort on [4, 1, 3, 2] and write down each merge step."
  },
  "st-ss-3": {
    title: "Quick Sort",
    definition: "Quick sort is a divide-and-conquer algorithm that picks a pivot, partitions around it, and recursively sorts the partitions.",
    explanation: "Choose a pivot, move smaller elements left and larger ones right, then recursively sort each side. Average case is O(n log n), but worst case (already sorted with bad pivot) is O(n²). It's in-place and typically faster than merge sort in practice.",
    example: `def quick_sort(arr):\n    if len(arr) <= 1:\n        return arr\n    pivot = arr[len(arr) // 2]\n    left = [x for x in arr if x < pivot]\n    mid = [x for x in arr if x == pivot]\n    right = [x for x in arr if x > pivot]\n    return quick_sort(left) + mid + quick_sort(right)\n\nprint(quick_sort([5, 2, 8, 1, 3]))  # [1, 2, 3, 5, 8]`,
    keyTakeaways: [
      "Pick a pivot, partition, and recurse.",
      "Average O(n log n), worst case O(n²) with bad pivots.",
      "In-place variant uses O(log n) stack space.",
      "Not stable — equal elements may reorder."
    ],
    commonMistakes: [
      "Choosing the first or last element as pivot on sorted data (O(n²)).",
      "Not handling duplicate elements (use three-way partition).",
      "Forgetting the base case."
    ],
    whenToUse: "Use quick sort for fast in-place sorting when worst-case O(n²) is acceptable.",
    interviewTip: "Random pivot selection avoids the O(n²) worst case on sorted input — mention this.",
    tryYourself: "Write an in-place partition function using the Lomuto scheme."
  },
  "st-ss-4": {
    title: "Heap Sort",
    definition: "Heap sort uses a binary heap to repeatedly extract the minimum or maximum and build a sorted array.",
    explanation: "Build a max-heap from the array, then repeatedly swap the root (largest) with the last element and reduce the heap size. Sift down to restore the heap. It's O(n log n) in all cases and sorts in-place.",
    example: `import heapq\n\ndef heap_sort(arr):\n    heapq.heapify(arr)  # min-heap in-place\n    return [heapq.heappop(arr) for _ in range(len(arr))]\n\nprint(heap_sort([5, 2, 8, 1, 3]))  # [1, 2, 3, 5, 8]`,
    keyTakeaways: [
      "Uses a binary heap (min or max).",
      "O(n log n) in all cases, in-place.",
      "Not stable — equal elements may reorder.",
      "Python's heapq is a min-heap by default."
    ],
    commonMistakes: [
      "Forgetting that heapq is a min-heap (use negatives for max-heap).",
      "Not heapifying before popping.",
      "Confusing heap sort with priority queues (related but different use)."
    ],
    whenToUse: "Use heap sort when you need guaranteed O(n log n) with O(1) extra space.",
    interviewTip: "For a max-heap in Python, store negative values — heapq only provides a min-heap.",
    tryYourself: "Use heapq to find the 3 largest elements in a list without sorting it fully."
  },

  // ============================================================
  // PHASE 2 - DYNAMIC PROGRAMMING
  // ============================================================
  "st-dp-1": {
    title: "Memoization",
    definition: "Memoization is a top-down DP technique that caches results of expensive function calls to avoid recomputation.",
    explanation: "Store results in a dictionary (or array) keyed by the function's parameters. Before computing, check if the result is cached. This turns exponential recursion into polynomial time. Use @lru_cache for automatic memoization.",
    example: `from functools import lru_cache\n\n@lru_cache(maxsize=None)\ndef fib(n):\n    if n < 2:\n        return n\n    return fib(n - 1) + fib(n - 2)\n\nprint(fib(50))  # 12586269025 (instant with memo)`,
    keyTakeaways: [
      "Top-down: start from the original problem, cache sub-results.",
      "Reduces exponential recursion to polynomial time.",
      "Use a dict or @lru_cache for caching.",
      "Trade-off: uses stack space for recursion."
    ],
    commonMistakes: [
      "Forgetting to cache, leading to exponential blowup.",
      "Using mutable arguments as cache keys (unhashable).",
      "Not setting a base case before the recursive call."
    ],
    whenToUse: "Use memoization for problems with overlapping subproblems and a natural recursive structure.",
    interviewTip: "@lru_cache is the fastest way to memoize in Python — mention it to show practical knowledge.",
    tryYourself: "Write a memoized function to count the number of ways to climb n stairs (1 or 2 steps at a time)."
  },
  "st-dp-2": {
    title: "Tabulation",
    definition: "Tabulation is a bottom-up DP technique that fills a table iteratively from the smallest subproblems up.",
    explanation: "Start with base cases, then fill a table (usually an array) iteratively for larger problems using previously computed values. No recursion, so no stack overflow. Often more space-efficient than memoization.",
    example: `def fib(n):\n    if n < 2:\n        return n\n    dp = [0] * (n + 1)\n    dp[1] = 1\n    for i in range(2, n + 1):\n        dp[i] = dp[i - 1] + dp[i - 2]\n    return dp[n]\n\nprint(fib(10))  # 55`,
    keyTakeaways: [
      "Bottom-up: solve smallest subproblems first.",
      "Uses iteration, not recursion — no stack overflow risk.",
      "Often more space-efficient than memoization.",
      "Fill the table in dependency order."
    ],
    commonMistakes: [
      "Filling the table in the wrong order (dependencies not ready).",
      "Not initializing base cases correctly.",
      "Using more space than needed (often you can reduce to O(1) with variables)."
    ],
    whenToUse: "Use tabulation when you want to avoid recursion overhead or need better space control.",
    interviewTip: "Many tabulation solutions can be space-optimized to O(1) by keeping only the last few values.",
    tryYourself: "Convert the memoized stair-climbing function to a tabulated version."
  },
  "st-dp-3": {
    title: "Classic Problems",
    definition: "Classic DP problems include Fibonacci, knapsack, longest common subsequence (LCS), and coin change.",
    explanation: "These problems have overlapping subproblems and optimal substructure. The approach: define the state, write the recurrence, set base cases, and choose memoization or tabulation. Recognizing the pattern is key.",
    example: `# Coin change: minimum coins to make amount\ndef coin_change(coins, amount):\n    dp = [float('inf')] * (amount + 1)\n    dp[0] = 0\n    for i in range(1, amount + 1):\n        for coin in coins:\n            if i >= coin:\n                dp[i] = min(dp[i], dp[i - coin] + 1)\n    return dp[amount] if dp[amount] != float('inf') else -1\n\nprint(coin_change([1, 5, 10], 11))  # 2 (10 + 1)`,
    keyTakeaways: [
      "Classic problems: Fibonacci, knapsack, LCS, coin change, edit distance.",
      "Identify the state, recurrence, and base cases.",
      "Overlapping subproblems + optimal substructure = DP.",
      "Practice pattern recognition — most DP problems are variations."
    ],
    commonMistakes: [
      "Not identifying overlapping subproblems (using plain recursion).",
      "Wrong recurrence or base cases.",
      "Not considering the order of filling the table."
    ],
    whenToUse: "Use DP when a problem has overlapping subproblems and optimal substructure.",
    interviewTip: "If you can express the problem as 'the best way to do X using smaller versions of X,' it's likely DP.",
    tryYourself: "Write a DP solution for the longest common subsequence of 'abcde' and 'ace'."
  },

  // ============================================================
  // PHASE 3 - DESCRIPTIVE STATISTICS
  // ============================================================
  "st-stat-1": {
    title: "Mean, Median, Mode",
    definition: "Mean is the average, median is the middle value, and mode is the most frequent value in a dataset.",
    explanation: "Mean = sum of values / count. Median = middle value when sorted (average of two middle values if even count). Mode = value that appears most often. Each measures central tendency differently and is affected differently by outliers.",
    example: `Scores: 70, 80, 80, 90, 100\nMean = (70 + 80 + 80 + 90 + 100) / 5 = 420 / 5 = 84\nMedian = 80 (middle of sorted list)\nMode = 80 (appears twice, most frequent)`,
    keyTakeaways: [
      "Mean is sensitive to outliers; median is not.",
      "Median is better for skewed data like income.",
      "Mode works for categorical data too.",
      "A dataset can have zero, one, or multiple modes."
    ],
    commonMistakes: [
      "Using mean for heavily skewed data (it misrepresents the center).",
      "Forgetting to sort before finding the median.",
      "Assuming there's always exactly one mode."
    ],
    whenToUse: "Use mean for symmetric data, median for skewed data, and mode for categorical frequency.",
    interviewTip: "If someone mentions 'average salary,' ask whether they mean mean or median — median is fairer for skewed data."
  },
  "st-stat-2": {
    title: "Variance and Std Dev",
    definition: "Variance measures the average squared deviation from the mean; standard deviation is its square root.",
    explanation: "Variance = average of (each value - mean)². Standard deviation (SD) = √variance. SD is in the same units as the data, making it more interpretable. High SD means data is spread out; low SD means it's clustered near the mean.",
    example: `Data: 2, 4, 4, 4, 5, 5, 7, 9\nMean = 5\nDeviations: -3, -1, -1, -1, 0, 0, 2, 4\nSquared: 9, 1, 1, 1, 0, 0, 4, 16\nVariance = (9+1+1+1+0+0+4+16) / 8 = 32/8 = 4\nStd Dev = √4 = 2`,
    keyTakeaways: [
      "Variance is in squared units; SD is in original units.",
      "SD is more interpretable than variance.",
      "High SD = spread out; low SD = clustered.",
      "Use sample variance (n-1) for a sample, population variance (n) for the whole population."
    ],
    commonMistakes: [
      "Confusing population variance (divide by n) with sample variance (divide by n-1).",
      "Forgetting to take the square root for SD.",
      "Ignoring outliers that inflate variance."
    ],
    whenToUse: "Use SD to understand how spread out data is and to compare variability between datasets.",
    interviewTip: "Know when to use n vs n-1: sample variance uses n-1 (Bessel's correction) to be an unbiased estimator."
  },
  "st-stat-3": {
    title: "Distributions",
    definition: "A distribution shows how values are spread across possible outcomes — their frequencies and probabilities.",
    explanation: "Common distributions: normal (bell curve), uniform (equal probability), binomial (yes/no trials), and Poisson (rare events). The shape reveals patterns: symmetric, skewed left/right, bimodal. Understanding distributions helps choose the right analysis.",
    example: `Normal distribution: heights of students\n- Most students are near the average (170 cm)\n- Fewer students are very tall or very short\n- Forms a bell curve\n\nUniform: rolling a fair die\n- Each outcome (1-6) has equal probability (1/6)\n- Flat distribution`,
    keyTakeaways: [
      "Normal distribution is symmetric and bell-shaped.",
      "Uniform means all outcomes are equally likely.",
      "Skewed distributions have a long tail on one side.",
      "The distribution shape guides analysis and modeling choices."
    ],
    commonMistakes: [
      "Assuming all data is normally distributed.",
      "Confusing population distribution with sample distribution.",
      "Ignoring skewness before applying tests that assume normality."
    ],
    whenToUse: "Understand distributions to choose appropriate statistical tests and models.",
    interviewTip: "Always plot your data first — the distribution shape determines which methods are valid."
  },
  "st-stat-4": {
    title: "Percentiles",
    definition: "A percentile is the value below which a given percentage of data falls.",
    explanation: "The 50th percentile is the median. The 25th, 50th, and 75th percentiles are quartiles (Q1, Q2, Q3). The interquartile range (IQR = Q3 - Q1) measures spread and helps identify outliers (values below Q1 - 1.5*IQR or above Q3 + 1.5*IQR).",
    example: `Test scores (sorted): 55, 60, 65, 70, 75, 80, 85, 90, 95, 100\nQ1 (25th percentile) = 65\nMedian (50th) = 77.5\nQ3 (75th percentile) = 90\nIQR = 90 - 65 = 25\nA score of 30 is an outlier (below 65 - 1.5*25 = 27.5? No, 30 > 27.5, so not an outlier)`,
    keyTakeaways: [
      "Percentiles divide data into 100 equal parts.",
      "Q1 = 25th, Q2 = 50th (median), Q3 = 75th percentile.",
      "IQR = Q3 - Q1 measures spread.",
      "Outliers are below Q1 - 1.5*IQR or above Q3 + 1.5*IQR."
    ],
    commonMistakes: [
      "Confusing percentile rank with percentile value.",
      "Not sorting data before computing percentiles.",
      "Using percentiles and percentages interchangeably."
    ],
    whenToUse: "Use percentiles to understand data position, compare scores, and detect outliers.",
    interviewTip: "Percentiles are robust to outliers — use them alongside or instead of mean/SD for skewed data."
  },

  // ============================================================
  // PHASE 3 - PROBABILITY
  // ============================================================
  "st-prob-1": {
    title: "Basic Probability",
    definition: "Probability measures how likely an event is to occur, ranging from 0 (impossible) to 1 (certain).",
    explanation: "P(event) = favorable outcomes / total outcomes. For example, rolling a 3 on a fair die: 1 favorable outcome out of 6 total, so P = 1/6. The sum of all probabilities in a sample space equals 1.",
    example: `Bag has 3 red and 2 blue marbles.\nP(red) = 3 / (3+2) = 3/5 = 0.6\nP(blue) = 2 / 5 = 0.4\nP(red or blue) = 0.6 + 0.4 = 1.0`,
    keyTakeaways: [
      "Probability ranges from 0 to 1.",
      "P(event) = favorable / total outcomes.",
      "All probabilities in a sample space sum to 1.",
      "P(not A) = 1 - P(A)."
    ],
    commonMistakes: [
      "Forgetting that probabilities sum to 1.",
      "Confusing 'or' (add) with 'and' (multiply).",
      "Not accounting for all possible outcomes."
    ],
    whenToUse: "Use basic probability to quantify uncertainty in games, surveys, and risk assessment.",
    interviewTip: "Always confirm the total probability of all outcomes equals 1 — a quick sanity check."
  },
  "st-prob-2": {
    title: "Conditional Probability",
    definition: "Conditional probability is the probability of an event given that another event has occurred: P(A|B).",
    explanation: "P(A|B) = P(A and B) / P(B). It updates the probability of A based on new information that B has happened. This is the foundation of Bayes' theorem and many ML models.",
    example: `A class has 60% girls and 40% boys. 70% of girls and 50% of boys pass the exam.\nP(pass | girl) = 0.70\nP(pass and girl) = 0.6 * 0.7 = 0.42\nP(pass) = 0.6*0.7 + 0.4*0.5 = 0.42 + 0.20 = 0.62\nP(girl | pass) = 0.42 / 0.62 ≈ 0.677`,
    keyTakeaways: [
      "P(A|B) = P(A and B) / P(B).",
      "It updates probability based on new information.",
      "P(B) must be greater than 0.",
      "Foundation for Bayes' theorem and Naive Bayes classifiers."
    ],
    commonMistakes: [
      "Confusing P(A|B) with P(B|A) — they're generally different.",
      "Forgetting to divide by P(B).",
      "Assuming independence when events are dependent."
    ],
    whenToUse: "Use conditional probability when the likelihood of an event depends on another event.",
    interviewTip: "P(A|B) ≠ P(B|A) — confusing these is the prosecutor's fallacy, a classic interview topic."
  },
  "st-prob-3": {
    title: "Bayes Theorem",
    definition: "Bayes' theorem updates the probability of a hypothesis based on new evidence: P(H|E) = P(E|H) * P(H) / P(E).",
    explanation: "It lets you reverse conditional probability. P(H) is the prior (initial belief), P(E|H) is the likelihood, P(E) is the evidence probability, and P(H|E) is the posterior (updated belief). It's the backbone of Bayesian inference and spam filtering.",
    example: `Disease rate: 1% of people have it.\nTest accuracy: 90% true positive, 10% false positive.\nP(D) = 0.01, P(not D) = 0.99\nP(+|D) = 0.9, P(+|not D) = 0.1\nP(+) = 0.9*0.01 + 0.1*0.99 = 0.009 + 0.099 = 0.108\nP(D|+) = (0.9 * 0.01) / 0.108 ≈ 0.083 (only 8.3%!)`,
    keyTakeaways: [
      "P(H|E) = P(E|H) * P(H) / P(E).",
      "Updates prior belief with new evidence.",
      "Prior → likelihood → posterior.",
      "Base rate (prior) matters even with accurate tests."
    ],
    commonMistakes: [
      "Ignoring the base rate (prior probability).",
      "Confusing P(E|H) with P(H|E).",
      "Not normalizing by P(E) (total probability of evidence)."
    ],
    whenToUse: "Use Bayes' theorem for updating beliefs with evidence, spam filtering, and medical testing.",
    interviewTip: "The base rate fallacy is a classic — even a '90% accurate' test can have low positive predictive value for rare diseases."
  },
  "st-prob-4": {
    title: "Random Variables",
    definition: "A random variable is a variable whose possible values are outcomes of a random phenomenon, with associated probabilities.",
    explanation: "Discrete random variables take countable values (e.g., dice rolls). Continuous ones take any value in a range (e.g., height). Each has a distribution describing the probability of each value. Expected value E(X) = sum of value * probability.",
    example: `Discrete: rolling a die\nX = outcome (1, 2, 3, 4, 5, 6)\nP(X=k) = 1/6 for each k\nE(X) = (1+2+3+4+5+6)/6 = 3.5\n\nContinuous: student height\nX = height in cm\nP(X between 165 and 175) = area under curve for that range`,
    keyTakeaways: [
      "Discrete: countable values; continuous: any value in a range.",
      "Expected value = sum/integral of value * probability.",
      "Each random variable has a probability distribution.",
      "Variance measures spread of the random variable."
    ],
    commonMistakes: [
      "Confusing the random variable with its possible values.",
      "Forgetting that E(X) may not be a possible value (e.g., 3.5 for a die).",
      "Mixing discrete and continuous formulas."
    ],
    whenToUse: "Use random variables to model uncertain outcomes in statistics and machine learning.",
    interviewTip: "Expected value isn't always a possible outcome — E(die roll) = 3.5, which you can't roll."
  },
  "st-prob-5": {
    title: "Distributions",
    definition: "Probability distributions describe the likelihood of each outcome of a random variable.",
    explanation: "Discrete: Bernoulli (yes/no), Binomial (n yes/no trials), Poisson (rare events). Continuous: Uniform (equal), Normal (bell curve), Exponential (time between events). Each has parameters that shape it (e.g., mean and variance for normal).",
    example: `Binomial: flip a coin 10 times, P(exactly 6 heads)\nn=10, p=0.5, k=6\nP(X=6) = C(10,6) * 0.5^6 * 0.5^4 ≈ 0.205\n\nNormal: exam scores\nmean=70, std=10\nP(score > 80) = P(Z > 1) ≈ 0.16 (16%)`,
    keyTakeaways: [
      "Discrete: Bernoulli, Binomial, Poisson.",
      "Continuous: Uniform, Normal, Exponential.",
      "Normal distribution is defined by mean and std dev.",
      "Parameters shape the distribution's form."
    ],
    commonMistakes: [
      "Using the wrong distribution for the problem.",
      "Confusing Binomial (fixed trials) with Poisson (rate-based).",
      "Forgetting to standardize when using the normal distribution."
    ],
    whenToUse: "Choose distributions based on the data type and the process generating it.",
    interviewTip: "Binomial = fixed number of trials with success probability; Poisson = events in a fixed interval at a rate."
  },

  // ============================================================
  // PHASE 3 - LINEAR ALGEBRA
  // ============================================================
  "st-la-1": {
    title: "Vectors",
    definition: "A vector is an ordered list of numbers representing magnitude and direction in space.",
    explanation: "Vectors can represent points, forces, or features. In 2D, a vector [3, 4] has magnitude 5 (Pythagorean: √(9+16)). Vectors add component-wise and can be scaled by a number. The dot product measures similarity.",
    example: `v = [3, 4], w = [1, 2]\nMagnitude of v = √(3² + 4²) = 5\nv + w = [3+1, 4+2] = [4, 6]\n2 * v = [6, 8]  (scaling)\nDot product = 3*1 + 4*2 = 11`,
    keyTakeaways: [
      "Vectors have magnitude and direction.",
      "Add component-wise; scale by multiplying each component.",
      "Dot product measures alignment/similarity.",
      "Magnitude = √(sum of squares)."
    ],
    commonMistakes: [
      "Confusing dot product with element-wise multiplication.",
      "Forgetting that magnitude uses the square root.",
      "Adding vectors of different dimensions."
    ],
    whenToUse: "Use vectors to represent data points, features, directions, or physical quantities.",
    interviewTip: "The dot product is zero for perpendicular vectors and maximized for parallel ones — key in ML similarity."
  },
  "st-la-2": {
    title: "Matrices",
    definition: "A matrix is a 2D array of numbers organized in rows and columns.",
    explanation: "A matrix with m rows and n columns is m×n. Matrices represent systems of equations, transformations, or datasets (rows = samples, columns = features). Elements are accessed as matrix[row][col].",
    example: `A = [[1, 2],     # 2x3 matrix\n     [3, 4]]\n\nRows: 2, Columns: 2\nA[0][0] = 1 (top-left)\nA[1][0] = 3 (bottom-left)\n\nStudent grades matrix:\n       Math  Science  English\nAlice   85     90       78\nBob     70     88       92`,
    keyTakeaways: [
      "A matrix is a 2D grid of numbers.",
      "Dimensions are rows × columns.",
      "Used for transformations, systems of equations, and data storage.",
      "Element access: matrix[row][column]."
    ],
    commonMistakes: [
      "Confusing rows with columns (order matters: m×n ≠ n×m).",
      "Indexing as matrix[col][row] instead of matrix[row][col].",
      "Mixing up matrix dimensions when multiplying."
    ],
    whenToUse: "Use matrices for data tables, linear transformations, and systems of equations.",
    interviewTip: "In ML, rows are samples and columns are features — getting this backwards causes shape errors."
  },
  "st-la-3": {
    title: "Matrix Operations",
    definition: "Matrix operations include addition, multiplication, and transposition — the building blocks of linear algebra.",
    explanation: "Addition: element-wise, same dimensions. Multiplication: rows of A × columns of B (A must have as many columns as B has rows). Transpose: swap rows and columns. Multiplication is not commutative (AB ≠ BA).",
    example: `A = [[1, 2], [3, 4]], B = [[5, 6], [7, 8]]\n\nA + B = [[6, 8], [10, 12]]\n\nA × B = [[1*5+2*7, 1*6+2*8],\n         [3*5+4*7, 3*6+4*8]]\n      = [[19, 22], [43, 50]]\n\nTranspose of A = [[1, 3], [2, 4]]`,
    keyTakeaways: [
      "Addition is element-wise (same dimensions required).",
      "Multiplication: row × column, dimensions must align (A's cols = B's rows).",
      "Transposition swaps rows and columns.",
      "Matrix multiplication is NOT commutative."
    ],
    commonMistakes: [
      "Assuming AB = BA (it usually doesn't).",
      "Multiplying matrices with incompatible dimensions.",
      "Confusing element-wise multiplication with matrix multiplication."
    ],
    whenToUse: "Use matrix operations for transformations, combining data, and solving linear systems.",
    interviewTip: "Matrix multiplication dimensions: (m×n) × (n×p) = (m×p) — memorize this shape rule."
  },
  "st-la-4": {
    title: "Determinants",
    definition: "The determinant is a scalar value computed from a square matrix that indicates if it's invertible.",
    explanation: "For a 2×2 matrix [[a,b],[c,d]], det = ad - bc. If det = 0, the matrix is singular (not invertible). Determinants represent the scaling factor of the transformation the matrix represents.",
    example: `A = [[3, 4], [2, 5]]\ndet(A) = 3*5 - 4*2 = 15 - 8 = 7\nSince det ≠ 0, A is invertible.\n\nB = [[2, 4], [1, 2]]\ndet(B) = 2*2 - 4*1 = 0\nB is singular (not invertible).`,
    keyTakeaways: [
      "2×2 determinant: ad - bc.",
      "det = 0 means the matrix is not invertible.",
      "Represents the scaling factor of a transformation.",
      "Only square matrices have determinants."
    ],
    commonMistakes: [
      "Computing the determinant of a non-square matrix (undefined).",
      "Forgetting that det = 0 means singular.",
      "Mixing up the formula for larger matrices."
    ],
    whenToUse: "Use determinants to check invertibility and understand transformation scaling.",
    interviewTip: "A zero determinant means the transformation collapses space — the matrix can't be reversed."
  },
  "st-la-5": {
    title: "Eigenvalues",
    definition: "Eigenvalues are scalars λ such that A*v = λ*v for some vector v (the eigenvector).",
    explanation: "An eigenvalue tells you how much the eigenvector is stretched or shrunk by the matrix transformation. They're found by solving det(A - λI) = 0. Eigenvalues reveal properties like stability and principal components.",
    example: `A = [[2, 0], [0, 3]]\nSolve det(A - λI) = 0:\n(2-λ)(3-λ) = 0\nλ = 2 or λ = 3\n\nThese mean: along one axis, vectors scale by 2; along another, by 3.`,
    keyTakeaways: [
      "Eigenvalues are scalars: A*v = λ*v.",
      "Found by solving det(A - λI) = 0.",
      "They show how much eigenvectors are scaled.",
      "Used in PCA, stability analysis, and vibration modes."
    ],
    commonMistakes: [
      "Confusing eigenvalues with eigenvectors.",
      "Forgetting to subtract λI (identity matrix) from A.",
      "Assuming all matrices have real eigenvalues (some have complex ones)."
    ],
    whenToUse: "Use eigenvalues for PCA, stability analysis, and understanding matrix behavior.",
    interviewTip: "In PCA, eigenvalues tell you how much variance each principal component captures — larger means more important."
  },
  "st-la-6": {
    title: "Eigenvectors",
    definition: "Eigenvectors are non-zero vectors that only scale (don't change direction) when a matrix is applied to them.",
    explanation: "For a matrix A, an eigenvector v satisfies A*v = λ*v, where λ is the corresponding eigenvalue. Eigenvectors point in directions unaffected by the transformation except for scaling. They're the principal axes of the transformation.",
    example: `A = [[2, 0], [0, 3]]\nFor λ = 2: (A - 2I)v = 0 → [[0,0],[0,1]]v = 0\n  → v = [1, 0] (x-axis direction)\nFor λ = 3: v = [0, 1] (y-axis direction)\n\nA * [1, 0] = [2, 0] = 2 * [1, 0] ✓`,
    keyTakeaways: [
      "Eigenvectors don't change direction under the transformation.",
      "Each eigenvector has a corresponding eigenvalue.",
      "They represent the principal axes of a transformation.",
      "Used in PCA to find principal components."
    ],
    commonMistakes: [
      "Forgetting that eigenvectors must be non-zero.",
      "Confusing the eigenvector with its eigenvalue.",
      "Not normalizing eigenvectors when needed."
    ],
    whenToUse: "Use eigenvectors for PCA, dimensionality reduction, and understanding transformation axes.",
    interviewTip: "In PCA, eigenvectors are the new axes (principal components); eigenvalues rank their importance."
  },

  // ============================================================
  // PHASE 4 - SUPERVISED LEARNING
  // ============================================================
  "st-sl-1": {
    title: "Linear Regression",
    definition: "Linear regression models the relationship between a dependent variable and one or more independent variables using a straight line.",
    explanation: "It finds the best-fitting line y = mx + b by minimizing the sum of squared errors (ordinary least squares). Used for predicting continuous values like prices or temperatures. Assumes a linear relationship between features and target.",
    example: `from sklearn.linear_model import LinearRegression\nimport numpy as np\n\nX = np.array([[1], [2], [3], [4]])\ny = np.array([2, 4, 6, 8])\n\nmodel = LinearRegression()\nmodel.fit(X, y)\nprint(model.predict([[5]]))  # [10.]`,
    keyTakeaways: [
      "Models a linear relationship: y = mx + b.",
      "Minimizes sum of squared errors (OLS).",
      "Used for continuous target prediction.",
      "Assumes linearity, independence, and homoscedasticity."
    ],
    commonMistakes: [
      "Applying it to non-linear data without transformation.",
      "Not checking for multicollinearity among features.",
      "Ignoring outliers that skew the line."
    ],
    whenToUse: "Use linear regression for predicting continuous values when the relationship is roughly linear.",
    interviewTip: "Check residuals — if they show a pattern, the linear assumption is violated.",
    tryYourself: "Fit a linear regression on hours studied vs. exam score and predict for 5 hours."
  },
  "st-sl-2": {
    title: "Logistic Regression",
    definition: "Logistic regression predicts the probability of a binary outcome using the logistic (sigmoid) function.",
    explanation: "Instead of a line, it fits an S-shaped curve that outputs probabilities between 0 and 1. The sigmoid function converts linear output to probability. Used for classification (e.g., spam vs. not spam). Threshold (default 0.5) determines the class.",
    example: `from sklearn.linear_model import LogisticRegression\nimport numpy as np\n\nX = np.array([[1], [2], [3], [4], [5]])\ny = np.array([0, 0, 0, 1, 1])\n\nmodel = LogisticRegression()\nmodel.fit(X, y)\nprint(model.predict([[3.5]]))  # [0 or 1]\nprint(model.predict_proba([[3.5]]))  # probability`,
    keyTakeaways: [
      "Outputs probabilities between 0 and 1 using sigmoid.",
      "Used for binary (and multiclass) classification.",
      "A threshold (usually 0.5) decides the class.",
      "Despite the name, it's a classification algorithm."
    ],
    commonMistakes: [
      "Using it for regression (continuous output) instead of classification.",
      "Not tuning the decision threshold for imbalanced data.",
      "Forgetting to scale features."
    ],
    whenToUse: "Use logistic regression for binary classification when you need interpretable probabilities.",
    interviewTip: "Despite its name, logistic regression is for classification — the 'regression' refers to the linear part under the hood.",
    tryYourself: "Train logistic regression on a simple pass/fail dataset and check the predicted probabilities."
  },
  "st-sl-3": {
    title: "Decision Trees",
    definition: "A decision tree splits data into branches based on feature thresholds to make predictions.",
    explanation: "Each internal node tests a feature, branches represent outcomes, and leaves are predictions. Splitting criteria include Gini impurity or entropy. Trees are interpretable but prone to overfitting if grown too deep.",
    example: `from sklearn.tree import DecisionTreeClassifier\n\nX = [[20, 50000], [40, 80000], [25, 30000], [50, 100000]]\ny = ["no", "yes", "no", "yes"]\n\nclf = DecisionTreeClassifier(max_depth=3)\nclf.fit(X, y)\nprint(clf.predict([[30, 60000]]))  # ['yes' or 'no']`,
    keyTakeaways: [
      "Splits data based on feature thresholds.",
      "Gini impurity or entropy measure split quality.",
      "Interpretable — you can visualize the tree.",
      "Prone to overfitting — use max_depth or pruning."
    ],
    commonMistakes: [
      "Letting the tree grow too deep (overfitting).",
      "Not pruning or setting max_depth.",
      "Assuming trees handle extrapolation well (they don't)."
    ],
    whenToUse: "Use decision trees when interpretability matters and the data has non-linear patterns.",
    interviewTip: "Decision trees don't need feature scaling — a nice property that sets them apart from SVMs or neural nets.",
    tryYourself: "Train a decision tree on the Iris dataset and print the feature importances."
  },
  "st-sl-4": {
    title: "Random Forests",
    definition: "A random forest is an ensemble of many decision trees whose predictions are averaged (regression) or voted on (classification).",
    explanation: "It builds many trees on random subsets of data and features, then combines results. This reduces overfitting compared to a single tree and improves accuracy. Each tree is decorrelated thanks to random feature selection.",
    example: `from sklearn.ensemble import RandomForestClassifier\n\nX = [[1, 2], [3, 4], [5, 6], [7, 8]]\ny = [0, 0, 1, 1]\n\nclf = RandomForestClassifier(n_estimators=100, random_state=42)\nclf.fit(X, y)\nprint(clf.predict([[4, 5]]))  # [0 or 1]`,
    keyTakeaways: [
      "Ensemble of many decision trees.",
      "Reduces overfitting via averaging/voting.",
      "Random subsets of data and features per tree.",
      "More accurate but less interpretable than a single tree."
    ],
    commonMistakes: [
      "Using too few trees (high variance).",
      "Not setting random_state for reproducibility.",
      "Forgetting that more trees don't always help after a point."
    ],
    whenToUse: "Use random forests when you want strong accuracy with minimal tuning and no need for deep interpretability.",
    interviewTip: "Random forests reduce variance without increasing bias — the key insight behind ensembling.",
    tryYourself: "Compare a single decision tree and a random forest on the same dataset and check accuracy."
  },
  "st-sl-5": {
    title: "SVM",
    definition: "A Support Vector Machine finds the optimal hyperplane that maximizes the margin between classes.",
    explanation: "SVM finds the widest gap (margin) between data points of different classes. Support vectors are the closest points to the boundary. The kernel trick lets SVMs handle non-linear data by mapping to higher dimensions.",
    example: `from sklearn.svm import SVC\n\nX = [[1, 1], [2, 2], [3, 3], [6, 6], [7, 7]]\ny = [0, 0, 0, 1, 1]\n\nclf = SVC(kernel='linear')\nclf.fit(X, y)\nprint(clf.predict([[4, 4]]))  # [0 or 1]\nprint(clf.support_vectors_)  # the closest points`,
    keyTakeaways: [
      "Finds the hyperplane with maximum margin.",
      "Support vectors are the critical boundary points.",
      "Kernel trick enables non-linear classification.",
      "Effective in high-dimensional spaces."
    ],
    commonMistakes: [
      "Not scaling features (SVM is distance-sensitive).",
      "Choosing the wrong kernel for the data.",
      "Ignoring the C parameter (controls margin vs. violations trade-off)."
    ],
    whenToUse: "Use SVM for binary classification, especially with clear margins or high-dimensional data.",
    interviewTip: "Always scale features before SVM — it's distance-based and unscaled features skew the margin.",
    tryYourself: "Train an SVM with an RBF kernel on non-linear data and visualize the decision boundary."
  },
  "st-sl-6": {
    title: "KNN",
    definition: "K-Nearest Neighbors classifies a point by the majority class of its k closest training points.",
    explanation: "KNN is a lazy learner — it stores training data and classifies based on distance (usually Euclidean). Choose k (odd to avoid ties). Small k is sensitive to noise; large k smooths boundaries. Scale features since it's distance-based.",
    example: `from sklearn.neighbors import KNeighborsClassifier\n\nX = [[1, 1], [2, 2], [8, 8], [9, 9]]\ny = [0, 0, 1, 1]\n\nknn = KNeighborsClassifier(n_neighbors=3)\nknn.fit(X, y)\nprint(knn.predict([[3, 3]]))  # [0]`,
    keyTakeaways: [
      "Classifies by majority vote of k nearest points.",
      "No training phase — it's a lazy learner.",
      "Distance-based: scale your features.",
      "Choose odd k to avoid ties; larger k smooths."
    ],
    commonMistakes: [
      "Not scaling features (distance is dominated by large-scale ones).",
      "Using an even k (risk of ties).",
      "Choosing k too small (overfitting) or too large (underfitting)."
    ],
    whenToUse: "Use KNN for simple classification when you have a small to medium dataset and need a baseline.",
    interviewTip: "KNN has no training phase but slow prediction — it must compute distances to all points at inference.",
    tryYourself: "Try k=1, k=3, and k=5 on a dataset and observe how the decision boundary changes."
  },

  // ============================================================
  // PHASE 4 - UNSUPERVISED LEARNING
  // ============================================================
  "st-ul-1": {
    title: "K-Means Clustering",
    definition: "K-Means partitions data into k clusters by minimizing the distance between points and their cluster center.",
    explanation: "It randomly initializes k centroids, assigns each point to the nearest centroid, then updates centroids to the mean of their points. Repeat until centroids stabilize. You must choose k in advance. Use the elbow method to find a good k.",
    example: `from sklearn.cluster import KMeans\nimport numpy as np\n\nX = np.array([[1, 1], [2, 1], [8, 8], [9, 8]])\nkmeans = KMeans(n_clusters=2, random_state=42)\nkmeans.fit(X)\nprint(kmeans.labels_)  # [0, 0, 1, 1]\nprint(kmeans.cluster_centers_)`,
    keyTakeaways: [
      "Partitions data into k clusters by distance to centroids.",
      "You must choose k beforehand.",
      "Use the elbow method to pick k.",
      "Sensitive to initial centroid placement and outliers."
    ],
    commonMistakes: [
      "Not scaling features before clustering.",
      "Choosing k without the elbow method or silhouette score.",
      "Forgetting that K-Means assumes spherical clusters."
    ],
    whenToUse: "Use K-Means when you need to group similar items and have a sense of how many clusters exist.",
    interviewTip: "K-Means assumes spherical, similarly-sized clusters — use DBSCAN for arbitrary shapes.",
    tryYourself: "Run K-Means with k=3 on a small dataset and print the cluster labels."
  },
  "st-ul-2": {
    title: "Hierarchical Clustering",
    definition: "Hierarchical clustering builds a tree of clusters (dendrogram) by merging or splitting groups step by step.",
    explanation: "Agglomerative (bottom-up) starts with each point as its own cluster and merges the closest pairs. Divisive (top-down) starts with one cluster and splits. A dendrogram visualizes the merge process; cut it at a chosen level to get clusters.",
    example: `from sklearn.cluster import AgglomerativeClustering\n\nX = [[1, 1], [2, 1], [8, 8], [9, 8]]\ncluster = AgglomerativeClustering(n_clusters=2)\nprint(cluster.fit_predict(X))  # [0, 0, 1, 1]\n\n# Dendrogram (with scipy)\n# from scipy.cluster.hierarchy import dendrogram, linkage\n# linkage_matrix = linkage(X, method='ward')`,
    keyTakeaways: [
      "Builds a tree (dendrogram) of clusters.",
      "Agglomerative: bottom-up; divisive: top-down.",
      "No need to choose k in advance — cut the dendrogram.",
      "More expensive than K-Means for large datasets."
    ],
    commonMistakes: [
      "Not scaling features before clustering.",
      "Choosing the wrong linkage method (ward, single, complete).",
      "Cutting the dendrogram at an arbitrary level."
    ],
    whenToUse: "Use hierarchical clustering when you want to explore cluster structure at multiple granularities.",
    interviewTip: "Hierarchical clustering doesn't need k upfront — you decide the number by cutting the dendrogram.",
    tryYourself: "Run agglomerative clustering and plot a dendrogram to choose the number of clusters."
  },
  "st-ul-3": {
    title: "PCA",
    definition: "Principal Component Analysis reduces dimensionality by projecting data onto the directions of maximum variance.",
    explanation: "PCA finds new axes (principal components) that capture the most variance in the data. It's useful for visualization, noise reduction, and speeding up algorithms. Components are orthogonal and ordered by variance explained.",
    example: `from sklearn.decomposition import PCA\nimport numpy as np\n\nX = np.array([[2, 1], [3, 2], [4, 3], [5, 4]])\npca = PCA(n_components=1)\nX_reduced = pca.fit_transform(X)\nprint(X_reduced)\nprint(pca.explained_variance_ratio_)`,
    keyTakeaways: [
      "Reduces dimensions while preserving maximum variance.",
      "Principal components are orthogonal and ordered.",
      "Useful for visualization and noise reduction.",
      "Scale features before applying PCA."
    ],
    commonMistakes: [
      "Not scaling features before PCA.",
      "Keeping too many components (defeats the purpose).",
      "Interpreting components without checking explained variance."
    ],
    whenToUse: "Use PCA for dimensionality reduction, visualization, or preprocessing before other algorithms.",
    interviewTip: "PCA is linear — if relationships are non-linear, consider t-SNE or UMAP for visualization.",
    tryYourself: "Apply PCA to reduce a 4-feature dataset to 2 components and plot the result."
  },
  "st-ul-4": {
    title: "DBSCAN",
    definition: "DBSCAN groups points that are densely connected and marks isolated points as noise.",
    explanation: "It has two parameters: eps (neighborhood radius) and min_samples (minimum points to form a cluster). Points in dense regions become clusters; sparse points are noise. Unlike K-Means, it finds clusters of arbitrary shape and doesn't need k.",
    example: `from sklearn.cluster import DBSCAN\nimport numpy as np\n\nX = np.array([[1, 1], [1, 2], [8, 8], [9, 9], [25, 25]])\ndb = DBSCAN(eps=3, min_samples=2)\nprint(db.fit_predict(X))  # [0, 0, 1, 1, -1]  (-1 = noise)`,
    keyTakeaways: [
      "Groups densely connected points; marks outliers as noise.",
      "Parameters: eps (radius) and min_samples.",
      "Finds clusters of arbitrary shape.",
      "No need to specify k in advance."
    ],
    commonMistakes: [
      "Choosing eps too small (everything is noise) or too large (one big cluster).",
      "Not scaling features before clustering.",
      "Using DBSCAN on data with varying densities (it struggles)."
    ],
    whenToUse: "Use DBSCAN for non-spherical clusters and when you want to identify outliers as noise.",
    interviewTip: "DBSCAN labels noise as -1 — a unique feature that K-Means doesn't have.",
    tryYourself: "Run DBSCAN with different eps values and observe how noise points change."
  },

  // ============================================================
  // PHASE 4 - MODEL EVALUATION
  // ============================================================
  "st-me-1": {
    title: "Train/Test Split",
    definition: "Train/test split divides data into a training set to fit the model and a test set to evaluate it.",
    explanation: "Typically 70-80% for training and 20-30% for testing. The model learns on training data and is evaluated on unseen test data to estimate real-world performance. Never train on test data — it inflates your metrics.",
    example: `from sklearn.model_selection import train_test_split\nfrom sklearn.linear_model import LogisticRegression\n\nX = [[1], [2], [3], [4], [5], [6]]\ny = [0, 0, 0, 1, 1, 1]\n\nX_train, X_test, y_train, y_test = train_test_split(\n    X, y, test_size=0.33, random_state=42\n)\nmodel = LogisticRegression()\nmodel.fit(X_train, y_train)\nprint(model.score(X_test, y_test))`,
    keyTakeaways: [
      "Split data into training and test sets.",
      "Common ratio: 80/20 or 70/30.",
      "Never train on test data.",
      "Set random_state for reproducibility."
    ],
    commonMistakes: [
      "Training on the test set (data leakage).",
      "Not setting random_state (non-reproducible results).",
      "Splitting data with imbalanced classes without stratification."
    ],
    whenToUse: "Use train/test split for a quick, simple evaluation of model performance.",
    interviewTip: "Use stratify=y in train_test_split to maintain class proportions in imbalanced datasets.",
    tryYourself: "Split a dataset 80/20 and train a classifier, then print the test accuracy."
  },
  "st-me-2": {
    title: "Cross-Validation",
    definition: "Cross-validation splits data into k folds, trains on k-1 folds and tests on the remaining one, repeating for each fold.",
    explanation: "K-fold cross-validation gives a more reliable performance estimate than a single split. Each fold serves as the test set once. The average score is reported. Common: 5 or 10 folds. It's more computationally expensive but more robust.",
    example: `from sklearn.model_selection import cross_val_score\nfrom sklearn.linear_model import LogisticRegression\n\nX = [[1], [2], [3], [4], [5], [6]]\ny = [0, 0, 0, 1, 1, 1]\n\nmodel = LogisticRegression()\nscores = cross_val_score(model, X, y, cv=5)\nprint(scores)              # array of 5 scores\nprint(scores.mean())       # average score`,
    keyTakeaways: [
      "K-fold: train on k-1 folds, test on the remaining one.",
      "More reliable than a single train/test split.",
      "Common: 5 or 10 folds.",
      "Average the scores for the final estimate."
    ],
    commonMistakes: [
      "Using too few folds (high bias) or too many (high variance, slow).",
      "Not shuffling data before splitting.",
      "Reporting only the best fold score instead of the average."
    ],
    whenToUse: "Use cross-validation when you need a robust estimate of model performance, especially with limited data.",
    interviewTip: "Cross-validation uses data more efficiently than a single split — every point is both training and test.",
    tryYourself: "Run 5-fold cross-validation on a classifier and print the mean and standard deviation of scores."
  },
  "st-me-3": {
    title: "Precision, Recall, F1",
    definition: "Precision measures how many predicted positives are correct; recall measures how many actual positives are found; F1 is their harmonic mean.",
    explanation: "Precision = TP / (TP + FP). Recall = TP / (TP + FN). F1 = 2 * (precision * recall) / (precision + recall). High precision means few false positives; high recall means few false negatives. F1 balances both — useful for imbalanced data.",
    example: `from sklearn.metrics import precision_score, recall_score, f1_score\n\ny_true = [1, 0, 1, 1, 0, 0]\ny_pred = [1, 1, 1, 0, 0, 0]\n\nprint(precision_score(y_true, y_pred))  # 0.67 (2 of 3 predicted positives correct)\nprint(recall_score(y_true, y_pred))    # 0.67 (2 of 3 actual positives found)\nprint(f1_score(y_true, y_pred))        # 0.67`,
    keyTakeaways: [
      "Precision = TP / (TP + FP) — quality of positive predictions.",
      "Recall = TP / (TP + FN) — coverage of actual positives.",
      "F1 = harmonic mean of precision and recall.",
      "Choose precision when false positives are costly; recall when false negatives are costly."
    ],
    commonMistakes: [
      "Optimizing only accuracy on imbalanced data (misleading).",
      "Confusing precision and recall.",
      "Not choosing the right metric for the business problem."
    ],
    whenToUse: "Use precision/recall/F1 for classification, especially with imbalanced classes.",
    interviewTip: "For a spam filter, optimize precision (don't flag good emails); for cancer screening, optimize recall (don't miss cases).",
    tryYourself: "Calculate precision, recall, and F1 for a small set of predictions by hand."
  },
  "st-me-4": {
    title: "ROC Curve",
    definition: "The ROC curve plots the true positive rate against the false positive rate at various thresholds; AUC summarizes it.",
    explanation: "The ROC (Receiver Operating Characteristic) curve shows the trade-off between sensitivity (TPR) and specificity (1 - FPR). AUC (Area Under Curve) ranges from 0 to 1; 0.5 is random, 1 is perfect. It's threshold-independent and useful for comparing models.",
    example: `from sklearn.metrics import roc_curve, auc\n\ny_true = [0, 0, 1, 1]\ny_scores = [0.1, 0.4, 0.35, 0.8]\n\nfpr, tpr, thresholds = roc_curve(y_true, y_scores)\nroc_auc = auc(fpr, tpr)\nprint(f"AUC: {roc_auc}")  # e.g., 0.75`,
    keyTakeaways: [
      "ROC plots TPR vs. FPR at different thresholds.",
      "AUC = 1 is perfect; 0.5 is random.",
      "Threshold-independent — evaluates ranking quality.",
      "Useful for comparing classifiers."
    ],
    commonMistakes: [
      "Using ROC for highly imbalanced data (use PR curve instead).",
      "Confusing AUC with accuracy.",
      "Not understanding that AUC measures ranking, not threshold-based accuracy."
    ],
    whenToUse: "Use ROC/AUC to compare classifiers and choose thresholds, especially for balanced data.",
    interviewTip: "For highly imbalanced datasets, the PR curve is more informative than ROC — AUC can look deceptively good.",
    tryYourself: "Plot an ROC curve for a classifier and calculate the AUC."
  },
  "st-me-5": {
    title: "Overfitting/Underfitting",
    definition: "Overfitting is when a model learns noise (too complex); underfitting is when it can't learn the pattern (too simple).",
    explanation: "Overfitting: high training accuracy, low test accuracy. The model memorizes training data. Underfitting: low accuracy on both. Solutions: for overfitting, use simpler models, regularization, or more data; for underfitting, use a more complex model or better features.",
    example: `# Overfitting: deep decision tree\n# Train accuracy: 99%, Test accuracy: 70%\n# Fix: limit max_depth or use pruning\n\nclf = DecisionTreeClassifier(max_depth=3)  # regularized\n\n# Underfitting: linear model on non-linear data\n# Train accuracy: 60%, Test accuracy: 58%\n# Fix: use polynomial features or a non-linear model`,
    keyTakeaways: [
      "Overfitting: high train, low test accuracy.",
      "Underfitting: low accuracy on both.",
      "Fix overfitting: simplify, regularize, or add data.",
      "Fix underfitting: increase model complexity or add features."
    ],
    commonMistakes: [
      "Judging a model only by training accuracy.",
      "Adding complexity when the model is already overfitting.",
      "Not using validation data to detect overfitting."
    ],
    whenToUse: "Always check for overfitting/underfitting when evaluating model performance.",
    interviewTip: "If train and test accuracy are both low, it's underfitting; if train is high but test is low, it's overfitting.",
    tryYourself: "Train decision trees with max_depth=1 and max_depth=20, then compare train vs. test accuracy."
  },

  // ============================================================
  // PHASE 4 - ML WORKFLOW
  // ============================================================
  "st-sk-1": {
    title: "Data Preprocessing",
    definition: "Data preprocessing cleans and transforms raw data into a format suitable for machine learning models.",
    explanation: "Steps include handling missing values, encoding categorical variables, scaling features, and splitting data. Models perform better with clean, well-scaled, properly encoded data. Use pipelines to combine these steps safely.",
    example: `from sklearn.preprocessing import StandardScaler, LabelEncoder\nimport numpy as np\n\n# Handle missing values\nX = np.array([[1, 2], [np.nan, 4], [5, 6]])\nX = np.nan_to_num(X, nan=np.nanmean(X))\n\n# Scale features\nscaler = StandardScaler()\nX_scaled = scaler.fit_transform(X)\n\n# Encode labels\nle = LabelEncoder()\ny = le.fit_transform(["cat", "dog", "cat"])`,
    keyTakeaways: [
      "Handle missing values before training.",
      "Encode categorical variables (LabelEncoder, OneHotEncoder).",
      "Scale features for distance-based models.",
      "Fit preprocessing on training data only, then transform test data."
    ],
    commonMistakes: [
      "Fitting the scaler on the full dataset (data leakage).",
      "Not handling missing values before training.",
      "Forgetting to encode categorical variables."
    ],
    whenToUse: "Use preprocessing before training any ML model to ensure data quality.",
    interviewTip: "Fit transformers on training data only, then transform test data — fitting on all data causes leakage.",
    tryYourself: "Write a preprocessing pipeline that imputes missing values and scales features."
  },
  "st-sk-2": {
    title: "Pipelines",
    definition: "A pipeline chains preprocessing steps and a model into a single object, preventing data leakage and simplifying code.",
    explanation: "Scikit-learn's Pipeline takes a list of (name, transformer) pairs ending with an estimator. When you call fit, it runs all steps in order on training data. When you call predict, it applies the same transformations to new data.",
    example: `from sklearn.pipeline import Pipeline\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.linear_model import LogisticRegression\n\npipe = Pipeline([\n    ('scaler', StandardScaler()),\n    ('clf', LogisticRegression())\n])\n\npipe.fit(X_train, y_train)\nprint(pipe.predict(X_test))\nprint(pipe.score(X_test, y_test))`,
    keyTakeaways: [
      "Chains preprocessing and modeling into one object.",
      "Prevents data leakage (fit only on training data).",
      "Simplifies code and ensures consistent transformations.",
      "Works with cross_val_score and GridSearchCV."
    ],
    commonMistakes: [
      "Manually preprocessing outside the pipeline (leakage risk).",
      "Forgetting the final step must be an estimator.",
      "Not using pipelines with cross-validation."
    ],
    whenToUse: "Use pipelines whenever you have preprocessing steps and a model together.",
    interviewTip: "Pipelines prevent data leakage automatically — always prefer them over manual preprocessing.",
    tryYourself: "Create a pipeline with a scaler and a random forest, then evaluate it with cross-validation."
  },
  "st-sk-3": {
    title: "Hyperparameter Tuning",
    definition: "Hyperparameter tuning finds the best model settings (not learned from data) to maximize performance.",
    explanation: "Grid search tries all combinations of specified values; random search samples randomly. Cross-validation evaluates each combination. Common hyperparameters: C and kernel for SVM, max_depth for trees, n_estimators for forests.",
    example: `from sklearn.model_selection import GridSearchCV\nfrom sklearn.ensemble import RandomForestClassifier\n\nparam_grid = {\n    'n_estimators': [50, 100],\n    'max_depth': [3, 5, 10]\n}\n\ngrid = GridSearchCV(RandomForestClassifier(), param_grid, cv=5)\ngrid.fit(X_train, y_train)\nprint(grid.best_params_)\nprint(grid.best_score_)`,
    keyTakeaways: [
      "Hyperparameters are set before training, not learned.",
      "Grid search tries all combinations; random search samples.",
      "Always use cross-validation to evaluate.",
      "Tune the most impactful parameters first."
    ],
    commonMistakes: [
      "Tuning on the test set (data leakage).",
      "Searching too many parameters at once (slow).",
      "Not using cross-validation during tuning."
    ],
    whenToUse: "Use hyperparameter tuning after building a baseline model to squeeze out better performance.",
    interviewTip: "Start with random search for a wide range, then grid search around the best area — more efficient.",
    tryYourself: "Use GridSearchCV to find the best max_depth for a decision tree on the Iris dataset."
  },
  "st-sk-4": {
    title: "Model Persistence",
    definition: "Model persistence saves a trained model to disk so it can be loaded and used later without retraining.",
    explanation: "Use joblib or pickle to save and load models. Joblib is preferred for scikit-learn models because it handles numpy arrays efficiently. Save after training, load at inference time.",
    example: `import joblib\nfrom sklearn.linear_model import LogisticRegression\n\nmodel = LogisticRegression()\nmodel.fit(X_train, y_train)\n\n# Save\njoblib.dump(model, 'model.joblib')\n\n# Load\nloaded_model = joblib.load('model.joblib')\nprint(loaded_model.predict(X_test))`,
    keyTakeaways: [
      "Save trained models with joblib or pickle.",
      "Joblib is more efficient for scikit-learn models.",
      "Load models at inference time without retraining.",
      "Keep the same library versions for compatibility."
    ],
    commonMistakes: [
      "Using pickle when joblib is better for large models.",
      "Loading a model saved with a different library version.",
      "Forgetting to save the preprocessing pipeline with the model."
    ],
    whenToUse: "Use model persistence when deploying models or avoiding retraining.",
    interviewTip: "Save the entire pipeline (preprocessing + model) together — not just the model — for consistent inference.",
    tryYourself: "Train a model, save it with joblib, load it back, and confirm predictions match."
  },

  // ============================================================
  // PHASE 5 - NEURAL NETWORK FUNDAMENTALS
  // ============================================================
  "st-nn-1": {
    title: "Perceptrons",
    definition: "A perceptron is the simplest neural network — a single neuron that computes a weighted sum and applies an activation function.",
    explanation: "It takes inputs, multiplies each by a weight, sums them with a bias, and applies a step or activation function. It can only learn linearly separable patterns. It's the building block of deeper networks.",
    example: `import numpy as np\n\ndef perceptron(x, w, b):\n    z = np.dot(x, w) + b\n    return 1 if z >= 0 else 0  # step function\n\nx = np.array([1, 0, 1])\nw = np.array([0.5, -0.5, 0.8])\nb = -0.3\nprint(perceptron(x, w, b))  # 1`,
    keyTakeaways: [
      "A perceptron computes weighted sum + bias, then applies activation.",
      "Can only learn linearly separable patterns.",
      "Building block of neural networks.",
      "Weights and bias are learned during training."
    ],
    commonMistakes: [
      "Expecting a single perceptron to solve non-linear problems like XOR.",
      "Forgetting the bias term.",
      "Confusing the activation function with the weighted sum."
    ],
    whenToUse: "Understand perceptrons as the foundation for understanding deeper neural networks.",
    interviewTip: "A single perceptron can't solve XOR — this limitation motivated multi-layer networks.",
    tryYourself: "Implement a perceptron that acts as an AND gate with two inputs."
  },
  "st-nn-2": {
    title: "Activation Functions",
    definition: "Activation functions introduce non-linearity into neural networks, enabling them to learn complex patterns.",
    explanation: "Common functions: Sigmoid (0 to 1), Tanh (-1 to 1), ReLU (0 or input), and Softmax (probabilities). Without non-linear activations, a deep network is just a linear model. ReLU is the default for hidden layers; softmax for output classification.",
    example: `import numpy as np\n\ndef sigmoid(x):\n    return 1 / (1 + np.exp(-x))\n\ndef relu(x):\n    return np.maximum(0, x)\n\ndef softmax(x):\n    e = np.exp(x - np.max(x))\n    return e / e.sum()\n\nprint(sigmoid(0))    # 0.5\nprint(relu(-3))     # 0\nprint(softmax([1, 2, 3]))  # probabilities`,
    keyTakeaways: [
      "Activation functions add non-linearity.",
      "ReLU is the default for hidden layers.",
      "Sigmoid outputs 0-1; tanh outputs -1 to 1.",
      "Softmax is used for multi-class output."
    ],
    commonMistakes: [
      "Using sigmoid in deep hidden layers (vanishing gradient).",
      "Forgetting that without activation, layers are just linear.",
      "Not handling ReLU's dying neuron problem (leaky ReLU helps)."
    ],
    whenToUse: "Use ReLU for hidden layers, sigmoid for binary output, softmax for multi-class output.",
    interviewTip: "ReLU is preferred over sigmoid in hidden layers because it doesn't saturate — gradients stay healthy.",
    tryYourself: "Plot sigmoid and ReLU functions for inputs from -5 to 5."
  },
  "st-nn-3": {
    title: "Forward Propagation",
    definition: "Forward propagation passes input through the network layer by layer to produce a prediction.",
    explanation: "Each layer computes: output = activation(weights * input + bias). The input flows forward from the input layer through hidden layers to the output. No learning happens here — it's just inference.",
    example: `import numpy as np\n\ndef forward(x, w, b, activation):\n    return activation(np.dot(x, w) + b)\n\nx = np.array([1, 2])\nw1 = np.array([[0.1, 0.3], [0.2, 0.4]])\nb1 = np.array([0.1, 0.1])\n\nh = forward(x, w1, b1, lambda v: np.maximum(0, v))  # ReLU\nprint(h)  # hidden layer output`,
    keyTakeaways: [
      "Input flows forward through layers to produce output.",
      "Each layer: activation(weights * input + bias).",
      "No learning — just prediction.",
      "The output is compared to the target to compute loss."
    ],
    commonMistakes: [
      "Forgetting the activation function (network becomes linear).",
      "Mixing up row/column vector shapes.",
      "Not understanding that forward pass is inference, not training."
    ],
    whenToUse: "Forward propagation is used every time you make a prediction with a neural network.",
    interviewTip: "Forward pass is just matrix multiplication and activation — keep the shapes straight.",
    tryYourself: "Implement a 2-layer forward pass with ReLU and sigmoid activations."
  },
  "st-nn-4": {
    title: "Backpropagation",
    definition: "Backpropagation computes gradients of the loss with respect to weights by applying the chain rule backward through the network.",
    explanation: "After forward propagation, the loss is computed. Backprop propagates the error backward, computing how much each weight contributed to the error. These gradients are used by gradient descent to update weights. It's the core of neural network training.",
    example: `# Conceptual (PyTorch handles this automatically)\nimport torch\nimport torch.nn as nn\n\nmodel = nn.Linear(2, 1)\nx = torch.tensor([[1.0, 2.0]])\ny_true = torch.tensor([[1.0]])\n\ny_pred = model(x)\nloss = nn.MSELoss()(y_pred, y_true)\nloss.backward()  # backpropagation\nprint(model.weight.grad)  # gradients`,
    keyTakeaways: [
      "Backprop computes gradients using the chain rule.",
      "It propagates error backward from output to input.",
      "Gradients tell gradient descent how to update weights.",
      "It's automatic in frameworks like PyTorch and TensorFlow."
    ],
    commonMistakes: [
      "Forgetting to call zero_grad() before backward() (gradients accumulate).",
      "Not understanding that backprop is gradient computation, not the update itself.",
      "Detaching tensors when you shouldn't (breaks the computation graph)."
    ],
    whenToUse: "Backpropagation is used during every training step of a neural network.",
    interviewTip: "Backprop computes gradients; gradient descent applies them — they're separate steps.",
    tryYourself: "In PyTorch, do a forward pass, compute loss, call backward(), and print the gradients."
  },
  "st-nn-5": {
    title: "Gradient Descent",
    definition: "Gradient descent updates weights in the direction that reduces the loss, using the gradients from backpropagation.",
    explanation: "Weights are updated as: w = w - learning_rate * gradient. The learning rate controls step size. Too high: overshoots; too low: slow. Variants include SGD, mini-batch, and Adam (adaptive learning rates).",
    example: `# Manual gradient descent\nw = 5.0\nlr = 0.1\nfor i in range(100):\n    grad = 2 * (w - 3)  # derivative of (w-3)^2\n    w = w - lr * grad\nprint(w)  # approaches 3.0\n\n# PyTorch optimizer\noptimizer = torch.optim.SGD(model.parameters(), lr=0.01)\noptimizer.zero_grad()\nloss.backward()\noptimizer.step()`,
    keyTakeaways: [
      "Updates weights: w = w - lr * gradient.",
      "Learning rate controls step size.",
      "Too high: overshoots; too low: slow convergence.",
      "Adam is a popular adaptive variant."
    ],
    commonMistakes: [
      "Setting the learning rate too high (diverges) or too low (slow).",
      "Forgetting to zero gradients before each step.",
      "Not normalizing input data (gradients can explode)."
    ],
    whenToUse: "Use gradient descent to train virtually all neural networks.",
    interviewTip: "If loss is NaN, your learning rate is likely too high — halve it and retry.",
    tryYourself: "Implement manual gradient descent to minimize f(x) = (x - 7)² and print the final x."
  },
  "st-nn-6": {
    title: "Loss Functions",
    definition: "A loss function measures how far the model's predictions are from the true values.",
    explanation: "Regression: MSE (mean squared error) or MAE. Binary classification: binary cross-entropy. Multi-class: categorical cross-entropy. The goal of training is to minimize loss. The choice depends on the task.",
    example: `import torch\nimport torch.nn as nn\n\n# MSE for regression\nmse = nn.MSELoss()\nloss = mse(torch.tensor([2.0, 4.0]), torch.tensor([3.0, 5.0]))\nprint(loss)  # tensor(1.)\n\n# Cross-entropy for classification\nce = nn.CrossEntropyLoss()\nlogits = torch.tensor([[2.0, 1.0, 0.1]])\ntarget = torch.tensor([0])\nprint(ce(logits, target))`,
    keyTakeaways: [
      "Loss measures prediction error.",
      "MSE for regression, cross-entropy for classification.",
      "Training minimizes the loss.",
      "The loss function must match the task."
    ],
    commonMistakes: [
      "Using MSE for classification (use cross-entropy).",
      "Not applying softmax/log_softmax correctly with cross-entropy.",
      "Forgetting that loss is averaged over the batch by default."
    ],
    whenToUse: "Choose the loss function based on the task: MSE for regression, cross-entropy for classification.",
    interviewTip: "Cross-entropy with logits (not probabilities) is the standard — frameworks apply softmax internally.",
    tryYourself: "Compute MSE between two small tensors and verify the value by hand."
  },

  // ============================================================
  // PHASE 5 - CNNs
  // ============================================================
  "st-cnn-1": {
    title: "Convolution Operations",
    definition: "A convolution slides a filter (kernel) over an image, computing dot products to detect features like edges and textures.",
    explanation: "The kernel is a small matrix (e.g., 3×3) that slides across the input. At each position, it computes the element-wise product and sums it. This produces a feature map. Different kernels detect different features. Stride controls step size; padding controls output size.",
    example: `import torch\nimport torch.nn as nn\n\n# A convolution layer\nconv = nn.Conv2d(in_channels=1, out_channels=16, kernel_size=3, stride=1, padding=1)\n\n# Input: 1 channel, 28x28 image\nx = torch.randn(1, 1, 28, 28)\noutput = conv(x)\nprint(output.shape)  # torch.Size([1, 16, 28, 28])`,
    keyTakeaways: [
      "Convolutions slide filters over the input to detect features.",
      "Kernel size, stride, and padding control the output shape.",
      "Each filter detects a different feature (edges, corners, etc.).",
      "Parameters are shared across the image (efficient)."
    ],
    commonMistakes: [
      "Forgetting to add a batch dimension to input.",
      "Confusing in_channels and out_channels.",
      "Not understanding how padding affects output dimensions."
    ],
    whenToUse: "Use convolutions for image data where spatial relationships matter.",
    interviewTip: "Convolutions are translation-invariant and parameter-efficient compared to fully connected layers on images.",
    tryYourself: "Apply a 3x3 convolution to a 5x5 input and print the output shape."
  },
  "st-cnn-2": {
    title: "Pooling Layers",
    definition: "Pooling reduces the spatial dimensions of feature maps while retaining important information.",
    explanation: "Max pooling takes the maximum value in each window (e.g., 2×2). Average pooling takes the average. Pooling reduces computation, controls overfitting, and provides some translation invariance. It has no learnable parameters.",
    example: `import torch\nimport torch.nn as nn\n\n# Max pooling: 2x2 window, stride 2\npool = nn.MaxPool2d(kernel_size=2, stride=2)\n\nx = torch.randn(1, 16, 28, 28)\noutput = pool(x)\nprint(output.shape)  # torch.Size([1, 16, 14, 14]) — halved`,
    keyTakeaways: [
      "Pooling reduces spatial dimensions (downsampling).",
      "Max pooling keeps the strongest feature; average pooling averages.",
      "No learnable parameters.",
      "Provides translation invariance and reduces computation."
    ],
    commonMistakes: [
      "Using a stride that doesn't evenly divide the input size.",
      "Confusing pooling with convolution (pooling has no weights).",
      "Over-pooling, losing too much spatial information."
    ],
    whenToUse: "Use pooling between convolution layers to reduce dimensions and control overfitting.",
    interviewTip: "Max pooling is more common than average pooling — it preserves the most salient features.",
    tryYourself: "Apply max pooling with a 2x2 window to a 4x4 tensor and print the result."
  },
  "st-cnn-3": {
    title: "Popular Architectures",
    definition: "Popular CNN architectures like VGG, ResNet, and Inception are pre-designed network structures for image tasks.",
    explanation: "VGG uses simple stacked convolutions; ResNet introduces skip connections (residual blocks) to train very deep networks; Inception uses parallel multi-scale convolutions. These are available pre-trained in torchvision and TensorFlow.",
    example: `import torchvision.models as models\n\n# Load pre-trained ResNet\nresnet = models.resnet18(pretrained=True)\n\n# Replace the final layer for custom classification\nimport torch.nn as nn\nresnet.fc = nn.Linear(resnet.fc.in_features, 10)  # 10 classes\n\n# Forward pass\nx = torch.randn(1, 3, 224, 224)\noutput = resnet(x)\nprint(output.shape)  # torch.Size([1, 10])`,
    keyTakeaways: [
      "VGG: simple, deep, stacked convolutions.",
      "ResNet: skip connections enable very deep training.",
      "Inception: parallel multi-scale feature extraction.",
      "Available pre-trained for transfer learning."
    ],
    commonMistakes: [
      "Not replacing the final classification layer for custom tasks.",
      "Forgetting to preprocess input images (resize, normalize).",
      "Using a model too large for the available compute."
    ],
    whenToUse: "Use these architectures as starting points for image classification, often with transfer learning.",
    interviewTip: "ResNet's skip connections solve the vanishing gradient problem — that's why it can go 50+ layers deep.",
    tryYourself: "Load a pre-trained ResNet and print the number of layers."
  },
  "st-cnn-4": {
    title: "Transfer Learning",
    definition: "Transfer learning uses a pre-trained model on a new task by fine-tuning its weights or using it as a feature extractor.",
    explanation: "Take a model trained on a large dataset (e.g., ImageNet), freeze some layers, and retrain the rest (or just the final layer) on your data. This works well with small datasets because the early layers already detect useful features like edges and shapes.",
    example: `import torchvision.models as models\nimport torch.nn as nn\n\nmodel = models.resnet18(pretrained=True)\n\n# Freeze all layers\nfor param in model.parameters():\n    param.requires_grad = False\n\n# Replace and train only the final layer\nmodel.fc = nn.Linear(model.fc.in_features, 5)  # 5 new classes\n# Only model.fc parameters will update during training`,
    keyTakeaways: [
      "Reuses a pre-trained model for a new task.",
      "Freeze early layers, retrain later ones (or just the classifier).",
      "Works well with small datasets.",
      "Early layers detect general features (edges, textures)."
    ],
    commonMistakes: [
      "Not freezing layers when using the model as a feature extractor.",
      "Forgetting to replace the output layer for the new number of classes.",
      "Not normalizing input images the same way the pre-trained model expects."
    ],
    whenToUse: "Use transfer learning when you have limited data but need strong performance.",
    interviewTip: "Freeze early layers first, then gradually unfreeze for fine-tuning — a technique called progressive unfreezing.",
    tryYourself: "Load a pre-trained model, freeze all layers, replace the final layer, and train on a small dataset."
  },

  // ============================================================
  // PHASE 5 - RNNs AND TRANSFORMERS
  // ============================================================
  "st-rnn-1": {
    title: "RNN Basics",
    definition: "A Recurrent Neural Network processes sequences by maintaining a hidden state that carries information from previous steps.",
    explanation: "At each time step, the RNN takes the current input and the previous hidden state, producing a new hidden state and output. This makes it suitable for sequences like text or time series. However, basic RNNs suffer from vanishing gradients on long sequences.",
    example: `import torch\nimport torch.nn as nn\n\nrnn = nn.RNN(input_size=10, hidden_size=20, batch_first=True)\n\n# Sequence of 5 steps, batch size 3, input size 10\nx = torch.randn(3, 5, 10)\noutput, hidden = rnn(x)\nprint(output.shape)   # torch.Size([3, 5, 20])\nprint(hidden.shape)   # torch.Size([1, 3, 20])`,
    keyTakeaways: [
      "RNNs process sequences with a hidden state.",
      "The hidden state carries information from previous steps.",
      "Suitable for text, time series, and sequential data.",
      "Basic RNNs struggle with long sequences (vanishing gradient)."
    ],
    commonMistakes: [
      "Not understanding the shape of input (batch, seq, features).",
      "Expecting RNNs to remember long-term dependencies.",
      "Forgetting to pass the hidden state between batches in stateful mode."
    ],
    whenToUse: "Use RNNs for sequential data, though LSTMs and GRUs are usually better choices.",
    interviewTip: "Basic RNNs can't learn long-range dependencies — that's why LSTMs were invented.",
    tryYourself: "Create an RNN, pass a sequence through it, and print the output and hidden state shapes."
  },
  "st-rnn-2": {
    title: "LSTM",
    definition: "LSTM (Long Short-Term Memory) is an RNN variant with gates that control information flow, solving the vanishing gradient problem.",
    explanation: "LSTM has three gates: forget (what to remove), input (what to add), and output (what to pass on). A cell state runs through the chain with minimal modification, allowing long-term memory. This makes LSTMs effective for long sequences.",
    example: `import torch\nimport torch.nn as nn\n\nlstm = nn.LSTM(input_size=10, hidden_size=20, batch_first=True)\n\nx = torch.randn(3, 5, 10)  # (batch, seq, features)\noutput, (hidden, cell) = lstm(x)\nprint(output.shape)   # torch.Size([3, 5, 20])\nprint(hidden.shape)   # torch.Size([1, 3, 20])\nprint(cell.shape)     # torch.Size([1, 3, 20])`,
    keyTakeaways: [
      "LSTM uses forget, input, and output gates.",
      "Cell state enables long-term memory.",
      "Solves the vanishing gradient problem of basic RNNs.",
      "Better than basic RNNs for long sequences."
    ],
    commonMistakes: [
      "Confusing the hidden state with the cell state.",
      "Not understanding what each gate does.",
      "Using basic RNNs when LSTMs would perform better."
    ],
    whenToUse: "Use LSTMs for sequence tasks with long-range dependencies, like translation or sentiment on long text.",
    interviewTip: "LSTM's cell state is the highway for long-term memory — gates regulate what enters and leaves.",
    tryYourself: "Replace an RNN with an LSTM in a simple sequence model and compare the outputs."
  },
  "st-rnn-3": {
    title: "GRU",
    definition: "GRU (Gated Recurrent Unit) is a simplified LSTM with fewer gates, offering similar performance with less computation.",
    explanation: "GRU has two gates: reset and update. It combines the forget and input gates into a single update gate, and has no separate cell state. This makes it faster and lighter than LSTM while achieving comparable results on many tasks.",
    example: `import torch\nimport torch.nn as nn\n\ngru = nn.GRU(input_size=10, hidden_size=20, batch_first=True)\n\nx = torch.randn(3, 5, 10)\noutput, hidden = gru(x)\nprint(output.shape)   # torch.Size([3, 5, 20])\nprint(hidden.shape)   # torch.Size([1, 3, 20])`,
    keyTakeaways: [
      "GRU has two gates: reset and update.",
      "No separate cell state (simpler than LSTM).",
      "Fewer parameters — faster than LSTM.",
      "Performance comparable to LSTM on many tasks."
    ],
    commonMistakes: [
      "Assuming GRU is always better than LSTM (task-dependent).",
      "Not understanding the difference between reset and update gates.",
      "Forgetting that GRU has no cell state output."
    ],
    whenToUse: "Use GRUs when you want LSTM-like performance with fewer parameters and faster training.",
    interviewTip: "Try both GRU and LSTM — GRU is often faster and just as good, but it's task-dependent.",
    tryYourself: "Create a GRU and an LSTM with the same hidden size, and compare their parameter counts."
  },
  "st-rnn-4": {
    title: "Attention Mechanism",
    definition: "Attention lets a model focus on the most relevant parts of the input when producing each output, rather than relying on a single fixed-length vector.",
    explanation: "Attention computes weights (importance) for each input position relative to the current output. The output is a weighted sum of input representations. This solved the bottleneck of encoding entire sequences into one vector and enabled better performance on long sequences.",
    example: `import torch\nimport torch.nn as nn\n\n# Scaled dot-product attention (simplified)\nQ = torch.randn(2, 5, 10)  # queries\nK = torch.randn(2, 5, 10)  # keys\nV = torch.randn(2, 5, 10)  # values\n\nscores = torch.matmul(Q, K.transpose(-2, -1)) / (10 ** 0.5)\nweights = torch.softmax(scores, dim=-1)\noutput = torch.matmul(weights, V)\nprint(output.shape)  # torch.Size([2, 5, 10])`,
    keyTakeaways: [
      "Attention weighs input positions by relevance.",
      "Output is a weighted sum of values based on query-key similarity.",
      "Solves the fixed-length bottleneck of basic RNN encoders.",
      "Foundation of the Transformer architecture."
    ],
    commonMistakes: [
      "Forgetting to scale by sqrt(d_k) in dot-product attention.",
      "Confusing queries, keys, and values.",
      "Not applying softmax to get attention weights."
    ],
    whenToUse: "Use attention for sequence-to-sequence tasks where different input parts matter at different output steps.",
    interviewTip: "Attention computes weighted sums of values — queries ask, keys match, values answer.",
    tryYourself: "Implement scaled dot-product attention and verify the output shape matches the input."
  },
  "st-rnn-5": {
    title: "Transformers",
    definition: "Transformers are sequence models that rely entirely on self-attention, processing all positions in parallel without recurrence.",
    explanation: "Transformers use multi-head self-attention and positional encoding instead of recurrence. This enables parallel processing and better long-range modeling. They power modern LLMs like GPT and BERT. The key insight: attention replaces recurrence.",
    example: `import torch\nimport torch.nn as nn\n\n# A single transformer encoder layer\nencoder_layer = nn.TransformerEncoderLayer(\n    d_model=512, nhead=8, batch_first=True\n)\ntransformer = nn.TransformerEncoder(encoder_layer, num_layers=6)\n\nx = torch.randn(2, 10, 512)  # (batch, seq, d_model)\noutput = transformer(x)\nprint(output.shape)  # torch.Size([2, 10, 512])`,
    keyTakeaways: [
      "Transformers use self-attention, not recurrence.",
      "Positional encoding provides order information.",
      "Multi-head attention attends to different representation subspaces.",
      "Powers modern LLMs (GPT, BERT, T5)."
    ],
    commonMistakes: [
      "Forgetting positional encoding (transformers have no inherent order).",
      "Not understanding multi-head attention (parallel attention layers).",
      "Confusing encoder and decoder transformers."
    ],
    whenToUse: "Use transformers for NLP tasks, vision (ViT), and any sequence modeling needing long-range context.",
    interviewTip: "Transformers process all positions in parallel — positional encoding is what gives them sequence order.",
    tryYourself: "Create a transformer encoder layer and pass a sequence through it."
  },

  // ============================================================
  // PHASE 5 - PYTORCH AND TENSORFLOW
  // ============================================================
  "st-pt-1": {
    title: "Tensor Operations",
    definition: "Tensors are multi-dimensional arrays — the fundamental data structure in PyTorch and TensorFlow.",
    explanation: "Tensors are like numpy arrays but can run on GPUs and track gradients. Create them with torch.tensor(), torch.zeros(), torch.randn(). Operations include reshaping, slicing, element-wise math, and matrix multiplication. Shapes matter — always check them.",
    example: `import torch\n\n# Create tensors\na = torch.tensor([[1, 2], [3, 4]])\nb = torch.zeros(2, 3)\nc = torch.randn(2, 2)\n\n# Operations\nprint(a.shape)          # torch.Size([2, 2])\nprint(a.reshape(4, 1))   # reshape\nprint(torch.matmul(a, c))  # matrix multiply\nprint(a + 1)             # element-wise\nprint(a.to('cuda'))      # move to GPU`,
    keyTakeaways: [
      "Tensors are multi-dimensional arrays with GPU support.",
      "Create with torch.tensor, zeros, ones, randn.",
      "Operations: reshape, matmul, element-wise, slicing.",
      "Check shapes constantly — most bugs are shape errors."
    ],
    commonMistakes: [
      "Mismatching tensor shapes in operations.",
      "Forgetting to move tensors to GPU before computation.",
      "Confusing reshape with view (view requires contiguous memory)."
    ],
    whenToUse: "Use tensors for all data and model parameters in deep learning.",
    interviewTip: "Most PyTorch bugs are shape errors — print tensor.shape constantly while debugging.",
    tryYourself: "Create two tensors, multiply them, reshape the result, and print the final shape."
  },
  "st-pt-2": {
    title: "Autograd",
    definition: "Autograd automatically computes gradients for tensor operations, enabling automatic differentiation for training.",
    explanation: "PyTorch builds a computation graph as you perform operations on tensors with requires_grad=True. Call .backward() to compute gradients, which are stored in .grad. This powers backpropagation without manual derivative coding.",
    example: `import torch\n\nx = torch.tensor(2.0, requires_grad=True)\ny = x ** 2 + 3 * x + 1  # y = x^2 + 3x + 1\ny.backward()             # compute gradients\nprint(x.grad)            # dy/dx = 2x + 3 = 7.0`,
    keyTakeaways: [
      "Autograd automatically computes gradients.",
      "Set requires_grad=True on tensors you want to differentiate.",
      "Call .backward() to populate .grad.",
      "Builds a dynamic computation graph."
    ],
    commonMistakes: [
      "Forgetting to set requires_grad=True.",
      "Not calling zero_grad() before backward (gradients accumulate).",
      "Calling backward on a non-scalar without passing a gradient."
    ],
    whenToUse: "Use autograd for all gradient-based training in PyTorch.",
    interviewTip: "Gradients accumulate by default in PyTorch — always call optimizer.zero_grad() before backward().",
    tryYourself: "Create a tensor with requires_grad, compute a loss, call backward, and print the gradient."
  },
  "st-pt-3": {
    title: "Custom Datasets",
    definition: "A custom dataset class loads and preprocesses your data, returning individual samples with labels.",
    explanation: "Subclass torch.utils.data.Dataset and implement __len__ (total samples) and __getitem__ (return one sample). Use DataLoader to batch, shuffle, and parallelize loading. This handles any data format — images, text, audio.",
    example: `from torch.utils.data import Dataset, DataLoader\n\nclass MyDataset(Dataset):\n    def __init__(self, data, labels):\n        self.data = data\n        self.labels = labels\n\n    def __len__(self):\n        return len(self.data)\n\n    def __getitem__(self, idx):\n        return self.data[idx], self.labels[idx]\n\nds = MyDataset([1, 2, 3], [0, 1, 0])\nloader = DataLoader(ds, batch_size=2, shuffle=True)\nfor batch in loader:\n    print(batch)`,
    keyTakeaways: [
      "Subclass Dataset and implement __len__ and __getitem__.",
      "DataLoader handles batching, shuffling, and parallel loading.",
      "Works with any data format.",
      "Return (features, label) tuples from __getitem__."
    ],
    commonMistakes: [
      "Forgetting to implement __len__ or __getitem__.",
      "Not converting data to tensors in __getitem__.",
      "Setting num_workers too high (can cause slowdowns)."
    ],
    whenToUse: "Use custom datasets whenever your data doesn't fit a built-in dataset class.",
    interviewTip: "Keep __getitem__ fast — DataLoader calls it many times, often in parallel with multiple workers.",
    tryYourself: "Create a custom dataset from a list of numbers and use DataLoader to iterate batches."
  },
  "st-pt-4": {
    title: "Training Loops",
    definition: "A training loop iterates over data, computes forward pass, loss, backward pass, and weight updates for each epoch.",
    explanation: "For each batch: zero gradients, forward pass, compute loss, backward pass, optimizer step. Repeat for multiple epochs. Track loss to monitor training. The loop is the heart of model training in PyTorch.",
    example: `import torch\nimport torch.nn as nn\nimport torch.optim as optim\n\nmodel = nn.Linear(10, 2)\noptimizer = optim.SGD(model.parameters(), lr=0.01)\ncriterion = nn.CrossEntropyLoss()\n\nfor epoch in range(10):\n    for X_batch, y_batch in loader:\n        optimizer.zero_grad()\n        outputs = model(X_batch)\n        loss = criterion(outputs, y_batch)\n        loss.backward()\n        optimizer.step()\n    print(f"Epoch {epoch}, Loss: {loss.item()}")`,
    keyTakeaways: [
      "Each step: zero_grad, forward, loss, backward, step.",
      "Repeat for multiple epochs.",
      "Track loss to monitor convergence.",
      "Set model.train() for training, model.eval() for evaluation."
    ],
    commonMistakes: [
      "Forgetting optimizer.zero_grad() (gradients accumulate).",
      "Not calling model.train() or model.eval() in the right places.",
      "Forgetting to detach loss for logging (memory leak)."
    ],
    whenToUse: "Use a training loop for every model you train in PyTorch.",
    interviewTip: "Always call model.train() before training and model.eval() before evaluation — it affects dropout and batch norm.",
    tryYourself: "Write a training loop for a simple linear model and print the loss every epoch."
  },
  "st-pt-5": {
    title: "Model Saving/Loading",
    definition: "Saving and loading models stores trained weights to disk and restores them for inference or continued training.",
    explanation: "Save with torch.save(model.state_dict(), 'model.pth') — this stores only weights. Load by creating the model and calling load_state_dict(). For full checkpoints (with optimizer state), save a dict of model, optimizer, and epoch.",
    example: `import torch\nimport torch.nn as nn\n\nmodel = nn.Linear(10, 2)\n\n# Save\ntorch.save(model.state_dict(), 'model.pth')\n\n# Load\nloaded = nn.Linear(10, 2)\nloaded.load_state_dict(torch.load('model.pth'))\nloaded.eval()  # set to eval mode for inference`,
    keyTakeaways: [
      "Save state_dict (weights only), not the entire model.",
      "Load by creating the model and calling load_state_dict.",
      "For checkpoints, save a dict with model, optimizer, and epoch.",
      "Call model.eval() after loading for inference."
    ],
    commonMistakes: [
      "Saving the entire model instead of state_dict (less portable).",
      "Not calling model.eval() after loading for inference.",
      "Forgetting to save optimizer state for resuming training."
    ],
    whenToUse: "Use model saving/loading for deployment, checkpointing, and resuming training.",
    interviewTip: "Save state_dict, not the whole model — it's more portable across code changes.",
    tryYourself: "Save a trained model, load it into a new instance, and verify predictions match."
  },

  // ============================================================
  // PHASE 6 - LLM FUNDAMENTALS
  // ============================================================
  "st-llm-1": {
    title: "Tokenization",
    definition: "Tokenization splits text into smaller units (tokens) that a language model can process.",
    explanation: "Tokens can be words, subwords, or characters. Modern LLMs use subword tokenization (BPE, WordPiece) to handle rare words and multiple languages. Each token is mapped to an integer ID. The tokenizer determines how text becomes numbers.",
    example: `from transformers import AutoTokenizer\n\ntokenizer = AutoTokenizer.from_pretrained("gpt2")\ntokens = tokenizer.encode("Hello, world!")\nprint(tokens)  # [15496, 11, 995, 0]\nprint(tokenizer.decode(tokens))  # "Hello, world!"`,
    keyTakeaways: [
      "Tokenization converts text into model-processable units.",
      "Subword tokenization (BPE, WordPiece) is standard for LLMs.",
      "Each token maps to an integer ID.",
      "Different models use different tokenizers."
    ],
    commonMistakes: [
      "Using the wrong tokenizer for a model.",
      "Forgetting that token count ≠ word count.",
      "Not handling special tokens (CLS, SEP, PAD) correctly."
    ],
    whenToUse: "Tokenization is the first step in any NLP pipeline with language models.",
    interviewTip: "Token count affects cost and context limits — always check tokenization before sending to an API.",
    tryYourself: "Tokenize a sentence and count how many tokens it produces vs. words."
  },
  "st-llm-2": {
    title: "Attention",
    definition: "Attention in LLMs computes weighted representations of tokens based on their relevance to each other.",
    explanation: "Self-attention lets each token attend to all other tokens. Multi-head attention runs multiple attention mechanisms in parallel, capturing different relationships. This is the core mechanism of Transformers, enabling context-aware representations.",
    example: `# Conceptual: self-attention in a transformer\n# Each token's representation is a weighted sum of all tokens' values\n# Weights come from query-key similarity\n\n# In transformers library:\nfrom transformers import AutoModel\nmodel = AutoModel.from_pretrained("bert-base-uncased")\n# The model internally computes multi-head self-attention`,
    keyTakeaways: [
      "Self-attention lets tokens weigh each other's relevance.",
      "Multi-head attention captures different relationship types.",
      "Core mechanism of Transformers.",
      "Enables long-range context modeling."
    ],
    commonMistakes: [
      "Confusing self-attention with cross-attention.",
      "Not understanding that attention weights sum to 1 (softmax).",
      "Forgetting that attention is O(n²) in sequence length."
    ],
    whenToUse: "Attention is the core of all transformer-based models — understand it for any LLM work.",
    interviewTip: "Self-attention is O(n²) in sequence length — this is why long contexts are expensive.",
    tryYourself: "Explain in your own words how self-attention helps a model understand the word 'bank' in 'river bank' vs. 'bank account'."
  },
  "st-llm-3": {
    title: "Fine-tuning",
    definition: "Fine-tuning adapts a pre-trained language model to a specific task by training it on task-specific data.",
    explanation: "Start with a pre-trained model (e.g., BERT, GPT) and train it further on your labeled data. Full fine-tuning updates all weights; parameter-efficient methods (LoRA, adapters) update only a small subset. This customizes the model for tasks like classification or QA.",
    example: `from transformers import AutoModelForSequenceClassification, Trainer, TrainingArguments\n\nmodel = AutoModelForSequenceClassification.from_pretrained(\n    "bert-base-uncased", num_labels=2\n)\n\ntraining_args = TrainingArguments(\n    output_dir="./results",\n    num_train_epochs=3,\n    per_device_train_batch_size=8,\n)\n\ntrainer = Trainer(model=model, args=training_args, train_dataset=dataset)\ntrainer.train()`,
    keyTakeaways: [
      "Fine-tuning adapts a pre-trained model to a specific task.",
      "Full fine-tuning updates all weights; PEFT (LoRA) updates a subset.",
      "Requires labeled task-specific data.",
      "Much faster and cheaper than training from scratch."
    ],
    commonMistakes: [
      "Using too high a learning rate (destroys pre-trained knowledge).",
      "Not freezing layers when data is limited.",
      "Forgetting to use the model's expected input format."
    ],
    whenToUse: "Use fine-tuning when a general pre-trained model needs to specialize for your task.",
    interviewTip: "Use a low learning rate (1e-5 to 5e-5) for fine-tuning — high rates destroy pre-trained knowledge.",
    tryYourself: "Set up a fine-tuning config for a BERT model on a binary classification task."
  },
  "st-llm-4": {
    title: "RLHF",
    definition: "RLHF (Reinforcement Learning from Human Feedback) aligns language models with human preferences using reward models.",
    explanation: "Steps: (1) Train a supervised model, (2) Train a reward model on human preference comparisons, (3) Use reinforcement learning (PPO) to optimize the model against the reward. This makes outputs more helpful, harmless, and honest. It's how ChatGPT was aligned.",
    example: `# Conceptual RLHF pipeline (simplified):\n# 1. Supervised fine-tuning on demonstrations\n# 2. Train reward model on (prompt, response_A, response_B, preference) data\n# 3. Optimize policy with PPO using the reward model\n\n# In practice, use libraries like trl:\n# from trl import PPOTrainer, AutoModelForCausalLMWithValueHead\n# trainer = PPOTrainer(...)\n# trainer.optimize_policy(...)`,
    keyTakeaways: [
      "RLHF aligns models with human preferences.",
      "Three stages: supervised, reward model, PPO optimization.",
      "Makes outputs more helpful and safe.",
      "Used to train ChatGPT and similar models."
    ],
    commonMistakes: [
      "Confusing RLHF with supervised fine-tuning.",
      "Not understanding the role of the reward model.",
      "Forgetting that RLHF can introduce biases from annotators."
    ],
    whenToUse: "Use RLHF when you need to align a model's behavior with human values and preferences.",
    interviewTip: "RLHF has three stages: supervised fine-tuning, reward model training, and PPO — know each step.",
    tryYourself: "Describe a scenario where you'd collect human preference data for a reward model."
  },

  // ============================================================
  // PHASE 6 - PROMPT ENGINEERING
  // ============================================================
  "st-pe-1": {
    title: "Prompt Patterns",
    definition: "Prompt patterns are reusable templates for structuring prompts to get consistent, high-quality responses from LLMs.",
    explanation: "Common patterns: role-based ('You are an expert...'), format specification ('respond in JSON'), constraint setting ('in 3 bullet points'), and context injection. Good patterns reduce ambiguity and guide the model toward the desired output format.",
    example: `# Role-based pattern\n"You are an expert Python tutor. Explain list comprehensions\nto a beginner with one example. Keep it under 100 words."\n\n# Format specification pattern\n"Classify the sentiment of this review as positive, negative,\nor neutral. Respond in JSON: {\"sentiment\": \"...\", \"confidence\": 0.0-1.0}"`,
    keyTakeaways: [
      "Patterns provide structure and reduce ambiguity.",
      "Common: role, format, constraints, context.",
      "Specify the output format explicitly.",
      "Be specific about what you want."
    ],
    commonMistakes: [
      "Being too vague ('tell me about Python').",
      "Not specifying the output format.",
      "Overloading a prompt with too many instructions."
    ],
    whenToUse: "Use prompt patterns whenever you need consistent, structured LLM outputs.",
    interviewTip: "The most effective prompts specify role, task, format, and constraints — cover all four.",
    tryYourself: "Write a prompt using the role-based pattern to get a JSON-formatted movie recommendation."
  },
  "st-pe-2": {
    title: "Few-Shot Learning",
    definition: "Few-shot learning provides the model with a few examples in the prompt to guide its output format and behavior.",
    explanation: "Include 2-5 examples of input-output pairs before the actual task. The model learns the pattern from examples and applies it to the new input. This is especially useful for classification, formatting, or translation tasks.",
    example: `# Few-shot classification prompt\n"Classify the sentiment:\nText: 'I love this!' -> positive\nText: 'Terrible service.' -> negative\nText: 'It was okay.' -> neutral\nText: 'Best movie ever!' ->"`,
    keyTakeaways: [
      "Few-shot provides examples in the prompt.",
      "The model learns the pattern from examples.",
      "2-5 examples are usually enough.",
      "Great for classification and formatting tasks."
    ],
    commonMistakes: [
      "Using too many examples (wastes tokens, can confuse).",
      "Inconsistent example formats.",
      "Not matching the example format to the desired output."
    ],
    whenToUse: "Use few-shot when you need the model to follow a specific pattern or format.",
    interviewTip: "Keep few-shot examples consistent in format — inconsistency confuses the model.",
    tryYourself: "Write a few-shot prompt that teaches the model to translate English to French with 3 examples."
  },
  "st-pe-3": {
    title: "Chain of Thought",
    definition: "Chain of Thought (CoT) prompting asks the model to reason step by step before giving the final answer.",
    explanation: "Add phrases like 'Let's think step by step' or show reasoning in examples. This improves accuracy on math, logic, and multi-step problems. The model's intermediate reasoning helps it arrive at better answers, and you can verify the logic.",
    example: `# Zero-shot CoT\n"If a train travels 60 mph for 2.5 hours, how far does it go?\nLet's think step by step."\n\n# Few-shot CoT\n"Q: 15 + 27 = ?\nA: 15 + 20 = 35, then 35 + 7 = 42.\nQ: 8 * 9 = ?\nA: 8 * 9 = 72.\nQ: 23 + 48 = ?\nA:"`,
    keyTakeaways: [
      "CoT asks the model to reason step by step.",
      "Improves accuracy on math and logic problems.",
      "Use 'Let's think step by step' for zero-shot CoT.",
      "Intermediate steps are visible and verifiable."
    ],
    commonMistakes: [
      "Using CoT for simple tasks where it adds no value.",
      "Not verifying the intermediate reasoning steps.",
      "Expecting CoT to fix a model that lacks the knowledge."
    ],
    whenToUse: "Use CoT for multi-step reasoning, math, logic, and complex analysis tasks.",
    interviewTip: "CoT is most valuable for math and logic — for simple tasks, it just wastes tokens.",
    tryYourself: "Write a CoT prompt for a word problem about splitting a restaurant bill among 4 people."
  },

  // ============================================================
  // PHASE 6 - RAG SYSTEMS
  // ============================================================
  "st-rag-1": {
    title: "Embeddings",
    definition: "Embeddings are vector representations of text that capture semantic meaning in a numeric space.",
    explanation: "Similar texts have similar embeddings (close in vector space). Models like sentence-transformers or OpenAI's embedding API convert text to fixed-length vectors. Embeddings power semantic search, clustering, and RAG retrieval.",
    example: `from sentence_transformers import SentenceTransformer\n\nmodel = SentenceTransformer('all-MiniLM-L6-v2')\nembeddings = model.encode([\n    "I love programming",\n    "Coding is my passion",\n    "The weather is nice"\n])\n# embeddings[0] and [1] will be more similar than [0] and [2]`,
    keyTakeaways: [
      "Embeddings convert text to numeric vectors.",
      "Similar texts have similar (close) embeddings.",
      "Used for semantic search, clustering, and RAG.",
      "Fixed-length vectors regardless of input length."
    ],
    commonMistakes: [
      "Using embeddings for exact keyword matching (use traditional search).",
      "Not normalizing embeddings before cosine similarity.",
      "Choosing an embedding model without testing on your data."
    ],
    whenToUse: "Use embeddings for semantic search, similarity matching, and as the first step in RAG.",
    interviewTip: "Cosine similarity on normalized embeddings is the standard similarity metric — know it cold.",
    tryYourself: "Embed three sentences and compute cosine similarity between the first two."
  },
  "st-rag-2": {
    title: "Vector Databases",
    definition: "Vector databases store embeddings and enable fast similarity search to find the closest vectors to a query.",
    explanation: "Vector DBs like FAISS, Pinecone, Chroma, and Weaviate index embeddings for fast nearest-neighbor search. You insert documents as embeddings, then query with an embedding to find the most similar documents. This is the retrieval backbone of RAG.",
    example: `import chromadb\n\nclient = chromadb.Client()\ncollection = client.create_collection("docs")\n\ncollection.add(\n    documents=["Python is great", "Java is also good"],\n    ids=["1", "2"]\n)\n\nresults = collection.query(\n    query_texts=["I like Python"],\n    n_results=1\n)\nprint(results)`,
    keyTakeaways: [
      "Vector DBs store and index embeddings.",
      "Enable fast nearest-neighbor similarity search.",
      "Popular: FAISS, Pinecone, Chroma, Weaviate.",
      "Core retrieval component of RAG systems."
    ],
    commonMistakes: [
      "Not choosing the right index type for your scale.",
      "Forgetting to store metadata alongside embeddings.",
      "Using the wrong distance metric (cosine vs L2)."
    ],
    whenToUse: "Use vector databases when you need fast semantic search over large document collections.",
    interviewTip: "Choose the distance metric based on your embedding model — many are optimized for cosine similarity.",
    tryYourself: "Create a Chroma collection, add 3 documents, and query for the most similar one."
  },
  "st-rag-3": {
    title: "Retrieval",
    definition: "Retrieval finds the most relevant documents from a knowledge base by comparing query embeddings to stored embeddings.",
    explanation: "Embed the user's query, search the vector database for the top-k most similar documents, and return them as context. Techniques include dense retrieval (embeddings), sparse retrieval (BM25), and hybrid approaches. The quality of retrieval directly impacts RAG output.",
    example: `# Retrieval step in RAG\nquery_embedding = embedding_model.encode("How do I train a model?")\n\n# Search vector DB for top 3 similar docs\nresults = vector_db.search(\n    query_embedding,\n    top_k=3\n)\n\n# Combine retrieved documents as context\ncontext = "\\n".join([doc.text for doc in results])`,
    keyTakeaways: [
      "Embed the query, then search for similar documents.",
      "Top-k retrieval returns the k most similar items.",
      "Retrieval quality directly affects RAG output.",
      "Hybrid retrieval (dense + sparse) often works best."
    ],
    commonMistakes: [
      "Retrieving too few or too many documents.",
      "Not chunking documents appropriately before embedding.",
      "Ignoring retrieval quality (garbage in, garbage out)."
    ],
    whenToUse: "Use retrieval as the first step of RAG to find relevant context for the LLM.",
    interviewTip: "Chunk size matters — too small loses context, too large dilutes relevance. Experiment.",
    tryYourself: "Write pseudocode for a retrieval function that returns the top 3 documents for a query."
  },
  "st-rag-4": {
    title: "Generation",
    definition: "Generation in RAG uses retrieved documents as context for the LLM to produce an answer grounded in the knowledge base.",
    explanation: "Combine the user's question with retrieved context in a prompt, then send it to the LLM. The model generates an answer based on the provided context, not just its training data. This grounds responses in specific, up-to-date information.",
    example: `# Generation step in RAG\nprompt = f\"\"\"Use the following context to answer the question.\n\nContext:\n{retrieved_context}\n\nQuestion: {user_question}\n\nAnswer:"""\n\nresponse = llm.generate(prompt)\nprint(response)`,
    keyTakeaways: [
      "Generation combines retrieved context with the user's question.",
      "The LLM answers based on provided context, not just training data.",
      "Grounds responses in specific, current information.",
      "Prompt should instruct the model to use the context."
    ],
    commonMistakes: [
      "Not instructing the model to use only the provided context.",
      "Stuffing too much context (exceeds token limit).",
      "Not handling cases where retrieval finds nothing relevant."
    ],
    whenToUse: "Use generation as the final step of RAG to produce grounded, context-aware answers.",
    interviewTip: "Always instruct the model to say 'I don't know' when the context doesn't contain the answer — prevents hallucination.",
    tryYourself: "Write a RAG prompt template that includes context, question, and instructions to cite sources."
  },

  // ============================================================
  // PHASE 6 - AI APPLICATION BUILDING
  // ============================================================
  "st-aab-1": {
    title: "API Integration",
    definition: "API integration connects your application to an LLM service (like OpenAI or Anthropic) to send prompts and receive responses.",
    explanation: "Use the provider's SDK or REST API. Send a prompt with parameters (model, temperature, max tokens), receive a response. Handle rate limits, errors, and authentication. Keep API keys secure — never expose them in client-side code.",
    example: `from openai import OpenAI\n\nclient = OpenAI(api_key="your-key")\n\nresponse = client.chat.completions.create(\n    model="gpt-4",\n    messages=[\n        {"role": "system", "content": "You are a helpful tutor."},\n        {"role": "user", "content": "Explain recursion briefly."}\n    ],\n    temperature=0.7\n)\nprint(response.choices[0].message.content)`,
    keyTakeaways: [
      "Use the provider's SDK to send prompts and receive responses.",
      "Parameters: model, temperature, max_tokens control output.",
      "Handle rate limits, errors, and authentication.",
      "Never expose API keys in client-side code."
    ],
    commonMistakes: [
      "Exposing API keys in frontend code (security risk).",
      "Not handling rate limits and API errors.",
      "Forgetting to set max_tokens (can be expensive)."
    ],
    whenToUse: "Use API integration when building any application that uses an LLM service.",
    interviewTip: "Always proxy API calls through your own backend — never call LLM APIs directly from the frontend.",
    tryYourself: "Write a function that sends a prompt to an LLM API and prints the response."
  },
  "st-aab-2": {
    title: "Streaming",
    definition: "Streaming sends LLM responses in chunks as they're generated, reducing perceived latency for users.",
    explanation: "Instead of waiting for the full response, the API sends tokens as they're generated. Your app displays them incrementally. This improves user experience for long responses. Use stream=True in the API call and iterate over chunks.",
    example: `from openai import OpenAI\n\nclient = OpenAI(api_key="your-key")\n\nstream = client.chat.completions.create(\n    model="gpt-4",\n    messages=[{"role": "user", "content": "Write a short story."}],\n    stream=True\n)\n\nfor chunk in stream:\n    content = chunk.choices[0].delta.content\n    if content:\n        print(content, end="", flush=True)`,
    keyTakeaways: [
      "Streaming sends tokens as they're generated.",
      "Reduces perceived latency for users.",
      "Use stream=True and iterate over chunks.",
      "Display content incrementally."
    ],
    commonMistakes: [
      "Not flushing output (buffered, not displayed live).",
      "Not handling stream errors mid-way.",
      "Forgetting to check for None content in chunks."
    ],
    whenToUse: "Use streaming for chat interfaces or any long response where latency matters.",
    interviewTip: "Streaming improves perceived performance dramatically — always use it for chat UIs.",
    tryYourself: "Modify an API call to use streaming and print tokens as they arrive."
  },
  "st-aab-3": {
    title: "Deployment",
    definition: "Deployment makes your AI application available to users via a web server, API, or platform.",
    explanation: "Common options: FastAPI for APIs, Streamlit/Gradio for quick UIs, cloud platforms (AWS, GCP, Vercel). Handle environment variables for secrets, set up monitoring, and consider scaling. Containerize with Docker for portability.",
    example: `# FastAPI deployment example\nfrom fastapi import FastAPI\nfrom pydantic import BaseModel\n\napp = FastAPI()\n\nclass Query(BaseModel):\n    text: str\n\n@app.post("/ask")\ndef ask(query: Query):\n    response = llm.generate(query.text)\n    return {"answer": response}\n\n# Run: uvicorn app:app --reload`,
    keyTakeaways: [
      "FastAPI for APIs; Streamlit/Gradio for quick UIs.",
      "Use environment variables for secrets.",
      "Containerize with Docker for portability.",
      "Set up monitoring and logging."
    ],
    commonMistakes: [
      "Hardcoding API keys instead of using env variables.",
      "Not setting up error handling and logging.",
      "Forgetting to set rate limits on your own endpoints."
    ],
    whenToUse: "Use deployment when your AI app is ready for real users.",
    interviewTip: "Use environment variables for all secrets and add rate limiting — protect your endpoints and your wallet.",
    tryYourself: "Create a simple FastAPI endpoint that takes a prompt and returns an LLM response."
  },

  // ============================================================
  // FULLSTACK - JAVASCRIPT FUNDAMENTALS
  // ============================================================
  "st-js-1": {
    title: "Variables and Types",
    definition: "JavaScript variables store data using let (mutable), const (immutable binding), or var (old style). Types include string, number, boolean, null, undefined, and object.",
    explanation: "Use let for variables that change, const for constants. JavaScript is dynamically typed. Primitive types: string, number, boolean, null, undefined, symbol, bigint. Objects and arrays are reference types. Use typeof to check a variable's type.",
    example: `let name = "Alice";      // string\nconst age = 25;         // number (const binding)\nlet isStudent = true;   // boolean\nlet score = null;       // null\nlet city;               // undefined\nconsole.log(typeof name); // "string"`,
    keyTakeaways: [
      "Use let for mutable, const for immutable bindings.",
      "Primitives: string, number, boolean, null, undefined.",
      "Objects and arrays are reference types.",
      "typeof checks the type of a value."
    ],
    commonMistakes: [
      "Using var (function-scoped, hoisted — use let/const instead).",
      "Assuming const makes objects immutable (only the binding is).",
      "Confusing null (intentional absence) with undefined (uninitialized)."
    ],
    whenToUse: "Use let/const for all variable declarations in modern JavaScript.",
    interviewTip: "const prevents reassignment but not mutation — const objects can still change their properties.",
    tryYourself: "Declare variables for a product's name, price, and in-stock status using let and const."
  },
  "st-js-2": {
    title: "Functions",
    definition: "Functions are reusable blocks of code that perform a task, defined with the function keyword or as arrow functions.",
    explanation: "Declare with function name(params) { ... } or const name = (params) => { ... }. Functions can take parameters, return values, and be passed as arguments. JavaScript functions are first-class — they can be assigned and passed around.",
    example: `function add(a, b) {\n    return a + b;\n}\n\nconst greet = function(name) {\n    return "Hello, " + name;\n};\n\nconst square = (x) => x * x;\n\nconsole.log(add(2, 3));    // 5\nconsole.log(greet("Bob")); // "Hello, Bob"\nconsole.log(square(4));    // 16`,
    keyTakeaways: [
      "Functions can be declared or assigned to variables.",
      "Arrow functions provide concise syntax.",
      "Functions are first-class — pass them as arguments.",
      "Use return to send a value back."
    ],
    commonMistakes: [
      "Forgetting to return a value (returns undefined).",
      "Confusing function declarations with function expressions.",
      "Not understanding arrow function 'this' binding differences."
    ],
    whenToUse: "Use functions to organize and reuse code throughout your application.",
    interviewTip: "Arrow functions don't have their own 'this' — they inherit from the enclosing scope. Know when this matters.",
    tryYourself: "Write a function that takes a name and returns a greeting string."
  },
  "st-js-3": {
    title: "Objects",
    definition: "Objects are collections of key-value pairs that represent entities with properties and methods.",
    explanation: "Create with curly braces. Access properties with dot or bracket notation. Add, update, or delete properties dynamically. Objects can contain nested objects, arrays, and functions (methods).",
    example: `const person = {\n    name: "Alice",\n    age: 25,\n    hobbies: ["reading", "coding"],\n    greet() {\n        return "Hi, I'm " + this.name;\n    }\n};\n\nconsole.log(person.name);     // "Alice"\nconsole.log(person["age"]);   // 25\nperson.city = "NYC";          // add property\nconsole.log(person.greet()); // "Hi, I'm Alice"`,
    keyTakeaways: [
      "Objects store key-value pairs.",
      "Access with dot or bracket notation.",
      "Methods are functions stored as properties.",
      "'this' refers to the object inside methods."
    ],
    commonMistakes: [
      "Confusing 'this' in arrow functions vs regular methods.",
      "Using = instead of : for property assignment in object literals.",
      "Forgetting that objects are reference types (not copied)."
    ],
    whenToUse: "Use objects to group related data and behavior together.",
    interviewTip: "Objects are reference types — assigning an object copies the reference, not the data. Use spread or Object.assign to copy.",
    tryYourself: "Create an object representing a book with title, author, and a method that returns a summary."
  },
  "st-js-4": {
    title: "Arrays",
    definition: "Arrays are ordered lists of values accessed by index, with methods for adding, removing, and transforming elements.",
    explanation: "Create with square brackets. Common methods: push, pop, shift, unshift, map, filter, reduce, forEach, slice, splice. Arrays are dynamic and can hold mixed types. Use map/filter/reduce for functional-style transformations.",
    example: `const nums = [1, 2, 3, 4, 5];\n\nnums.push(6);              // [1,2,3,4,5,6]\nconst doubled = nums.map(n => n * 2);  // [2,4,6,8,10,12]\nconst evens = nums.filter(n => n % 2 === 0);  // [2,4,6]\nconst sum = nums.reduce((a, b) => a + b, 0);   // 21\nconsole.log(nums.length);  // 6`,
    keyTakeaways: [
      "Arrays are ordered, index-accessed lists.",
      "map transforms, filter selects, reduce aggregates.",
      "push/pop add/remove at end; shift/unshift at start.",
      "Arrays are dynamic and hold mixed types."
    ],
    commonMistakes: [
      "Confusing map (returns new array) with forEach (returns undefined).",
      "Mutating arrays with splice when you meant slice.",
      "Forgetting that sort() sorts as strings by default."
    ],
    whenToUse: "Use arrays for ordered collections of items and functional transformations.",
    interviewTip: "sort() converts to strings by default — pass a comparator: arr.sort((a, b) => a - b) for numbers.",
    tryYourself: "Use map and filter to double all even numbers in an array."
  },
  "st-js-5": {
    title: "DOM Manipulation",
    definition: "DOM manipulation changes the structure, content, or style of HTML elements from JavaScript.",
    explanation: "Use document.querySelector to select elements, then modify textContent, innerHTML, style, or attributes. Add event listeners with addEventListener. The DOM is a tree representing the page that JavaScript can modify dynamically.",
    example: `// Select an element\nconst heading = document.querySelector("h1");\n\n// Change content and style\nheading.textContent = "Welcome!";\nheading.style.color = "blue";\n\n// Add an event listener\nconst button = document.querySelector("button");\nbutton.addEventListener("click", () => {\n    alert("Button clicked!");\n});\n\n// Create and append a new element\nconst para = document.createElement("p");\npara.textContent = "New paragraph";\ndocument.body.appendChild(para);`,
    keyTakeaways: [
      "querySelector selects elements by CSS selectors.",
      "Modify textContent, style, and attributes.",
      "addEventListener handles user interactions.",
      "createElement and appendChild add new elements."
    ],
    commonMistakes: [
      "Using innerHTML with user input (XSS risk — use textContent).",
      "Querying elements before the DOM is loaded.",
      "Not removing event listeners when they're no longer needed."
    ],
    whenToUse: "Use DOM manipulation to make web pages interactive and dynamic.",
    interviewTip: "Use textContent instead of innerHTML when displaying user input — it prevents XSS attacks.",
    tryYourself: "Create a button that changes the page background color when clicked."
  },

  // ============================================================
  // FULLSTACK - ES6+ FEATURES
  // ============================================================
  "st-es6-1": {
    title: "Arrow Functions",
    definition: "Arrow functions provide a concise syntax for writing functions using the => operator.",
    explanation: "Syntax: (params) => expression or (params) => { statements }. They have implicit returns for single expressions and don't bind their own 'this' — they inherit it from the enclosing scope. Great for short callbacks.",
    example: `// Traditional\nconst add = function(a, b) { return a + b; };\n\n// Arrow function\nconst addArrow = (a, b) => a + b;\n\n// Single parameter (no parens needed)\nconst square = x => x * x;\n\n// No parameters\nconst greet = () => "Hello!";\n\n// In callbacks\n[1, 2, 3].map(n => n * 2);  // [2, 4, 6]`,
    keyTakeaways: [
      "Concise syntax with => operator.",
      "Implicit return for single expressions.",
      "Don't bind their own 'this' (lexical this).",
      "Great for short callbacks and transformations."
    ],
    commonMistakes: [
      "Using arrow functions as object methods (this doesn't bind to object).",
      "Forgetting braces for multi-statement bodies.",
      "Expecting arrow functions to work as constructors (they can't)."
    ],
    whenToUse: "Use arrow functions for short callbacks and functional transformations.",
    interviewTip: "Arrow functions inherit 'this' from the enclosing scope — don't use them as object methods.",
    tryYourself: "Convert a traditional function to an arrow function and confirm the behavior is the same."
  },
  "st-es6-2": {
    title: "Destructuring",
    definition: "Destructuring unpacks values from arrays or objects into distinct variables in a single statement.",
    explanation: "Object destructuring: const { name, age } = person. Array destructuring: const [first, second] = arr. You can rename, set defaults, and use nested destructuring. It's cleaner than accessing properties one by one.",
    example: `// Object destructuring\nconst person = { name: "Alice", age: 25, city: "NYC" };\nconst { name, age } = person;\nconsole.log(name, age);  // "Alice" 25\n\n// Array destructuring\nconst nums = [10, 20, 30];\nconst [first, , third] = nums;\nconsole.log(first, third);  // 10 30\n\n// With defaults and renaming\nconst { name: fullName = "Unknown" } = {};\nconsole.log(fullName);  // "Unknown"`,
    keyTakeaways: [
      "Unpacks values from objects or arrays into variables.",
      "Object: const { key } = obj; Array: const [item] = arr.",
      "Supports defaults, renaming, and nesting.",
      "Cleaner than accessing properties individually."
    ],
    commonMistakes: [
      "Using array destructuring syntax for objects and vice versa.",
      "Forgetting that variable names must match object keys.",
      "Not using defaults when properties might be undefined."
    ],
    whenToUse: "Use destructuring to extract values from objects and arrays concisely.",
    interviewTip: "Destructuring in function parameters is a clean way to accept options: function f({ name, age }) { ... }.",
    tryYourself: "Destructure an object with 3 properties, renaming one and setting a default for another."
  },
  "st-es6-3": {
    title: "Spread/Rest",
    definition: "The spread operator (...) expands an iterable into individual elements; the rest operator collects multiple elements into an array.",
    explanation: "Spread: [1, 2, ...arr] expands arr's elements. Rest: function(...args) collects arguments into an array. Same syntax, different context. Spread is for expanding; rest is for collecting.",
    example: `// Spread: expand an array\nconst a = [1, 2];\nconst b = [...a, 3, 4];  // [1, 2, 3, 4]\n\n// Spread: merge objects\nconst obj1 = { x: 1 };\nconst obj2 = { ...obj1, y: 2 };  // { x: 1, y: 2 }\n\n// Rest: collect arguments\nfunction sum(...nums) {\n    return nums.reduce((a, b) => a + b, 0);\n}\nconsole.log(sum(1, 2, 3));  // 6`,
    keyTakeaways: [
      "Spread (...) expands iterables into individual elements.",
      "Rest (...) collects multiple elements into an array.",
      "Same syntax, different context.",
      "Spread works with arrays and objects."
    ],
    commonMistakes: [
      "Confusing spread (expanding) with rest (collecting).",
      "Using spread on non-iterables.",
      "Forgetting that spread creates a shallow copy, not a deep clone."
    ],
    whenToUse: "Use spread to combine arrays/objects; use rest to accept variable arguments.",
    interviewTip: "Spread creates a shallow copy — nested objects are still referenced, not cloned.",
    tryYourself: "Use spread to merge two arrays and rest to write a function that accepts any number of arguments."
  },
  "st-es6-4": {
    title: "Promises",
    definition: "A Promise represents the eventual result of an asynchronous operation — it can be pending, fulfilled, or rejected.",
    explanation: "A promise has three states: pending, fulfilled, rejected. Use .then() for success, .catch() for errors, .finally() for cleanup. Chain promises for sequential async operations. Promises avoid callback hell.",
    example: `const fetchData = new Promise((resolve, reject) => {\n    setTimeout(() => {\n        const success = true;\n        if (success) resolve("Data loaded!");\n        else reject("Error occurred");\n    }, 1000);\n});\n\nfetchData\n    .then(result => console.log(result))\n    .catch(error => console.error(error))\n    .finally(() => console.log("Done"));`,
    keyTakeaways: [
      "Three states: pending, fulfilled, rejected.",
      "Use .then(), .catch(), .finally() to handle results.",
      "Chain promises for sequential async operations.",
      "Promises solve callback hell."
    ],
    commonMistakes: [
      "Forgetting to add .catch() (unhandled rejections).",
      "Not returning promises in .then() chains (breaks chaining).",
      "Creating promises instead of using existing ones (e.g., fetch)."
    ],
    whenToUse: "Use promises for asynchronous operations like API calls or file reading.",
    interviewTip: "Always return inside .then() if you want to chain — forgetting this is a common bug.",
    tryYourself: "Create a promise that resolves after 2 seconds and chain a .then() to print the result."
  },
  "st-es6-5": {
    title: "Async/Await",
    definition: "async/await is syntax built on promises that lets you write asynchronous code that looks synchronous.",
    explanation: "Mark a function as async, then use await before a promise to pause execution until it resolves. Errors are handled with try/catch. It's cleaner than .then() chains for complex async logic.",
    example: `async function fetchUser() {\n    try {\n        const response = await fetch("https://api.example.com/user");\n        const data = await response.json();\n        console.log(data);\n    } catch (error) {\n        console.error("Failed:", error);\n    }\n}\n\nfetchUser();`,
    keyTakeaways: [
      "async functions always return a promise.",
      "await pauses execution until a promise resolves.",
      "Use try/catch for error handling.",
      "Cleaner than .then() chains for complex logic."
    ],
    commonMistakes: [
      "Using await outside an async function (syntax error).",
      "Forgetting try/catch (unhandled promise rejections).",
      "Awaiting non-promise values (works but unnecessary)."
    ],
    whenToUse: "Use async/await for most asynchronous code — it's more readable than promise chains.",
    interviewTip: "await can only be used inside async functions — a common interview gotcha.",
    tryYourself: "Write an async function that fetches data from an API and logs it using try/catch."
  },
  "st-es6-6": {
    title: "Modules",
    definition: "ES6 modules let you split code into files and share functionality using import and export.",
    explanation: "Use export to share variables, functions, or classes from a file. Use import to bring them into another file. Named exports (export { name }) and default exports (export default) are the two styles. Modules are singletons — imported once.",
    example: `// math.js\nexport const add = (a, b) => a + b;\nexport default function multiply(a, b) { return a * b; }\n\n// main.js\nimport multiply, { add } from "./math.js";\nconsole.log(add(2, 3));      // 5\nconsole.log(multiply(2, 3)); // 6`,
    keyTakeaways: [
      "export shares; import brings in.",
      "Named exports: export { name }; import { name }.",
      "Default export: one per file; import without braces.",
      "Modules are singletons — imported once."
    ],
    commonMistakes: [
      "Mixing up named and default import syntax.",
      "Forgetting the file extension in some environments.",
      "Having multiple default exports in one file (not allowed)."
    ],
    whenToUse: "Use modules to organize code into reusable, maintainable files.",
    interviewTip: "A module can have one default export and many named exports — know the import syntax for each.",
    tryYourself: "Create a module that exports a function and import it in another file."
  },

  // ============================================================
  // FULLSTACK - ASYNCHRONOUS JAVASCRIPT
  // ============================================================
  "st-async-1": {
    title: "Callbacks",
    definition: "A callback is a function passed as an argument to another function, executed after a task completes.",
    explanation: "Callbacks are the original way to handle async operations in JavaScript. The function runs when the operation finishes. Nesting multiple callbacks creates 'callback hell' — deeply nested, hard-to-read code. Promises and async/await solve this.",
    example: `function fetchData(callback) {\n    setTimeout(() => {\n        callback("Data received");\n    }, 1000);\n}\n\nfetchData(function(result) {\n    console.log(result);  // "Data received" after 1s\n});\n\n// Callback hell example:\n// fetchData(a => processData(a, b => saveData(b, c => ...)))`,
    keyTakeaways: [
      "Callbacks are functions passed to run later.",
      "The original async pattern in JavaScript.",
      "Nesting creates callback hell.",
      "Promises and async/await are modern alternatives."
    ],
    commonMistakes: [
      "Nesting callbacks too deeply (callback hell).",
      "Not handling errors in callbacks.",
      "Assuming callbacks run synchronously."
    ],
    whenToUse: "Use callbacks for simple async tasks, event handlers, or when working with callback-based APIs.",
    interviewTip: "Callback hell is why promises were invented — know the history and why we moved on.",
    tryYourself: "Write a function that takes a callback and calls it after a 1-second delay."
  },
  "st-async-2": {
    title: "Promises",
    definition: "Promises represent the eventual completion or failure of an async operation, enabling cleaner chaining than callbacks.",
    explanation: "A promise is pending, fulfilled, or rejected. Use .then() for success, .catch() for errors. Chain promises by returning from .then(). Promise.all runs multiple promises in parallel; Promise.race resolves with the first to complete.",
    example: `const delay = ms => new Promise(resolve => setTimeout(resolve, ms));\n\ndelay(1000)\n    .then(() => {\n        console.log("1 second passed");\n        return delay(1000);\n    })\n    .then(() => console.log("2 seconds passed"))\n    .catch(err => console.error(err));\n\n// Parallel\nPromise.all([delay(500), delay(1000)]).then(() => {\n    console.log("Both done");\n});`,
    keyTakeaways: [
      "Three states: pending, fulfilled, rejected.",
      ".then(), .catch(), .finally() handle results.",
      "Promise.all runs in parallel; Promise.race returns first.",
      "Chain by returning from .then()."
    ],
    commonMistakes: [
      "Not returning from .then() (breaks the chain).",
      "Forgetting .catch() (unhandled rejections).",
      "Using Promise.all when one failure should reject all."
    ],
    whenToUse: "Use promises for async operations, especially when you need chaining or parallel execution.",
    interviewTip: "Promise.all rejects if any promise rejects — use Promise.allSettled if you want all results regardless.",
    tryYourself: "Use Promise.all to fetch two URLs in parallel and log when both complete."
  },
  "st-async-3": {
    title: "Async/Await",
    definition: "async/await is syntactic sugar over promises that makes async code read like synchronous code.",
    explanation: "Mark a function async, then use await to pause until a promise settles. Handle errors with try/catch. You can await any promise, including fetch calls. Multiple independent awaits can run in parallel with Promise.all.",
    example: `async function getUser() {\n    try {\n        const res = await fetch("/api/user");\n        const user = await res.json();\n        return user;\n    } catch (err) {\n        console.error("Error:", err);\n    }\n}\n\nasync function getParallel() {\n    const [a, b] = await Promise.all([\n        fetch("/api/a").then(r => r.json()),\n        fetch("/api/b").then(r => r.json())\n    ]);\n    return { a, b };\n}`,
    keyTakeaways: [
      "async functions always return a promise.",
      "await pauses until a promise settles.",
      "Use try/catch for error handling.",
      "Use Promise.all for parallel awaits."
    ],
    commonMistakes: [
      "Using await outside async functions.",
      "Awaiting sequentially when operations could be parallel.",
      "Forgetting try/catch around awaited code."
    ],
    whenToUse: "Use async/await for most async code — it's the cleanest approach.",
    interviewTip: "Sequential awaits run one at a time — use Promise.all for independent operations to speed things up.",
    tryYourself: "Write an async function that fetches data from two APIs in parallel using Promise.all."
  },
  "st-async-4": {
    title: "Fetch API",
    definition: "The Fetch API provides a modern interface for making HTTP requests and processing responses.",
    explanation: "fetch() returns a promise that resolves to a Response object. Call .json(), .text(), or .blob() on it to read the body. Handle errors by checking response.ok or using try/catch with await. Set headers and method in the options object.",
    example: `// GET request\nfetch("https://api.example.com/data")\n    .then(res => res.json())\n    .then(data => console.log(data))\n    .catch(err => console.error(err));\n\n// POST request\nfetch("https://api.example.com/users", {\n    method: "POST",\n    headers: { "Content-Type": "application/json" },\n    body: JSON.stringify({ name: "Alice" })\n})\n    .then(res => res.json());`,
    keyTakeaways: [
      "fetch() returns a promise resolving to a Response.",
      "Call .json() or .text() to read the body.",
      "Check response.ok for HTTP errors (fetch doesn't reject on 404).",
      "Set method, headers, and body in the options object."
    ],
    commonMistakes: [
      "Forgetting that fetch doesn't reject on HTTP errors (only network errors).",
      "Not checking response.ok before parsing.",
      "Forgetting to stringify the body for POST requests."
    ],
    whenToUse: "Use fetch for all HTTP requests in modern web applications.",
    interviewTip: "fetch only rejects on network errors — a 404 still resolves. Always check response.ok.",
    tryYourself: "Write a fetch POST request that sends JSON data and logs the response."
  },
  "st-async-5": {
    title: "Error Handling",
    definition: "Async error handling catches and responds to failures in promises, fetch calls, and async functions.",
    explanation: "Use .catch() for promise chains and try/catch for async/await. Check response.ok for HTTP errors. Handle network errors, timeouts, and JSON parsing errors separately. Always provide fallback behavior or user-facing error messages.",
    example: `async function safeFetch(url) {\n    try {\n        const res = await fetch(url);\n        if (!res.ok) {\n            throw new Error("HTTP " + res.status);\n        }\n        return await res.json();\n    } catch (err) {\n        if (err instanceof TypeError) {\n            console.error("Network error:", err);\n        } else {\n            console.error("Request error:", err);\n        }\n        return null;\n    }\n}`,
    keyTakeaways: [
      "Use .catch() for promises, try/catch for async/await.",
      "Check response.ok for HTTP errors.",
      "Distinguish network errors from HTTP errors.",
      "Always provide fallback behavior."
    ],
    commonMistakes: [
      "Not checking response.ok (fetch doesn't reject on 404).",
      "Swallowing errors silently (no logging or user feedback).",
      "Not handling JSON parsing errors separately."
    ],
    whenToUse: "Use async error handling for all network and async operations.",
    interviewTip: "Always show user-friendly error messages — never expose raw error details to end users.",
    tryYourself: "Write a safe fetch wrapper that handles both network and HTTP errors with appropriate messages."
  },

  // ============================================================
  // DATA SCIENTIST - SQL FUNDAMENTALS
  // ============================================================
  "st-sql-1": {
    title: "SELECT Statements",
    definition: "A SELECT statement retrieves data from one or more database tables.",
    explanation: "SELECT specifies which columns, FROM specifies which table. Use * for all columns or list specific ones. Add WHERE to filter, ORDER BY to sort, and LIMIT to restrict rows. SELECT is the most common SQL command.",
    example: `-- Select all columns\nSELECT * FROM students;\n\n-- Select specific columns\nSELECT name, age FROM students;\n\n-- With filtering and sorting\nSELECT name, grade\nFROM students\nWHERE grade = 'A'\nORDER BY name;`,
    keyTakeaways: [
      "SELECT chooses columns; FROM chooses the table.",
      "Use * for all columns or list specific ones.",
      "WHERE filters rows; ORDER BY sorts.",
      "LIMIT restricts the number of rows returned."
    ],
    commonMistakes: [
      "Using SELECT * in production (slow, fragile to schema changes).",
      "Forgetting the FROM clause.",
      "Not using aliases for long table names."
    ],
    whenToUse: "Use SELECT whenever you need to retrieve data from a database.",
    interviewTip: "Avoid SELECT * in production — list only the columns you need for performance and clarity.",
    tryYourself: "Write a SELECT statement that retrieves names and ages of all students ordered by age."
  },
  "st-sql-2": {
    title: "WHERE Clauses",
    definition: "A WHERE clause filters rows based on a condition, returning only those that match.",
    explanation: "Use comparison operators (=, !=, <, >, <=, >=), AND, OR, NOT, BETWEEN, IN, LIKE, and IS NULL. WHERE filters before grouping (before GROUP BY). It's essential for querying specific data.",
    example: `SELECT name, age, grade\nFROM students\nWHERE age >= 18\n  AND grade IN ('A', 'B')\n  AND name LIKE 'A%'\nORDER BY age;\n\n-- BETWEEN and IS NULL\nSELECT * FROM products\nWHERE price BETWEEN 10 AND 50\n  AND category IS NOT NULL;`,
    keyTakeaways: [
      "WHERE filters rows before grouping.",
      "Operators: =, !=, <, >, BETWEEN, IN, LIKE, IS NULL.",
      "Combine conditions with AND, OR, NOT.",
      "LIKE supports pattern matching with % and _."
    ],
    commonMistakes: [
      "Using = NULL instead of IS NULL (always false).",
      "Confusing WHERE (before grouping) with HAVING (after grouping).",
      "Forgetting that AND binds tighter than OR (use parentheses)."
    ],
    whenToUse: "Use WHERE to filter rows based on conditions in any query.",
    interviewTip: "Use IS NULL, not = NULL — = NULL always returns false (NULL isn't equal to anything, even itself).",
    tryYourself: "Write a WHERE clause that finds products priced between 50 and 100 in the 'electronics' category."
  },
  "st-sql-3": {
    title: "JOINs",
    definition: "A JOIN combines rows from two or more tables based on a related column between them.",
    explanation: "INNER JOIN returns only matching rows. LEFT JOIN returns all left rows plus matches. RIGHT JOIN returns all right rows. FULL OUTER JOIN returns all rows from both. Use ON to specify the join condition.",
    example: `-- INNER JOIN: students and their enrollments\nSELECT s.name, c.course_name\nFROM students s\nINNER JOIN enrollments e ON s.id = e.student_id\nINNER JOIN courses c ON e.course_id = c.id;\n\n-- LEFT JOIN: all students, even those without enrollments\nSELECT s.name, c.course_name\nFROM students s\nLEFT JOIN enrollments e ON s.id = e.student_id\nLEFT JOIN courses c ON e.course_id = c.id;`,
    keyTakeaways: [
      "INNER JOIN: only matching rows.",
      "LEFT JOIN: all left rows, NULLs for no match.",
      "RIGHT JOIN: all right rows; FULL OUTER: all from both.",
      "Use ON to specify the join condition."
    ],
    commonMistakes: [
      "Using INNER JOIN when LEFT JOIN is needed (missing rows).",
      "Forgetting the ON condition (cartesian product).",
      "Not using table aliases for readability."
    ],
    whenToUse: "Use JOINs to combine data from multiple related tables.",
    interviewTip: "LEFT JOIN is safer than INNER JOIN when you need all rows from the left table regardless of matches.",
    tryYourself: "Write a JOIN that lists all students and their course names, including students with no courses."
  },
  "st-sql-4": {
    title: "GROUP BY",
    definition: "GROUP BY groups rows with the same values into summary rows, often used with aggregate functions.",
    explanation: "Use with aggregates: COUNT, SUM, AVG, MIN, MAX. GROUP BY is followed by HAVING (not WHERE) to filter groups. Columns in SELECT must be in GROUP BY or be aggregated. Essential for reporting and analytics.",
    example: `-- Count students per grade\nSELECT grade, COUNT(*) as count\nFROM students\nGROUP BY grade\nORDER BY count DESC;\n\n-- Average price per category, only categories with avg > 50\nSELECT category, AVG(price) as avg_price\nFROM products\nGROUP BY category\nHAVING AVG(price) > 50;`,
    keyTakeaways: [
      "Groups rows with the same values together.",
      "Used with aggregates: COUNT, SUM, AVG, MIN, MAX.",
      "Use HAVING (not WHERE) to filter groups.",
      "Non-aggregated SELECT columns must appear in GROUP BY."
    ],
    commonMistakes: [
      "Using WHERE instead of HAVING for group filtering.",
      "Selecting non-aggregated columns not in GROUP BY.",
      "Forgetting that HAVING is evaluated after GROUP BY."
    ],
    whenToUse: "Use GROUP BY for summary reports, counts, averages, and other aggregations.",
    interviewTip: "WHERE filters rows before grouping; HAVING filters groups after — know the order of execution.",
    tryYourself: "Write a query that counts the number of products in each category, sorted by count."
  },
  "st-sql-5": {
    title: "Subqueries",
    definition: "A subquery is a query nested inside another query, used to return data for the outer query's condition.",
    explanation: "Subqueries can appear in WHERE, FROM, or SELECT clauses. A scalar subquery returns one value; a correlated subquery references the outer query. Common uses: finding rows that match a condition from another table, or comparing against an aggregate.",
    example: `-- Students with above-average age\nSELECT name, age\nFROM students\nWHERE age > (SELECT AVG(age) FROM students);\n\n-- Products in categories with more than 10 items\nSELECT product_name\nFROM products\nWHERE category_id IN (\n    SELECT category_id\n    FROM products\n    GROUP BY category_id\n    HAVING COUNT(*) > 10\n);`,
    keyTakeaways: [
      "A query nested inside another query.",
      "Can return a single value or a list.",
      "Correlated subqueries reference the outer query.",
      "Common in WHERE and FROM clauses."
    ],
    commonMistakes: [
      "Using a subquery that returns multiple rows where one is expected.",
      "Not understanding correlated vs non-correlated subqueries.",
      "Writing subqueries when a JOIN would be clearer or faster."
    ],
    whenToUse: "Use subqueries when you need to filter or compute based on results from another query.",
    interviewTip: "Many subqueries can be rewritten as JOINs — JOINs are often more readable and sometimes faster.",
    tryYourself: "Write a subquery that finds products priced above the average price in their category."
  },

  // ============================================================
  // DATA SCIENTIST - ADVANCED SQL
  // ============================================================
  "st-asql-1": {
    title: "Window Functions",
    definition: "Window functions perform calculations across a set of rows related to the current row without collapsing them.",
    explanation: "Unlike GROUP BY, window functions keep all rows. Use OVER() to define the window. PARTITION BY groups rows; ORDER BY defines ordering within the window. Common functions: ROW_NUMBER, RANK, SUM/AVG OVER, LAG, LEAD.",
    example: `-- Rank students by score within each class\nSELECT name, class, score,\n    RANK() OVER (PARTITION BY class ORDER BY score DESC) as rank\nFROM students;\n\n-- Running total of sales\nSELECT date, sales,\n    SUM(sales) OVER (ORDER BY date) as running_total\nFROM daily_sales;\n\n-- Compare each row to the previous\nSELECT date, price,\n    LAG(price) OVER (ORDER BY date) as prev_price\nFROM stock_prices;`,
    keyTakeaways: [
      "Window functions compute over a set of related rows.",
      "OVER() defines the window; PARTITION BY groups rows.",
      "Unlike GROUP BY, all rows are retained.",
      "Common: ROW_NUMBER, RANK, LAG, LEAD, SUM/AVG OVER."
    ],
    commonMistakes: [
      "Forgetting the OVER() clause (syntax error).",
      "Confusing window functions with aggregate GROUP BY.",
      "Not understanding PARTITION BY vs ORDER BY in the window."
    ],
    whenToUse: "Use window functions for rankings, running totals, and comparisons to adjacent rows.",
    interviewTip: "Window functions don't reduce rows — that's the key difference from GROUP BY. Remember OVER() is required.",
    tryYourself: "Write a query using ROW_NUMBER to rank products by price within each category."
  },
  "st-asql-2": {
    title: "CTEs",
    definition: "A Common Table Expression (CTE) is a temporary named result set defined with WITH, used to simplify complex queries.",
    explanation: "CTEs make complex queries readable by breaking them into named steps. They can be referenced multiple times. Recursive CTEs can query hierarchical data (like org charts or file trees). Unlike subqueries, CTEs are defined at the top.",
    example: `-- CTE for above-average students\nWITH avg_age AS (\n    SELECT AVG(age) as avg FROM students\n)\nSELECT name, age\nFROM students, avg_age\nWHERE age > avg_age.avg;\n\n-- Recursive CTE: employee hierarchy\nWITH RECURSIVE org AS (\n    SELECT id, name, manager_id FROM employees WHERE manager_id IS NULL\n    UNION ALL\n    SELECT e.id, e.name, e.manager_id FROM employees e\n    JOIN org ON e.manager_id = org.id\n)\nSELECT * FROM org;`,
    keyTakeaways: [
      "CTEs are temporary named result sets with WITH.",
      "Make complex queries readable and modular.",
      "Can be referenced multiple times.",
      "Recursive CTEs handle hierarchical data."
    ],
    commonMistakes: [
      "Forgetting the WITH keyword or the comma between multiple CTEs.",
      "Not understanding the difference between CTEs and temp tables.",
      "Incorrectly structuring recursive CTEs (missing UNION ALL or base case)."
    ],
    whenToUse: "Use CTEs to simplify complex queries and handle recursive data structures.",
    interviewTip: "CTEs improve readability — prefer them over deeply nested subqueries for maintainable SQL.",
    tryYourself: "Write a CTE that calculates the average price per category, then query products above that average."
  },
  "st-asql-3": {
    title: "Indexes",
    definition: "Indexes are data structures that speed up data retrieval on specific columns at the cost of slower writes.",
    explanation: "An index on a column creates a lookup structure (usually a B-tree) for fast searches. They speed up WHERE, JOIN, and ORDER BY but slow down INSERT, UPDATE, and DELETE. Create indexes on columns frequently used in filters and joins.",
    example: `-- Create an index\nCREATE INDEX idx_student_email ON students(email);\n\n-- Composite index (order matters)\nCREATE INDEX idx_product_cat_price ON products(category, price);\n\n-- View indexes\n\\di students\n\n-- Drop an index\nDROP INDEX idx_student_email;`,
    keyTakeaways: [
      "Indexes speed up reads but slow down writes.",
      "Create them on columns used in WHERE, JOIN, ORDER BY.",
      "Composite indexes: column order matters.",
      "Too many indexes hurt write performance."
    ],
    commonMistakes: [
      "Creating indexes on every column (slows writes, wastes space).",
      "Not using composite indexes for multi-column queries.",
      "Forgetting that indexes on low-cardinality columns (e.g., boolean) are often useless."
    ],
    whenToUse: "Use indexes on columns frequently filtered or joined, but avoid over-indexing.",
    interviewTip: "Index the columns you filter and join on — but remember every index slows down writes.",
    tryYourself: "Write a CREATE INDEX statement for a column frequently used in WHERE clauses."
  },
  "st-asql-4": {
    title: "Query Optimization",
    definition: "Query optimization improves query performance through better structure, indexing, and execution planning.",
    explanation: "Use EXPLAIN to see the execution plan. Optimize by: adding indexes, avoiding SELECT *, using JOINs instead of subqueries where possible, filtering early, and avoiding functions on indexed columns. Limit results with LIMIT.",
    example: `-- Check the execution plan\nEXPLAIN SELECT name FROM students WHERE age > 18;\n\n-- Bad: function on indexed column (prevents index use)\nSELECT * FROM users WHERE LOWER(email) = 'alice@example.com';\n\n-- Good: use a case-insensitive collation or store lowercase\nSELECT * FROM users WHERE email = 'alice@example.com';\n\n-- Filter early with a subquery or CTE\nWITH recent_orders AS (\n    SELECT * FROM orders WHERE order_date > '2024-01-01'\n)\nSELECT * FROM recent_orders WHERE total > 100;`,
    keyTakeaways: [
      "Use EXPLAIN to analyze query plans.",
      "Avoid SELECT *; retrieve only needed columns.",
      "Don't use functions on indexed columns in WHERE.",
      "Filter early and limit results."
    ],
    commonMistakes: [
      "Using functions on indexed columns (disables the index).",
      "Not checking the execution plan before optimizing.",
      "Over-optimizing before measuring (premature optimization)."
    ],
    whenToUse: "Use query optimization when queries are slow or run on large datasets.",
    interviewTip: "Always EXPLAIN your query before optimizing — don't guess where the bottleneck is.",
    tryYourself: "Run EXPLAIN on a query with a WHERE clause and check if it uses an index."
  }
};

const ALL_CONTENT: Record<string, SubtopicContent> = {
  ...SUBTOPIC_CONTENT,
  ...EXPANDED_SUBTOPIC_CONTENT,
  ...EXPANDED_SUBTOPIC_CONTENT_2,
};

const ALL_SUBTOPIC_NAMES: Record<string, string> = {};
for (const topic of EXPANDED_TOPICS) {
  for (const sub of topic.subtopics) {
    ALL_SUBTOPIC_NAMES[sub.id] = sub.name;
  }
}

function generateFallbackContent(subtopicId: string): SubtopicContent {
  const name = ALL_SUBTOPIC_NAMES[subtopicId] || subtopicId.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  return {
    title: name,
    definition: `${name} is an important concept in this topic area. It involves understanding the core principles, practical applications, and best practices related to this subject.`,
    explanation: `This topic covers the fundamental concepts you need to understand. You'll learn how ${name.toLowerCase()} works, why it matters in real-world scenarios, and how it connects to other topics in your learning path. Mastering this concept will strengthen your overall skill set and prepare you for more advanced topics.`,
    example: `Practical Example:\n\nConsider a real-world scenario where ${name.toLowerCase()} is applied. You would:\n1. Identify the problem or task\n2. Apply the relevant principles of ${name.toLowerCase()}\n3. Evaluate the results\n4. Refine your approach based on outcomes\n\nThis hands-on approach helps solidify your understanding.`,
    keyTakeaways: [
      `${name} is a fundamental concept worth mastering.`,
      `Understanding the core principles enables practical application.`,
      `Practice with real examples to reinforce learning.`,
      `Connect this topic to related concepts for deeper understanding.`,
    ],
    commonMistakes: [
      `Rushing through without understanding the fundamentals.`,
      `Not practicing with hands-on examples.`,
      `Skipping the connection to related topics.`,
    ],
    whenToUse: `Apply ${name} when working on projects or tasks that require this specific knowledge area.`,
    interviewTip: `Be prepared to explain ${name} with a practical example and discuss its real-world applications.`,
    tryYourself: `Write a brief summary of ${name} in your own words and create one practical example.`,
  };
}

export function getSubtopicContent(subtopicId: string): SubtopicContent | null {
  return ALL_CONTENT[subtopicId] ?? generateFallbackContent(subtopicId);
}
