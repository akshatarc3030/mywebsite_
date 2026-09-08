import { CertificationItem, ProjectItem, SkillCategory, WorkflowStage } from '../types';

export const PERSONAL_INFO = {
  name: 'Akshata Chavan',
  avatarInitials: 'AC',
  title: 'AI & Data Science Student',
  subBadge: 'AI & DS @ REVA',
  academicStatus: '3rd-semester B.Tech Artificial Intelligence & Data Science student at REVA University',
  university: 'REVA University',
  degree: 'B.Tech — AI & Data Science',
  timeline: '2023 - 2027',
  standing: '3rd Semester (Pursuing)',
  location: 'Bangalore, Karnataka, India',
  email: 'akshatarc3030@gmail.com',
  githubUser: 'akshatarc3030',
  githubUrl: 'https://github.com/akshatarc3030',
  linkedinUser: 'Akshata Chavan',
  linkedinUrl: 'https://www.linkedin.com',
  campusAffiliation: 'School of Computing & IT',
  heroHeadline: 'Building intelligent solutions with',
  heroHighlight: 'code, data & AI.',
  heroBio:
    "Hi, I'm Akshata Chavan — a 3rd-semester B.Tech Artificial Intelligence & Data Science student at REVA University, passionate about Python, AI, Data Science, and building practical technology solutions that solve real-world problems.",
  heroFootnote: 'Currently pursuing B.Tech in Artificial Intelligence & Data Science • Bangalore',
  aboutParagraph1:
    "I'm an Artificial Intelligence & Data Science student currently pursuing my B.Tech at REVA University. I genuinely enjoy tackling programming challenges, exploring data patterns, and transforming conceptual ideas into functioning prototypes.",
  aboutParagraph2:
    'Currently, I am strengthening my engineering foundations in C and Python while actively exploring exploratory data analysis, machine learning algorithms, and real-world system designs like automated smart sensors and graphics tooling.',
  disciplines: [
    'Artificial Intelligence',
    'Data Science',
    'Machine Learning',
    'Systems Programming',
  ],
  academicChips: ['Python 3.x', 'C Language', 'Git & GitHub', 'VS Code'],
};

