export const personalData = {
  name: "Hamid Nadeem",
  firstName: "Hamid",
  lastName: "Nadeem",
  initials: "HN.",
  photo: "/profile.png",
  fallbackPhoto: "https://github.com/hamidnadeem043.png",
  title: "AI Automation Engineer & Full-Stack AI Engineer",
  subtitle: "AI Automation Engineer · Full-Stack AI Developer · Python, Django & MERN",
  tagline: "Architecting autonomous AI workflows, LLM-integrated platforms, and scalable full-stack applications with Python, Django, React, and Gemini API.",
  location: "Lahore, Pakistan",
  statusBadge: "AI Automation & Full-Stack · Open to Roles",
  openTo: "Open to roles as an AI Automation Engineer, Full-Stack AI Engineer, and Python Backend Developer.",
  email: "hamidnadeemn043@gmail.com",
  github: "https://github.com/hamidnadeem043",
  linkedin: "https://linkedin.com/in/hamid-nadeem043",
  liveUrl: "https://hamidnadeem-portfolio.vercel.app",
  siteRepo: "https://github.com/hamidnadeem043/hamidnadeem-portfolio",
  university: "Superior University, Lahore",
  degree: "BS Software Engineering",
  cgpa: "3.26",
  semester: "5th Semester Ongoing",
  resumePrimary: "/Hamid_Nadeem_Resume.pdf",
  resumeSecondary: "/Hamid_Nadeem_Resume_SE.pdf",
  bioParagraphs: [
    "I'm a BS Software Engineering student at Superior University in Lahore (CGPA 3.26, 5th semester), focused on architecting intelligent AI automation workflows and scalable full-stack web applications.",
    "My development journey began through Apna College's intensive full-stack program and grew through hands-on industry experience — currently interning on-site as a MERN Stack Developer at IIFA Tech and previously completing an internship at Decode Labs.",
    "My core technical drive is bridging Full-Stack Engineering with AI Automation: building intelligent conversational agents on Google's Gemini API, developing Python automation scripts for data validation and cleaning, constructing Django backend architectures, and deploying production web platforms with real-time WebSockets and Stripe checkout."
  ],
  motto: "I see solutions where others see dead ends. Problem-solver by nature, loyal to the work, and I don't stop until it's fixed."
};

export const nowData = [
  {
    kind: "live",
    title: "AI Automation & LLMs",
    text: "Designing automated workflows, prompt chains, and intelligent conversational tools with Google Gemini API.",
  },
  {
    kind: "building",
    title: "Python & Django Backend",
    text: "Building the backend for Job Portal and engineering Python data validation and transformation pipelines.",
  },
  {
    kind: "live",
    title: "MERN Intern @ IIFA Tech",
    text: "On-site full-stack development since June 2026, building REST APIs and React features.",
  },
];

export const statsData = [
  { value: "3.26", label: "University CGPA", suffix: "" },
  { value: "2", label: "Internships Completed", suffix: "" },
  { value: "8+", label: "Top GitHub Projects", suffix: "" },
  { value: "5th", label: "Semester Ongoing", suffix: "" },
];

export const experienceData = [
  {
    id: "exp-1",
    role: "MERN Stack Intern",
    company: "IIFA Tech",
    location: "On-site · Lahore",
    period: "June 2026 – Present",
    status: "Current Role",
    bullets: [
      "Building full-stack features with the MERN stack and REST API endpoints, and taking part in structured code reviews.",
      "Worked through structured assignments in advanced JavaScript and React: hooks, custom hooks, Context API, routing, API calls, Redux Toolkit and performance optimization."
    ],
    techStack: ["React", "Node.js", "Express", "MongoDB", "Redux Toolkit", "REST APIs"]
  },
  {
    id: "exp-2",
    role: "Full-Stack Web Development Intern",
    company: "Decode Labs",
    location: "Remote",
    period: "May 18 – June 18, 2026",
    status: "Completed",
    bullets: [
      "Built full-stack features with React, Node.js, Express and MongoDB.",
      "Designed REST API endpoints, fixed bugs across the stack and took part in structured code reviews."
    ],
    techStack: ["React", "Node.js", "Express", "MongoDB", "REST APIs"]
  }
];

