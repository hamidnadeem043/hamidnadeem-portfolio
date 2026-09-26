export const personalData = {
  name: "Hamid Nadeem",
  firstName: "Hamid",
  lastName: "Nadeem",
  initials: "HN.",
  title: "Full Stack MERN Developer",
  subtitle: "Full Stack MERN Developer · React · Node.js · MongoDB",
  tagline: "Building production-ready web applications with clean code and real-world impact",
  location: "Lahore, Pakistan",
  statusBadge: "Open to Junior Roles & Internships",
  email: "hamidnadeemn043@gmail.com",
  github: "https://github.com/hamidnadeem043",
  linkedin: "https://linkedin.com/in/hamid-nadeem043",
  liveUrl: "https://hamidnadeem-portfolio.vercel.app",
  university: "Superior University, Lahore",
  degree: "BS Software Engineering",
  cgpa: "3.3",
  semester: "5th Semester Ongoing",
  resumePrimary: "Hamid_Nadeem_Resume.pdf",
  resumeSecondary: "Hamid_Nadeem_Resume_SE.pdf",
  bioParagraphs: [
    "I'm a BS Software Engineering student at Superior University, Lahore (CGPA: 3.3), currently in my 5th semester. I started my development journey through Apna College's full-stack program — building projects from the ground up until they actually worked.",
    "That foundation led me to two back-to-back internships where I worked on real production code: shipping full-stack MERN features at Decode Labs and building data-connected React interfaces at Oasis Infobyte.",
    "I build things I'm genuinely proud of — a freelance marketplace with Stripe payments and real-time messaging, an AI chatbot powered by the Gemini API, a blog CMS with JWT-protected routes, and an Inventory Management System with session auth and a polished glassmorphism UI."
  ],
  motto: "I see solutions where others see dead ends. Problem-solver by nature, loyal to the work, and I don't stop until it's fixed."
};

export const statsData = [
  { value: "3.3", label: "University CGPA", suffix: "" },
  { value: "2", label: "Internships Completed", suffix: "+" },
  { value: "8", label: "Projects Built", suffix: "+" },
  { value: "5th", label: "Semester Ongoing", suffix: "" },
];

export const experienceData = [
  {
    id: "exp-1",
    role: "MERN Stack Web Development Intern",
    company: "Decode Labs",
    location: "Remote",
    period: "May 2026 – Present",
    status: "Current Role",
    bullets: [
      "Built full-stack features using React, Node.js, Express, and MongoDB.",
      "Designed and documented RESTful API endpoints for internal and user-facing features.",
      "Resolved bugs across the full stack and participated in structured peer code reviews."
    ],
    techStack: ["React", "Node.js", "Express", "MongoDB", "REST APIs"]
  },
  {
    id: "exp-2",
    role: "Full-Stack Web Development Intern",
    company: "Oasis Infobyte",
    location: "Remote",
    period: "May 2026",
    status: "Completed",
    bullets: [
      "Built responsive React applications with modular component architecture.",
      "Integrated frontend views with backend REST endpoints for live data rendering and seamless state synchronization."
    ],
    techStack: ["React", "JavaScript ES6+", "HTML5/CSS3", "REST APIs"]
  }
];