export const WORKFLOW_STAGES: WorkflowStage[] = [
  {
    step: 'STAGE 01',
    title: 'Data Ingestion',
    description: 'Cleaning & wrangling',
  },
  {
    step: 'STAGE 02',
    title: 'Feature Logic',
    description: 'Transforms & metrics',
  },
  {
    step: 'STAGE 03',
    title: 'Model Training',
    description: 'Evaluation & iteration',
  },
  {
    step: 'STAGE 04',
    title: 'Application',
    description: 'IoT & smart outputs',
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'core-programming',
    title: 'Programming',
    code: '01 / CORE',
    iconName: 'code',
    skills: [
      {
        name: 'C Language',
        tag: 'System-Level',
        description:
          'Memory management, pointers, dynamic allocations, struct definitions, and algorithmic logic.',
      },
      {
        name: 'Python',
        tag: 'Data & Automation',
        description:
          'Exploratory data analysis, automation scripts, functional programming, and practical library usage.',
      },
      {
        name: 'Python Fundamentals',
        tag: 'Object Oriented',
        description:
          'OOP principles, modular code organization, clean syntax conventions, and file I/O operations.',
      },
    ],
  },
  {
    id: 'ai-data-science',
    title: 'AI & Data Science',
    code: '02 / DOMAIN',
    iconName: 'brain',
    skills: [
      {
        name: 'Data Science',
        description:
          'Exploratory Data Analysis (EDA), dataset wrangling, statistical summaries.',
      },
      {
        name: 'Machine Learning',
        description:
          'Supervised and unsupervised concept modeling, regression, classification setups.',
      },
      {
        name: 'AI App Dev',
        description:
          'Rapid prototyping, end-to-end user logic, sensor-driven triggers.',
      },
      {
        name: 'Solution Design',
        description:
          'Translating ambiguous everyday problems into AI/IoT architectural flows.',
      },
    ],
  },
  {
    id: 'dev-tools',
    title: 'Development Tools',
    code: '03 / TOOLCHAIN',
    iconName: 'tool',
    skills: [
      {
        name: 'GitHub & Version Control',
        description:
          'Branch management, commits, repository maintenance, collaborative code workflows.',
      },
      {
        name: 'Visual Studio Code',
        description:
          'Custom development environment, integrated debugging, C/C++ tooling, Python linters.',
      },
    ],
  },
  {
    id: 'problem-solving',
    title: 'Problem Solving',
    code: '04 / DISCIPLINE',
    iconName: 'zap',
    skills: [
      {
        name: 'Debugging & Code Tracing',
        description:
          'Systematic runtime error diagnosis, memory leak identification, and step-through analysis.',
      },
      {
        name: 'Programming Logic',
        description:
          'Translating human specifications into algorithmic branches, loops, and structured data layouts.',
      },
      {
        name: 'Technical Documentation',
        description:
          'Writing concise project architecture READMEs, functional comments, and user documentation.',
      },
    ],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'preservx',
    title: 'PreservX — AI Refrigerator Expiry Tracking',
    subtitle: 'Automated Food Waste Prevention with Computer Vision & Proactive Alerts',
    category: 'AI + IOT + SMART HOME',
    year: '2024',
    tag: 'AI + IOT + SMART HOME • 2024',
    type: 'ai-iot',
    description:
      'An AI-based application concept designed to automate refrigerator item-expiry tracking. The system uses AI and sensors to identify stored items, track expiration parameters, and send proactive notifications to users to drastically minimize household food waste.',
    tags: ['AI Logic', 'Sensors', 'Automation', 'Notification System'],
  },
  {
    id: 'graphics-editor-c',
    title: '2D Graphics Editor in C',
    subtitle: 'Low-Level Geometric Canvas with Custom Dynamic Memory Buffers',
    category: 'C PROGRAMMING',
    tag: 'CLI / Software',
    type: 'c-graphics',
    description:
      'A menu-driven graphics editor concept built using a 2D character-array canvas. Supports dynamic drawing and managing geometric shapes including circles, rectangles, lines, and triangles via low-level memory operations.',
    tags: ['C Language', '2D Arrays', 'Pointers', 'Structures'],
  },
  {
    id: 'smart-irrigation',
    title: 'Smart Auto Irrigation System',
    subtitle: 'Microcontroller Soil-Moisture Monitoring & Automated Pump Relays',
    category: 'INTERNET OF THINGS',
    tag: 'Embedded Hardware',
    type: 'iot-hardware',
    description:
      'An IoT-based automatic irrigation system using NodeMCU, soil-moisture sensors, and motor relays. Continuously tracks soil hydration levels and triggers automated water pump activation while streaming diagnostics to a mobile application.',
    tags: ['NodeMCU ESP8266', 'Soil Sensor', 'Motor Relay', 'Mobile UI'],
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: 'ibm-python-ds',
    title: 'Python in Data Science',
    issuer: 'IBM & Wadhwani Foundation',
    status: 'Completed',
    badgeCategory: 'IBM OFFICIAL',
    description:
      'Core scientific computing, numerical Python, structured exploratory data analysis routines, and fundamental machine learning pipeline integration.',
    competencies: ['NumPy & Pandas', 'Data Structures', 'EDA Pipelines'],
    credentialUrl: '#',
  },
  {
    id: 'data-vis-python',
    title: 'Data Visualization with Python',
    issuer: 'Academic & Applied Coursework',
    status: 'Verified',
    badgeCategory: 'VISUALIZATION',
    description:
      'Transforming raw complex datasets into communicative visual narratives, statistical plots, correlation charts, and interactive dash representations.',
    competencies: ['Matplotlib', 'Seaborn', 'Statistical Plots', 'Data Storytelling'],
    footerNote: 'Matplotlib & Seaborn Specialist Curriculum',
  },
  {
    id: 'python-data-eng',
    title: 'Python in Data Science',
    issuer: 'Structured Analytical Coursework',
    status: 'Coursework',
    badgeCategory: 'DATA ENGINEERING',
    description:
      'Data wrangling techniques, dealing with missing dimensions, outlier detection, aggregations, grouping operations, and hypothesis exploration.',
    competencies: ['Data Wrangling', 'DataFrame Indexing', 'Statistical Tests'],
    footerNote: 'Exploratory & Inferential Data Analysis',
  },
  {
    id: 'wadhwani-foundation',
    title: 'Wadhwani Foundation',
    issuer: 'Job-Ready Skills & Tech Program',
    status: 'Enrolled',
    badgeCategory: 'FOUNDATION INITIATIVE',
    description:
      'Industry-aligned technical foundation modules, professional problem solving, algorithmic thinking, and collaborative modern software engineering principles.',
    competencies: ['Industry Readiness', 'Problem Breakdown', 'Professional Tech Practices'],
    footerNote: 'Wadhwani Opportunity Coursework Track',
  },
];
