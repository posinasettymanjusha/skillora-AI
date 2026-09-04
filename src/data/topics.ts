import type { RoadmapTopic, PracticeItem } from '@/types';
import { EXPANDED_TOPICS } from '@/data/expandedContent';

// ── Practice Items ──
export const PRACTICE_ITEMS: PracticeItem[] = [
  // Python practices
  { id: 'pr-py-1', title: 'Variable Swap Exercise', description: 'Swap two variables without using a third temporary variable.', difficulty: 'Beginner', type: 'exercise', topicId: 't-ai-p1-1', hint: 'Use Python tuple unpacking: a, b = b, a' },
  { id: 'pr-py-2', title: 'Type Conversion Challenge', description: 'Write a program that takes user input as a string and converts it to int, float, and boolean, handling errors gracefully.', difficulty: 'Beginner', type: 'exercise', topicId: 't-ai-p1-1' },
  { id: 'pr-py-3', title: 'FizzBuzz', description: 'Print numbers 1-100. For multiples of 3 print "Fizz", multiples of 5 print "Buzz", both print "FizzBuzz".', difficulty: 'Beginner', type: 'coding', topicId: 't-ai-p1-2', hint: 'Use if-elif-else with modulo operator', externalUrl: 'https://leetcode.com/problems/fizz-buzz' },
  { id: 'pr-py-4', title: 'Nested Condition Calculator', description: 'Build a simple calculator that handles +, -, *, / with nested conditionals for error handling.', difficulty: 'Beginner', type: 'coding', topicId: 't-ai-p1-2' },
  { id: 'pr-py-5', title: 'Prime Number Checker', description: 'Write a function that checks if a number is prime using a loop.', difficulty: 'Beginner', type: 'coding', topicId: 't-ai-p1-2', externalUrl: 'https://leetcode.com/problems/prime-number/' },
  { id: 'pr-py-6', title: 'Recursive Factorial', description: 'Implement a factorial function using both recursion and iteration.', difficulty: 'Beginner', type: 'coding', topicId: 't-ai-p1-3', hint: 'Base case: 0! = 1' },
  { id: 'pr-py-7', title: 'Lambda Sort Exercise', description: 'Sort a list of dictionaries by a specific key using lambda functions.', difficulty: 'Intermediate', type: 'exercise', topicId: 't-ai-p1-3' },
  { id: 'pr-py-8', title: 'Contact Book with Dictionaries', description: 'Build a contact book application using dictionaries with add, search, delete, and list operations.', difficulty: 'Intermediate', type: 'coding', topicId: 't-ai-p1-4' },
  { id: 'pr-py-9', title: 'List Comprehension Practice', description: 'Generate a list of squares of even numbers from 1-50 using list comprehension.', difficulty: 'Intermediate', type: 'exercise', topicId: 't-ai-p1-4' },
  { id: 'pr-py-10', title: 'Bank Account Class', description: 'Create a BankAccount class with deposit, withdraw, and balance methods, including error handling for insufficient funds.', difficulty: 'Intermediate', type: 'coding', topicId: 't-ai-p1-5' },
  { id: 'pr-py-11', title: 'Inheritance: Shape Hierarchy', description: 'Create a Shape base class with Circle, Rectangle, and Triangle subclasses. Each should implement area() and perimeter().', difficulty: 'Intermediate', type: 'coding', topicId: 't-ai-p1-5' },
  { id: 'pr-py-12', title: 'File Logger Utility', description: 'Build a logger that writes messages to a file with timestamps and handles file errors.', difficulty: 'Intermediate', type: 'coding', topicId: 't-ai-p1-6' },
  // JS practices
  { id: 'pr-js-1', title: 'DOM Manipulation Exercise', description: 'Create a dynamic todo list with add, toggle, and delete functionality using vanilla JS.', difficulty: 'Beginner', type: 'coding', topicId: 't-fs-p2-1' },
  { id: 'pr-js-2', title: 'Array Methods Practice', description: 'Practice map, filter, reduce on an array of user objects to extract and transform data.', difficulty: 'Intermediate', type: 'exercise', topicId: 't-fs-p2-1' },
  // SQL practices
  { id: 'pr-sql-1', title: 'SQL JOIN Practice', description: 'Write queries using INNER JOIN, LEFT JOIN, and RIGHT JOIN on sample e-commerce tables.', difficulty: 'Intermediate', type: 'exercise', topicId: 't-ds-p4-1', externalUrl: 'https://sqlzoo.net' },
  { id: 'pr-sql-2', title: 'Aggregate Queries', description: 'Practice GROUP BY, HAVING, and aggregate functions on a sales dataset.', difficulty: 'Intermediate', type: 'exercise', topicId: 't-ds-p4-1' },
  // ML practices
  { id: 'pr-ml-1', title: 'Linear Regression from Scratch', description: 'Implement linear regression using NumPy without Scikit-learn.', difficulty: 'Intermediate', type: 'coding', topicId: 't-ai-p4-1' },
  { id: 'pr-ml-2', title: 'Titanic Survival Prediction', description: 'Build a classification model to predict Titanic passenger survival.', difficulty: 'Beginner', type: 'project', topicId: 't-ai-p4-2', externalUrl: 'https://www.kaggle.com/c/titanic' },
];