export const skillsCategories = [
  {
    category: "Frontend",
    items: [
      { name: "React", icon: "⚛️", level: "Advanced" },
      { name: "Vite", icon: "⚡", level: "Advanced" },
      { name: "JavaScript ES6+", icon: "🟨", level: "Advanced" },
      { name: "HTML5", icon: "🔶", level: "Expert" },
      { name: "CSS3", icon: "🔷", level: "Expert" },
      { name: "Tailwind CSS", icon: "🌊", level: "Advanced" },
      { name: "Redux / Toolkit", icon: "🔮", level: "Intermediate" }
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
      { name: "JWT Auth", icon: "🔐", level: "Advanced" }
    ]
  },
  {
    category: "Payments & Media",
    items: [
      { name: "Stripe API", icon: "💳", level: "Intermediate" },
      { name: "Cloudinary", icon: "☁️", level: "Intermediate" },
      { name: "Gemini AI API", icon: "🤖", level: "Advanced" }
    ]
  },
  {
    category: "Tools & DevOps",
    items: [
      { name: "Git & GitHub", icon: "🔀", level: "Advanced" },
      { name: "Vercel", icon: "▲", level: "Advanced" },
      { name: "Railway", icon: "🚃", level: "Intermediate" },
      { name: "VS Code", icon: "💻", level: "Expert" },
      { name: "Linux Basics", icon: "🐧", level: "Intermediate" }
    ]
  },
  {
    category: "Languages",
    items: [
      { name: "JavaScript", icon: "🟨", level: "Advanced" },
      { name: "Python", icon: "🐍", level: "Intermediate" },
      { name: "Java", icon: "☕", level: "Academic" },
      { name: "C++", icon: "⚙️", level: "Academic" },
      { name: "SQL", icon: "🗃️", level: "Intermediate" }
    ]
  }
];

export const projectsData = [
  {
    id: "skillbridge",
    number: "Project 01",
    title: "SkillBridge",
    badge: "Featured Full-Stack",
    description: "Full freelance marketplace featuring real-time messaging via Socket.io, Stripe payment integration, JWT authentication, Cloudinary media management & user review system.",
    longDescription: "SkillBridge is a production-grade freelance ecosystem built with the MERN stack. It enables clients to post jobs, message freelancers in real time using WebSockets (Socket.io), process payments securely through Stripe API, and manage media uploads via Cloudinary. Features complete state management with Redux Toolkit and custom middleware.",
    tags: ["MERN", "Socket.io", "Stripe", "Redux", "Tailwind CSS"],
    category: "Full Stack",
    github: "https://github.com/hamidnadeem043",
    live: "https://skillbridge-gamma-eight.vercel.app",
    icon: "🏪",
    highlights: [
      "Real-time chat messaging with unread badges via Socket.io",
      "Secure payment checkout workflows integrated with Stripe API",
      "Cloudinary media file storage & image optimization",
      "Role-based access control (Client vs Freelancer dashboards)"
    ]
  },
  {
    id: "ai-chatbot",
    number: "Project 02",
    title: "AI Chatbot",
    badge: "AI Powered",
    description: "Real-time AI conversational engine powered by Google's Gemini API, complete with markdown rendering, streaming code snippets & persistent chat history.",
    longDescription: "Interactive AI assistant application built with React and Tailwind CSS. Connects directly to Google Gemini API to generate instant responses with formatted code blocks, custom syntax highlighting, and conversation history persistence in local storage.",
    tags: ["React", "Tailwind CSS", "Gemini API", "JavaScript ES6+"],
    category: "Frontend & AI",
    github: "https://github.com/hamidnadeem043",
    live: "https://ai-chatbot-react-tailwind.vercel.app",
    icon: "🤖",
    highlights: [
      "Gemini API integration with context retention",
      "Markdown & code syntax rendering",
      "Persistent conversation session history",
      "Clean dark mode UI built with Tailwind CSS"
    ]
  },
  {
    id: "inkwell",
    number: "Project 03",
    title: "Inkwell — Blog CMS",
    badge: "Full Stack CMS",
    description: "Full-stack blogging & CMS portal with JWT authentication, custom hooks, author management & complete CRUD operations backed by React Context API.",
    longDescription: "Inkwell is a modern blogging platform featuring rich content editing, JWT token authorization, protected routes, author profiles, and real-time post filtering. Designed with modular React patterns and MongoDB document schemas.",
    tags: ["MERN", "JWT Auth", "Context API", "Express", "MongoDB"],
    category: "Full Stack",
    github: "https://github.com/hamidnadeem043",
    live: "https://inkwell-blog-cms.vercel.app",
    icon: "📝",
    highlights: [
      "JWT cookie & header authentication strategy",
      "Full CRUD lifecycle for articles and author profiles",
      "Custom React hooks for data fetching and state sync",
      "Responsive glassmorphism dashboard UI"
    ]
  },
  {
    id: "inventory-system",
    number: "Project 04",
    title: "Inventory Management System",
    badge: "Backend & SQL",
    description: "Session-based admin authentication, product CRUD management, stock metrics, low-stock notifications & glassmorphism UI deployed on Railway.",
    longDescription: "Robust inventory tracking software built with Node.js, Express, and MySQL. Features session-based security, automated low-stock warnings, category filtering, and item metrics visualizers.",
    tags: ["Node.js", "Express", "MySQL", "EJS", "Railway"],
    category: "Backend & SQL",
    github: "https://github.com/hamidnadeem043",
    live: "https://inventory-management-system-production-1962.up.railway.app",
    icon: "📦",
    highlights: [
      "Relational schema with MySQL and express-session security",
      "Dynamic inventory analytics dashboard with low-stock warnings",
      "Multi-field search, pagination, and data export",
      "Hosted on Railway cloud platform"
    ]
  },
  {
    id: "simon-says",
    number: "Project 05",
    title: "Simon Says Game",
    badge: "Vanilla JavaScript",
    description: "Progressive interactive memory challenge with dynamic level scaling and audio-visual feedback built in pure vanilla JavaScript without external dependencies.",
    longDescription: "Classic Simon Says memory puzzle crafted with clean JavaScript ES6+, DOM manipulation, dynamic sequence generation, high score tracking, and keyboard/touch event handlers.",
    tags: ["Vanilla JS", "HTML5", "CSS3", "DOM API"],
    category: "Frontend",
    github: "https://github.com/hamidnadeem043",
    live: "https://github.com/hamidnadeem043",
    icon: "🎮",
    highlights: [
      "Zero dependency pure JS sequence generator",
      "Interactive audio tones and flash animations",
      "High score tracking and instant restart"
    ]
  }
];