export const skillsCategories = [
  {
    category: "AI & Automation",
    items: [
      { name: "Gemini API", icon: "🤖", level: "LLM Integration" },
      { name: "AI Automation", icon: "⚡", level: "Workflow Design" },
      { name: "Prompt Engineering", icon: "🧠", level: "IBM Certified" },
      { name: "Python Automation", icon: "🐍", level: "Scripting & Pipelines" },
      { name: "Data Cleaning", icon: "📊", level: "CSV/JSON Validation" }
    ]
  },
  {
    category: "Python & Django",
    items: [
      { name: "Python", icon: "🐍", level: "OOP, Scripts & Logic" },
      { name: "Django", icon: "🎯", level: "MVT & Models" },
      { name: "Django Auth", icon: "🔐", level: "Sessions & Users" },
      { name: "SQLite / ORM", icon: "🗃️", level: "Migrations & Schemas" },
      { name: "Pillow", icon: "🖼️", level: "Media Processing" }
    ]
  },
  {
    category: "Frontend",
    items: [
      { name: "React", icon: "⚛️", level: "Advanced" },
      { name: "Tailwind CSS", icon: "🌊", level: "Advanced" },
      { name: "Redux Toolkit", icon: "🔮", level: "Intermediate" },
      { name: "Context API", icon: "⚡", level: "Advanced" },
      { name: "React Router", icon: "🚦", level: "Advanced" },
      { name: "JavaScript ES6+", icon: "🟨", level: "Advanced" },
      { name: "HTML5 & CSS3", icon: "🎨", level: "Expert" },
      { name: "Vite", icon: "⚡", level: "Advanced" }
    ]
  },
  {
    category: "Backend & Database",
    items: [
      { name: "Node.js", icon: "🟩", level: "Advanced" },
      { name: "Express.js", icon: "🚂", level: "Advanced" },
      { name: "MongoDB", icon: "🍃", level: "Advanced" },
      { name: "MySQL", icon: "🐬", level: "Intermediate" },
      { name: "Socket.io", icon: "🔌", level: "Intermediate" },
      { name: "JWT Auth", icon: "🔐", level: "Advanced" },
      { name: "REST APIs", icon: "🔗", level: "Advanced" }
    ]
  },
  {
    category: "Cloud, Payments & Tools",
    items: [
      { name: "Stripe API", icon: "💳", level: "Payments Flow" },
      { name: "Cloudinary", icon: "☁️", level: "Media Management" },
      { name: "Vercel", icon: "▲", level: "Deployment" },
      { name: "Railway", icon: "🚃", level: "Persistent Servers" },
      { name: "Git & GitHub", icon: "🔀", level: "Version Control" },
      { name: "Docker", icon: "🐳", level: "Studying" },
      { name: "System Design", icon: "🏗️", level: "Studying" }
    ]
  }
];

