import type { LearningResource, Certification, RoadmapPhase } from '@/types';

export const RESOURCES: LearningResource[] = [
  // Python
  { id: 'r-py-1', title: 'Python for Everybody Specialization', provider: 'Coursera', skill: 'Python', difficulty: 'Beginner', type: 'Course', duration: '8 weeks', url: 'https://www.coursera.org/specializations/python', free: true, description: 'A beginner-friendly introduction to Python programming covering basics to web data.' },
  { id: 'r-py-2', title: 'Automate the Boring Stuff with Python', provider: 'No Starch Press', skill: 'Python', difficulty: 'Beginner', type: 'Course', duration: '10 hours', url: 'https://automatetheboringstuff.com', free: true, description: 'Practical Python programming for automating everyday tasks.' },
  { id: 'r-py-3', title: 'Python Official Documentation', provider: 'python.org', skill: 'Python', difficulty: 'Intermediate', type: 'Documentation', duration: 'Ongoing', url: 'https://docs.python.org/3/', free: true, description: 'The official Python language reference and standard library docs.' },
  { id: 'r-py-4', title: 'LeetCode Python Practice', provider: 'LeetCode', skill: 'Python', difficulty: 'Intermediate', type: 'Practice', duration: 'Ongoing', url: 'https://leetcode.com', free: true, description: 'Practice coding problems to strengthen Python fluency.' },
  { id: 'r-py-5', title: 'Build a CLI Weather App', provider: 'Skillora Project', skill: 'Python', difficulty: 'Beginner', type: 'Project', duration: '4 hours', url: '#', free: true, description: 'A hands-on project to practice Python fundamentals with a real API.' },

  // JavaScript
  { id: 'r-js-1', title: 'Modern JavaScript From the Beginning', provider: 'freeCodeCamp', skill: 'JavaScript', difficulty: 'Beginner', type: 'Course', duration: '10 hours', url: 'https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/', free: true, description: 'Complete JavaScript course covering ES6+ syntax and fundamentals.' },
  { id: 'r-js-2', title: 'MDN Web Docs — JavaScript', provider: 'MDN', skill: 'JavaScript', difficulty: 'Intermediate', type: 'Documentation', duration: 'Ongoing', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', free: true, description: 'The definitive JavaScript reference and guide.' },
  { id: 'r-js-3', title: 'JavaScript30', provider: 'Wes Bos', skill: 'JavaScript', difficulty: 'Intermediate', type: 'Practice', duration: '30 days', url: 'https://javascript30.com', free: true, description: '30 vanilla JS coding challenges in 30 days.' },

  // React
  { id: 'r-react-1', title: 'React — The Complete Guide', provider: 'Coursera', skill: 'React', difficulty: 'Beginner', type: 'Course', duration: '12 weeks', url: 'https://www.coursera.org/learn/react', free: false, description: 'Comprehensive React course from fundamentals to advanced patterns.' },
  { id: 'r-react-2', title: 'React Official Docs', provider: 'react.dev', skill: 'React', difficulty: 'Intermediate', type: 'Documentation', duration: 'Ongoing', url: 'https://react.dev', free: true, description: 'The new official React documentation with interactive examples.' },
  { id: 'r-react-3', title: 'Build a Movie Search App', provider: 'Skillora Project', skill: 'React', difficulty: 'Intermediate', type: 'Project', duration: '6 hours', url: '#', free: true, description: 'Build a React app that fetches and displays movies from an API.' },

  // Node.js
  { id: 'r-node-1', title: 'Node.js Full Course', provider: 'freeCodeCamp', skill: 'Node.js', difficulty: 'Beginner', type: 'Course', duration: '8 hours', url: 'https://www.freecodecamp.org/learn/back-end-development-and-apis/', free: true, description: 'Learn Node.js and Express from scratch.' },
  { id: 'r-node-2', title: 'Node.js Official Docs', provider: 'nodejs.org', skill: 'Node.js', difficulty: 'Intermediate', type: 'Documentation', duration: 'Ongoing', url: 'https://nodejs.org/docs/latest/api/', free: true, description: 'Official Node.js API documentation.' },
  { id: 'r-node-3', title: 'Build a REST API with Express', provider: 'Skillora Project', skill: 'Node.js', difficulty: 'Intermediate', type: 'Project', duration: '8 hours', url: '#', free: true, description: 'Create a production-style REST API with authentication.' },

  // DSA
  { id: 'r-dsa-1', title: 'Data Structures & Algorithms Specialization', provider: 'Coursera', skill: 'Data Structures', difficulty: 'Intermediate', type: 'Course', duration: '8 months', url: 'https://www.coursera.org/specializations/data-structures-algorithms', free: true, description: 'In-depth DSA specialization covering core data structures and algorithm design.' },
  { id: 'r-dsa-2', title: 'NeetCode 150', provider: 'NeetCode', skill: 'Algorithms', difficulty: 'Intermediate', type: 'Practice', duration: 'Ongoing', url: 'https://neetcode.io', free: true, description: 'Curated 150 LeetCode problems with video solutions, organized by pattern.' },
  { id: 'r-dsa-3', title: 'Visualgo — Algorithm Visualizer', provider: 'NUS', skill: 'Algorithms', difficulty: 'Beginner', type: 'Documentation', duration: 'Ongoing', url: 'https://visualgo.net', free: true, description: 'Interactive visualizations of data structures and algorithms.' },

  // Machine Learning
  { id: 'r-ml-1', title: 'Machine Learning Specialization', provider: 'Coursera (Andrew Ng)', skill: 'Machine Learning', difficulty: 'Beginner', type: 'Course', duration: '3 months', url: 'https://www.coursera.org/specializations/machine-learning-introduction', free: true, description: 'The legendary ML course by Andrew Ng — the best starting point for ML.' },
  { id: 'r-ml-2', title: 'Hands-On Machine Learning', provider: 'O\'Reilly', skill: 'Machine Learning', difficulty: 'Intermediate', type: 'Documentation', duration: 'Ongoing', url: 'https://www.oreilly.com/library/view/hands-on-machine-learning/9781098125967/', free: false, description: 'Practical ML book with Scikit-Learn, Keras, and TensorFlow.' },
  { id: 'r-ml-3', title: 'Kaggle Learn', provider: 'Kaggle', skill: 'Machine Learning', difficulty: 'Beginner', type: 'Practice', duration: 'Ongoing', url: 'https://www.kaggle.com/learn', free: true, description: 'Hands-on micro-courses for ML, Pandas, and data visualization.' },
  { id: 'r-ml-4', title: 'Titanic Survival Prediction', provider: 'Kaggle', skill: 'Machine Learning', difficulty: 'Beginner', type: 'Project', duration: '5 hours', url: 'https://www.kaggle.com/c/titanic', free: true, description: 'The classic beginner ML project — predict Titanic passenger survival.' },

  // Deep Learning
  { id: 'r-dl-1', title: 'Deep Learning Specialization', provider: 'Coursera (Andrew Ng)', skill: 'Deep Learning', difficulty: 'Intermediate', type: 'Course', duration: '5 months', url: 'https://www.coursera.org/specializations/deep-learning', free: true, description: 'Master deep learning with neural networks, CNNs, RNNs, and more.' },
  { id: 'r-dl-2', title: 'PyTorch Tutorials', provider: 'pytorch.org', skill: 'PyTorch', difficulty: 'Intermediate', type: 'Documentation', duration: 'Ongoing', url: 'https://pytorch.org/tutorials/', free: true, description: 'Official PyTorch tutorials from basics to advanced topics.' },
  { id: 'r-dl-3', title: 'Build an Image Classifier', provider: 'Skillora Project', skill: 'Deep Learning', difficulty: 'Advanced', type: 'Project', duration: '10 hours', url: '#', free: true, description: 'Build a CNN image classifier using PyTorch on the CIFAR-10 dataset.' },

  // Generative AI / LLMs
  { id: 'r-genai-1', title: 'Generative AI with Large Language Models', provider: 'Coursera', skill: 'Generative AI', difficulty: 'Intermediate', type: 'Course', duration: '3 weeks', url: 'https://www.coursera.org/learn/generative-ai-with-llms', free: true, description: 'Learn how LLMs work and how to build generative AI applications.' },
  { id: 'r-genai-2', title: 'OpenAI API Documentation', provider: 'OpenAI', skill: 'LLMs', difficulty: 'Intermediate', type: 'Documentation', duration: 'Ongoing', url: 'https://platform.openai.com/docs', free: true, description: 'Official docs for the OpenAI API and GPT models.' },
  { id: 'r-genai-3', title: 'Build a RAG Chatbot', provider: 'Skillora Project', skill: 'Generative AI', difficulty: 'Advanced', type: 'Project', duration: '12 hours', url: '#', free: true, description: 'Build a retrieval-augmented generation chatbot with embeddings.' },
  { id: 'r-genai-4', title: 'Prompt Engineering Guide', provider: 'DAIR.AI', skill: 'Prompt Engineering', difficulty: 'Beginner', type: 'Documentation', duration: '3 hours', url: 'https://www.promptingguide.ai', free: true, description: 'Comprehensive guide to prompt engineering techniques.' },

  // Statistics
  { id: 'r-stat-1', title: 'Introduction to Statistics', provider: 'Khan Academy', skill: 'Statistics', difficulty: 'Beginner', type: 'Course', duration: '4 weeks', url: 'https://www.khanacademy.org/math/statistics-probability', free: true, description: 'Free statistics course covering distributions, hypothesis testing, and more.' },
  { id: 'r-stat-2', title: 'Statistics for Data Science', provider: 'freeCodeCamp', skill: 'Statistics', difficulty: 'Intermediate', type: 'Video', duration: '8 hours', url: 'https://www.youtube.com/watch?v=Vfo5le26IhY', free: true, description: 'A comprehensive statistics video course for data science.' },

  // Linear Algebra
  { id: 'r-la-1', title: 'Essence of Linear Algebra', provider: '3Blue1Brown', skill: 'Linear Algebra', difficulty: 'Beginner', type: 'Video', duration: '3 hours', url: 'https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab', free: true, description: 'Beautiful visual introduction to linear algebra concepts.' },

  // SQL
  { id: 'r-sql-1', title: 'SQL for Data Science', provider: 'Coursera', skill: 'SQL', difficulty: 'Beginner', type: 'Course', duration: '6 weeks', url: 'https://www.coursera.org/learn/sql-for-data-science', free: true, description: 'Learn SQL from basics to advanced queries for data analysis.' },
  { id: 'r-sql-2', title: 'SQLZoo Practice', provider: 'SQLZoo', skill: 'SQL', difficulty: 'Beginner', type: 'Practice', duration: 'Ongoing', url: 'https://sqlzoo.net', free: true, description: 'Interactive SQL tutorials with in-browser practice.' },

  // Data Analysis
  { id: 'r-da-1', title: 'Data Analysis with Python', provider: 'freeCodeCamp', skill: 'Data Analysis', difficulty: 'Beginner', type: 'Course', duration: '6 hours', url: 'https://www.freecodecamp.org/learn/data-analysis-with-python/', free: true, description: 'Learn Pandas, NumPy, and Matplotlib for data analysis.' },
  { id: 'r-da-2', title: 'Pandas Official Documentation', provider: 'pandas.pydata.org', skill: 'Pandas', difficulty: 'Intermediate', type: 'Documentation', duration: 'Ongoing', url: 'https://pandas.pydata.org/docs/', free: true, description: 'The definitive Pandas reference and user guide.' },

  // Docker
  { id: 'r-docker-1', title: 'Docker for Beginners', provider: 'Docker', skill: 'Docker', difficulty: 'Beginner', type: 'Course', duration: '4 hours', url: 'https://docs.docker.com/get-started/', free: true, description: 'Official Docker getting started guide.' },
  { id: 'r-docker-2', title: 'Docker Hands-On', provider: 'Play with Docker', skill: 'Docker', difficulty: 'Intermediate', type: 'Practice', duration: 'Ongoing', url: 'https://labs.play-with-docker.com', free: true, description: 'Browser-based Docker practice environment.' },

  // AWS
  { id: 'r-aws-1', title: 'AWS Cloud Practitioner Essentials', provider: 'AWS Skill Builder', skill: 'AWS', difficulty: 'Beginner', type: 'Course', duration: '6 hours', url: 'https://aws.amazon.com/training/learn-about/cloud-practitioner/', free: true, description: 'Free foundational AWS cloud course.' },
  { id: 'r-aws-2', title: 'AWS Official Documentation', provider: 'AWS', skill: 'AWS', difficulty: 'Intermediate', type: 'Documentation', duration: 'Ongoing', url: 'https://docs.aws.amazon.com', free: true, description: 'Comprehensive AWS service documentation.' },

  // Kubernetes
  { id: 'r-k8s-1', title: 'Kubernetes Basics', provider: 'Kubernetes.io', skill: 'Kubernetes', difficulty: 'Intermediate', type: 'Course', duration: '5 hours', url: 'https://kubernetes.io/docs/tutorials/kubernetes-basics/', free: true, description: 'Official interactive Kubernetes tutorial.' },

  // Linux
  { id: 'r-linux-1', title: 'Linux for Beginners', provider: 'freeCodeCamp', skill: 'Linux', difficulty: 'Beginner', type: 'Video', duration: '5 hours', url: 'https://www.youtube.com/watch?v=sWbUDq4S6Y', free: true, description: 'Complete Linux command line course for beginners.' },

  // Cybersecurity
  { id: 'r-sec-1', title: 'Introduction to Cybersecurity', provider: 'Cisco', skill: 'Cybersecurity', difficulty: 'Beginner', type: 'Course', duration: '6 hours', url: 'https://www.netacad.com/courses/introduction-cybersecurity', free: true, description: 'Free cybersecurity fundamentals course from Cisco.' },
  { id: 'r-sec-2', title: 'TryHackMe', provider: 'TryHackMe', skill: 'Penetration Testing', difficulty: 'Intermediate', type: 'Practice', duration: 'Ongoing', url: 'https://tryhackme.com', free: true, description: 'Hands-on cybersecurity training with guided labs.' },
  { id: 'r-sec-3', title: 'OWASP Top 10', provider: 'OWASP', skill: 'Cybersecurity', difficulty: 'Intermediate', type: 'Documentation', duration: '4 hours', url: 'https://owasp.org/www-project-top-ten/', free: true, description: 'The standard awareness document for web application security.' },

  // System Design
  { id: 'r-sd-1', title: 'System Design Primer', provider: 'GitHub', skill: 'System Design', difficulty: 'Advanced', type: 'Documentation', duration: 'Ongoing', url: 'https://github.com/donnemartin/system-design-primer', free: true, description: 'The most popular open-source system design interview prep resource.' },

  // Git
  { id: 'r-git-1', title: 'Git & GitHub for Beginners', provider: 'freeCodeCamp', skill: 'Git', difficulty: 'Beginner', type: 'Course', duration: '5 hours', url: 'https://www.freecodecamp.org/learn/relational-database/', free: true, description: 'Learn Git version control from scratch.' },
];

export const CERTIFICATIONS: Certification[] = [
  { id: 'c-ml-1', name: 'Machine Learning Specialization Certificate', provider: 'Coursera (Stanford)', skill: 'Machine Learning', difficulty: 'Intermediate', duration: '3 months', url: 'https://www.coursera.org/specializations/machine-learning-introduction', free: true, description: 'Certificate from Andrew Ng\'s renowned ML specialization.' },
  { id: 'c-dl-1', name: 'Deep Learning Specialization Certificate', provider: 'Coursera (DeepLearning.AI)', skill: 'Deep Learning', difficulty: 'Advanced', duration: '5 months', url: 'https://www.coursera.org/specializations/deep-learning', free: true, description: 'Professional certificate in deep learning.' },
  { id: 'c-py-1', name: 'Python Institute PCAP', provider: 'Python Institute', skill: 'Python', difficulty: 'Intermediate', duration: '2 months', url: 'https://pythoninstitute.org/pcap', free: false, description: 'Certified Associate in Python Programming.' },
  { id: 'c-aws-1', name: 'AWS Cloud Practitioner', provider: 'Amazon Web Services', skill: 'AWS', difficulty: 'Beginner', duration: '1 month', url: 'https://aws.amazon.com/certification/certified-cloud-practitioner/', free: false, description: 'Foundational AWS cloud certification.' },
  { id: 'c-aws-2', name: 'AWS Solutions Architect Associate', provider: 'Amazon Web Services', skill: 'AWS', difficulty: 'Intermediate', duration: '3 months', url: 'https://aws.amazon.com/certification/certified-solutions-architect-associate/', free: false, description: 'Associate-level AWS architecture certification.' },
  { id: 'c-az-1', name: 'Azure Fundamentals (AZ-900)', provider: 'Microsoft', skill: 'Azure', difficulty: 'Beginner', duration: '1 month', url: 'https://learn.microsoft.com/certifications/azure-fundamentals/', free: true, description: 'Free Microsoft Azure fundamentals certification.' },
  { id: 'c-gcp-1', name: 'Google Cloud Digital Leader', provider: 'Google Cloud', skill: 'GCP', difficulty: 'Beginner', duration: '1 month', url: 'https://cloud.google.com/certification/cloud-digital-leader', free: false, description: 'Foundational Google Cloud certification.' },
  { id: 'c-sec-1', name: 'CompTIA Security+', provider: 'CompTIA', skill: 'Cybersecurity', difficulty: 'Intermediate', duration: '3 months', url: 'https://www.comptia.org/certifications/security', free: false, description: 'The global standard for foundational cybersecurity skills.' },
  { id: 'c-sec-2', name: 'Cisco Cybersecurity Essentials', provider: 'Cisco', skill: 'Cybersecurity', difficulty: 'Beginner', duration: '2 months', url: 'https://www.netacad.com/courses/introduction-cybersecurity', free: true, description: 'Free cybersecurity fundamentals certificate from Cisco.' },
  { id: 'c-sec-3', name: 'Introduction to Cybersecurity Tools', provider: 'IBM (Coursera)', skill: 'Cybersecurity', difficulty: 'Beginner', duration: '1 month', url: 'https://www.coursera.org/learn/cybersecurity-tools', free: true, description: 'IBM cybersecurity tools certificate.' },
  { id: 'c-da-1', name: 'Google Data Analytics Certificate', provider: 'Google (Coursera)', skill: 'Data Analysis', difficulty: 'Beginner', duration: '6 months', url: 'https://www.coursera.org/professional-certificates/google-data-analytics', free: true, description: 'Professional certificate in data analytics from Google.' },
  { id: 'c-da-2', name: 'IBM Data Science Professional Certificate', provider: 'IBM (Coursera)', skill: 'Data Analysis', difficulty: 'Intermediate', duration: '5 months', url: 'https://www.coursera.org/professional-certificates/ibm-data-science-professional-certificate', free: true, description: 'Comprehensive data science certificate from IBM.' },
  { id: 'c-sql-1', name: 'SQL (MySQL) Database Certification', provider: 'freeCodeCamp', skill: 'SQL', difficulty: 'Beginner', duration: '4 weeks', url: 'https://www.freecodecamp.org/learn/relational-database/', free: true, description: 'Free SQL and database certification.' },
  { id: 'c-js-1', name: 'JavaScript Algorithms and Data Structures', provider: 'freeCodeCamp', skill: 'JavaScript', difficulty: 'Beginner', duration: '4 weeks', url: 'https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/', free: true, description: 'Free JavaScript certification covering algorithms and DS.' },
  { id: 'c-fe-1', name: 'Front End Development Libraries', provider: 'freeCodeCamp', skill: 'React', difficulty: 'Intermediate', duration: '6 weeks', url: 'https://www.freecodecamp.org/learn/front-end-development-libraries/', free: true, description: 'Free frontend certification covering React, Redux, and more.' },
  { id: 'c-be-1', name: 'Back End Development and APIs', provider: 'freeCodeCamp', skill: 'Node.js', difficulty: 'Intermediate', duration: '6 weeks', url: 'https://www.freecodecamp.org/learn/back-end-development-and-apis/', free: true, description: 'Free backend certification covering Node.js, Express, and MongoDB.' },
  { id: 'c-dsa-1', name: 'Data Structures and Algorithms Certificate', provider: 'freeCodeCamp', skill: 'Data Structures', difficulty: 'Intermediate', duration: '8 weeks', url: 'https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/', free: true, description: 'Free DSA certification with hands-on projects.' },
  { id: 'c-docker-1', name: 'Docker Essentials', provider: 'IBM (Coursera)', skill: 'Docker', difficulty: 'Beginner', duration: '2 weeks', url: 'https://www.coursera.org/learn/docker-essentials', free: true, description: 'Free Docker essentials certificate from IBM.' },
  { id: 'c-k8s-1', name: 'Kubernetes for Beginners', provider: 'Kubernetes.io', skill: 'Kubernetes', difficulty: 'Intermediate', duration: '3 weeks', url: 'https://kubernetes.io/training/', free: true, description: 'Free Kubernetes fundamentals certificate.' },
  { id: 'c-genai-1', name: 'Generative AI with LLMs Certificate', provider: 'Coursera (DeepLearning.AI)', skill: 'Generative AI', difficulty: 'Intermediate', duration: '3 weeks', url: 'https://www.coursera.org/learn/generative-ai-with-llms', free: true, description: 'Certificate in generative AI and large language models.' },
];

export function getResourcesForSkill(skill: string): LearningResource[] {
  return RESOURCES.filter((r) => r.skill === skill);
}

export function getCertificationsForSkill(skill: string): Certification[] {
  return CERTIFICATIONS.filter((c) => c.skill === skill);
}

export function getResourceByIds(ids: string[]): LearningResource[] {
  return RESOURCES.filter((r) => ids.includes(r.id));
}

export function getCertificationByIds(ids: string[]): Certification[] {
  return CERTIFICATIONS.filter((c) => ids.includes(c.id));
}