export const extraProjects = [
  "To-Do App",
  "Pizza Delivery App",
  "Bus Reservation GUI (Java)",
  "Spotify UI Clone"
];

export const learningTopics = [
  { title: "Advanced React", desc: "Custom hooks, performance optimization & design patterns", icon: "⚛️" },
  { title: "Python", desc: "Scripting, automation & backend data pipelines", icon: "🐍" },
  { title: "Redux Advanced", desc: "Complex state management & async middleware", icon: "🔮" },
  { title: "System Design", desc: "Scalable architecture, caching & microservices", icon: "🏗️" },
  { title: "Docker", desc: "Containerization, environment isolation & CI/CD", icon: "🐳" },
  { title: "DSA", desc: "Data Structures & Algorithms in JavaScript", icon: "🧠" }
];

export const certsData = [
  { title: "Networking Basics", issuer: "Cisco Networking Academy", date: "May 2026", icon: "🌐" },
  { title: "GenAI Powered Data Analytics Simulation", issuer: "Tata / Forage", date: "May 2026", icon: "📊" },
  { title: "Front-End Software Engineering Simulation", issuer: "Skyscanner / Forage", date: "May 2026", icon: "💻" },
  { title: "Robotics & Controls Simulation", issuer: "Johnson & Johnson / Forage", date: "May 2026", icon: "🤖" },
  { title: "Prompt Engineering for Everyone", issuer: "Cognitive Class (IBM)", date: "May 2026", icon: "🧠" },
  { title: "Computer Foundations Certificate (Office 2019)", issuer: "Peak Solution College", date: "Oct 2022", icon: "🖥️" }
];

export const goalsData = [
  { emoji: "🏢", text: "Secure a full-time junior developer role at a product-focused company" },
  { emoji: "🌐", text: "Ship more production-grade, real-world full-stack applications" },
  { emoji: "🤝", text: "Contribute meaningfully to open-source projects and developer communities" },
  { emoji: "🤖", text: "Deepen expertise in AI-integrated web development & LLM APIs" },
  { emoji: "🧠", text: "Master DSA and system design fundamentals for technical excellence" }
];
