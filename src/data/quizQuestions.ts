import type { QuizQuestion } from '@/types';
import { EXPANDED_TOPICS } from '@/data/expandedContent';

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  // ═══════════════════════════════════════════════════
  // Python Basics
  // ═══════════════════════════════════════════════════
  {
    id: 'q-pybas-1', topicId: 't-ai-p1-1', subtopicId: 'st-pybas-1', difficulty: 'Beginner', type: 'multiple-choice',
    question: 'Which of the following is a valid variable name in Python?',
    options: ['2var', '_my_var', 'my-var', 'class'],
    correctAnswer: '_my_var',
    explanation: 'Variable names must start with a letter or underscore, cannot contain hyphens, and cannot be keywords like "class".',
    conceptTags: ['variables', 'naming-rules'],
  },
  {
    id: 'q-pybas-2', topicId: 't-ai-p1-1', subtopicId: 'st-pybas-2', difficulty: 'Beginner', type: 'multiple-choice',
    question: 'What is the output of: print(type(3.14))?',
    options: ['<class \'int\'>', '<class \'float\'>', '<class \'double\'>', '<class \'number\'>'],
    correctAnswer: '<class \'float\'>',
    explanation: 'In Python, decimal numbers are of type float, not double or number.',
    conceptTags: ['data-types', 'float'],
  },
  {
    id: 'q-pybas-3', topicId: 't-ai-p1-1', subtopicId: 'st-pybas-4', difficulty: 'Beginner', type: 'multiple-choice',
    question: 'What happens when you convert the string "hello" to an integer using int("hello")?',
    options: ['Returns 0', 'Returns None', 'Raises ValueError', 'Returns the ASCII value'],
    correctAnswer: 'Raises ValueError',
    explanation: 'int("hello") raises a ValueError because "hello" cannot be converted to a valid integer.',
    conceptTags: ['type-conversion', 'error-handling'],
  },
  {
    id: 'q-pybas-4', topicId: 't-ai-p1-1', subtopicId: 'st-pybas-5', difficulty: 'Beginner', type: 'multiple-choice',
    question: 'What is the result of 10 // 3 in Python?',
    options: ['3.33', '3', '4', '3.0'],
    correctAnswer: '3',
    explanation: 'The // operator performs floor division, returning the largest integer less than or equal to the result.',
    conceptTags: ['operators', 'floor-division'],
  },
  {
    id: 'q-pybas-5', topicId: 't-ai-p1-1', subtopicId: 'st-pybas-3', difficulty: 'Beginner', type: 'true-false',
    question: 'In Python 3, input() always returns a string, regardless of what the user types.',
    correctAnswer: 'True',
    explanation: 'input() always returns a string in Python 3. You must explicitly convert it if you need a different type.',
    conceptTags: ['input', 'strings'],
  },

  // ═══════════════════════════════════════════════════
  // Control Flow
  // ═══════════════════════════════════════════════════
  {
    id: 'q-cf-1', topicId: 't-ai-p1-2', subtopicId: 'st-cf-1', difficulty: 'Beginner', type: 'multiple-choice',
    question: 'What does the expression "not (True and False)" evaluate to?',
    options: ['True', 'False', 'None', 'Error'],
    correctAnswer: 'True',
    explanation: 'True and False = False. not False = True.',
    conceptTags: ['boolean-logic', 'and', 'not'],
  },
  {
    id: 'q-cf-2', topicId: 't-ai-p1-2', subtopicId: 'st-cf-5', difficulty: 'Beginner', type: 'multiple-choice',
    question: 'How many times will "Hello" be printed? for i in range(5): print("Hello")',
    options: ['4', '5', '6', 'Infinite'],
    correctAnswer: '5',
    explanation: 'range(5) generates numbers 0,1,2,3,4 — so the loop runs 5 times.',
    conceptTags: ['for-loops', 'range'],
  },
  {
    id: 'q-cf-3', topicId: 't-ai-p1-2', subtopicId: 'st-cf-7', difficulty: 'Beginner', type: 'multiple-choice',
    question: 'What does the break statement do in a loop?',
    options: ['Skips the current iteration', 'Exits the loop entirely', 'Restarts the loop', 'Pauses execution'],
    correctAnswer: 'Exits the loop entirely',
    explanation: 'break immediately terminates the nearest enclosing loop.',
    conceptTags: ['break', 'loops'],
  },
  {
    id: 'q-cf-4', topicId: 't-ai-p1-2', subtopicId: 'st-cf-8', difficulty: 'Beginner', type: 'true-false',
    question: 'The continue statement skips the rest of the current iteration and moves to the next one.',
    correctAnswer: 'True',
    explanation: 'continue jumps to the next iteration of the loop, skipping any code below it.',
    conceptTags: ['continue', 'loops'],
  },
  {
    id: 'q-cf-5', topicId: 't-ai-p1-2', subtopicId: 'st-cf-4', difficulty: 'Beginner', type: 'multiple-choice',
    question: 'In a nested if-else structure, which else pairs with which if?',
    options: ['The first if', 'The nearest unmatched if above it', 'The last if', 'All ifs'],
    correctAnswer: 'The nearest unmatched if above it',
    explanation: 'Python uses indentation to match else clauses with the nearest unmatched if at the same indentation level.',
    conceptTags: ['nested-conditions', 'if-else'],
  },

  // ═══════════════════════════════════════════════════
  // Functions
  // ═══════════════════════════════════════════════════
  {
    id: 'q-fn-1', topicId: 't-ai-p1-3', subtopicId: 'st-fn-1', difficulty: 'Beginner', type: 'multiple-choice',
    question: 'Which keyword is used to define a function in Python?',
    options: ['function', 'def', 'func', 'define'],
    correctAnswer: 'def',
    explanation: 'Python uses the "def" keyword followed by the function name and parameters.',
    conceptTags: ['functions', 'def'],
  },
  {
    id: 'q-fn-2', topicId: 't-ai-p1-3', subtopicId: 'st-fn-5', difficulty: 'Intermediate', type: 'multiple-choice',
    question: 'What will this print?\ndef f():\n  x = 5\nf()\nprint(x)',
    options: ['5', 'None', 'NameError', '0'],
    correctAnswer: 'NameError',
    explanation: 'x is a local variable inside f(). It is not accessible outside the function, so print(x) raises NameError.',
    conceptTags: ['scope', 'local-variables'],
  },
  {
    id: 'q-fn-3', topicId: 't-ai-p1-3', subtopicId: 'st-fn-8', difficulty: 'Intermediate', type: 'multiple-choice',
    question: 'What is the output of: (lambda x: x * 2)(5)?',
    options: ['10', '55', 'x*2', 'Error'],
    correctAnswer: '10',
    explanation: 'The lambda function takes x and returns x*2. Calling it with 5 returns 10.',
    conceptTags: ['lambda', 'anonymous-functions'],
  },
  {
    id: 'q-fn-4', topicId: 't-ai-p1-3', subtopicId: 'st-fn-6', difficulty: 'Beginner', type: 'multiple-choice',
    question: 'What happens if you call a function without providing an argument that has a default value?',
    options: ['TypeError', 'Uses the default value', 'Returns None', 'Crashes'],
    correctAnswer: 'Uses the default value',
    explanation: 'If a parameter has a default value, it is used when the argument is not provided.',
    conceptTags: ['default-arguments', 'parameters'],
  },
  {
    id: 'q-fn-5', topicId: 't-ai-p1-3', subtopicId: 'st-fn-4', difficulty: 'Beginner', type: 'true-false',
    question: 'A Python function without a return statement implicitly returns None.',
    correctAnswer: 'True',
    explanation: 'If no return statement is executed, Python automatically returns None.',
    conceptTags: ['return', 'none'],
  },

  // ═══════════════════════════════════════════════════
  // Data Structures
  // ═══════════════════════════════════════════════════
  {
    id: 'q-ds-1', topicId: 't-ai-p1-4', subtopicId: 'st-ds-1', difficulty: 'Beginner', type: 'multiple-choice',
    question: 'Which method adds an element to the end of a list?',
    options: ['add()', 'append()', 'insert()', 'push()'],
    correctAnswer: 'append()',
    explanation: 'append() adds an element to the end of a list. add() is for sets, push() is not a Python list method.',
    conceptTags: ['lists', 'append'],
  },
  {
    id: 'q-ds-2', topicId: 't-ai-p1-4', subtopicId: 'st-ds-3', difficulty: 'Intermediate', type: 'multiple-choice',
    question: 'Which of the following is true about Python sets?',
    options: ['Sets maintain insertion order', 'Sets can contain duplicate elements', 'Sets are mutable and unordered', 'Sets only support integers'],
    correctAnswer: 'Sets are mutable and unordered',
    explanation: 'Sets are mutable, unordered collections that cannot contain duplicates.',
    conceptTags: ['sets', 'unordered'],
  },
  {
    id: 'q-ds-3', topicId: 't-ai-p1-4', subtopicId: 'st-ds-4', difficulty: 'Beginner', type: 'multiple-choice',
    question: 'How do you access the value associated with key "name" in dictionary d?',
    options: ['d.name', 'd("name")', 'd["name"]', 'd->name'],
    correctAnswer: 'd["name"]',
    explanation: 'Dictionary values are accessed using square bracket notation with the key.',
    conceptTags: ['dictionaries', 'key-access'],
  },
  {
    id: 'q-ds-4', topicId: 't-ai-p1-4', subtopicId: 'st-ds-5', difficulty: 'Intermediate', type: 'multiple-choice',
    question: 'What is the output of: [x**2 for x in range(4)]?',
    options: ['[0, 1, 4, 9]', '[1, 4, 9, 16]', '[0, 1, 2, 3]', '[0, 2, 4, 6]'],
    correctAnswer: '[0, 1, 4, 9]',
    explanation: 'The list comprehension squares each value from range(4) which is 0,1,2,3, giving 0,1,4,9.',
    conceptTags: ['list-comprehensions'],
  },
  {
    id: 'q-ds-5', topicId: 't-ai-p1-4', subtopicId: 'st-ds-2', difficulty: 'Beginner', type: 'true-false',
    question: 'Tuples are immutable in Python — once created, their elements cannot be changed.',
    correctAnswer: 'True',
    explanation: 'Tuples are immutable sequences. You cannot modify, add, or remove elements after creation.',
    conceptTags: ['tuples', 'immutable'],
  },

  // ═══════════════════════════════════════════════════
  // OOP
  // ═══════════════════════════════════════════════════
  {
    id: 'q-oop-1', topicId: 't-ai-p1-5', subtopicId: 'st-oop-1', difficulty: 'Intermediate', type: 'multiple-choice',
    question: 'What is the purpose of the __init__ method in a Python class?',
    options: ['To delete an object', 'To initialize object attributes when created', 'To define a static method', 'To import modules'],
    correctAnswer: 'To initialize object attributes when created',
    explanation: '__init__ is the constructor method, called automatically when a new instance is created.',
    conceptTags: ['classes', 'constructor', '__init__'],
  },
  {
    id: 'q-oop-2', topicId: 't-ai-p1-5', subtopicId: 'st-oop-6', difficulty: 'Intermediate', type: 'multiple-choice',
    question: 'Which statement correctly creates a Child class that inherits from Parent?',
    options: ['class Child(Parent):', 'class Child extends Parent:', 'class Child inherits Parent:', 'class Child -> Parent:'],
    correctAnswer: 'class Child(Parent):',
    explanation: 'Python uses parentheses in the class definition to specify the parent class.',
    conceptTags: ['inheritance', 'parent-class'],
  },
  {
    id: 'q-oop-3', topicId: 't-ai-p1-5', subtopicId: 'st-oop-8', difficulty: 'Intermediate', type: 'multiple-choice',
    question: 'In Python, encapsulation is typically achieved using:',
    options: ['Public attributes only', 'Private attributes with __ prefix', 'Global variables', 'Constants'],
    correctAnswer: 'Private attributes with __ prefix',
    explanation: 'Python uses name mangling with double underscores to indicate private attributes.',
    conceptTags: ['encapsulation', 'private', 'name-mangling'],
  },
  {
    id: 'q-oop-4', topicId: 't-ai-p1-5', subtopicId: 'st-oop-7', difficulty: 'Intermediate', type: 'true-false',
    question: 'Polymorphism allows different classes to have methods with the same name that can be called interchangeably.',
    correctAnswer: 'True',
    explanation: 'Polymorphism enables objects of different classes to respond to the same method call in their own way.',
    conceptTags: ['polymorphism', 'method-overriding'],
  },
  {
    id: 'q-oop-5', topicId: 't-ai-p1-5', subtopicId: 'st-oop-2', difficulty: 'Beginner', type: 'multiple-choice',
    question: 'What is an instance of a class called in Python?',
    options: ['A method', 'An object', 'A module', 'A function'],
    correctAnswer: 'An object',
    explanation: 'An object is a specific instance created from a class blueprint.',
    conceptTags: ['objects', 'instances'],
  },

  // ═══════════════════════════════════════════════════
  // Exception and File Handling
  // ═══════════════════════════════════════════════════
  {
    id: 'q-ef-1', topicId: 't-ai-p1-6', subtopicId: 'st-ef-2', difficulty: 'Intermediate', type: 'multiple-choice',
    question: 'Which block catches exceptions in Python?',
    options: ['catch block', 'except block', 'handle block', 'rescue block'],
    correctAnswer: 'except block',
    explanation: 'Python uses try/except to handle exceptions, not try/catch like some other languages.',
    conceptTags: ['exceptions', 'try-except'],
  },
  {
    id: 'q-ef-2', topicId: 't-ai-p1-6', subtopicId: 'st-ef-3', difficulty: 'Intermediate', type: 'multiple-choice',
    question: 'The finally block executes:',
    options: ['Only if an exception occurs', 'Only if no exception occurs', 'Always, regardless of exceptions', 'Only if break is used'],
    correctAnswer: 'Always, regardless of exceptions',
    explanation: 'The finally block always executes, whether an exception occurred or not.',
    conceptTags: ['finally', 'cleanup'],
  },
  {
    id: 'q-ef-3', topicId: 't-ai-p1-6', subtopicId: 'st-ef-5', difficulty: 'Intermediate', type: 'multiple-choice',
    question: 'Which mode opens a file for reading only?',
    options: ["'w'", "'r'", "'a'", "'x'"],
    correctAnswer: "'r'",
    explanation: "Mode 'r' opens a file for reading. 'w' for writing, 'a' for appending, 'x' for exclusive creation.",
    conceptTags: ['file-modes', 'reading'],
  },
  {
    id: 'q-ef-4', topicId: 't-ai-p1-6', subtopicId: 'st-ef-4', difficulty: 'Intermediate', type: 'multiple-choice',
    question: 'How do you create a custom exception class in Python?',
    options: ['class MyError(Exception):', 'class MyError(Error):', 'class MyError: pass', 'exception MyError:'],
    correctAnswer: 'class MyError(Exception):',
    explanation: 'Custom exceptions inherit from the built-in Exception class.',
    conceptTags: ['custom-exceptions', 'inheritance'],
  },
  {
    id: 'q-ef-5', topicId: 't-ai-p1-6', subtopicId: 'st-ef-5', difficulty: 'Beginner', type: 'true-false',
    question: 'Using "with open(file) as f:" automatically closes the file when the block exits.',
    correctAnswer: 'True',
    explanation: 'The with statement ensures proper resource management and automatically closes the file.',
    conceptTags: ['context-manager', 'with-statement'],
  },

  // ═══════════════════════════════════════════════════
  // DSA — Arrays and Strings
  // ═══════════════════════════════════════════════════
  {
    id: 'q-arr-1', topicId: 't-ai-p2-1', subtopicId: 'st-arr-2', difficulty: 'Intermediate', type: 'multiple-choice',
    question: 'The two-pointer technique is most useful for:',
    options: ['Sorting arrays', 'Finding pairs in sorted arrays', 'Tree traversal', 'Graph coloring'],
    correctAnswer: 'Finding pairs in sorted arrays',
    explanation: 'Two pointers work from both ends of a sorted array to efficiently find pairs that meet a condition.',
    conceptTags: ['two-pointers', 'arrays'],
  },
  {
    id: 'q-arr-2', topicId: 't-ai-p2-1', subtopicId: 'st-arr-3', difficulty: 'Intermediate', type: 'multiple-choice',
    question: 'What problem is the sliding window technique commonly used to solve?',
    options: ['Shortest path', 'Maximum/minimum in a subarray of fixed size', 'Binary search', 'Tree balancing'],
    correctAnswer: 'Maximum/minimum in a subarray of fixed size',
    explanation: 'Sliding window efficiently computes results over contiguous subarrays without recomputing from scratch.',
    conceptTags: ['sliding-window', 'subarrays'],
  },
  {
    id: 'q-arr-3', topicId: 't-ai-p2-1', subtopicId: 'st-arr-1', difficulty: 'Beginner', type: 'multiple-choice',
    question: 'What is the time complexity of accessing an element in an array by index?',
    options: ['O(n)', 'O(1)', 'O(log n)', 'O(n²)'],
    correctAnswer: 'O(1)',
    explanation: 'Array indexing is O(1) because the memory address can be calculated directly from the index.',
    conceptTags: ['arrays', 'time-complexity'],
  },

  // ═══════════════════════════════════════════════════
  // DSA — Linked Lists
  // ═══════════════════════════════════════════════════
  {
    id: 'q-ll-1', topicId: 't-ai-p2-2', subtopicId: 'st-ll-1', difficulty: 'Intermediate', type: 'multiple-choice',
    question: 'What is the time complexity of inserting an element at the head of a singly linked list?',
    options: ['O(n)', 'O(1)', 'O(log n)', 'O(n²)'],
    correctAnswer: 'O(1)',
    explanation: 'Inserting at the head only requires creating a new node and updating the head pointer — O(1).',
    conceptTags: ['linked-lists', 'insertion'],
  },
  {
    id: 'q-ll-2', topicId: 't-ai-p2-2', subtopicId: 'st-ll-3', difficulty: 'Intermediate', type: 'multiple-choice',
    question: 'Which algorithm detects a cycle in a linked list using O(1) space?',
    options: ['DFS', 'BFS', 'Floyd\'s Tortoise and Hare', 'Hash Map'],
    correctAnswer: "Floyd's Tortoise and Hare",
    explanation: 'Floyd\'s algorithm uses two pointers moving at different speeds to detect a cycle in O(1) space.',
    conceptTags: ['cycle-detection', 'floyd'],
  },
  {
    id: 'q-ll-3', topicId: 't-ai-p2-2', subtopicId: 'st-ll-4', difficulty: 'Intermediate', type: 'multiple-choice',
    question: 'Reversing a singly linked list requires how many pointers minimum?',
    options: ['1', '2', '3', '4'],
    correctAnswer: '3',
    explanation: 'You need prev, current, and next pointers to safely reverse links without losing nodes.',
    conceptTags: ['reversal', 'linked-lists'],
  },

  // ═══════════════════════════════════════════════════
  // DSA — Stacks and Queues
  // ═══════════════════════════════════════════════════
  {
    id: 'q-sq-1', topicId: 't-ai-p2-3', subtopicId: 'st-sq-1', difficulty: 'Intermediate', type: 'multiple-choice',
    question: 'Which data structure follows LIFO (Last In, First Out) order?',
    options: ['Queue', 'Stack', 'Linked List', 'Tree'],
    correctAnswer: 'Stack',
    explanation: 'A stack follows LIFO — the last element pushed is the first one popped.',
    conceptTags: ['stacks', 'lifo'],
  },
  {
    id: 'q-sq-2', topicId: 't-ai-p2-3', subtopicId: 'st-sq-4', difficulty: 'Intermediate', type: 'multiple-choice',
    question: 'Which problem is commonly solved using a stack?',
    options: ['Shortest path', 'Valid parentheses matching', 'Binary search', 'Matrix multiplication'],
    correctAnswer: 'Valid parentheses matching',
    explanation: 'Stacks are ideal for matching opening and closing brackets in expressions.',
    conceptTags: ['stacks', 'applications', 'parentheses'],
  },

  // ═══════════════════════════════════════════════════
  // DSA — Trees and Graphs
  // ═══════════════════════════════════════════════════
  {
    id: 'q-tg-1', topicId: 't-ai-p2-4', subtopicId: 'st-tg-5', difficulty: 'Advanced', type: 'multiple-choice',
    question: 'BFS traversal of a graph uses which data structure?',
    options: ['Stack', 'Queue', 'Heap', 'Tree'],
    correctAnswer: 'Queue',
    explanation: 'BFS uses a queue to explore nodes level by level, visiting all neighbors before moving deeper.',
    conceptTags: ['bfs', 'queue', 'graph-traversal'],
  },
  {
    id: 'q-tg-2', topicId: 't-ai-p2-4', subtopicId: 'st-tg-6', difficulty: 'Advanced', type: 'multiple-choice',
    question: 'DFS traversal of a graph uses which data structure (iteratively)?',
    options: ['Queue', 'Stack', 'Array', 'Hash Map'],
    correctAnswer: 'Stack',
    explanation: 'DFS uses a stack (or recursion which implicitly uses the call stack) to explore as deep as possible before backtracking.',
    conceptTags: ['dfs', 'stack', 'graph-traversal'],
  },
  {
    id: 'q-tg-3', topicId: 't-ai-p2-4', subtopicId: 'st-tg-2', difficulty: 'Advanced', type: 'multiple-choice',
    question: 'What is the time complexity of searching in a balanced BST?',
    options: ['O(1)', 'O(n)', 'O(log n)', 'O(n²)'],
    correctAnswer: 'O(log n)',
    explanation: 'In a balanced BST, each comparison eliminates half the tree, giving O(log n) search time.',
    conceptTags: ['bst', 'search', 'time-complexity'],
  },

  // ═══════════════════════════════════════════════════
  // DSA — Sorting and Searching
  // ═══════════════════════════════════════════════════
  {
    id: 'q-ss-1', topicId: 't-ai-p2-5', subtopicId: 'st-ss-1', difficulty: 'Intermediate', type: 'multiple-choice',
    question: 'Binary search requires the input array to be:',
    options: ['Unsorted', 'Sorted', 'Reversed', 'Unique elements only'],
    correctAnswer: 'Sorted',
    explanation: 'Binary search works by comparing to the middle element and eliminating half — this only works on sorted arrays.',
    conceptTags: ['binary-search', 'sorted-arrays'],
  },
  {
    id: 'q-ss-2', topicId: 't-ai-p2-5', subtopicId: 'st-ss-2', difficulty: 'Intermediate', type: 'multiple-choice',
    question: 'What is the time complexity of Merge Sort?',
    options: ['O(n)', 'O(n log n)', 'O(n²)', 'O(log n)'],
    correctAnswer: 'O(n log n)',
    explanation: 'Merge Sort divides the array in half (log n) and merges in O(n), giving O(n log n) overall.',
    conceptTags: ['merge-sort', 'time-complexity'],
  },

  // ═══════════════════════════════════════════════════
  // DSA — Dynamic Programming
  // ═══════════════════════════════════════════════════
  {
    id: 'q-dp-1', topicId: 't-ai-p2-6', subtopicId: 'st-dp-1', difficulty: 'Advanced', type: 'multiple-choice',
    question: 'Memoization in dynamic programming refers to:',
    options: ['Sorting results', 'Caching previously computed results', 'Using less memory', 'Parallel processing'],
    correctAnswer: 'Caching previously computed results',
    explanation: 'Memoization stores results of expensive function calls to avoid recomputation.',
    conceptTags: ['memoization', 'dp'],
  },
  {
    id: 'q-dp-2', topicId: 't-ai-p2-6', subtopicId: 'st-dp-2', difficulty: 'Advanced', type: 'multiple-choice',
    question: 'Tabulation typically uses which approach?',
    options: ['Top-down with recursion', 'Bottom-up with iteration', 'Random access', 'Divide and conquer'],
    correctAnswer: 'Bottom-up with iteration',
    explanation: 'Tabulation builds solutions from the smallest subproblems upward using iteration.',
    conceptTags: ['tabulation', 'bottom-up', 'dp'],
  },

  // ═══════════════════════════════════════════════════
  // Statistics
  // ═══════════════════════════════════════════════════
  {
    id: 'q-stat-1', topicId: 't-ai-p3-1', subtopicId: 'st-stat-1', difficulty: 'Beginner', type: 'multiple-choice',
    question: 'Which measure of central tendency is most affected by outliers?',
    options: ['Median', 'Mode', 'Mean', 'Range'],
    correctAnswer: 'Mean',
    explanation: 'The mean is sensitive to outliers because it incorporates every value. Median and mode are more robust.',
    conceptTags: ['mean', 'outliers', 'central-tendency'],
  },
  {
    id: 'q-stat-2', topicId: 't-ai-p3-1', subtopicId: 'st-stat-2', difficulty: 'Beginner', type: 'multiple-choice',
    question: 'Standard deviation measures:',
    options: ['Central tendency', 'Spread of data', 'Skewness', 'Correlation'],
    correctAnswer: 'Spread of data',
    explanation: 'Standard deviation quantifies how much the data values deviate from the mean.',
    conceptTags: ['std-dev', 'variance', 'spread'],
  },
  {
    id: 'q-stat-3', topicId: 't-ai-p3-1', subtopicId: 'st-stat-3', difficulty: 'Beginner', type: 'multiple-choice',
    question: 'A normal distribution is characterized by:',
    options: ['Being left-skewed', 'Being right-skewed', 'Being symmetric and bell-shaped', 'Having multiple peaks'],
    correctAnswer: 'Being symmetric and bell-shaped',
    explanation: 'The normal distribution is a symmetric, bell-shaped curve centered on the mean.',
    conceptTags: ['normal-distribution', 'symmetric'],
  },

  // ═══════════════════════════════════════════════════
  // Probability
  // ═══════════════════════════════════════════════════
  {
    id: 'q-prob-1', topicId: 't-ai-p3-2', subtopicId: 'st-prob-2', difficulty: 'Intermediate', type: 'multiple-choice',
    question: 'Bayes\' theorem relates:',
    options: ['Mean and variance', 'Prior and posterior probabilities', 'Two independent events', 'Sample and population'],
    correctAnswer: 'Prior and posterior probabilities',
    explanation: 'Bayes\' theorem updates prior beliefs with new evidence to compute posterior probabilities.',
    conceptTags: ['bayes', 'conditional-probability'],
  },
  {
    id: 'q-prob-2', topicId: 't-ai-p3-2', subtopicId: 'st-prob-1', difficulty: 'Intermediate', type: 'multiple-choice',
    question: 'If you roll a fair six-sided die, what is the probability of rolling an even number?',
    options: ['1/6', '1/3', '1/2', '2/3'],
    correctAnswer: '1/2',
    explanation: 'Three of six faces (2, 4, 6) are even, so probability = 3/6 = 1/2.',
    conceptTags: ['probability', 'dice'],
  },
  {
    id: 'q-prob-3', topicId: 't-ai-p3-2', subtopicId: 'st-prob-4', difficulty: 'Intermediate', type: 'multiple-choice',
    question: 'A random variable that can take any value in a continuous range is called a:',
    options: ['Discrete random variable', 'Continuous random variable', 'Categorical variable', 'Constant variable'],
    correctAnswer: 'Continuous random variable',
    explanation: 'Continuous random variables can take any value within a range, as opposed to discrete which take specific values.',
    conceptTags: ['random-variables', 'continuous'],
  },

  // ═══════════════════════════════════════════════════
  // Linear Algebra
  // ═══════════════════════════════════════════════════
  {
    id: 'q-la-1', topicId: 't-ai-p3-3', subtopicId: 'st-la-1', difficulty: 'Intermediate', type: 'multiple-choice',
    question: 'The dot product of two vectors results in:',
    options: ['A vector', 'A scalar', 'A matrix', 'A tensor'],
    correctAnswer: 'A scalar',
    explanation: 'The dot product multiplies corresponding components and sums them, producing a single scalar value.',
    conceptTags: ['vectors', 'dot-product'],
  },
  {
    id: 'q-la-2', topicId: 't-ai-p3-3', subtopicId: 'st-la-2', difficulty: 'Intermediate', type: 'multiple-choice',
    question: 'For matrix multiplication A×B to be defined, the number of columns in A must equal:',
    options: ['Rows in A', 'Columns in B', 'Rows in B', 'Rows in A'],
    correctAnswer: 'Rows in B',
    explanation: 'Matrix A (m×n) can multiply matrix B (n×p) only when A\'s columns (n) equal B\'s rows (n).',
    conceptTags: ['matrices', 'matrix-multiplication'],
  },
  {
    id: 'q-la-3', topicId: 't-ai-p3-3', subtopicId: 'st-la-5', difficulty: 'Advanced', type: 'multiple-choice',
    question: 'Eigenvalues of a matrix represent:',
    options: ['Determinants', 'Scaling factors for eigenvectors', 'Trace values', 'Inverse values'],
    correctAnswer: 'Scaling factors for eigenvectors',
    explanation: 'When a matrix acts on its eigenvector, the eigenvalue is the scalar by which the eigenvector is scaled.',
    conceptTags: ['eigenvalues', 'eigenvectors'],
  },

  // ═══════════════════════════════════════════════════
  // Supervised Learning
  // ═══════════════════════════════════════════════════
  {
    id: 'q-sl-1', topicId: 't-ai-p4-1', subtopicId: 'st-sl-1', difficulty: 'Intermediate', type: 'multiple-choice',
    question: 'Linear regression is used for:',
    options: ['Classification', 'Regression (continuous values)', 'Clustering', 'Dimensionality reduction'],
    correctAnswer: 'Regression (continuous values)',
    explanation: 'Linear regression predicts a continuous output variable from input features.',
    conceptTags: ['linear-regression', 'regression'],
  },
  {
    id: 'q-sl-2', topicId: 't-ai-p4-1', subtopicId: 'st-sl-2', difficulty: 'Intermediate', type: 'multiple-choice',
    question: 'Logistic regression is primarily used for:',
    options: ['Regression', 'Binary classification', 'Clustering', 'Reinforcement learning'],
    correctAnswer: 'Binary classification',
    explanation: 'Despite its name, logistic regression is a classification algorithm using the sigmoid function.',
    conceptTags: ['logistic-regression', 'classification'],
  },
  {
    id: 'q-sl-3', topicId: 't-ai-p4-1', subtopicId: 'st-sl-4', difficulty: 'Intermediate', type: 'multiple-choice',
    question: 'Random Forests work by:',
    options: ['Training a single decision tree', 'Ensembling multiple decision trees', 'Using neural networks', 'Linear combinations'],
    correctAnswer: 'Ensembling multiple decision trees',
    explanation: 'Random Forest is an ensemble method that combines predictions from many decision trees.',
    conceptTags: ['random-forests', 'ensemble', 'decision-trees'],
  },

  // ═══════════════════════════════════════════════════
  // Unsupervised Learning
  // ═══════════════════════════════════════════════════
  {
    id: 'q-ul-1', topicId: 't-ai-p4-2', subtopicId: 'st-ul-1', difficulty: 'Intermediate', type: 'multiple-choice',
    question: 'K-Means clustering requires you to specify:',
    options: ['The number of clusters (K)', 'The distance metric only', 'The number of iterations', 'The initial centroids only'],
    correctAnswer: 'The number of clusters (K)',
    explanation: 'K-Means requires K (the number of clusters) as input. Centroids are initialized randomly or via k-means++.',
    conceptTags: ['k-means', 'clustering'],
  },
  {
    id: 'q-ul-2', topicId: 't-ai-p4-2', subtopicId: 'st-ul-3', difficulty: 'Intermediate', type: 'multiple-choice',
    question: 'PCA (Principal Component Analysis) is used for:',
    options: ['Classification', 'Dimensionality reduction', 'Regression', 'Time series forecasting'],
    correctAnswer: 'Dimensionality reduction',
    explanation: 'PCA reduces the number of variables while preserving the most important variance in the data.',
    conceptTags: ['pca', 'dimensionality-reduction'],
  },

  // ═══════════════════════════════════════════════════
  // Model Evaluation
  // ═══════════════════════════════════════════════════
  {
    id: 'q-me-1', topicId: 't-ai-p4-3', subtopicId: 'st-me-3', difficulty: 'Intermediate', type: 'multiple-choice',
    question: 'Precision is defined as:',
    options: ['TP / (TP + FN)', 'TP / (TP + FP)', 'TN / (TN + FP)', '2 * Precision * Recall / (P + R)'],
    correctAnswer: 'TP / (TP + FP)',
    explanation: 'Precision = True Positives / (True Positives + False Positives) — of all predicted positives, how many were correct.',
    conceptTags: ['precision', 'evaluation'],
  },
  {
    id: 'q-me-2', topicId: 't-ai-p4-3', subtopicId: 'st-me-5', difficulty: 'Intermediate', type: 'multiple-choice',
    question: 'A model that memorizes training data but fails on new data is:',
    options: ['Underfitting', 'Overfitting', 'Well-generalized', 'Properly regularized'],
    correctAnswer: 'Overfitting',
    explanation: 'Overfitting occurs when a model learns noise in training data and fails to generalize to unseen data.',
    conceptTags: ['overfitting', 'generalization'],
  },

  // ═══════════════════════════════════════════════════
  // Scikit-Learn
  // ═══════════════════════════════════════════════════
  {
    id: 'q-sk-1', topicId: 't-ai-p4-4', subtopicId: 'st-sk-1', difficulty: 'Intermediate', type: 'multiple-choice',
    question: 'Which Scikit-Learn class is used for feature scaling?',
    options: ['StandardScaler', 'Normalizer', 'Both StandardScaler and MinMaxScaler', 'LabelEncoder'],
    correctAnswer: 'Both StandardScaler and MinMaxScaler',
    explanation: 'Both StandardScaler (standardization) and MinMaxScaler (normalization) are used for feature scaling.',
    conceptTags: ['scikit-learn', 'preprocessing', 'scaling'],
  },
  {
    id: 'q-sk-2', topicId: 't-ai-p4-4', subtopicId: 'st-sk-3', difficulty: 'Intermediate', type: 'multiple-choice',
    question: 'GridSearchCV is used for:',
    options: ['Data cleaning', 'Hyperparameter tuning with cross-validation', 'Feature selection', 'Model deployment'],
    correctAnswer: 'Hyperparameter tuning with cross-validation',
    explanation: 'GridSearchCV systematically tests combinations of hyperparameters using cross-validation.',
    conceptTags: ['gridsearch', 'hyperparameter-tuning'],
  },

  // ═══════════════════════════════════════════════════
  // Neural Networks
  // ═══════════════════════════════════════════════════
  {
    id: 'q-nn-1', topicId: 't-ai-p5-1', subtopicId: 'st-nn-2', difficulty: 'Intermediate', type: 'multiple-choice',
    question: 'The ReLU activation function outputs:',
    options: ['Any real number', 'max(0, x)', 'A value between 0 and 1', 'A value between -1 and 1'],
    correctAnswer: 'max(0, x)',
    explanation: 'ReLU (Rectified Linear Unit) outputs 0 for negative inputs and x for positive inputs.',
    conceptTags: ['relu', 'activation-functions'],
  },
  {
    id: 'q-nn-2', topicId: 't-ai-p5-1', subtopicId: 'st-nn-4', difficulty: 'Intermediate', type: 'multiple-choice',
    question: 'Backpropagation is used to:',
    options: ['Initialize weights', 'Compute gradients for weight updates', 'Normalize inputs', 'Reduce model size'],
    correctAnswer: 'Compute gradients for weight updates',
    explanation: 'Backpropagation calculates gradients of the loss with respect to weights using the chain rule.',
    conceptTags: ['backpropagation', 'gradients'],
  },
  {
    id: 'q-nn-3', topicId: 't-ai-p5-1', subtopicId: 'st-nn-6', difficulty: 'Intermediate', type: 'multiple-choice',
    question: 'Cross-entropy loss is typically used for:',
    options: ['Regression tasks', 'Classification tasks', 'Clustering', 'Dimensionality reduction'],
    correctAnswer: 'Classification tasks',
    explanation: 'Cross-entropy measures the difference between predicted probability distributions and true labels.',
    conceptTags: ['cross-entropy', 'loss-functions', 'classification'],
  },

  // ═══════════════════════════════════════════════════
  // CNNs
  // ═══════════════════════════════════════════════════
  {
    id: 'q-cnn-1', topicId: 't-ai-p5-2', subtopicId: 'st-cnn-1', difficulty: 'Advanced', type: 'multiple-choice',
    question: 'A convolution operation in CNNs performs:',
    options: ['Matrix multiplication', 'Element-wise multiplication and summation with a filter', 'Sorting', 'Pooling'],
    correctAnswer: 'Element-wise multiplication and summation with a filter',
    explanation: 'Convolution slides a filter over the input, performing element-wise multiplication and summing the results.',
    conceptTags: ['convolution', 'cnn', 'filters'],
  },
  {
    id: 'q-cnn-2', topicId: 't-ai-p5-2', subtopicId: 'st-cnn-4', difficulty: 'Advanced', type: 'multiple-choice',
    question: 'Transfer learning involves:',
    options: ['Training from scratch', 'Using a pre-trained model and fine-tuning it', 'Transferring data between models', 'Reducing model size'],
    correctAnswer: 'Using a pre-trained model and fine-tuning it',
    explanation: 'Transfer learning leverages a model pre-trained on a large dataset and adapts it to a new task.',
    conceptTags: ['transfer-learning', 'pre-trained-models'],
  },

  // ═══════════════════════════════════════════════════
  // RNNs and Transformers
  // ═══════════════════════════════════════════════════
  {
    id: 'q-rnn-1', topicId: 't-ai-p5-3', subtopicId: 'st-rnn-2', difficulty: 'Advanced', type: 'multiple-choice',
    question: 'LSTMs were designed to solve which problem in standard RNNs?',
    options: ['Overfitting', 'Vanishing gradient problem', 'Slow training', 'Large memory usage'],
    correctAnswer: 'Vanishing gradient problem',
    explanation: 'LSTMs use gating mechanisms to preserve long-range dependencies and mitigate vanishing gradients.',
    conceptTags: ['lstm', 'vanishing-gradient', 'rnn'],
  },
  {
    id: 'q-rnn-2', topicId: 't-ai-p5-3', subtopicId: 'st-rnn-5', difficulty: 'Advanced', type: 'multiple-choice',
    question: 'The key innovation of the Transformer architecture is:',
    options: ['Recurrent connections', 'Self-attention mechanism', 'Convolutional layers', 'Pooling layers'],
    correctAnswer: 'Self-attention mechanism',
    explanation: 'Transformers replaced recurrence with self-attention, enabling parallel processing and better long-range modeling.',
    conceptTags: ['transformers', 'self-attention'],
  },

  // ═══════════════════════════════════════════════════
  // PyTorch
  // ═══════════════════════════════════════════════════
  {
    id: 'q-pt-1', topicId: 't-ai-p5-4', subtopicId: 'st-pt-2', difficulty: 'Advanced', type: 'multiple-choice',
    question: 'PyTorch\'s Autograd system is used for:',
    options: ['Data loading', 'Automatic differentiation', 'Model visualization', 'GPU management'],
    correctAnswer: 'Automatic differentiation',
    explanation: 'Autograd automatically computes gradients for tensor operations, enabling backpropagation.',
    conceptTags: ['autograd', 'pytorch', 'gradients'],
  },
  {
    id: 'q-pt-2', topicId: 't-ai-p5-4', subtopicId: 'st-pt-4', difficulty: 'Advanced', type: 'multiple-choice',
    question: 'In a PyTorch training loop, what must you call before backward()?',
    options: ['model.eval()', 'optimizer.zero_grad()', 'torch.no_grad()', 'model.save()'],
    correctAnswer: 'optimizer.zero_grad()',
    explanation: 'Gradients accumulate by default in PyTorch, so you must zero them before each backward pass.',
    conceptTags: ['pytorch', 'training-loop', 'optimizer'],
  },

  // ═══════════════════════════════════════════════════
  // LLM Fundamentals
  // ═══════════════════════════════════════════════════
  {
    id: 'q-llm-1', topicId: 't-ai-p6-1', subtopicId: 'st-llm-1', difficulty: 'Advanced', type: 'multiple-choice',
    question: 'Tokenization in LLMs refers to:',
    options: ['Splitting text into words only', 'Splitting text into subword units', 'Encrypting text', 'Compressing text'],
    correctAnswer: 'Splitting text into subword units',
    explanation: 'Tokenization breaks text into subword units (tokens) that the model can process, handling rare and common words efficiently.',
    conceptTags: ['tokenization', 'llm', 'subwords'],
  },
  {
    id: 'q-llm-2', topicId: 't-ai-p6-1', subtopicId: 'st-llm-3', difficulty: 'Advanced', type: 'multiple-choice',
    question: 'Fine-tuning an LLM involves:',
    options: ['Training from scratch', 'Further training a pre-trained model on task-specific data', 'Reducing model size', 'Changing the architecture'],
    correctAnswer: 'Further training a pre-trained model on task-specific data',
    explanation: 'Fine-tuning takes a pre-trained model and continues training on a smaller, task-specific dataset.',
    conceptTags: ['fine-tuning', 'llm', 'pre-trained'],
  },

  // ═══════════════════════════════════════════════════
  // Prompt Engineering
  // ═══════════════════════════════════════════════════
  {
    id: 'q-pe-1', topicId: 't-ai-p6-2', subtopicId: 'st-pe-3', difficulty: 'Intermediate', type: 'multiple-choice',
    question: 'Chain of Thought prompting involves:',
    options: ['Using longer prompts', 'Asking the model to reason step-by-step', 'Chaining multiple API calls', 'Using multiple models'],
    correctAnswer: 'Asking the model to reason step-by-step',
    explanation: 'Chain of Thought prompting encourages the model to break down reasoning into intermediate steps.',
    conceptTags: ['chain-of-thought', 'prompting'],
  },
  {
    id: 'q-pe-2', topicId: 't-ai-p6-2', subtopicId: 'st-pe-2', difficulty: 'Intermediate', type: 'multiple-choice',
    question: 'Few-shot learning in prompting means:',
    options: ['Training with few samples', 'Providing a few examples in the prompt', 'Using a small model', 'Training for few epochs'],
    correctAnswer: 'Providing a few examples in the prompt',
    explanation: 'Few-shot prompting includes a few input-output examples in the prompt to guide the model\'s response format.',
    conceptTags: ['few-shot', 'prompting', 'examples'],
  },

  // ═══════════════════════════════════════════════════
  // RAG
  // ═══════════════════════════════════════════════════
  {
    id: 'q-rag-1', topicId: 't-ai-p6-3', subtopicId: 'st-rag-1', difficulty: 'Advanced', type: 'multiple-choice',
    question: 'In a RAG system, embeddings are used to:',
    options: ['Generate text', 'Convert text to vector representations for similarity search', 'Encrypt data', 'Compress documents'],
    correctAnswer: 'Convert text to vector representations for similarity search',
    explanation: 'Embeddings transform text into dense vectors so semantically similar content can be found via vector similarity.',
    conceptTags: ['embeddings', 'rag', 'vectors'],
  },
  {
    id: 'q-rag-2', topicId: 't-ai-p6-3', subtopicId: 'st-rag-2', difficulty: 'Advanced', type: 'multiple-choice',
    question: 'A vector database in RAG systems is used to:',
    options: ['Store training data', 'Store and search embeddings efficiently', 'Generate responses', 'Handle user authentication'],
    correctAnswer: 'Store and search embeddings efficiently',
    explanation: 'Vector databases like Pinecone, Weaviate, or FAISS store embeddings and enable fast similarity search for retrieval.',
    conceptTags: ['vector-database', 'rag', 'retrieval'],
  },

  // ═══════════════════════════════════════════════════
  // AI Application Building
  // ═══════════════════════════════════════════════════
  {
    id: 'q-aab-1', topicId: 't-ai-p6-4', subtopicId: 'st-aab-1', difficulty: 'Advanced', type: 'multiple-choice',
    question: 'When integrating an LLM API in production, you should always:',
    options: ['Use the largest model available', 'Handle rate limits and errors gracefully', 'Send all data without filtering', 'Hardcode API keys'],
    correctAnswer: 'Handle rate limits and errors gracefully',
    explanation: 'Production LLM applications must handle rate limits, timeouts, and errors with retry logic and fallbacks.',
    conceptTags: ['api-integration', 'production', 'error-handling'],
  },

  // ═══════════════════════════════════════════════════
  // JavaScript Fundamentals
  // ═══════════════════════════════════════════════════
  {
    id: 'q-js-1', topicId: 't-fs-p2-1', subtopicId: 'st-js-1', difficulty: 'Beginner', type: 'multiple-choice',
    question: 'Which keyword declares a block-scoped variable in JavaScript?',
    options: ['var', 'let', 'function', 'static'],
    correctAnswer: 'let',
    explanation: 'let declares a block-scoped variable. var is function-scoped, which can lead to unexpected behavior.',
    conceptTags: ['variables', 'let', 'block-scope'],
  },
  {
    id: 'q-js-2', topicId: 't-fs-p2-1', subtopicId: 'st-js-2', difficulty: 'Beginner', type: 'multiple-choice',
    question: 'What does "this" refer to inside an arrow function defined at the top level?',
    options: ['The function itself', 'The global object (window/globalThis)', 'undefined', 'The caller object'],
    correctAnswer: 'The global object (window/globalThis)',
    explanation: 'Arrow functions do not have their own "this" — they inherit it from the enclosing scope.',
    conceptTags: ['arrow-functions', 'this', 'scope'],
  },
  {
    id: 'q-js-3', topicId: 't-fs-p2-1', subtopicId: 'st-js-4', difficulty: 'Beginner', type: 'multiple-choice',
    question: 'Which array method creates a new array with the results of calling a function on every element?',
    options: ['forEach', 'map', 'filter', 'reduce'],
    correctAnswer: 'map',
    explanation: 'map() returns a new array containing the results of calling the provided function on each element.',
    conceptTags: ['arrays', 'map'],
  },

  // ═══════════════════════════════════════════════════
  // ES6+ Features
  // ═══════════════════════════════════════════════════
  {
    id: 'q-es6-1', topicId: 't-fs-p2-2', subtopicId: 'st-es6-2', difficulty: 'Intermediate', type: 'multiple-choice',
    question: 'What does const { name, age } = user; do?',
    options: ['Creates two variables from user object properties', 'Creates an object', 'Deletes properties', 'Merges objects'],
    correctAnswer: 'Creates two variables from user object properties',
    explanation: 'This is object destructuring — it extracts the "name" and "age" properties from the user object into variables.',
    conceptTags: ['destructuring', 'es6', 'objects'],
  },
  {
    id: 'q-es6-2', topicId: 't-fs-p2-2', subtopicId: 'st-es6-5', difficulty: 'Intermediate', type: 'multiple-choice',
    question: 'async/await is syntactic sugar over which JavaScript feature?',
    options: ['Callbacks', 'Promises', 'Generators', 'Events'],
    correctAnswer: 'Promises',
    explanation: 'async/await makes Promise-based code look synchronous, but under the hood it uses Promises.',
    conceptTags: ['async-await', 'promises', 'es6'],
  },

  // ═══════════════════════════════════════════════════
  // Async JS
  // ═══════════════════════════════════════════════════
  {
    id: 'q-async-1', topicId: 't-fs-p2-3', subtopicId: 'st-async-2', difficulty: 'Intermediate', type: 'multiple-choice',
    question: 'What happens if a Promise has no .catch() and it rejects?',
    options: ['Nothing happens', 'Uncaught rejection error', 'It retries automatically', 'It resolves to undefined'],
    correctAnswer: 'Uncaught rejection error',
    explanation: 'An unhandled Promise rejection results in an uncaught rejection error, which can crash Node.js applications.',
    conceptTags: ['promises', 'error-handling', 'rejection'],
  },
  {
    id: 'q-async-2', topicId: 't-fs-p2-3', subtopicId: 'st-async-4', difficulty: 'Intermediate', type: 'multiple-choice',
    question: 'The fetch() API returns what?',
    options: ['A string', 'A Promise', 'An object', 'A callback'],
    correctAnswer: 'A Promise',
    explanation: 'fetch() returns a Promise that resolves to the Response object once the request completes.',
    conceptTags: ['fetch-api', 'promises', 'http'],
  },

  // ═══════════════════════════════════════════════════
  // SQL Fundamentals
  // ═══════════════════════════════════════════════════
  {
    id: 'q-sql-1', topicId: 't-ds-p4-1', subtopicId: 'st-sql-3', difficulty: 'Beginner', type: 'multiple-choice',
    question: 'Which JOIN returns all rows from both tables where there is a match?',
    options: ['LEFT JOIN', 'RIGHT JOIN', 'INNER JOIN', 'FULL OUTER JOIN'],
    correctAnswer: 'INNER JOIN',
    explanation: 'INNER JOIN returns only the rows where there is a match in both tables.',
    conceptTags: ['joins', 'inner-join', 'sql'],
  },
  {
    id: 'q-sql-2', topicId: 't-ds-p4-1', subtopicId: 'st-sql-4', difficulty: 'Beginner', type: 'multiple-choice',
    question: 'Which clause is used to filter groups after GROUP BY?',
    options: ['WHERE', 'HAVING', 'FILTER', 'ORDER BY'],
    correctAnswer: 'HAVING',
    explanation: 'HAVING filters groups created by GROUP BY, while WHERE filters individual rows before grouping.',
    conceptTags: ['group-by', 'having', 'sql'],
  },
  {
    id: 'q-sql-3', topicId: 't-ds-p4-1', subtopicId: 'st-sql-1', difficulty: 'Beginner', type: 'multiple-choice',
    question: 'Which SQL statement retrieves data from a database?',
    options: ['GET', 'FETCH', 'SELECT', 'RETRIEVE'],
    correctAnswer: 'SELECT',
    explanation: 'SELECT is the SQL command used to query and retrieve data from database tables.',
    conceptTags: ['select', 'sql', 'query'],
  },

  // ═══════════════════════════════════════════════════
  // Advanced SQL
  // ═══════════════════════════════════════════════════
  {
    id: 'q-asql-1', topicId: 't-ds-p4-2', subtopicId: 'st-asql-1', difficulty: 'Intermediate', type: 'multiple-choice',
    question: 'Window functions differ from GROUP BY because they:',
    options: ['Reduce rows', 'Return the same number of rows as the input', 'Cannot use aggregates', 'Only work with integers'],
    correctAnswer: 'Return the same number of rows as the input',
    explanation: 'Window functions compute aggregates over a window of rows without collapsing them, preserving row count.',
    conceptTags: ['window-functions', 'sql', 'aggregates'],
  },
  {
    id: 'q-asql-2', topicId: 't-ds-p4-2', subtopicId: 'st-asql-2', difficulty: 'Intermediate', type: 'multiple-choice',
    question: 'A CTE (Common Table Expression) is defined using which keyword?',
    options: ['WITH', 'AS', 'DEFINE', 'TEMP'],
    correctAnswer: 'WITH',
    explanation: 'CTEs are defined using the WITH keyword and can be referenced like a temporary table within the query.',
    conceptTags: ['cte', 'with', 'sql'],
  },
];

