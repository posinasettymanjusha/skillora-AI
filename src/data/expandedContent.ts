import type { RoadmapTopic, PracticeItem, QuizQuestion, SubtopicContent } from '@/types';

// ════════════════════════════════════════════════════════════════
// EXPANDED TOPICS — for all careers with empty topicIds
// ════════════════════════════════════════════════════════════════

export const EXPANDED_TOPICS: RoadmapTopic[] = [

  // ── DATA ANALYST Phase 1: Excel for Data Analysis ──
  {
    id: 't-da-p1-1', phaseId: 'da-p1', name: 'Excel Interface & Data Entry', skill: 'Excel', difficulty: 'Beginner', estimatedHours: 3, weight: 15,
    subtopics: [
      { id: 'st-da-excel-1', name: 'Excel Interface' },
      { id: 'st-da-excel-2', name: 'Cell References' },
      { id: 'st-da-excel-3', name: 'Data Entry & Formatting' },
    ],
    resourceIds: [], practiceItemIds: [], quizQuestionIds: ['q-da-excel-1', 'q-da-excel-2', 'q-da-excel-3'],
  },
  {
    id: 't-da-p1-2', phaseId: 'da-p1', name: 'Formulas & Functions', skill: 'Excel', difficulty: 'Beginner', estimatedHours: 5, weight: 25,
    subtopics: [
      { id: 'st-da-excel-4', name: 'Basic Formulas' },
      { id: 'st-da-excel-5', name: 'IF & Conditional Functions' },
      { id: 'st-da-excel-6', name: 'SUMIF / COUNTIF' },
      { id: 'st-da-excel-7', name: 'Lookup Functions (VLOOKUP, HLOOKUP)' },
    ],
    resourceIds: [], practiceItemIds: [], quizQuestionIds: ['q-da-excel-4', 'q-da-excel-5', 'q-da-excel-6'],
  },
  {
    id: 't-da-p1-3', phaseId: 'da-p1', name: 'Data Cleaning & Pivot Tables', skill: 'Excel', difficulty: 'Intermediate', estimatedHours: 6, weight: 30,
    subtopics: [
      { id: 'st-da-excel-8', name: 'Data Cleaning' },
      { id: 'st-da-excel-9', name: 'Sorting & Filtering' },
      { id: 'st-da-excel-10', name: 'Pivot Tables' },
      { id: 'st-da-excel-11', name: 'Charts & Visualization' },
    ],
    resourceIds: [], practiceItemIds: [], quizQuestionIds: ['q-da-excel-7', 'q-da-excel-8', 'q-da-excel-9'],
  },

  // ── DATA ANALYST Phase 5: Data Visualization ──
  {
    id: 't-da-p5-1', phaseId: 'da-p5', name: 'Tableau Fundamentals', skill: 'Tableau', difficulty: 'Beginner', estimatedHours: 8, weight: 40,
    subtopics: [
      { id: 'st-da-viz-1', name: 'Tableau Interface' },
      { id: 'st-da-viz-2', name: 'Connecting to Data' },
      { id: 'st-da-viz-3', name: 'Basic Charts' },
      { id: 'st-da-viz-4', name: 'Dashboards' },
    ],
    resourceIds: [], practiceItemIds: [], quizQuestionIds: ['q-da-viz-1', 'q-da-viz-2', 'q-da-viz-3'],
  },
  {
    id: 't-da-p5-2', phaseId: 'da-p5', name: 'Power BI Basics', skill: 'Power BI', difficulty: 'Intermediate', estimatedHours: 7, weight: 30,
    subtopics: [
      { id: 'st-da-viz-5', name: 'Power BI Interface' },
      { id: 'st-da-viz-6', name: 'DAX Basics' },
      { id: 'st-da-viz-7', name: 'Interactive Reports' },
    ],
    resourceIds: [], practiceItemIds: [], quizQuestionIds: ['q-da-viz-4', 'q-da-viz-5'],
  },
  {
    id: 't-da-p5-3', phaseId: 'da-p5', name: 'Matplotlib & Seaborn', skill: 'Python', difficulty: 'Intermediate', estimatedHours: 8, weight: 30,
    subtopics: [
      { id: 'st-da-viz-8', name: 'Matplotlib Basics' },
      { id: 'st-da-viz-9', name: 'Seaborn Statistical Plots' },
      { id: 'st-da-viz-10', name: 'Choosing the Right Chart' },
    ],
    resourceIds: [], practiceItemIds: [], quizQuestionIds: ['q-da-viz-6', 'q-da-viz-7'],
  },

  // ── DATA ANALYST Phase 6: Analyst Projects ──
  {
    id: 't-da-p6-1', phaseId: 'da-p6', name: 'Defining Business Questions', skill: 'Data Analysis', difficulty: 'Beginner', estimatedHours: 5, weight: 25,
    subtopics: [
      { id: 'st-da-proj-1', name: 'Problem Framing' },
      { id: 'st-da-proj-2', name: 'KPI Identification' },
      { id: 'st-da-proj-3', name: 'Stakeholder Communication' },
    ],
    resourceIds: [], practiceItemIds: [], quizQuestionIds: ['q-da-proj-1', 'q-da-proj-2'],
  },
  {
    id: 't-da-p6-2', phaseId: 'da-p6', name: 'Building an Analysis Portfolio', skill: 'Data Analysis', difficulty: 'Intermediate', estimatedHours: 10, weight: 40,
    subtopics: [
      { id: 'st-da-proj-4', name: 'End-to-End Project Workflow' },
      { id: 'st-da-proj-5', name: 'Storytelling with Data' },
      { id: 'st-da-proj-6', name: 'Portfolio Presentation' },
    ],
    resourceIds: [], practiceItemIds: [], quizQuestionIds: ['q-da-proj-3', 'q-da-proj-4'],
  },
  {
    id: 't-da-p6-3', phaseId: 'da-p6', name: 'Real-World Datasets', skill: 'Data Analysis', difficulty: 'Intermediate', estimatedHours: 8, weight: 35,
    subtopics: [
      { id: 'st-da-proj-7', name: 'Finding & Sourcing Data' },
      { id: 'st-da-proj-8', name: 'Data Ethics & Privacy' },
      { id: 'st-da-proj-9', name: 'Reproducible Analysis' },
    ],
    resourceIds: [], practiceItemIds: [], quizQuestionIds: ['q-da-proj-5', 'q-da-proj-6'],
  },

  // ── FULLSTACK Phase 1: HTML & CSS ──
  {
    id: 't-fs-p1-1', phaseId: 'fs-p1', name: 'HTML Fundamentals', skill: 'HTML', difficulty: 'Beginner', estimatedHours: 8, weight: 30,
    subtopics: [
      { id: 'st-html-1', name: 'HTML Structure' },
      { id: 'st-html-2', name: 'Semantic HTML' },
      { id: 'st-html-3', name: 'Forms & Inputs' },
      { id: 'st-html-4', name: 'Accessibility Basics' },
    ],
    resourceIds: [], practiceItemIds: [], quizQuestionIds: ['q-html-1', 'q-html-2', 'q-html-3'],
  },
  {
    id: 't-fs-p1-2', phaseId: 'fs-p1', name: 'CSS Fundamentals', skill: 'CSS', difficulty: 'Beginner', estimatedHours: 10, weight: 35,
    subtopics: [
      { id: 'st-css-1', name: 'Selectors & Specificity' },
      { id: 'st-css-2', name: 'Box Model' },
      { id: 'st-css-3', name: 'Flexbox' },
      { id: 'st-css-4', name: 'Grid' },
      { id: 'st-css-5', name: 'Responsive Design' },
    ],
    resourceIds: [], practiceItemIds: [], quizQuestionIds: ['q-css-1', 'q-css-2', 'q-css-3'],
  },
  {
    id: 't-fs-p1-3', phaseId: 'fs-p1', name: 'CSS Animations & Transitions', skill: 'CSS', difficulty: 'Intermediate', estimatedHours: 6, weight: 20,
    subtopics: [
      { id: 'st-css-6', name: 'Transitions' },
      { id: 'st-css-7', name: 'Keyframe Animations' },
      { id: 'st-css-8', name: 'Transforms' },
    ],
    resourceIds: [], practiceItemIds: [], quizQuestionIds: ['q-css-4', 'q-css-5'],
  },
  {
    id: 't-fs-p1-4', phaseId: 'fs-p1', name: 'Web Design Principles', skill: 'CSS', difficulty: 'Beginner', estimatedHours: 4, weight: 15,
    subtopics: [
      { id: 'st-css-9', name: 'Typography' },
      { id: 'st-css-10', name: 'Color Theory' },
      { id: 'st-css-11', name: 'Layout Principles' },
    ],
    resourceIds: [], practiceItemIds: [], quizQuestionIds: ['q-css-6', 'q-css-7'],
  },

  // ── FULLSTACK Phase 3: Frontend with React ──
  {
    id: 't-fs-p3-1', phaseId: 'fs-p3', name: 'React Fundamentals', skill: 'React', difficulty: 'Intermediate', estimatedHours: 15, weight: 30,
    subtopics: [
      { id: 'st-react-1', name: 'Components & JSX' },
      { id: 'st-react-2', name: 'Props' },
      { id: 'st-react-3', name: 'State & useState' },
      { id: 'st-react-4', name: 'Event Handling' },
    ],
    resourceIds: [], practiceItemIds: [], quizQuestionIds: ['q-react-1', 'q-react-2', 'q-react-3'],
  },
  {
    id: 't-fs-p3-2', phaseId: 'fs-p3', name: 'React Hooks', skill: 'React', difficulty: 'Intermediate', estimatedHours: 12, weight: 25,
    subtopics: [
      { id: 'st-react-5', name: 'useEffect' },
      { id: 'st-react-6', name: 'useRef' },
      { id: 'st-react-7', name: 'useMemo & useCallback' },
      { id: 'st-react-8', name: 'Custom Hooks' },
    ],
    resourceIds: [], practiceItemIds: [], quizQuestionIds: ['q-react-4', 'q-react-5'],
  },
  {
    id: 't-fs-p3-3', phaseId: 'fs-p3', name: 'React Routing & State Management', skill: 'React', difficulty: 'Intermediate', estimatedHours: 15, weight: 25,
    subtopics: [
      { id: 'st-react-9', name: 'React Router' },
      { id: 'st-react-10', name: 'Context API' },
      { id: 'st-react-11', name: 'State Management Patterns' },
    ],
    resourceIds: [], practiceItemIds: [], quizQuestionIds: ['q-react-6', 'q-react-7'],
  },
  {
    id: 't-fs-p3-4', phaseId: 'fs-p3', name: 'Advanced React Patterns', skill: 'React', difficulty: 'Advanced', estimatedHours: 10, weight: 20,
    subtopics: [
      { id: 'st-react-12', name: 'Component Composition' },
      { id: 'st-react-13', name: 'Error Boundaries' },
      { id: 'st-react-14', name: 'Performance Optimization' },
    ],
    resourceIds: [], practiceItemIds: [], quizQuestionIds: ['q-react-8', 'q-react-9'],
  },

  // ── FULLSTACK Phase 4: Backend with Node.js ──
  {
    id: 't-fs-p4-1', phaseId: 'fs-p4', name: 'Node.js Fundamentals', skill: 'Node.js', difficulty: 'Beginner', estimatedHours: 10, weight: 25,
    subtopics: [
      { id: 'st-node-1', name: 'Node.js Runtime' },
      { id: 'st-node-2', name: 'Modules & npm' },
      { id: 'st-node-3', name: 'File System & Path' },
      { id: 'st-node-4', name: 'Events & Streams' },
    ],
    resourceIds: [], practiceItemIds: [], quizQuestionIds: ['q-node-1', 'q-node-2', 'q-node-3'],
  },
  {
    id: 't-fs-p4-2', phaseId: 'fs-p4', name: 'Express.js', skill: 'Node.js', difficulty: 'Intermediate', estimatedHours: 12, weight: 30,
    subtopics: [
      { id: 'st-node-5', name: 'Express Setup' },
      { id: 'st-node-6', name: 'Routing & Middleware' },
      { id: 'st-node-7', name: 'Request/Response Cycle' },
      { id: 'st-node-8', name: 'Error Handling' },
    ],
    resourceIds: [], practiceItemIds: [], quizQuestionIds: ['q-node-4', 'q-node-5'],
  },
  {
    id: 't-fs-p4-3', phaseId: 'fs-p4', name: 'REST API Design', skill: 'REST APIs', difficulty: 'Intermediate', estimatedHours: 10, weight: 25,
    subtopics: [
      { id: 'st-node-9', name: 'REST Principles' },
      { id: 'st-node-10', name: 'CRUD Operations' },
      { id: 'st-node-11', name: 'API Authentication' },
    ],
    resourceIds: [], practiceItemIds: [], quizQuestionIds: ['q-node-6', 'q-node-7'],
  },
  {
    id: 't-fs-p4-4', phaseId: 'fs-p4', name: 'Backend Best Practices', skill: 'Node.js', difficulty: 'Intermediate', estimatedHours: 8, weight: 20,
    subtopics: [
      { id: 'st-node-12', name: 'Environment Variables' },
      { id: 'st-node-13', name: 'Logging & Monitoring' },
      { id: 'st-node-14', name: 'Security Basics' },
    ],
    resourceIds: [], practiceItemIds: [], quizQuestionIds: ['q-node-8', 'q-node-9'],
  },

  // ── FULLSTACK Phase 6: TypeScript ──
  {
    id: 't-fs-p6-1', phaseId: 'fs-p6', name: 'TypeScript Fundamentals', skill: 'TypeScript', difficulty: 'Intermediate', estimatedHours: 10, weight: 40,
    subtopics: [
      { id: 'st-ts-1', name: 'Types & Interfaces' },
      { id: 'st-ts-2', name: 'Type Annotations' },
      { id: 'st-ts-3', name: 'Union & Intersection Types' },
      { id: 'st-ts-4', name: 'Type Assertions' },
    ],
    resourceIds: [], practiceItemIds: [], quizQuestionIds: ['q-ts-1', 'q-ts-2', 'q-ts-3'],
  },
  {
    id: 't-fs-p6-2', phaseId: 'fs-p6', name: 'Advanced TypeScript', skill: 'TypeScript', difficulty: 'Advanced', estimatedHours: 10, weight: 35,
    subtopics: [
      { id: 'st-ts-5', name: 'Generics' },
      { id: 'st-ts-6', name: 'Utility Types' },
      { id: 'st-ts-7', name: 'Decorators' },
    ],
    resourceIds: [], practiceItemIds: [], quizQuestionIds: ['q-ts-4', 'q-ts-5'],
  },
  {
    id: 't-fs-p6-3', phaseId: 'fs-p6', name: 'TypeScript in React', skill: 'TypeScript', difficulty: 'Intermediate', estimatedHours: 5, weight: 25,
    subtopics: [
      { id: 'st-ts-8', name: 'Typing Props & State' },
      { id: 'st-ts-9', name: 'Typing Events & Refs' },
    ],
    resourceIds: [], practiceItemIds: [], quizQuestionIds: ['q-ts-6', 'q-ts-7'],
  },

  // ── FULLSTACK Phase 7: Projects & Deployment ──
  {
    id: 't-fs-p7-1', phaseId: 'fs-p7', name: 'Full Stack Project Architecture', skill: 'System Design', difficulty: 'Advanced', estimatedHours: 15, weight: 30,
    subtopics: [
      { id: 'st-fsproj-1', name: 'Project Structure' },
      { id: 'st-fsproj-2', name: 'Frontend-Backend Integration' },
      { id: 'st-fsproj-3', name: 'Database Integration' },
    ],
    resourceIds: [], practiceItemIds: [], quizQuestionIds: ['q-fsproj-1', 'q-fsproj-2'],
  },
  {
    id: 't-fs-p7-2', phaseId: 'fs-p7', name: 'Deployment & DevOps', skill: 'Docker', difficulty: 'Advanced', estimatedHours: 15, weight: 35,
    subtopics: [
      { id: 'st-fsproj-4', name: 'Build & Bundle' },
      { id: 'st-fsproj-5', name: 'Docker for Full Stack' },
      { id: 'st-fsproj-6', name: 'CI/CD Pipelines' },
      { id: 'st-fsproj-7', name: 'Cloud Deployment' },
    ],
    resourceIds: [], practiceItemIds: [], quizQuestionIds: ['q-fsproj-3', 'q-fsproj-4'],
  },
  {
    id: 't-fs-p7-3', phaseId: 'fs-p7', name: 'Portfolio Building', skill: 'React', difficulty: 'Intermediate', estimatedHours: 10, weight: 35,
    subtopics: [
      { id: 'st-fsproj-8', name: 'Project Showcase' },
      { id: 'st-fsproj-9', name: 'README & Documentation' },
      { id: 'st-fsproj-10', name: 'Open Source Contribution' },
    ],
    resourceIds: [], practiceItemIds: [], quizQuestionIds: ['q-fsproj-5', 'q-fsproj-6'],
  },

  // ── FRONTEND Phase 1: HTML & CSS (shares with fullstack) ──
  {
    id: 't-fe-p1-1', phaseId: 'fe-p1', name: 'HTML Fundamentals', skill: 'HTML', difficulty: 'Beginner', estimatedHours: 8, weight: 30,
    subtopics: [
      { id: 'st-fe-html-1', name: 'HTML Structure' },
      { id: 'st-fe-html-2', name: 'Semantic HTML' },
      { id: 'st-fe-html-3', name: 'Forms & Inputs' },
      { id: 'st-fe-html-4', name: 'Accessibility Basics' },
    ],
    resourceIds: [], practiceItemIds: [], quizQuestionIds: ['q-fe-html-1', 'q-fe-html-2', 'q-fe-html-3'],
  },
  {
    id: 't-fe-p1-2', phaseId: 'fe-p1', name: 'CSS Fundamentals', skill: 'CSS', difficulty: 'Beginner', estimatedHours: 12, weight: 40,
    subtopics: [
      { id: 'st-fe-css-1', name: 'Selectors & Specificity' },
      { id: 'st-fe-css-2', name: 'Box Model' },
      { id: 'st-fe-css-3', name: 'Flexbox' },
      { id: 'st-fe-css-4', name: 'Grid' },
      { id: 'st-fe-css-5', name: 'Responsive Design' },
    ],
    resourceIds: [], practiceItemIds: [], quizQuestionIds: ['q-fe-css-1', 'q-fe-css-2', 'q-fe-css-3'],
  },
  {
    id: 't-fe-p1-3', phaseId: 'fe-p1', name: 'Advanced CSS', skill: 'CSS', difficulty: 'Intermediate', estimatedHours: 8, weight: 30,
    subtopics: [
      { id: 'st-fe-css-6', name: 'Animations & Transitions' },
      { id: 'st-fe-css-7', name: 'CSS Variables' },
      { id: 'st-fe-css-8', name: 'Preprocessors (Sass)' },
    ],
    resourceIds: [], practiceItemIds: [], quizQuestionIds: ['q-fe-css-4', 'q-fe-css-5'],
  },

  // ── FRONTEND Phase 3: React Development ──
  {
    id: 't-fe-p3-1', phaseId: 'fe-p3', name: 'React Fundamentals', skill: 'React', difficulty: 'Intermediate', estimatedHours: 15, weight: 35,
    subtopics: [
      { id: 'st-fe-react-1', name: 'Components & JSX' },
      { id: 'st-fe-react-2', name: 'Props & State' },
      { id: 'st-fe-react-3', name: 'Event Handling' },
      { id: 'st-fe-react-4', name: 'Conditional Rendering' },
    ],
    resourceIds: [], practiceItemIds: [], quizQuestionIds: ['q-fe-react-1', 'q-fe-react-2', 'q-fe-react-3'],
  },
  {
    id: 't-fe-p3-2', phaseId: 'fe-p3', name: 'React Hooks & Patterns', skill: 'React', difficulty: 'Intermediate', estimatedHours: 15, weight: 35,
    subtopics: [
      { id: 'st-fe-react-5', name: 'useEffect & Lifecycle' },
      { id: 'st-fe-react-6', name: 'Custom Hooks' },
      { id: 'st-fe-react-7', name: 'Context API' },
      { id: 'st-fe-react-8', name: 'React Router' },
    ],
    resourceIds: [], practiceItemIds: [], quizQuestionIds: ['q-fe-react-4', 'q-fe-react-5'],
  },
  {
    id: 't-fe-p3-3', phaseId: 'fe-p3', name: 'Advanced React', skill: 'React', difficulty: 'Advanced', estimatedHours: 12, weight: 30,
    subtopics: [
      { id: 'st-fe-react-9', name: 'Performance Optimization' },
      { id: 'st-fe-react-10', name: 'Testing React' },
      { id: 'st-fe-react-11', name: 'Next.js Basics' },
    ],
    resourceIds: [], practiceItemIds: [], quizQuestionIds: ['q-fe-react-6', 'q-fe-react-7'],
  },

  // ── FRONTEND Phase 4: TypeScript ──
  {
    id: 't-fe-p4-1', phaseId: 'fe-p4', name: 'TypeScript Basics', skill: 'TypeScript', difficulty: 'Beginner', estimatedHours: 10, weight: 50,
    subtopics: [
      { id: 'st-fe-ts-1', name: 'Types & Interfaces' },
      { id: 'st-fe-ts-2', name: 'Type Annotations' },
      { id: 'st-fe-ts-3', name: 'Union & Intersection Types' },
    ],
    resourceIds: [], practiceItemIds: [], quizQuestionIds: ['q-fe-ts-1', 'q-fe-ts-2', 'q-fe-ts-3'],
  },
  {
    id: 't-fe-p4-2', phaseId: 'fe-p4', name: 'TypeScript with React', skill: 'TypeScript', difficulty: 'Intermediate', estimatedHours: 10, weight: 50,
    subtopics: [
      { id: 'st-fe-ts-4', name: 'Typing Components' },
      { id: 'st-fe-ts-5', name: 'Typing Hooks & Events' },
      { id: 'st-fe-ts-6', name: 'Generics in React' },
    ],
    resourceIds: [], practiceItemIds: [], quizQuestionIds: ['q-fe-ts-4', 'q-fe-ts-5'],
  },

  // ── FRONTEND Phase 5: APIs & Data Fetching ──
  {
    id: 't-fe-p5-1', phaseId: 'fe-p5', name: 'REST APIs & Fetch', skill: 'REST APIs', difficulty: 'Beginner', estimatedHours: 8, weight: 40,
    subtopics: [
      { id: 'st-fe-api-1', name: 'HTTP Methods' },
      { id: 'st-fe-api-2', name: 'Fetch API' },
      { id: 'st-fe-api-3', name: 'Error Handling' },
    ],
    resourceIds: [], practiceItemIds: [], quizQuestionIds: ['q-fe-api-1', 'q-fe-api-2', 'q-fe-api-3'],
  },
  {
    id: 't-fe-p5-2', phaseId: 'fe-p5', name: 'Data Management Patterns', skill: 'React', difficulty: 'Intermediate', estimatedHours: 10, weight: 40,
    subtopics: [
      { id: 'st-fe-api-4', name: 'React Query / SWR' },
      { id: 'st-fe-api-5', name: 'Caching & Optimistic Updates' },
      { id: 'st-fe-api-6', name: 'Loading & Error States' },
    ],
    resourceIds: [], practiceItemIds: [], quizQuestionIds: ['q-fe-api-4', 'q-fe-api-5'],
  },
  {
    id: 't-fe-p5-3', phaseId: 'fe-p5', name: 'Authentication Patterns', skill: 'REST APIs', difficulty: 'Intermediate', estimatedHours: 5, weight: 20,
    subtopics: [
      { id: 'st-fe-api-7', name: 'JWT & Tokens' },
      { id: 'st-fe-api-8', name: 'OAuth Flow' },
    ],
    resourceIds: [], practiceItemIds: [], quizQuestionIds: ['q-fe-api-6', 'q-fe-api-7'],
  },

  // ── FRONTEND Phase 6: Projects ──
  {
    id: 't-fe-p6-1', phaseId: 'fe-p6', name: 'Building a Portfolio Project', skill: 'React', difficulty: 'Intermediate', estimatedHours: 15, weight: 50,
    subtopics: [
      { id: 'st-fe-proj-1', name: 'Project Planning' },
      { id: 'st-fe-proj-2', name: 'Component Architecture' },
      { id: 'st-fe-proj-3', name: 'Responsive Implementation' },
    ],
    resourceIds: [], practiceItemIds: [], quizQuestionIds: ['q-fe-proj-1', 'q-fe-proj-2'],
  },
  {
    id: 't-fe-p6-2', phaseId: 'fe-p6', name: 'Deployment & Showcase', skill: 'React', difficulty: 'Intermediate', estimatedHours: 8, weight: 50,
    subtopics: [
      { id: 'st-fe-proj-4', name: 'Vercel / Netlify Deployment' },
      { id: 'st-fe-proj-5', name: 'Performance Audits' },
      { id: 'st-fe-proj-6', name: 'Portfolio Presentation' },
    ],
    resourceIds: [], practiceItemIds: [], quizQuestionIds: ['q-fe-proj-3', 'q-fe-proj-4'],
  },

  // ── BACKEND Phase 2: Node.js ──
  {
    id: 't-be-p2-1', phaseId: 'be-p2', name: 'Node.js Runtime', skill: 'Node.js', difficulty: 'Beginner', estimatedHours: 10, weight: 25,
    subtopics: [
      { id: 'st-be-node-1', name: 'Event Loop' },
      { id: 'st-be-node-2', name: 'Modules & npm' },
      { id: 'st-be-node-3', name: 'Async I/O' },
    ],
    resourceIds: [], practiceItemIds: [], quizQuestionIds: ['q-be-node-1', 'q-be-node-2', 'q-be-node-3'],
  },
  {
    id: 't-be-p2-2', phaseId: 'be-p2', name: 'Express & REST APIs', skill: 'Node.js', difficulty: 'Intermediate', estimatedHours: 15, weight: 35,
    subtopics: [
      { id: 'st-be-node-4', name: 'Express Routing' },
      { id: 'st-be-node-5', name: 'Middleware' },
      { id: 'st-be-node-6', name: 'CRUD API Design' },
      { id: 'st-be-node-7', name: 'Error Handling' },
    ],
    resourceIds: [], practiceItemIds: [], quizQuestionIds: ['q-be-node-4', 'q-be-node-5'],
  },
  {
    id: 't-be-p2-3', phaseId: 'be-p2', name: 'Authentication & Security', skill: 'Node.js', difficulty: 'Intermediate', estimatedHours: 12, weight: 25,
    subtopics: [
      { id: 'st-be-node-8', name: 'JWT Authentication' },
      { id: 'st-be-node-9', name: 'Password Hashing' },
      { id: 'st-be-node-10', name: 'CORS & Security Headers' },
    ],
    resourceIds: [], practiceItemIds: [], quizQuestionIds: ['q-be-node-6', 'q-be-node-7'],
  },
  {
    id: 't-be-p2-4', phaseId: 'be-p2', name: 'Testing & Validation', skill: 'Node.js', difficulty: 'Intermediate', estimatedHours: 8, weight: 15,
    subtopics: [
      { id: 'st-be-node-11', name: 'Unit Testing' },
      { id: 'st-be-node-12', name: 'API Testing' },
      { id: 'st-be-node-13', name: 'Input Validation' },
    ],
    resourceIds: [], practiceItemIds: [], quizQuestionIds: ['q-be-node-8', 'q-be-node-9'],
  },

  // ── BACKEND Phase 4: API Design ──
  {
    id: 't-be-p4-1', phaseId: 'be-p4', name: 'RESTful API Design', skill: 'REST APIs', difficulty: 'Intermediate', estimatedHours: 12, weight: 35,
    subtopics: [
      { id: 'st-be-api-1', name: 'REST Principles' },
      { id: 'st-be-api-2', name: 'Resource Modeling' },
      { id: 'st-be-api-3', name: 'Versioning & Pagination' },
    ],
    resourceIds: [], practiceItemIds: [], quizQuestionIds: ['q-be-api-1', 'q-be-api-2', 'q-be-api-3'],
  },
  {
    id: 't-be-p4-2', phaseId: 'be-p4', name: 'Microservices', skill: 'System Design', difficulty: 'Advanced', estimatedHours: 15, weight: 35,
    subtopics: [
      { id: 'st-be-api-4', name: 'Microservices Architecture' },
      { id: 'st-be-api-5', name: 'Service Communication' },
      { id: 'st-be-api-6', name: 'API Gateway' },
    ],
    resourceIds: [], practiceItemIds: [], quizQuestionIds: ['q-be-api-4', 'q-be-api-5'],
  },
  {
    id: 't-be-p4-3', phaseId: 'be-p4', name: 'GraphQL Basics', skill: 'GraphQL', difficulty: 'Intermediate', estimatedHours: 10, weight: 30,
    subtopics: [
      { id: 'st-be-api-7', name: 'GraphQL Schema' },
      { id: 'st-be-api-8', name: 'Queries & Mutations' },
      { id: 'st-be-api-9', name: 'Resolvers' },
    ],
    resourceIds: [], practiceItemIds: [], quizQuestionIds: ['q-be-api-6', 'q-be-api-7'],
  },

  // ── BACKEND Phase 5: Caching & Performance ──
  {
    id: 't-be-p5-1', phaseId: 'be-p5', name: 'Redis Caching', skill: 'Redis', difficulty: 'Advanced', estimatedHours: 12, weight: 40,
    subtopics: [
      { id: 'st-be-cache-1', name: 'Redis Fundamentals' },
      { id: 'st-be-cache-2', name: 'Caching Strategies' },
      { id: 'st-be-cache-3', name: 'Cache Invalidation' },
    ],
    resourceIds: [], practiceItemIds: [], quizQuestionIds: ['q-be-cache-1', 'q-be-cache-2', 'q-be-cache-3'],
  },
  {
    id: 't-be-p5-2', phaseId: 'be-p5', name: 'Message Queues', skill: 'System Design', difficulty: 'Advanced', estimatedHours: 10, weight: 35,
    subtopics: [
      { id: 'st-be-cache-4', name: 'Pub/Sub Pattern' },
      { id: 'st-be-cache-5', name: 'RabbitMQ / Kafka Basics' },
    ],
    resourceIds: [], practiceItemIds: [], quizQuestionIds: ['q-be-cache-4', 'q-be-cache-5'],
  },
  {
    id: 't-be-p5-3', phaseId: 'be-p5', name: 'Performance Optimization', skill: 'System Design', difficulty: 'Advanced', estimatedHours: 8, weight: 25,
    subtopics: [
      { id: 'st-be-cache-6', name: 'Query Optimization' },
      { id: 'st-be-cache-7', name: 'Load Balancing' },
    ],
    resourceIds: [], practiceItemIds: [], quizQuestionIds: ['q-be-cache-6', 'q-be-cache-7'],
  },

  // ── BACKEND Phase 6: Deployment & DevOps ──
  {
    id: 't-be-p6-1', phaseId: 'be-p6', name: 'Docker for Backend', skill: 'Docker', difficulty: 'Intermediate', estimatedHours: 12, weight: 35,
    subtopics: [
      { id: 'st-be-dep-1', name: 'Dockerfile Basics' },
      { id: 'st-be-dep-2', name: 'Docker Compose' },
      { id: 'st-be-dep-3', name: 'Multi-Stage Builds' },
    ],
    resourceIds: [], practiceItemIds: [], quizQuestionIds: ['q-be-dep-1', 'q-be-dep-2', 'q-be-dep-3'],
  },
  {
    id: 't-be-p6-2', phaseId: 'be-p6', name: 'CI/CD Pipelines', skill: 'CI/CD', difficulty: 'Advanced', estimatedHours: 10, weight: 30,
    subtopics: [
      { id: 'st-be-dep-4', name: 'GitHub Actions' },
      { id: 'st-be-dep-5', name: 'Automated Testing in CI' },
    ],
    resourceIds: [], practiceItemIds: [], quizQuestionIds: ['q-be-dep-4', 'q-be-dep-5'],
  },
  {
    id: 't-be-p6-3', phaseId: 'be-p6', name: 'Cloud Deployment', skill: 'AWS', difficulty: 'Advanced', estimatedHours: 10, weight: 35,
    subtopics: [
      { id: 'st-be-dep-6', name: 'AWS / Cloud Deploy' },
      { id: 'st-be-dep-7', name: 'Monitoring & Logging' },
    ],
    resourceIds: [], practiceItemIds: [], quizQuestionIds: ['q-be-dep-6', 'q-be-dep-7'],
  },

  // ── BACKEND Phase 7: Projects ──
  {
    id: 't-be-p7-1', phaseId: 'be-p7', name: 'Backend Project Architecture', skill: 'System Design', difficulty: 'Advanced', estimatedHours: 15, weight: 30,
    subtopics: [
      { id: 'st-be-proj-1', name: 'Scalable Architecture' },
      { id: 'st-be-proj-2', name: 'Database Schema Design' },
    ],
    resourceIds: [], practiceItemIds: [], quizQuestionIds: ['q-be-proj-1', 'q-be-proj-2'],
  },
  {
    id: 't-be-p7-2', phaseId: 'be-p7', name: 'Building Production Systems', skill: 'Node.js', difficulty: 'Advanced', estimatedHours: 20, weight: 40,
    subtopics: [
      { id: 'st-be-proj-3', name: 'Microservice Project' },
      { id: 'st-be-proj-4', name: 'API Documentation' },
      { id: 'st-be-proj-5', name: 'Production Monitoring' },
    ],
    resourceIds: [], practiceItemIds: [], quizQuestionIds: ['q-be-proj-3', 'q-be-proj-4'],
  },
  {
    id: 't-be-p7-3', phaseId: 'be-p7', name: 'Portfolio & Open Source', skill: 'System Design', difficulty: 'Intermediate', estimatedHours: 10, weight: 30,
    subtopics: [
      { id: 'st-be-proj-6', name: 'Showcasing Backend Work' },
      { id: 'st-be-proj-7', name: 'Contributing to Open Source' },
    ],
    resourceIds: [], practiceItemIds: [], quizQuestionIds: ['q-be-proj-5', 'q-be-proj-6'],
  },

  // ── SOFTWARE ENGINEER Phase 5: System Design ──
  {
    id: 't-se-p5-1', phaseId: 'se-p5', name: 'System Design Fundamentals', skill: 'System Design', difficulty: 'Advanced', estimatedHours: 15, weight: 35,
    subtopics: [
      { id: 'st-se-sd-1', name: 'Scalability Basics' },
      { id: 'st-se-sd-2', name: 'Load Balancing' },
      { id: 'st-se-sd-3', name: 'Caching Strategies' },
    ],
    resourceIds: [], practiceItemIds: [], quizQuestionIds: ['q-se-sd-1', 'q-se-sd-2', 'q-se-sd-3'],
  },
  {
    id: 't-se-p5-2', phaseId: 'se-p5', name: 'Data at Scale', skill: 'System Design', difficulty: 'Advanced', estimatedHours: 15, weight: 35,
    subtopics: [
      { id: 'st-se-sd-4', name: 'Database Scaling' },
      { id: 'st-se-sd-5', name: 'Sharding & Replication' },
      { id: 'st-se-sd-6', name: 'Message Queues' },
    ],
    resourceIds: [], practiceItemIds: [], quizQuestionIds: ['q-se-sd-4', 'q-se-sd-5'],
  },
  {
    id: 't-se-p5-3', phaseId: 'se-p5', name: 'Design Patterns', skill: 'System Design', difficulty: 'Intermediate', estimatedHours: 10, weight: 30,
    subtopics: [
      { id: 'st-se-sd-7', name: 'Creational Patterns' },
      { id: 'st-se-sd-8', name: 'Structural Patterns' },
      { id: 'st-se-sd-9', name: 'Behavioral Patterns' },
    ],
    resourceIds: [], practiceItemIds: [], quizQuestionIds: ['q-se-sd-6', 'q-se-sd-7'],
  },

  // ── SOFTWARE ENGINEER Phase 6: Git & DevOps ──
  {
    id: 't-se-p6-1', phaseId: 'se-p6', name: 'Git & Version Control', skill: 'Git', difficulty: 'Beginner', estimatedHours: 8, weight: 40,
    subtopics: [
      { id: 'st-se-git-1', name: 'Git Basics' },
      { id: 'st-se-git-2', name: 'Branching & Merging' },
      { id: 'st-se-git-3', name: 'Pull Requests & Code Review' },
    ],
    resourceIds: [], practiceItemIds: [], quizQuestionIds: ['q-se-git-1', 'q-se-git-2', 'q-se-git-3'],
  },
  {
    id: 't-se-p6-2', phaseId: 'se-p6', name: 'CI/CD & Docker Basics', skill: 'Docker', difficulty: 'Beginner', estimatedHours: 6, weight: 35,
    subtopics: [
      { id: 'st-se-git-4', name: 'CI/CD Concepts' },
      { id: 'st-se-git-5', name: 'Docker Basics' },
    ],
    resourceIds: [], practiceItemIds: [], quizQuestionIds: ['q-se-git-4', 'q-se-git-5'],
  },
  {
    id: 't-se-p6-3', phaseId: 'se-p6', name: 'Collaboration Workflows', skill: 'Git', difficulty: 'Beginner', estimatedHours: 4, weight: 25,
    subtopics: [
      { id: 'st-se-git-6', name: 'Agile & Sprints' },
      { id: 'st-se-git-7', name: 'Code Review Best Practices' },
    ],
    resourceIds: [], practiceItemIds: [], quizQuestionIds: ['q-se-git-6', 'q-se-git-7'],
  },

  // ── SOFTWARE ENGINEER Phase 7: Projects ──
  {
    id: 't-se-p7-1', phaseId: 'se-p7', name: 'Software Project Planning', skill: 'System Design', difficulty: 'Advanced', estimatedHours: 10, weight: 30,
    subtopics: [
      { id: 'st-se-proj-1', name: 'Requirements Analysis' },
      { id: 'st-se-proj-2', name: 'Architecture Design' },
    ],
    resourceIds: [], practiceItemIds: [], quizQuestionIds: ['q-se-proj-1', 'q-se-proj-2'],
  },
  {
    id: 't-se-p7-2', phaseId: 'se-p7', name: 'Building & Shipping Software', skill: 'System Design', difficulty: 'Advanced', estimatedHours: 20, weight: 40,
    subtopics: [
      { id: 'st-se-proj-3', name: 'Implementation Best Practices' },
      { id: 'st-se-proj-4', name: 'Testing Strategies' },
      { id: 'st-se-proj-5', name: 'Deployment & Maintenance' },
    ],
    resourceIds: [], practiceItemIds: [], quizQuestionIds: ['q-se-proj-3', 'q-se-proj-4'],
  },
  {
    id: 't-se-p7-3', phaseId: 'se-p7', name: 'Engineering Portfolio', skill: 'System Design', difficulty: 'Intermediate', estimatedHours: 10, weight: 30,
    subtopics: [
      { id: 'st-se-proj-6', name: 'Showcasing Engineering Depth' },
      { id: 'st-se-proj-7', name: 'Technical Writing' },
    ],
    resourceIds: [], practiceItemIds: [], quizQuestionIds: ['q-se-proj-5', 'q-se-proj-6'],
  },

  // ── CLOUD Phase 1: Linux Fundamentals ──
  {
    id: 't-ce-p1-1', phaseId: 'ce-p1', name: 'Linux Command Line', skill: 'Linux', difficulty: 'Beginner', estimatedHours: 12, weight: 40,
    subtopics: [
      { id: 'st-ce-linux-1', name: 'File System & Navigation' },
      { id: 'st-ce-linux-2', name: 'File Operations' },
      { id: 'st-ce-linux-3', name: 'Permissions & Ownership' },
    ],
    resourceIds: [], practiceItemIds: [], quizQuestionIds: ['q-ce-linux-1', 'q-ce-linux-2', 'q-ce-linux-3'],
  },
  {
    id: 't-ce-p1-2', phaseId: 'ce-p1', name: 'Processes & Shell', skill: 'Linux', difficulty: 'Beginner', estimatedHours: 10, weight: 35,
    subtopics: [
      { id: 'st-ce-linux-4', name: 'Process Management' },
      { id: 'st-ce-linux-5', name: 'Shell Scripting' },
      { id: 'st-ce-linux-6', name: 'Text Processing Tools' },
    ],
    resourceIds: [], practiceItemIds: [], quizQuestionIds: ['q-ce-linux-4', 'q-ce-linux-5'],
  },
  {
    id: 't-ce-p1-3', phaseId: 'ce-p1', name: 'System Administration', skill: 'Linux', difficulty: 'Intermediate', estimatedHours: 8, weight: 25,
    subtopics: [
      { id: 'st-ce-linux-7', name: 'Users & Groups' },
      { id: 'st-ce-linux-8', name: 'Services & Systemd' },
    ],
    resourceIds: [], practiceItemIds: [], quizQuestionIds: ['q-ce-linux-6', 'q-ce-linux-7'],
  },

  // ── CLOUD Phase 2: Networking & Git ──
  {
    id: 't-ce-p2-1', phaseId: 'ce-p2', name: 'Networking Fundamentals', skill: 'Network Security', difficulty: 'Beginner', estimatedHours: 12, weight: 50,
    subtopics: [
      { id: 'st-ce-net-1', name: 'OSI Model & TCP/IP' },
      { id: 'st-ce-net-2', name: 'IP Addressing & Subnetting' },
      { id: 'st-ce-net-3', name: 'DNS & HTTP' },
    ],
    resourceIds: [], practiceItemIds: [], quizQuestionIds: ['q-ce-net-1', 'q-ce-net-2', 'q-ce-net-3'],
  },
  {
    id: 't-ce-p2-2', phaseId: 'ce-p2', name: 'Git & Version Control', skill: 'Git', difficulty: 'Beginner', estimatedHours: 8, weight: 50,
    subtopics: [
      { id: 'st-ce-git-1', name: 'Git Basics' },
      { id: 'st-ce-git-2', name: 'Branching Strategies' },
      { id: 'st-ce-git-3', name: 'Remote Repositories' },
    ],
    resourceIds: [], practiceItemIds: [], quizQuestionIds: ['q-ce-git-1', 'q-ce-git-2', 'q-ce-git-3'],
  },

  // ── CLOUD Phase 3: AWS ──
  {
    id: 't-ce-p3-1', phaseId: 'ce-p3', name: 'AWS Core Services', skill: 'AWS', difficulty: 'Intermediate', estimatedHours: 20, weight: 35,
    subtopics: [
      { id: 'st-ce-aws-1', name: 'EC2 & Compute' },
      { id: 'st-ce-aws-2', name: 'S3 & Storage' },
      { id: 'st-ce-aws-3', name: 'RDS & Databases' },
    ],
    resourceIds: [], practiceItemIds: [], quizQuestionIds: ['q-ce-aws-1', 'q-ce-aws-2', 'q-ce-aws-3'],
  },
  {
    id: 't-ce-p3-2', phaseId: 'ce-p3', name: 'AWS Security & Networking', skill: 'AWS', difficulty: 'Intermediate', estimatedHours: 15, weight: 30,
    subtopics: [
      { id: 'st-ce-aws-4', name: 'IAM' },
      { id: 'st-ce-aws-5', name: 'VPC & Networking' },
    ],
    resourceIds: [], practiceItemIds: [], quizQuestionIds: ['q-ce-aws-4', 'q-ce-aws-5'],
  },
  {
    id: 't-ce-p3-3', phaseId: 'ce-p3', name: 'AWS Advanced Services', skill: 'AWS', difficulty: 'Advanced', estimatedHours: 15, weight: 35,
    subtopics: [
      { id: 'st-ce-aws-6', name: 'Lambda & Serverless' },
      { id: 'st-ce-aws-7', name: 'CloudFormation' },
      { id: 'st-ce-aws-8', name: 'Monitoring & Billing' },
    ],
    resourceIds: [], practiceItemIds: [], quizQuestionIds: ['q-ce-aws-6', 'q-ce-aws-7'],
  },

  // ── CLOUD Phase 4: Docker ──
  {
    id: 't-ce-p4-1', phaseId: 'ce-p4', name: 'Docker Fundamentals', skill: 'Docker', difficulty: 'Intermediate', estimatedHours: 15, weight: 40,
    subtopics: [
      { id: 'st-ce-docker-1', name: 'Containers vs VMs' },
      { id: 'st-ce-docker-2', name: 'Dockerfile' },
      { id: 'st-ce-docker-3', name: 'Images & Registries' },
    ],
    resourceIds: [], practiceItemIds: [], quizQuestionIds: ['q-ce-docker-1', 'q-ce-docker-2', 'q-ce-docker-3'],
  },
  {
    id: 't-ce-p4-2', phaseId: 'ce-p4', name: 'Docker Compose & Networking', skill: 'Docker', difficulty: 'Intermediate', estimatedHours: 12, weight: 35,
    subtopics: [
      { id: 'st-ce-docker-4', name: 'Docker Compose' },
      { id: 'st-ce-docker-5', name: 'Container Networking' },
      { id: 'st-ce-docker-6', name: 'Volumes & Persistence' },
    ],
    resourceIds: [], practiceItemIds: [], quizQuestionIds: ['q-ce-docker-4', 'q-ce-docker-5'],
  },
  {
    id: 't-ce-p4-3', phaseId: 'ce-p4', name: 'Docker Best Practices', skill: 'Docker', difficulty: 'Advanced', estimatedHours: 8, weight: 25,
    subtopics: [
      { id: 'st-ce-docker-7', name: 'Multi-Stage Builds' },
      { id: 'st-ce-docker-8', name: 'Security & Optimization' },
    ],
    resourceIds: [], practiceItemIds: [], quizQuestionIds: ['q-ce-docker-6', 'q-ce-docker-7'],
  },

  // ── CLOUD Phase 5: Kubernetes ──
  {
    id: 't-ce-p5-1', phaseId: 'ce-p5', name: 'Kubernetes Fundamentals', skill: 'Kubernetes', difficulty: 'Advanced', estimatedHours: 18, weight: 40,
    subtopics: [
      { id: 'st-ce-k8s-1', name: 'K8s Architecture' },
      { id: 'st-ce-k8s-2', name: 'Pods & Deployments' },
      { id: 'st-ce-k8s-3', name: 'Services & Networking' },
    ],
    resourceIds: [], practiceItemIds: [], quizQuestionIds: ['q-ce-k8s-1', 'q-ce-k8s-2', 'q-ce-k8s-3'],
  },
  {
    id: 't-ce-p5-2', phaseId: 'ce-p5', name: 'Advanced Kubernetes', skill: 'Kubernetes', difficulty: 'Advanced', estimatedHours: 15, weight: 35,
    subtopics: [
      { id: 'st-ce-k8s-4', name: 'ConfigMaps & Secrets' },
      { id: 'st-ce-k8s-5', name: 'Scaling & Autoscaling' },
      { id: 'st-ce-k8s-6', name: 'Helm Charts' },
    ],
    resourceIds: [], practiceItemIds: [], quizQuestionIds: ['q-ce-k8s-4', 'q-ce-k8s-5'],
  },
  {
    id: 't-ce-p5-3', phaseId: 'ce-p5', name: 'K8s in Production', skill: 'Kubernetes', difficulty: 'Advanced', estimatedHours: 10, weight: 25,
    subtopics: [
      { id: 'st-ce-k8s-7', name: 'Monitoring & Logging' },
      { id: 'st-ce-k8s-8', name: 'Troubleshooting' },
    ],
    resourceIds: [], practiceItemIds: [], quizQuestionIds: ['q-ce-k8s-6', 'q-ce-k8s-7'],
  },

  // ── CLOUD Phase 6: CI/CD & IaC ──
  {
    id: 't-ce-p6-1', phaseId: 'ce-p6', name: 'CI/CD Pipelines', skill: 'CI/CD', difficulty: 'Advanced', estimatedHours: 15, weight: 40,
    subtopics: [
      { id: 'st-ce-cicd-1', name: 'Pipeline Concepts' },
      { id: 'st-ce-cicd-2', name: 'GitHub Actions / GitLab CI' },
      { id: 'st-ce-cicd-3', name: 'Deployment Strategies' },
    ],
    resourceIds: [], practiceItemIds: [], quizQuestionIds: ['q-ce-cicd-1', 'q-ce-cicd-2', 'q-ce-cicd-3'],
  },
  {
    id: 't-ce-p6-2', phaseId: 'ce-p6', name: 'Infrastructure as Code', skill: 'CI/CD', difficulty: 'Advanced', estimatedHours: 15, weight: 35,
    subtopics: [
      { id: 'st-ce-cicd-4', name: 'Terraform Basics' },
      { id: 'st-ce-cicd-5', name: 'State Management' },
    ],
    resourceIds: [], practiceItemIds: [], quizQuestionIds: ['q-ce-cicd-4', 'q-ce-cicd-5'],
  },
  {
    id: 't-ce-p6-3', phaseId: 'ce-p6', name: 'Cloud Automation', skill: 'AWS', difficulty: 'Advanced', estimatedHours: 8, weight: 25,
    subtopics: [
      { id: 'st-ce-cicd-6', name: 'Automated Testing' },
      { id: 'st-ce-cicd-7', name: 'Monitoring & Alerting' },
    ],
    resourceIds: [], practiceItemIds: [], quizQuestionIds: ['q-ce-cicd-6', 'q-ce-cicd-7'],
  },

  // ── CLOUD Phase 7: Projects ──
  {
    id: 't-ce-p7-1', phaseId: 'ce-p7', name: 'Cloud Project Architecture', skill: 'AWS', difficulty: 'Advanced', estimatedHours: 15, weight: 30,
    subtopics: [
      { id: 'st-ce-proj-1', name: 'Designing Cloud Infrastructure' },
      { id: 'st-ce-proj-2', name: 'Multi-Service Deployment' },
    ],
    resourceIds: [], practiceItemIds: [], quizQuestionIds: ['q-ce-proj-1', 'q-ce-proj-2'],
  },
  {
    id: 't-ce-p7-2', phaseId: 'ce-p7', name: 'Building & Deploying', skill: 'AWS', difficulty: 'Advanced', estimatedHours: 20, weight: 40,
    subtopics: [
      { id: 'st-ce-proj-3', name: 'Infrastructure Deployment' },
      { id: 'st-ce-proj-4', name: 'CI/CD for Cloud' },
      { id: 'st-ce-proj-5', name: 'Cost Optimization' },
    ],
    resourceIds: [], practiceItemIds: [], quizQuestionIds: ['q-ce-proj-3', 'q-ce-proj-4'],
  },
  {
    id: 't-ce-p7-3', phaseId: 'ce-p7', name: 'Cloud Portfolio', skill: 'AWS', difficulty: 'Intermediate', estimatedHours: 10, weight: 30,
    subtopics: [
      { id: 'st-ce-proj-6', name: 'Showcasing Cloud Projects' },
      { id: 'st-ce-proj-7', name: 'Architecture Documentation' },
    ],
    resourceIds: [], practiceItemIds: [], quizQuestionIds: ['q-ce-proj-5', 'q-ce-proj-6'],
  },

  // ── CYBERSECURITY Phase 1: IT & Networking ──
  {
    id: 't-cy-p1-1', phaseId: 'cy-p1', name: 'IT Fundamentals', skill: 'Linux', difficulty: 'Beginner', estimatedHours: 12, weight: 30,
    subtopics: [
      { id: 'st-cy-it-1', name: 'Computer Architecture' },
      { id: 'st-cy-it-2', name: 'Operating Systems' },
      { id: 'st-cy-it-3', name: 'File Systems' },
    ],
    resourceIds: [], practiceItemIds: [], quizQuestionIds: ['q-cy-it-1', 'q-cy-it-2', 'q-cy-it-3'],
  },
  {
    id: 't-cy-p1-2', phaseId: 'cy-p1', name: 'Networking Basics', skill: 'Network Security', difficulty: 'Beginner', estimatedHours: 15, weight: 40,
    subtopics: [
      { id: 'st-cy-net-1', name: 'OSI Model' },
      { id: 'st-cy-net-2', name: 'TCP/IP Protocols' },
      { id: 'st-cy-net-3', name: 'IP Addressing & Routing' },
    ],
    resourceIds: [], practiceItemIds: [], quizQuestionIds: ['q-cy-net-1', 'q-cy-net-2', 'q-cy-net-3'],
  },
  {
    id: 't-cy-p1-3', phaseId: 'cy-p1', name: 'Linux for Security', skill: 'Linux', difficulty: 'Beginner', estimatedHours: 10, weight: 30,
    subtopics: [
      { id: 'st-cy-linux-1', name: 'Command Line Basics' },
      { id: 'st-cy-linux-2', name: 'Permissions & Users' },
      { id: 'st-cy-linux-3', name: 'Security Tools' },
    ],
    resourceIds: [], practiceItemIds: [], quizQuestionIds: ['q-cy-linux-1', 'q-cy-linux-2'],
  },

  // ── CYBERSECURITY Phase 2: Fundamentals ──
  {
    id: 't-cy-p2-1', phaseId: 'cy-p2', name: 'Security Principles', skill: 'Cybersecurity', difficulty: 'Beginner', estimatedHours: 10, weight: 35,
    subtopics: [
      { id: 'st-cy-sec-1', name: 'CIA Triad' },
      { id: 'st-cy-sec-2', name: 'Threat Types' },
      { id: 'st-cy-sec-3', name: 'Risk Management' },
    ],
    resourceIds: [], practiceItemIds: [], quizQuestionIds: ['q-cy-sec-1', 'q-cy-sec-2', 'q-cy-sec-3'],
  },
  {
    id: 't-cy-p2-2', phaseId: 'cy-p2', name: 'Security Frameworks', skill: 'Cybersecurity', difficulty: 'Beginner', estimatedHours: 10, weight: 35,
    subtopics: [
      { id: 'st-cy-sec-4', name: 'NIST Framework' },
      { id: 'st-cy-sec-5', name: 'ISO 27001' },
      { id: 'st-cy-sec-6', name: 'Compliance Basics' },
    ],
    resourceIds: [], practiceItemIds: [], quizQuestionIds: ['q-cy-sec-4', 'q-cy-sec-5'],
  },
  {
    id: 't-cy-p2-3', phaseId: 'cy-p2', name: 'Identity & Access Management', skill: 'Cybersecurity', difficulty: 'Beginner', estimatedHours: 8, weight: 30,
    subtopics: [
      { id: 'st-cy-sec-7', name: 'Authentication Methods' },
      { id: 'st-cy-sec-8', name: 'Access Control Models' },
    ],
    resourceIds: [], practiceItemIds: [], quizQuestionIds: ['q-cy-sec-6', 'q-cy-sec-7'],
  },

  // ── CYBERSECURITY Phase 3: Network Security ──
  {
    id: 't-cy-p3-1', phaseId: 'cy-p3', name: 'Firewalls & IDS/IPS', skill: 'Network Security', difficulty: 'Intermediate', estimatedHours: 15, weight: 40,
    subtopics: [
      { id: 'st-cy-ns-1', name: 'Firewall Concepts' },
      { id: 'st-cy-ns-2', name: 'IDS/IPS Systems' },
      { id: 'st-cy-ns-3', name: 'VPN Technologies' },
    ],
    resourceIds: [], practiceItemIds: [], quizQuestionIds: ['q-cy-ns-1', 'q-cy-ns-2', 'q-cy-ns-3'],
  },
  {
    id: 't-cy-p3-2', phaseId: 'cy-p3', name: 'Network Monitoring & Analysis', skill: 'Network Security', difficulty: 'Intermediate', estimatedHours: 12, weight: 30,
    subtopics: [
      { id: 'st-cy-ns-4', name: 'Packet Analysis (Wireshark)' },
      { id: 'st-cy-ns-5', name: 'SIEM Basics' },
    ],
    resourceIds: [], practiceItemIds: [], quizQuestionIds: ['q-cy-ns-4', 'q-cy-ns-5'],
  },
  {
    id: 't-cy-p3-3', phaseId: 'cy-p3', name: 'Secure Network Design', skill: 'Network Security', difficulty: 'Intermediate', estimatedHours: 10, weight: 30,
    subtopics: [
      { id: 'st-cy-ns-6', name: 'DMZ & Segmentation' },
      { id: 'st-cy-ns-7', name: 'Zero Trust Architecture' },
    ],
    resourceIds: [], practiceItemIds: [], quizQuestionIds: ['q-cy-ns-6', 'q-cy-ns-7'],
  },

  // ── CYBERSECURITY Phase 4: Penetration Testing ──
  {
    id: 't-cy-p4-1', phaseId: 'cy-p4', name: 'Penetration Testing Fundamentals', skill: 'Penetration Testing', difficulty: 'Intermediate', estimatedHours: 15, weight: 30,
    subtopics: [
      { id: 'st-cy-pt-1', name: 'Pentesting Methodology' },
      { id: 'st-cy-pt-2', name: 'Reconnaissance' },
      { id: 'st-cy-pt-3', name: 'Scanning & Enumeration' },
    ],
    resourceIds: [], practiceItemIds: [], quizQuestionIds: ['q-cy-pt-1', 'q-cy-pt-2', 'q-cy-pt-3'],
  },
  {
    id: 't-cy-p4-2', phaseId: 'cy-p4', name: 'Exploitation & Vulnerabilities', skill: 'Penetration Testing', difficulty: 'Advanced', estimatedHours: 18, weight: 40,
    subtopics: [
      { id: 'st-cy-pt-4', name: 'Vulnerability Types' },
      { id: 'st-cy-pt-5', name: 'Exploitation Techniques' },
      { id: 'st-cy-pt-6', name: 'Privilege Escalation' },
    ],
    resourceIds: [], practiceItemIds: [], quizQuestionIds: ['q-cy-pt-4', 'q-cy-pt-5'],
  },
  {
    id: 't-cy-p4-3', phaseId: 'cy-p4', name: 'Tools & Reporting', skill: 'Penetration Testing', difficulty: 'Intermediate', estimatedHours: 10, weight: 30,
    subtopics: [
      { id: 'st-cy-pt-7', name: 'Metasploit & Burp Suite' },
      { id: 'st-cy-pt-8', name: 'Pentest Reporting' },
    ],
    resourceIds: [], practiceItemIds: [], quizQuestionIds: ['q-cy-pt-6', 'q-cy-pt-7'],
  },

  // ── CYBERSECURITY Phase 5: Crypto & App Security ──
  {
    id: 't-cy-p5-1', phaseId: 'cy-p5', name: 'Cryptography Fundamentals', skill: 'Cryptography', difficulty: 'Advanced', estimatedHours: 12, weight: 35,
    subtopics: [
      { id: 'st-cy-crypto-1', name: 'Symmetric Encryption' },
      { id: 'st-cy-crypto-2', name: 'Asymmetric Encryption' },
      { id: 'st-cy-crypto-3', name: 'Hashing & Digital Signatures' },
    ],
    resourceIds: [], practiceItemIds: [], quizQuestionIds: ['q-cy-crypto-1', 'q-cy-crypto-2', 'q-cy-crypto-3'],
  },
  {
    id: 't-cy-p5-2', phaseId: 'cy-p5', name: 'PKI & TLS', skill: 'Cryptography', difficulty: 'Advanced', estimatedHours: 10, weight: 30,
    subtopics: [
      { id: 'st-cy-crypto-4', name: 'Public Key Infrastructure' },
      { id: 'st-cy-crypto-5', name: 'TLS/SSL Protocol' },
    ],
    resourceIds: [], practiceItemIds: [], quizQuestionIds: ['q-cy-crypto-4', 'q-cy-crypto-5'],
  },
  {
    id: 't-cy-p5-3', phaseId: 'cy-p5', name: 'Application Security', skill: 'Cybersecurity', difficulty: 'Advanced', estimatedHours: 12, weight: 35,
    subtopics: [
      { id: 'st-cy-crypto-6', name: 'OWASP Top 10' },
      { id: 'st-cy-crypto-7', name: 'Secure Coding Practices' },
      { id: 'st-cy-crypto-8', name: 'Security Testing' },
    ],
    resourceIds: [], practiceItemIds: [], quizQuestionIds: ['q-cy-crypto-6', 'q-cy-crypto-7'],
  },

  // ── CYBERSECURITY Phase 6: Projects ──
  {
    id: 't-cy-p6-1', phaseId: 'cy-p6', name: 'Security Project Planning', skill: 'Cybersecurity', difficulty: 'Advanced', estimatedHours: 10, weight: 25,
    subtopics: [
      { id: 'st-cy-proj-1', name: 'Security Assessment Planning' },
      { id: 'st-cy-proj-2', name: 'Lab Setup' },
    ],
    resourceIds: [], practiceItemIds: [], quizQuestionIds: ['q-cy-proj-1', 'q-cy-proj-2'],
  },
  {
    id: 't-cy-p6-2', phaseId: 'cy-p6', name: 'Hands-On Security Projects', skill: 'Penetration Testing', difficulty: 'Advanced', estimatedHours: 18, weight: 45,
    subtopics: [
      { id: 'st-cy-proj-3', name: 'Conducting a Pentest' },
      { id: 'st-cy-proj-4', name: 'Building a SOC' },
      { id: 'st-cy-proj-5', name: 'Incident Response' },
    ],
    resourceIds: [], practiceItemIds: [], quizQuestionIds: ['q-cy-proj-3', 'q-cy-proj-4'],
  },
  {
    id: 't-cy-p6-3', phaseId: 'cy-p6', name: 'Security Portfolio & Certifications', skill: 'Cybersecurity', difficulty: 'Intermediate', estimatedHours: 10, weight: 30,
    subtopics: [
      { id: 'st-cy-proj-6', name: 'Showcasing Security Skills' },
      { id: 'st-cy-proj-7', name: 'Certification Path' },
    ],
    resourceIds: [], practiceItemIds: [], quizQuestionIds: ['q-cy-proj-5', 'q-cy-proj-6'],
  },

  // ── ML ENGINEER Phase 6 & 7 ──
  {
    id: 't-ml-p6-1', phaseId: 'ml-p6', name: 'MLOps Fundamentals', skill: 'Docker', difficulty: 'Advanced', estimatedHours: 15, weight: 40,
    subtopics: [
      { id: 'st-ml-mlops-1', name: 'MLOps Concepts' },
      { id: 'st-ml-mlops-2', name: 'Model Registry' },
      { id: 'st-ml-mlops-3', name: 'Model Monitoring' },
    ],
    resourceIds: [], practiceItemIds: [], quizQuestionIds: ['q-ml-mlops-1', 'q-ml-mlops-2', 'q-ml-mlops-3'],
  },
  {
    id: 't-ml-p6-2', phaseId: 'ml-p6', name: 'Cloud ML Deployment', skill: 'AWS', difficulty: 'Advanced', estimatedHours: 15, weight: 35,
    subtopics: [
      { id: 'st-ml-mlops-4', name: 'AWS SageMaker' },
      { id: 'st-ml-mlops-5', name: 'Docker for ML' },
      { id: 'st-ml-mlops-6', name: 'CI/CD for ML' },
    ],
    resourceIds: [], practiceItemIds: [], quizQuestionIds: ['q-ml-mlops-4', 'q-ml-mlops-5'],
  },
  {
    id: 't-ml-p6-3', phaseId: 'ml-p6', name: 'ML Pipelines', skill: 'Machine Learning', difficulty: 'Advanced', estimatedHours: 12, weight: 25,
    subtopics: [
      { id: 'st-ml-mlops-7', name: 'Feature Stores' },
      { id: 'st-ml-mlops-8', name: 'Pipeline Orchestration' },
    ],
    resourceIds: [], practiceItemIds: [], quizQuestionIds: ['q-ml-mlops-6', 'q-ml-mlops-7'],
  },
  {
    id: 't-ml-p7-1', phaseId: 'ml-p7', name: 'ML Project Planning', skill: 'Machine Learning', difficulty: 'Advanced', estimatedHours: 15, weight: 30,
    subtopics: [
      { id: 'st-ml-proj-1', name: 'Problem Framing for ML' },
      { id: 'st-ml-proj-2', name: 'Data Strategy' },
    ],
    resourceIds: [], practiceItemIds: [], quizQuestionIds: ['q-ml-proj-1', 'q-ml-proj-2'],
  },
  {
    id: 't-ml-p7-2', phaseId: 'ml-p7', name: 'Building ML Systems', skill: 'Machine Learning', difficulty: 'Advanced', estimatedHours: 25, weight: 40,
    subtopics: [
      { id: 'st-ml-proj-3', name: 'End-to-End ML Project' },
      { id: 'st-ml-proj-4', name: 'Model Optimization' },
      { id: 'st-ml-proj-5', name: 'A/B Testing' },
    ],
    resourceIds: [], practiceItemIds: [], quizQuestionIds: ['q-ml-proj-3', 'q-ml-proj-4'],
  },
  {
    id: 't-ml-p7-3', phaseId: 'ml-p7', name: 'ML Portfolio', skill: 'Machine Learning', difficulty: 'Intermediate', estimatedHours: 10, weight: 30,
    subtopics: [
      { id: 'st-ml-proj-6', name: 'Showcasing ML Projects' },
      { id: 'st-ml-proj-7', name: 'Kaggle & Competitions' },
    ],
    resourceIds: [], practiceItemIds: [], quizQuestionIds: ['q-ml-proj-5', 'q-ml-proj-6'],
  },

  // ── DATA SCIENTIST Phase 3: Data Analysis (Pandas/NumPy) ──
  {
    id: 't-ds-p3-1', phaseId: 'ds-p3', name: 'NumPy Fundamentals', skill: 'NumPy', difficulty: 'Beginner', estimatedHours: 10, weight: 30,
    subtopics: [
      { id: 'st-ds-numpy-1', name: 'Arrays & dtypes' },
      { id: 'st-ds-numpy-2', name: 'Array Operations' },
      { id: 'st-ds-numpy-3', name: 'Indexing & Slicing' },
    ],
    resourceIds: [], practiceItemIds: [], quizQuestionIds: ['q-ds-numpy-1', 'q-ds-numpy-2', 'q-ds-numpy-3'],
  },
  {
    id: 't-ds-p3-2', phaseId: 'ds-p3', name: 'Pandas Fundamentals', skill: 'Pandas', difficulty: 'Intermediate', estimatedHours: 15, weight: 35,
    subtopics: [
      { id: 'st-ds-pandas-1', name: 'Series & DataFrames' },
      { id: 'st-ds-pandas-2', name: 'Indexing & Filtering' },
      { id: 'st-ds-pandas-3', name: 'GroupBy & Aggregation' },
    ],
    resourceIds: [], practiceItemIds: [], quizQuestionIds: ['q-ds-pandas-1', 'q-ds-pandas-2', 'q-ds-pandas-3'],
  },
  {
    id: 't-ds-p3-3', phaseId: 'ds-p3', name: 'Data Cleaning & Manipulation', skill: 'Data Analysis', difficulty: 'Intermediate', estimatedHours: 15, weight: 35,
    subtopics: [
      { id: 'st-ds-clean-1', name: 'Handling Missing Data' },
      { id: 'st-ds-clean-2', name: 'Data Transformation' },
      { id: 'st-ds-clean-3', name: 'Merging & Joining' },
    ],
    resourceIds: [], practiceItemIds: [], quizQuestionIds: ['q-ds-clean-1', 'q-ds-clean-2', 'q-ds-clean-3'],
  },

  // ── DATA SCIENTIST Phase 6: Data Visualization ──
  {
    id: 't-ds-p6-1', phaseId: 'ds-p6', name: 'Visualization with Python', skill: 'Data Analysis', difficulty: 'Intermediate', estimatedHours: 12, weight: 40,
    subtopics: [
      { id: 'st-ds-viz-1', name: 'Matplotlib' },
      { id: 'st-ds-viz-2', name: 'Seaborn' },
      { id: 'st-ds-viz-3', name: 'Plotly & Interactive Plots' },
    ],
    resourceIds: [], practiceItemIds: [], quizQuestionIds: ['q-ds-viz-1', 'q-ds-viz-2', 'q-ds-viz-3'],
  },
  {
    id: 't-ds-p6-2', phaseId: 'ds-p6', name: 'BI Tools', skill: 'Tableau', difficulty: 'Intermediate', estimatedHours: 10, weight: 35,
    subtopics: [
      { id: 'st-ds-viz-4', name: 'Tableau Dashboards' },
      { id: 'st-ds-viz-5', name: 'Power BI Reports' },
    ],
    resourceIds: [], practiceItemIds: [], quizQuestionIds: ['q-ds-viz-4', 'q-ds-viz-5'],
  },
  {
    id: 't-ds-p6-3', phaseId: 'ds-p6', name: 'Data Storytelling', skill: 'Data Analysis', difficulty: 'Intermediate', estimatedHours: 8, weight: 25,
    subtopics: [
      { id: 'st-ds-viz-6', name: 'Storytelling Principles' },
      { id: 'st-ds-viz-7', name: 'Audience-Targeted Visualization' },
    ],
    resourceIds: [], practiceItemIds: [], quizQuestionIds: ['q-ds-viz-6', 'q-ds-viz-7'],
  },

  // ── DATA SCIENTIST Phase 7: Projects ──
  {
    id: 't-ds-p7-1', phaseId: 'ds-p7', name: 'DS Project Planning', skill: 'Data Analysis', difficulty: 'Advanced', estimatedHours: 10, weight: 25,
    subtopics: [
      { id: 'st-ds-proj-1', name: 'Problem Framing' },
      { id: 'st-ds-proj-2', name: 'Data Sourcing' },
    ],
    resourceIds: [], practiceItemIds: [], quizQuestionIds: ['q-ds-proj-1', 'q-ds-proj-2'],
  },
  {
    id: 't-ds-p7-2', phaseId: 'ds-p7', name: 'Building DS Projects', skill: 'Data Analysis', difficulty: 'Advanced', estimatedHours: 25, weight: 45,
    subtopics: [
      { id: 'st-ds-proj-3', name: 'End-to-End Analysis' },
      { id: 'st-ds-proj-4', name: 'ML Model Integration' },
      { id: 'st-ds-proj-5', name: 'Dashboard Creation' },
    ],
    resourceIds: [], practiceItemIds: [], quizQuestionIds: ['q-ds-proj-3', 'q-ds-proj-4'],
  },
  {
    id: 't-ds-p7-3', phaseId: 'ds-p7', name: 'DS Portfolio', skill: 'Data Analysis', difficulty: 'Intermediate', estimatedHours: 10, weight: 30,
    subtopics: [
      { id: 'st-ds-proj-6', name: 'Showcasing Projects' },
      { id: 'st-ds-proj-7', name: 'Technical Blogging' },
    ],
    resourceIds: [], practiceItemIds: [], quizQuestionIds: ['q-ds-proj-5', 'q-ds-proj-6'],
  },

  // ── AI ENGINEER Phase 7: Projects ──
  {
    id: 't-ai-p7-1', phaseId: 'ai-p7', name: 'AI Project Planning', skill: 'NLP', difficulty: 'Advanced', estimatedHours: 15, weight: 30,
    subtopics: [
      { id: 'st-ai-proj-1', name: 'Problem Framing for AI' },
      { id: 'st-ai-proj-2', name: 'Data Strategy' },
      { id: 'st-ai-proj-3', name: 'Model Selection' },
    ],
    resourceIds: [], practiceItemIds: [], quizQuestionIds: ['q-ai-proj-1', 'q-ai-proj-2', 'q-ai-proj-3'],
  },
  {
    id: 't-ai-p7-2', phaseId: 'ai-p7', name: 'Building AI Systems', skill: 'Generative AI', difficulty: 'Advanced', estimatedHours: 30, weight: 40,
    subtopics: [
      { id: 'st-ai-proj-4', name: 'End-to-End AI Project' },
      { id: 'st-ai-proj-5', name: 'LLM Application' },
      { id: 'st-ai-proj-6', name: 'Evaluation & Metrics' },
    ],
    resourceIds: [], practiceItemIds: [], quizQuestionIds: ['q-ai-proj-4', 'q-ai-proj-5'],
  },
  {
    id: 't-ai-p7-3', phaseId: 'ai-p7', name: 'AI Portfolio', skill: 'NLP', difficulty: 'Advanced', estimatedHours: 10, weight: 30,
    subtopics: [
      { id: 'st-ai-proj-7', name: 'Showcasing AI Projects' },
      { id: 'st-ai-proj-8', name: 'Demo & Presentation' },
    ],
    resourceIds: [], practiceItemIds: [], quizQuestionIds: ['q-ai-proj-6', 'q-ai-proj-7'],
  },

  // ── AI ENGINEER Phase 8: Deployment & MLOps ──
  {
    id: 't-ai-p8-1', phaseId: 'ai-p8', name: 'Docker for AI', skill: 'Docker', difficulty: 'Advanced', estimatedHours: 12, weight: 30,
    subtopics: [
      { id: 'st-ai-dep-1', name: 'Containerizing ML Models' },
      { id: 'st-ai-dep-2', name: 'Docker Compose for AI' },
    ],
    resourceIds: [], practiceItemIds: [], quizQuestionIds: ['q-ai-dep-1', 'q-ai-dep-2', 'q-ai-dep-3'],
  },
  {
    id: 't-ai-p8-2', phaseId: 'ai-p8', name: 'Cloud Deployment', skill: 'AWS', difficulty: 'Advanced', estimatedHours: 15, weight: 35,
    subtopics: [
      { id: 'st-ai-dep-3', name: 'AWS for AI' },
      { id: 'st-ai-dep-4', name: 'API Endpoints' },
      { id: 'st-ai-dep-5', name: 'Serverless ML' },
    ],
    resourceIds: [], practiceItemIds: [], quizQuestionIds: ['q-ai-dep-4', 'q-ai-dep-5'],
  },
  {
    id: 't-ai-p8-3', phaseId: 'ai-p8', name: 'Monitoring & MLOps', skill: 'Docker', difficulty: 'Advanced', estimatedHours: 12, weight: 35,
    subtopics: [
      { id: 'st-ai-dep-6', name: 'Model Monitoring' },
      { id: 'st-ai-dep-7', name: 'CI/CD for AI' },
      { id: 'st-ai-dep-8', name: 'Model Retraining' },
    ],
    resourceIds: [], practiceItemIds: [], quizQuestionIds: ['q-ai-dep-6', 'q-ai-dep-7'],
  },
];