export const projectsData = [
  {
    id: "ai-chatbot",
    number: "Project 01",
    title: "AI Chatbot & Assistant",
    badge: "AI Powered · Gemini API",
    description: "An intelligent conversational engine built with React, Tailwind CSS and Google Gemini API with markdown rendering, search across past chats, and persistent history.",
    longDescription: "Interactive AI assistant connecting directly to Google's Gemini API. Features live streaming markdown rendering for code and formatted text, a conversation history sidebar with search across past chats, and full localStorage persistence.",
    tags: ["Gemini API", "AI Automation", "React", "Tailwind CSS", "Vite"],
    category: "Frontend & AI",
    github: "https://github.com/hamidnadeem043/gemini-chatbot-react-tailwind",
    live: "https://ai-chatbot-react-tailwind.vercel.app",
    icon: "🤖",
    note: "Flagship project illustrating real-world LLM API integration and AI assistant UX.",
    highlights: [
      "Direct integration with Google's Gemini API for low-latency intelligent responses",
      "Styled markdown rendering with syntax-highlighted code blocks",
      "Sidebar conversation drawer with full-text search across past chats",
      "Client-side persistence across sessions using localStorage"
    ]
  },
  {
    id: "skillbridge",
    number: "Project 02",
    title: "SkillBridge",
    badge: "Full-Stack MERN Flagship",
    description: "Full freelance marketplace in the style of Fiverr with real-time Socket.io chat, Stripe payments, JWT auth, and Cloudinary media.",
    longDescription: "SkillBridge is a production-grade freelance marketplace built with the MERN stack. Buyers and sellers can browse gigs, exchange real-time messages via WebSockets (Socket.io), pay securely through Stripe Elements, and leave reviews. The API is hosted on Railway for persistent WebSocket connections, while the frontend is deployed on Vercel.",
    tags: ["React", "Redux Toolkit", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Socket.io", "Stripe", "Cloudinary"],
    category: "Full Stack",
    github: "https://github.com/hamidnadeem043/skillbridge",
    live: "https://skillbridge-gamma-eight.vercel.app",
    icon: "🏪",
    note: "Stripe runs in test mode, because Stripe does not support payouts in Pakistan.",
    highlights: [
      "Real-time chat messaging with unread badges powered by Socket.io",
      "End-to-end card payment flow integrated with Stripe Elements and Payment Intents",
      "JWT authentication stored in httpOnly cookies across Vercel & Railway domains",
      "Media management and image transformations with Cloudinary",
      "Optimized schema: orders store both buyer and seller IDs to eliminate redundant joins"
    ],
    decisions: [
      {
        title: "API runs on Railway, not Vercel",
        text: "Socket.io needs a server that stays connected. Vercel's serverless functions start per request, so the backend needed an always-on host."
      },
      {
        title: "Cookies across two domains",
        text: "Frontend and API live on different domains, so JWT cookie required sameSite none and secure, with CORS allowed on both Express and Socket.io."
      },
      {
        title: "Orders store both user IDs",
        text: "Each order keeps the buyer ID and the seller ID, which saves a lookup through the gig on every read."
      }
    ]
  },
  {
    id: "django-blog",
    number: "Project 03",
    title: "Django Blog & User Engine",
    badge: "Python & Django",
    description: "Full-stack blog platform built with Python & Django featuring user registration/login, MVT architecture, post CRUD, Pillow image uploads, and SQLite database.",
    longDescription: "A comprehensive Django web application built with Python. Features user registration, authentication (login/logout), post listing and detail pages, dynamic image uploads via Pillow, customized Django admin panel, and MVT (Model-View-Template) architecture with SQLite relational database.",
    tags: ["Python", "Django", "SQLite", "Pillow", "MVT Architecture", "Auth"],
    category: "Python & Django",
    github: "https://github.com/hamidnadeem043/Beginner-Django-blog-learning-project",
    live: "",
    icon: "🐍",
    note: "Built to master Python backend development, Django MVT architecture, database migrations, and authentication workflows.",
    highlights: [
      "Django MVT architecture with modular posts and users applications",
      "User authentication workflows: registration, login, and secure session logout",
      "Dynamic media handling with Pillow image processing and uploads",
      "Django ORM migrations with SQLite relational data schema"
    ]
  },
  {
    id: "python-cleaner",
    number: "Project 04",
    title: "Python Data Cleaner & Reporter",
    badge: "Python Automation",
    description: "Python automation script that ingests malformed CSVs, validates records, handles missing data, logs execution, and outputs clean CSVs with JSON audit reports.",
    longDescription: "An automated Python data cleaning and validation tool developed with OOP principles. Ingests raw, malformed CSV datasets, normalizes fields, trims anomalies, handles missing values, writes comprehensive process logs to cleaner.log, and generates both cleaned CSV files and detailed structured JSON audit reports.",
    tags: ["Python", "OOP", "Data Validation", "File Handling", "Logging", "Automation"],
    category: "Python & Django",
    github: "https://github.com/hamidnadeem043/Data-Cleaner-mini-python-project",
    live: "",
    icon: "📊",
    note: "Demonstrates Python scripting, decorators, logging, error handling, and structured data transformation pipelines.",
    highlights: [
      "Automated ingestion and normalization of dirty CSV records",
      "Generates structured JSON validation reports and audit logs",
      "Object-oriented design with modular transformation functions",
      "Comprehensive file handling, data sanitization, and logging to cleaner.log"
    ]
  },
  {
    id: "job-portal",
    number: "Project 05",
    title: "Job Portal",
    badge: "Frontend · Django Backend Next",
    description: "A job board with separate seeker and recruiter sides featuring job listings, application workflows, and recruiter management.",
    longDescription: "A comprehensive job board application with dual-sided user flows for job seekers and recruiters. Built with React, Tailwind CSS, and React Router. Complete frontend running on sample data with an auth context and reusable components, with Python & Django backend in active development.",
    tags: ["React", "Tailwind CSS", "React Router", "Context API", "Python & Django Backend"],
    category: "Python & Django",
    github: "https://github.com/hamidnadeem043/JOB-PORTAL",
    live: "",
    icon: "💼",
    note: "The frontend is complete and runs on sample data. There is no server yet. I'm learning Python and Django to build it.",
    highlights: [
      "Job listing and job detail pages with search and category filtering",
      "Seeker side: user dashboard, profile management, and submitted application tracker",
      "Recruiter side: post new jobs, edit existing postings, manage listings, and review applicants",
      "Modular component architecture with Auth Context state handling"
    ]
  },
  {
    id: "nexchat",
    number: "Project 06",
    title: "NexChat — Workspace Group Chat",
    badge: "Full Stack & Multi-Tenant",
    description: "A workspace-based group chat web app built with Node.js, Express, MongoDB & EJS featuring multi-tenant project workspaces and cookie auth.",
    longDescription: "NexChat is a collaborative workspace chat application built with Node.js, Express, MongoDB, and EJS. Features multi-tenant project workspaces, cookie-based authentication, and client-side message threading for organized team communication.",
    tags: ["Node.js", "Express", "MongoDB", "EJS", "Multi-Tenant", "Cookie Auth"],
    category: "Full Stack",
    github: "https://github.com/hamidnadeem043/nexchat-group-chat-app",
    live: "",
    icon: "💬",
    note: "Built to explore multi-tenant data architecture and workspace scoping in MongoDB.",
    highlights: [
      "Multi-tenant workspace architecture with project isolation",
      "Secure cookie-based user session authentication",
      "Organized message threads and room communication",
      "Responsive templating built with EJS and server-side routes"
    ]
  },
  {
    id: "inkwell",
    number: "Project 07",
    title: "Inkwell — Blog CMS",
    badge: "Full Stack CMS",
    description: "A blog CMS with a React frontend and an Express REST API featuring JWT auth, personal dashboard, editor, and date-sorted feed.",
    longDescription: "Inkwell is a modern blogging content management system. Features user registration and login with JWT, a personal dashboard to edit and delete posts and drafts, an author editor for composing articles, and a public feed sorted chronologically.",
    tags: ["React", "Express", "Node.js", "JWT Auth", "Context API"],
    category: "Full Stack",
    github: "https://github.com/hamidnadeem043/Inkwell-Blog-CMS",
    live: "https://inkwell-blog-cms.vercel.app",
    icon: "📝",
    note: "The API keeps data in memory, so posts reset when the server restarts. Adding a database is the next step.",
    highlights: [
      "User authentication and protected routes implemented with JWT",
      "Personal author dashboard to manage posts, draft articles, and delete content",
      "Rich content composition editor with date-sorted public article feed",
      "Auth state handled seamlessly with React Context API"
    ]
  },
  {
    id: "inventory",
    number: "Project 08",
    title: "Inventory Management System",
    badge: "Backend & SQL",
    description: "An admin app for tracking products and stock with session auth, low stock alerts (< 10), category filtering, and Railway deployment.",
    longDescription: "An administrative web application for tracking products, quantities, and stock levels. Built with Node.js, Express, and MySQL, with server-rendered EJS templates and deployed on Railway. Features admin login with express-session, dynamic low-stock alerts, and a glassmorphism interface.",
    tags: ["Node.js", "Express", "MySQL", "EJS", "Railway"],
    category: "Backend & SQL",
    github: "https://github.com/hamidnadeem043/Inventory-Management-System",
    live: "https://inventory-management-system-production-1962.up.railway.app",
    icon: "📦",
    note: "Server-rendered with EJS on a MySQL database. Hosted on Railway.",
    highlights: [
      "Admin login secured with express-session and relational MySQL database",
      "Add, edit, and delete products with search by name and category filtering",
      "Automated low-stock visual warning triggers for quantities under 10",
      "Dashboard with live inventory counts and glassmorphism interface deployed on Railway"
    ]
  }
];

export const extraProjects = [
  "Bus Reservation System (GUI Desktop Java)",
  "Bus Reservation System (DSA C++)",
  "Bank Management System (C++)",
  "Weather App API (JavaScript)",
  "Pizza Delivery App (React / OIBSIP)",
  "Simon Says Game (Vanilla JavaScript ES6+)",
  "Spotify UI Clone (HTML5 & CSS3)"
];

// Project-Skill Matrix
export const matrixProjects = [
  { id: "ai", short: "AI Chatbot" },
  { id: "sb", short: "SkillBridge" },
  { id: "dj", short: "Django Blog" },
  { id: "py", short: "Data Cleaner" },
  { id: "jp", short: "Job Portal" },
  { id: "nex", short: "NexChat" },
  { id: "ink", short: "Inkwell" },
  { id: "inv", short: "Inventory" },
];

export const matrix = [
  { skill: "Gemini API & LLMs", used: ["ai"] },
  { skill: "Python Automation", used: ["py", "dj"] },
  { skill: "Django Framework", used: ["dj"] },
  { skill: "React & Next Patterns", used: ["ai", "sb", "jp", "ink"] },
  { skill: "Tailwind CSS", used: ["ai", "sb", "jp"] },
  { skill: "Redux Toolkit", used: ["sb"] },
  { skill: "Node.js & Express", used: ["sb", "ink", "inv", "nex"] },
  { skill: "MongoDB & Mongoose", used: ["sb", "nex"] },
  { skill: "MySQL & SQLite", used: ["inv", "dj"] },
  { skill: "JWT & Cookie Auth", used: ["sb", "ink"] },
  { skill: "Socket.io WebSockets", used: ["sb"] },
  { skill: "Stripe Checkout", used: ["sb"] },
  { skill: "Cloudinary CDN", used: ["sb"] },
  { skill: "Vercel & Railway Cloud", used: ["ai", "sb", "ink", "inv"] },
];

export const matrixNote =
  "Matrix reflects shipped codebase implementations. Internship work at IIFA Tech and Decode Labs also leveraged React, Node.js, Express, MongoDB and REST APIs.";

export const learningTopics = [
  {
    title: "AI Automation & Agents",
    desc: "Autonomous workflow design, multi-step LLM chains, Gemini API integration, and agentic tool-use.",
    icon: "🤖",
    state: "Active Focus"
  },
  {
    title: "Python & Data Pipelines",
    desc: "Advanced OOP, decorators, generators, data cleaning scripts, CSV/JSON validation, and process logging.",
    icon: "🐍",
    state: "Production Ready"
  },
  {
    title: "Django Backend Architecture",
    desc: "MVT pattern, ORM data modeling, user authentication, Pillow media processing, and SQLite/PostgreSQL.",
    icon: "🎯",
    state: "Building"
  },
  {
    title: "Full-Stack MERN & WebSockets",
    desc: "React 19, Redux Toolkit, Node.js, Express, MongoDB, Socket.io real-time chat, and Stripe payments.",
    icon: "⚛️",
    state: "Shipped & Tested"
  },
  {
    title: "System Design & Scale",
    desc: "Scalable APIs, caching layers, microservices, connection persistence, and distributed state.",
    icon: "🏗️",
    state: "Studying"
  },
  {
    title: "Docker & Containerization",
    desc: "Containerization, environment isolation, Dockerfiles, and cloud deployment on Vercel & Railway.",
    icon: "🐳",
    state: "Hands-on Practice"
  }
];

export const certsData = [
  {
    title: "Networking Basics",
    issuer: "Cisco Networking Academy",
    date: "May 2026",
    icon: "🌐",
    simulation: false
  },
  {
    title: "Prompt Engineering for Everyone",
    issuer: "Cognitive Class (IBM)",
    date: "May 2026",
    icon: "🧠",
    simulation: false
  },
  {
    title: "Front-End Software Engineering",
    issuer: "Skyscanner on Forage",
    date: "May 2026",
    icon: "💻",
    simulation: true
  },
  {
    title: "GenAI Powered Data Analytics",
    issuer: "Tata on Forage",
    date: "May 2026",
    icon: "📊",
    simulation: true
  },
  {
    title: "Robotics & Controls Simulation",
    issuer: "Johnson & Johnson on Forage",
    date: "May 2026",
    icon: "🤖",
    simulation: true
  },
  {
    title: "Computer Foundations Certificate (Office 2019)",
    issuer: "Peak Solution College",
    date: "Oct 2022",
    icon: "🖥️",
    simulation: false
  }
];

export const goalsData = [
  {
    emoji: "🤖",
    title: "AI Automation Engineering",
    text: "Architect autonomous agent pipelines, intelligent workflow orchestrations, and LLM API integrations with Python"
  },
  {
    emoji: "🚀",
    title: "Full-Stack AI Products",
    text: "Ship end-to-end applications that merge real-time streaming AI, vector search, and responsive user interfaces"
  },
  {
    emoji: "🐍",
    title: "Django & Python Scale",
    text: "Scale robust backend architectures using Django, asynchronous workers, and relational database systems"
  },
  {
    emoji: "🏢",
    title: "High-Impact Roles",
    text: "Secure an AI Automation Engineer or Full-Stack AI Engineer role at a forward-thinking, product-driven company"
  },
  {
    emoji: "🤝",
    title: "Open Source AI & Community",
    text: "Contribute to and release open-source developer tools, AI automation templates, and reusable software"
  },
  {
    emoji: "🧠",
    title: "Systems & ML Engineering",
    text: "Deepen mastery in distributed systems, prompt engineering architectures, and scalable inference"
  }
];