// ── Helper functions ──

function generateFallbackQuiz(topicId: string): QuizQuestion[] {
  const topic = EXPANDED_TOPICS.find(t => t.id === topicId);
  if (!topic) return [];
  return topic.subtopics.slice(0, 5).map((sub, i) => ({
    id: `q-fallback-${topicId}-${i}`,
    topicId,
    subtopicId: sub.id,
    difficulty: topic.difficulty,
    type: 'multiple-choice' as const,
    question: `Which best describes "${sub.name}" in the context of ${topic.name}?`,
    options: [
      `A fundamental concept that involves understanding core principles of ${sub.name.toLowerCase()}`,
      `An unrelated topic with no connection to ${topic.name}`,
      `A deprecated practice no longer used in the industry`,
      `A hardware component unrelated to software`,
    ],
    correctAnswer: `A fundamental concept that involves understanding core principles of ${sub.name.toLowerCase()}`,
    explanation: `${sub.name} is a key part of ${topic.name}. Understanding its core principles enables practical application in real-world scenarios.`,
    conceptTags: [topic.skill.toLowerCase(), sub.name.toLowerCase()],
  }));
}

export function getQuizQuestionsForTopic(topicId: string): QuizQuestion[] {
  const existing = QUIZ_QUESTIONS.filter((q) => q.topicId === topicId);
  if (existing.length > 0) return existing;
  return generateFallbackQuiz(topicId);
}

export function getQuizQuestionById(id: string): QuizQuestion | undefined {
  return QUIZ_QUESTIONS.find((q) => q.id === id);
}

// Get a subset of questions for a quiz attempt, avoiding recently used ones
export function getQuizQuestions(topicId: string, excludeIds: string[] = [], count = 5): QuizQuestion[] {
  const available = getQuizQuestionsForTopic(topicId).filter((q) => !excludeIds.includes(q.id));
  const pool = available.length >= count ? available : getQuizQuestionsForTopic(topicId);
  // Shuffle and take first `count`
  return [...pool].sort(() => Math.random() - 0.5).slice(0, Math.min(count, pool.length));
}