// ── Topics for all roadmaps ──
// Each topic has subtopics, estimated hours, difficulty, weight, resource links, practice items, and quiz questions.

export const TOPICS: RoadmapTopic[] = [
  // ═══════════════════════════════════════════════════
  // AI ENGINEER — Phase 1: Programming Foundations
  // ═══════════════════════════════════════════════════
  {
    id: 't-ai-p1-1', phaseId: 'ai-p1', name: 'Python Basics', skill: 'Python', difficulty: 'Beginner', estimatedHours: 5, weight: 15,
    subtopics: [
      { id: 'st-pybas-1', name: 'Variables' },
      { id: 'st-pybas-2', name: 'Data Types' },
      { id: 'st-pybas-3', name: 'Input and Output' },
      { id: 'st-pybas-4', name: 'Type Conversion' },
      { id: 'st-pybas-5', name: 'Operators' },
    ],
    resourceIds: ['r-py-1', 'r-py-2'],
    practiceItemIds: ['pr-py-1', 'pr-py-2'],
    quizQuestionIds: ['q-pybas-1', 'q-pybas-2', 'q-pybas-3', 'q-pybas-4', 'q-pybas-5'],
  },
  {
    id: 't-ai-p1-2', phaseId: 'ai-p1', name: 'Control Flow', skill: 'Python', difficulty: 'Beginner', estimatedHours: 6, weight: 15,
    subtopics: [
      { id: 'st-cf-1', name: 'Boolean Logic' },
      { id: 'st-cf-2', name: 'If Statements' },
      { id: 'st-cf-3', name: 'If-Else' },
      { id: 'st-cf-4', name: 'Nested Conditions' },
      { id: 'st-cf-5', name: 'For Loops' },
      { id: 'st-cf-6', name: 'While Loops' },
      { id: 'st-cf-7', name: 'Break' },
      { id: 'st-cf-8', name: 'Continue' },
      { id: 'st-cf-9', name: 'Pass' },
    ],
    resourceIds: ['r-py-1'],
    practiceItemIds: ['pr-py-3', 'pr-py-4', 'pr-py-5'],
    quizQuestionIds: ['q-cf-1', 'q-cf-2', 'q-cf-3', 'q-cf-4', 'q-cf-5'],
  },
  {
    id: 't-ai-p1-3', phaseId: 'ai-p1', name: 'Functions', skill: 'Python', difficulty: 'Beginner', estimatedHours: 6, weight: 20,
    subtopics: [
      { id: 'st-fn-1', name: 'Function Basics' },
      { id: 'st-fn-2', name: 'Parameters' },
      { id: 'st-fn-3', name: 'Arguments' },
      { id: 'st-fn-4', name: 'Return Values' },
      { id: 'st-fn-5', name: 'Variable Scope' },
      { id: 'st-fn-6', name: 'Default Arguments' },
      { id: 'st-fn-7', name: 'Keyword Arguments' },
      { id: 'st-fn-8', name: 'Lambda Functions' },
    ],
    resourceIds: ['r-py-1', 'r-py-2'],
    practiceItemIds: ['pr-py-6', 'pr-py-7'],
    quizQuestionIds: ['q-fn-1', 'q-fn-2', 'q-fn-3', 'q-fn-4', 'q-fn-5'],
  },
  {
    id: 't-ai-p1-4', phaseId: 'ai-p1', name: 'Data Structures', skill: 'Python', difficulty: 'Intermediate', estimatedHours: 8, weight: 20,
    subtopics: [
      { id: 'st-ds-1', name: 'Lists' },
      { id: 'st-ds-2', name: 'Tuples' },
      { id: 'st-ds-3', name: 'Sets' },
      { id: 'st-ds-4', name: 'Dictionaries' },
      { id: 'st-ds-5', name: 'List Comprehensions' },
      { id: 'st-ds-6', name: 'Nested Data Structures' },
    ],
    resourceIds: ['r-py-2', 'r-py-3'],
    practiceItemIds: ['pr-py-8', 'pr-py-9'],
    quizQuestionIds: ['q-ds-1', 'q-ds-2', 'q-ds-3', 'q-ds-4', 'q-ds-5'],
  },
  {
    id: 't-ai-p1-5', phaseId: 'ai-p1', name: 'Object-Oriented Programming', skill: 'Python', difficulty: 'Intermediate', estimatedHours: 8, weight: 20,
    subtopics: [
      { id: 'st-oop-1', name: 'Classes' },
      { id: 'st-oop-2', name: 'Objects' },
      { id: 'st-oop-3', name: 'Constructors' },
      { id: 'st-oop-4', name: 'Instance Variables' },
      { id: 'st-oop-5', name: 'Methods' },
      { id: 'st-oop-6', name: 'Inheritance' },
      { id: 'st-oop-7', name: 'Polymorphism' },
      { id: 'st-oop-8', name: 'Encapsulation' },
      { id: 'st-oop-9', name: 'Abstraction' },
    ],
    resourceIds: ['r-py-3'],
    practiceItemIds: ['pr-py-10', 'pr-py-11'],
    quizQuestionIds: ['q-oop-1', 'q-oop-2', 'q-oop-3', 'q-oop-4', 'q-oop-5'],
  },
  {
    id: 't-ai-p1-6', phaseId: 'ai-p1', name: 'Exception and File Handling', skill: 'Python', difficulty: 'Intermediate', estimatedHours: 5, weight: 10,
    subtopics: [
      { id: 'st-ef-1', name: 'Try' },
      { id: 'st-ef-2', name: 'Except' },
      { id: 'st-ef-3', name: 'Finally' },
      { id: 'st-ef-4', name: 'Custom Exceptions' },
      { id: 'st-ef-5', name: 'Reading Files' },
      { id: 'st-ef-6', name: 'Writing Files' },
      { id: 'st-ef-7', name: 'File Modes' },
    ],
    resourceIds: ['r-py-3'],
    practiceItemIds: ['pr-py-12'],
    quizQuestionIds: ['q-ef-1', 'q-ef-2', 'q-ef-3', 'q-ef-4', 'q-ef-5'],
  },

  // ═══════════════════════════════════════════════════
  // AI ENGINEER — Phase 2: DSA
  // ═══════════════════════════════════════════════════
  {
    id: 't-ai-p2-1', phaseId: 'ai-p2', name: 'Arrays and Strings', skill: 'Data Structures', difficulty: 'Beginner', estimatedHours: 8, weight: 20,
    subtopics: [
      { id: 'st-arr-1', name: 'Array Operations' },
      { id: 'st-arr-2', name: 'Two Pointers' },
      { id: 'st-arr-3', name: 'Sliding Window' },
      { id: 'st-arr-4', name: 'String Manipulation' },
    ],
    resourceIds: ['r-dsa-1', 'r-dsa-2'],
    practiceItemIds: [],
    quizQuestionIds: ['q-arr-1', 'q-arr-2', 'q-arr-3'],
  },
  {
    id: 't-ai-p2-2', phaseId: 'ai-p2', name: 'Linked Lists', skill: 'Data Structures', difficulty: 'Intermediate', estimatedHours: 8, weight: 15,
    subtopics: [
      { id: 'st-ll-1', name: 'Singly Linked Lists' },
      { id: 'st-ll-2', name: 'Doubly Linked Lists' },
      { id: 'st-ll-3', name: 'Cycle Detection' },
      { id: 'st-ll-4', name: 'Reversal' },
    ],
    resourceIds: ['r-dsa-1', 'r-dsa-3'],
    practiceItemIds: [],
    quizQuestionIds: ['q-ll-1', 'q-ll-2', 'q-ll-3'],
  },
  {
    id: 't-ai-p2-3', phaseId: 'ai-p2', name: 'Stacks and Queues', skill: 'Data Structures', difficulty: 'Intermediate', estimatedHours: 6, weight: 15,
    subtopics: [
      { id: 'st-sq-1', name: 'Stack Operations' },
      { id: 'st-sq-2', name: 'Queue Operations' },
      { id: 'st-sq-3', name: 'Deque' },
      { id: 'st-sq-4', name: 'Applications' },
    ],
    resourceIds: ['r-dsa-1'],
    practiceItemIds: [],
    quizQuestionIds: ['q-sq-1', 'q-sq-2'],
  },
  {
    id: 't-ai-p2-4', phaseId: 'ai-p2', name: 'Trees and Graphs', skill: 'Data Structures', difficulty: 'Advanced', estimatedHours: 15, weight: 25,
    subtopics: [
      { id: 'st-tg-1', name: 'Binary Trees' },
      { id: 'st-tg-2', name: 'BST Operations' },
      { id: 'st-tg-3', name: 'Tree Traversals' },
      { id: 'st-tg-4', name: 'Graph Representation' },
      { id: 'st-tg-5', name: 'BFS' },
      { id: 'st-tg-6', name: 'DFS' },
    ],
    resourceIds: ['r-dsa-1', 'r-dsa-2', 'r-dsa-3'],
    practiceItemIds: [],
    quizQuestionIds: ['q-tg-1', 'q-tg-2', 'q-tg-3'],
  },
  {
    id: 't-ai-p2-5', phaseId: 'ai-p2', name: 'Sorting and Searching', skill: 'Algorithms', difficulty: 'Intermediate', estimatedHours: 10, weight: 15,
    subtopics: [
      { id: 'st-ss-1', name: 'Binary Search' },
      { id: 'st-ss-2', name: 'Merge Sort' },
      { id: 'st-ss-3', name: 'Quick Sort' },
      { id: 'st-ss-4', name: 'Heap Sort' },
    ],
    resourceIds: ['r-dsa-2'],
    practiceItemIds: [],
    quizQuestionIds: ['q-ss-1', 'q-ss-2'],
  },
  {
    id: 't-ai-p2-6', phaseId: 'ai-p2', name: 'Dynamic Programming', skill: 'Algorithms', difficulty: 'Advanced', estimatedHours: 13, weight: 10,
    subtopics: [
      { id: 'st-dp-1', name: 'Memoization' },
      { id: 'st-dp-2', name: 'Tabulation' },
      { id: 'st-dp-3', name: 'Classic Problems' },
    ],
    resourceIds: ['r-dsa-2'],
    practiceItemIds: [],
    quizQuestionIds: ['q-dp-1', 'q-dp-2'],
  },

  // ═══════════════════════════════════════════════════
  // AI ENGINEER — Phase 3: Mathematics for AI
  // ═══════════════════════════════════════════════════
  {
    id: 't-ai-p3-1', phaseId: 'ai-p3', name: 'Descriptive Statistics', skill: 'Statistics', difficulty: 'Beginner', estimatedHours: 10, weight: 25,
    subtopics: [
      { id: 'st-stat-1', name: 'Mean, Median, Mode' },
      { id: 'st-stat-2', name: 'Variance and Std Dev' },
      { id: 'st-stat-3', name: 'Distributions' },
      { id: 'st-stat-4', name: 'Percentiles' },
    ],
    resourceIds: ['r-stat-1', 'r-stat-2'],
    practiceItemIds: [],
    quizQuestionIds: ['q-stat-1', 'q-stat-2', 'q-stat-3'],
  },
  {
    id: 't-ai-p3-2', phaseId: 'ai-p3', name: 'Probability', skill: 'Statistics', difficulty: 'Intermediate', estimatedHours: 15, weight: 35,
    subtopics: [
      { id: 'st-prob-1', name: 'Basic Probability' },
      { id: 'st-prob-2', name: 'Conditional Probability' },
      { id: 'st-prob-3', name: 'Bayes Theorem' },
      { id: 'st-prob-4', name: 'Random Variables' },
      { id: 'st-prob-5', name: 'Distributions' },
    ],
    resourceIds: ['r-stat-1', 'r-stat-2'],
    practiceItemIds: [],
    quizQuestionIds: ['q-prob-1', 'q-prob-2', 'q-prob-3'],
  },
  {
    id: 't-ai-p3-3', phaseId: 'ai-p3', name: 'Linear Algebra', skill: 'Linear Algebra', difficulty: 'Intermediate', estimatedHours: 25, weight: 40,
    subtopics: [
      { id: 'st-la-1', name: 'Vectors' },
      { id: 'st-la-2', name: 'Matrices' },
      { id: 'st-la-3', name: 'Matrix Operations' },
      { id: 'st-la-4', name: 'Determinants' },
      { id: 'st-la-5', name: 'Eigenvalues' },
      { id: 'st-la-6', name: 'Eigenvectors' },
    ],
    resourceIds: ['r-la-1'],
    practiceItemIds: [],
    quizQuestionIds: ['q-la-1', 'q-la-2', 'q-la-3'],
  },

  // ═══════════════════════════════════════════════════
  // AI ENGINEER — Phase 4: ML Fundamentals
  // ═══════════════════════════════════════════════════
  {
    id: 't-ai-p4-1', phaseId: 'ai-p4', name: 'Supervised Learning', skill: 'Machine Learning', difficulty: 'Intermediate', estimatedHours: 20, weight: 30,
    subtopics: [
      { id: 'st-sl-1', name: 'Linear Regression' },
      { id: 'st-sl-2', name: 'Logistic Regression' },
      { id: 'st-sl-3', name: 'Decision Trees' },
      { id: 'st-sl-4', name: 'Random Forests' },
      { id: 'st-sl-5', name: 'SVM' },
      { id: 'st-sl-6', name: 'KNN' },
    ],
    resourceIds: ['r-ml-1', 'r-ml-2', 'r-ml-3'],
    practiceItemIds: ['pr-ml-1'],
    quizQuestionIds: ['q-sl-1', 'q-sl-2', 'q-sl-3'],
  },
  {
    id: 't-ai-p4-2', phaseId: 'ai-p4', name: 'Unsupervised Learning', skill: 'Machine Learning', difficulty: 'Intermediate', estimatedHours: 15, weight: 25,
    subtopics: [
      { id: 'st-ul-1', name: 'K-Means Clustering' },
      { id: 'st-ul-2', name: 'Hierarchical Clustering' },
      { id: 'st-ul-3', name: 'PCA' },
      { id: 'st-ul-4', name: 'DBSCAN' },
    ],
    resourceIds: ['r-ml-1', 'r-ml-3'],
    practiceItemIds: ['pr-ml-2'],
    quizQuestionIds: ['q-ul-1', 'q-ul-2'],
  },
  {
    id: 't-ai-p4-3', phaseId: 'ai-p4', name: 'Model Evaluation', skill: 'Machine Learning', difficulty: 'Intermediate', estimatedHours: 15, weight: 25,
    subtopics: [
      { id: 'st-me-1', name: 'Train/Test Split' },
      { id: 'st-me-2', name: 'Cross-Validation' },
      { id: 'st-me-3', name: 'Precision, Recall, F1' },
      { id: 'st-me-4', name: 'ROC Curve' },
      { id: 'st-me-5', name: 'Overfitting/Underfitting' },
    ],
    resourceIds: ['r-ml-2', 'r-ml-3'],
    practiceItemIds: [],
    quizQuestionIds: ['q-me-1', 'q-me-2'],
  },
  {
    id: 't-ai-p4-4', phaseId: 'ai-p4', name: 'ML Workflow with Scikit-Learn', skill: 'Machine Learning', difficulty: 'Intermediate', estimatedHours: 20, weight: 20,
    subtopics: [
      { id: 'st-sk-1', name: 'Data Preprocessing' },
      { id: 'st-sk-2', name: 'Pipelines' },
      { id: 'st-sk-3', name: 'Hyperparameter Tuning' },
      { id: 'st-sk-4', name: 'Model Persistence' },
    ],
    resourceIds: ['r-ml-2', 'r-ml-3', 'r-ml-4'],
    practiceItemIds: [],
    quizQuestionIds: ['q-sk-1', 'q-sk-2'],
  },

  // ═══════════════════════════════════════════════════
  // AI ENGINEER — Phase 5: Deep Learning
  // ═══════════════════════════════════════════════════
  {
    id: 't-ai-p5-1', phaseId: 'ai-p5', name: 'Neural Network Fundamentals', skill: 'Deep Learning', difficulty: 'Intermediate', estimatedHours: 20, weight: 25,
    subtopics: [
      { id: 'st-nn-1', name: 'Perceptrons' },
      { id: 'st-nn-2', name: 'Activation Functions' },
      { id: 'st-nn-3', name: 'Forward Propagation' },
      { id: 'st-nn-4', name: 'Backpropagation' },
      { id: 'st-nn-5', name: 'Gradient Descent' },
      { id: 'st-nn-6', name: 'Loss Functions' },
    ],
    resourceIds: ['r-dl-1', 'r-dl-2'],
    practiceItemIds: [],
    quizQuestionIds: ['q-nn-1', 'q-nn-2', 'q-nn-3'],
  },
  {
    id: 't-ai-p5-2', phaseId: 'ai-p5', name: 'CNNs', skill: 'Deep Learning', difficulty: 'Advanced', estimatedHours: 25, weight: 25,
    subtopics: [
      { id: 'st-cnn-1', name: 'Convolution Operations' },
      { id: 'st-cnn-2', name: 'Pooling Layers' },
      { id: 'st-cnn-3', name: 'Popular Architectures' },
      { id: 'st-cnn-4', name: 'Transfer Learning' },
    ],
    resourceIds: ['r-dl-1', 'r-dl-3'],
    practiceItemIds: [],
    quizQuestionIds: ['q-cnn-1', 'q-cnn-2'],
  },
  {
    id: 't-ai-p5-3', phaseId: 'ai-p5', name: 'RNNs and Transformers', skill: 'Deep Learning', difficulty: 'Advanced', estimatedHours: 25, weight: 25,
    subtopics: [
      { id: 'st-rnn-1', name: 'RNN Basics' },
      { id: 'st-rnn-2', name: 'LSTM' },
      { id: 'st-rnn-3', name: 'GRU' },
      { id: 'st-rnn-4', name: 'Attention Mechanism' },
      { id: 'st-rnn-5', name: 'Transformers' },
    ],
    resourceIds: ['r-dl-1', 'r-dl-2'],
    practiceItemIds: [],
    quizQuestionIds: ['q-rnn-1', 'q-rnn-2'],
  },
  {
    id: 't-ai-p5-4', phaseId: 'ai-p5', name: 'PyTorch and TensorFlow', skill: 'PyTorch', difficulty: 'Advanced', estimatedHours: 20, weight: 25,
    subtopics: [
      { id: 'st-pt-1', name: 'Tensor Operations' },
      { id: 'st-pt-2', name: 'Autograd' },
      { id: 'st-pt-3', name: 'Custom Datasets' },
      { id: 'st-pt-4', name: 'Training Loops' },
      { id: 'st-pt-5', name: 'Model Saving/Loading' },
    ],
    resourceIds: ['r-dl-2', 'r-dl-3'],
    practiceItemIds: [],
    quizQuestionIds: ['q-pt-1', 'q-pt-2'],
  },

  // ═══════════════════════════════════════════════════
  // AI ENGINEER — Phase 6: Generative AI & LLMs
  // ═══════════════════════════════════════════════════
  {
    id: 't-ai-p6-1', phaseId: 'ai-p6', name: 'LLM Fundamentals', skill: 'LLMs', difficulty: 'Advanced', estimatedHours: 15, weight: 30,
    subtopics: [
      { id: 'st-llm-1', name: 'Tokenization' },
      { id: 'st-llm-2', name: 'Attention' },
      { id: 'st-llm-3', name: 'Fine-tuning' },
      { id: 'st-llm-4', name: 'RLHF' },
    ],
    resourceIds: ['r-genai-1', 'r-genai-2'],
    practiceItemIds: [],
    quizQuestionIds: ['q-llm-1', 'q-llm-2'],
  },
  {
    id: 't-ai-p6-2', phaseId: 'ai-p6', name: 'Prompt Engineering', skill: 'Prompt Engineering', difficulty: 'Intermediate', estimatedHours: 10, weight: 20,
    subtopics: [
      { id: 'st-pe-1', name: 'Prompt Patterns' },
      { id: 'st-pe-2', name: 'Few-Shot Learning' },
      { id: 'st-pe-3', name: 'Chain of Thought' },
    ],
    resourceIds: ['r-genai-4'],
    practiceItemIds: [],
    quizQuestionIds: ['q-pe-1', 'q-pe-2'],
  },
  {
    id: 't-ai-p6-3', phaseId: 'ai-p6', name: 'RAG Systems', skill: 'Generative AI', difficulty: 'Advanced', estimatedHours: 20, weight: 30,
    subtopics: [
      { id: 'st-rag-1', name: 'Embeddings' },
      { id: 'st-rag-2', name: 'Vector Databases' },
      { id: 'st-rag-3', name: 'Retrieval' },
      { id: 'st-rag-4', name: 'Generation' },
    ],
    resourceIds: ['r-genai-1', 'r-genai-3'],
    practiceItemIds: [],
    quizQuestionIds: ['q-rag-1', 'q-rag-2'],
  },
  {
    id: 't-ai-p6-4', phaseId: 'ai-p6', name: 'AI Application Building', skill: 'Generative AI', difficulty: 'Advanced', estimatedHours: 15, weight: 20,
    subtopics: [
      { id: 'st-aab-1', name: 'API Integration' },
      { id: 'st-aab-2', name: 'Streaming' },
      { id: 'st-aab-3', name: 'Deployment' },
    ],
    resourceIds: ['r-genai-2', 'r-genai-3'],
    practiceItemIds: [],
    quizQuestionIds: ['q-aab-1'],
  },

  // ═══════════════════════════════════════════════════
  // FULLSTACK DEVELOPER — Phase 2: JavaScript Mastery
  // ═══════════════════════════════════════════════════
  {
    id: 't-fs-p2-1', phaseId: 'fs-p2', name: 'JavaScript Fundamentals', skill: 'JavaScript', difficulty: 'Beginner', estimatedHours: 15, weight: 30,
    subtopics: [
      { id: 'st-js-1', name: 'Variables and Types' },
      { id: 'st-js-2', name: 'Functions' },
      { id: 'st-js-3', name: 'Objects' },
      { id: 'st-js-4', name: 'Arrays' },
      { id: 'st-js-5', name: 'DOM Manipulation' },
    ],
    resourceIds: ['r-js-1', 'r-js-3'],
    practiceItemIds: ['pr-js-1', 'pr-js-2'],
    quizQuestionIds: ['q-js-1', 'q-js-2', 'q-js-3'],
  },
  {
    id: 't-fs-p2-2', phaseId: 'fs-p2', name: 'ES6+ Features', skill: 'JavaScript', difficulty: 'Intermediate', estimatedHours: 15, weight: 30,
    subtopics: [
      { id: 'st-es6-1', name: 'Arrow Functions' },
      { id: 'st-es6-2', name: 'Destructuring' },
      { id: 'st-es6-3', name: 'Spread/Rest' },
      { id: 'st-es6-4', name: 'Promises' },
      { id: 'st-es6-5', name: 'Async/Await' },
      { id: 'st-es6-6', name: 'Modules' },
    ],
    resourceIds: ['r-js-2', 'r-js-3'],
    practiceItemIds: [],
    quizQuestionIds: ['q-es6-1', 'q-es6-2'],
  },
  {
    id: 't-fs-p2-3', phaseId: 'fs-p2', name: 'Asynchronous JavaScript', skill: 'JavaScript', difficulty: 'Intermediate', estimatedHours: 20, weight: 40,
    subtopics: [
      { id: 'st-async-1', name: 'Callbacks' },
      { id: 'st-async-2', name: 'Promises' },
      { id: 'st-async-3', name: 'Async/Await' },
      { id: 'st-async-4', name: 'Fetch API' },
      { id: 'st-async-5', name: 'Error Handling' },
    ],
    resourceIds: ['r-js-2'],
    practiceItemIds: [],
    quizQuestionIds: ['q-async-1', 'q-async-2'],
  },

  // ═══════════════════════════════════════════════════
  // DATA SCIENTIST — Phase 4: SQL & Databases
  // ═══════════════════════════════════════════════════
  {
    id: 't-ds-p4-1', phaseId: 'ds-p4', name: 'SQL Fundamentals', skill: 'SQL', difficulty: 'Beginner', estimatedHours: 15, weight: 50,
    subtopics: [
      { id: 'st-sql-1', name: 'SELECT Statements' },
      { id: 'st-sql-2', name: 'WHERE Clauses' },
      { id: 'st-sql-3', name: 'JOINs' },
      { id: 'st-sql-4', name: 'GROUP BY' },
      { id: 'st-sql-5', name: 'Subqueries' },
    ],
    resourceIds: ['r-sql-1', 'r-sql-2'],
    practiceItemIds: ['pr-sql-1', 'pr-sql-2'],
    quizQuestionIds: ['q-sql-1', 'q-sql-2', 'q-sql-3'],
  },
  {
    id: 't-ds-p4-2', phaseId: 'ds-p4', name: 'Advanced SQL', skill: 'SQL', difficulty: 'Intermediate', estimatedHours: 15, weight: 50,
    subtopics: [
      { id: 'st-asql-1', name: 'Window Functions' },
      { id: 'st-asql-2', name: 'CTEs' },
      { id: 'st-asql-3', name: 'Indexes' },
      { id: 'st-asql-4', name: 'Query Optimization' },
    ],
    resourceIds: ['r-sql-2'],
    practiceItemIds: [],
    quizQuestionIds: ['q-asql-1', 'q-asql-2'],
  },
];

// ── Merge expanded topics ──
export const ALL_TOPICS: RoadmapTopic[] = [...TOPICS, ...EXPANDED_TOPICS];

// ── Helper functions ──

export function getTopicsForPhase(phaseId: string): RoadmapTopic[] {
  return ALL_TOPICS.filter((t) => t.phaseId === phaseId);
}

export function getTopicById(topicId: string): RoadmapTopic | undefined {
  return ALL_TOPICS.find((t) => t.id === topicId);
}

export function getPracticeItemsForTopic(topicId: string): PracticeItem[] {
  return PRACTICE_ITEMS.filter((p) => p.topicId === topicId);
}

export function getPracticeItemById(id: string): PracticeItem | undefined {
  return PRACTICE_ITEMS.find((p) => p.id === id);
}

// Build a map of phaseId -> topicIds for roadmap integration
export const PHASE_TOPIC_MAP: Record<string, string[]> = ALL_TOPICS.reduce((acc, topic) => {
  if (!acc[topic.phaseId]) acc[topic.phaseId] = [];
  acc[topic.phaseId].push(topic.id);
  return acc;
}, {} as Record<string, string[]>);
