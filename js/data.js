/* =========================================================================
   data.js
   All editable content lives here. Add, remove, or edit entries in these
   arrays/objects and the page will re-render automatically — no need to
   touch index.html or main.js for routine content updates.
   ========================================================================= */

// ---------------------------------------------------------------------------
// Profile / hero stats
// ---------------------------------------------------------------------------
const PROFILE = {
  name: "Jewel Hart P. Arconeda",
  nickname: "Kei",
  role: "Programmer | IT Developer | Technical Support",
  intro:
    "I build functional, user-focused web applications and IT solutions while continuously improving my skills in software development, system administration, and technical support.",
  location: "Solano, Nueva Vizcaya, Philippines",
  email: "arconedaj@gmail.com",
  github: "https://github.com/keikcy",
  linkedin: "https://www.linkedin.com/in/jewel-hart-arconeda-b712203aa",
  facebook: "", // add your Facebook profile URL here to show the icon
  resumePdf: "assets/resume/Jewel Hart Arconeda (8.5 x 11 in).pdf",
};

const STATS = [
  { number: 3, suffix: "+", label: "Years of Learning" },
  { number: 12, suffix: "+", label: "Projects Completed" },
  { number: 15, suffix: "+", label: "Technologies Used" },
  { number: 6, suffix: "+", label: "Certificates Earned" },
];

// ---------------------------------------------------------------------------
// Skills — grouped by category. `level` is 0-100 for the progress indicator.
// ---------------------------------------------------------------------------
const SKILL_GROUPS = [
  {
    category: "Programming & Development",
    icon: "code-2",
    skills: [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
      { name: "JavaScript", level: 80 },
      { name: "PHP", level: 88 },
      { name: "C#", level: 65 },
      { name: "Java", level: 60 },
      { name: "Visual Basic", level: 55 },
    ],
  },
  {
    category: "Database",
    icon: "database",
    skills: [
      { name: "MySQL", level: 85 },
      { name: "SQL", level: 80 },
      { name: "Navicat", level: 70 },
      { name: "Database Management", level: 78 },
    ],
  },
  {
    category: "Frameworks / Tools",
    icon: "wrench",
    skills: [
      { name: "Bootstrap", level: 85 },
      { name: "Git", level: 75 },
      { name: "GitHub", level: 78 },
      { name: "Visual Studio Code", level: 90 },
      { name: "XAMPP", level: 82 },
    ],
  },
  {
    category: "IT & Technical Support",
    icon: "life-buoy",
    skills: [
      { name: "Computer Troubleshooting", level: 88 },
      { name: "Hardware Installation", level: 80 },
      { name: "Software Troubleshooting", level: 85 },
      { name: "Networking", level: 65 },
      { name: "Technical Support", level: 88 },
      { name: "System Maintenance", level: 78 },
    ],
  },
  {
    category: "Professional & Soft Skills",
    icon: "user-check",
    skills: [
      { name: "Fast Typing / Data Entry", level: 88 },
      { name: "MS Office / Google Workspace", level: 85 },
      { name: "Customer Handling", level: 82 },
      { name: "Time Management", level: 80 },
      { name: "Critical Thinking", level: 85 },
      { name: "Attention to Detail", level: 90 },
    ],
  },
];

// ---------------------------------------------------------------------------
// Languages spoken
// ---------------------------------------------------------------------------
const LANGUAGES = [
  { name: "English", level: "Intermediate" },
  { name: "Tagalog/Filipino", level: "Proficient" },
  { name: "Iloco", level: "Proficient" },
];

// ---------------------------------------------------------------------------
// Projects — add a new object to this array to add a new project card.
// image: path to a screenshot (placeholder shown if the file is missing)
// github / demo: leave as "" to hide that button
// ---------------------------------------------------------------------------
const PROJECTS = [
  {
    name: "Commonly used Supplies Inventory Management System (CSEMS)",
    category: "System Development",
    description:
      "A PHP/MariaDB inventory system for the SBO office with barcode-based pull-out scanning, restock request workflows, role-based access for admin and employee sides, and Excel exports formatted to match the office's physical government form.",
    tech: ["PHP", "MySQL/MariaDB", "Bootstrap 5", "XAMPP", "PhpSpreadsheet"],
    image: "assets/images/CSEMS.png",
    github: "https://keikcy.github.io/csems-prototype/",
    demo: "",
  },
  {
    name: "Client Satisfaction Survey System (CSSS)",
    category: "Kiosk / System Development",
    description:
      "A PHP-based kiosk visitor feedback system designed for tablet use, featuring animated SVG emoji ratings, responsive landscape UI, AI-powered sentiment analysis and automatic summary generation of rating results, with Excel reporting powered by PhpSpreadsheet.",
    tech: ["PHP", "JavaScript", "MySQL", "SVG Animation", "Ollama AI", "PhpSpreadsheet"],
    image: "assets/images/CSSS.png",
    github: "https://keikcy.github.io/csss-prototype/",
    demo: "",
  },
  {
    name: "E-Legislative Tracking System QR-CODE (ELTS)",
    category: "System Development",
    description:
      "A PHP/PDO/MySQL-based legislative document management system featuring QR code generation, scanned document uploads, document tracking, AI-powered auto-summary generation using a locally hosted Ollama model, duplicate detection, and meeting and committee management.",
    tech: ["PHP", "PDO", "MySQL", "Ollama AI", "PhpSpreadsheet"],
    image: "assets/images/ELTS.png",
    github: "https://keikcy.github.io/elts-prototype/",
    demo: "",
  },
  {
    name: "Personal / Other Web Projects",
    category: "Miscellaneous",
    description:
      "Smaller experiments, freelance work, and practice builds — this card is a placeholder area for anything added outside the main system projects.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "assets/images/project-other.jpg",
    github: "https://github.com/keikcy",
    demo: "",
  },
];

// ---------------------------------------------------------------------------
// Certificates — add a new object here for each certificate.
// image should point to the certificate scan/photo.
// ---------------------------------------------------------------------------
const CERTIFICATES = [
  {
    title: "Course Completion in Network Support and Security",
    issuer: "Cisco Networking Academy",
    date: "March 28 – April 12, 2026",
    description:
      "Covered network support fundamentals, troubleshooting, and core security concepts.",
    image: "assets/certificates/Network Support and Security.PNG",
    category: "Cisco Networking Academy",
  },
  {
    title: "Course Completion in Network Devices and Basic Configuration",
    issuer: "Cisco Networking Academy",
    date: "March 28 – April 12, 2026",
    description:
      "Hands-on configuration of routers and switches, basic network setup, and IP addressing.",
    image: "assets/certificates/Networking Devices and Initial Configuration.PNG",
    category: "Cisco Networking Academy",
  },
  {
    title: "Basic Website and Landing Page Design",
    issuer: "Training Seminar",
    date: "June 11, 2026",
    description:
      "Fundamentals of building and structuring a basic website and landing page.",
    image: "assets/certificates/Basic Website and Landing Page Design.PNG",
    category: "Web Development",
  },
  {
    title: "Organizational Structure and Processes in Research and Development Systems",
    issuer: "Training Seminar",
    date: "June 4, 2026",
    description:
      "Seminar on how R&D systems are structured and how their processes are organized.",
    image: "assets/certificates/Organizational Structure and Processes.PNG",
    category: "IT-related Training",
  },
  {
    title: "How to Swim in the Blue Ocean as a Digital Professional Practitioner",
    issuer: "Training Seminar",
    date: "February 3, 2026",
    description:
      "Seminar on carving a distinct path as a digital professional beyond typical VA work.",
    image: "assets/certificates/HOW TO SWIM IN THE BLUE OCEAN.PNG",
    category: "IT-related Training",
  },
  {
    title: "JPCS National Geek Speaks Seminar",
    issuer: "Junior Philippine Computer Society (JPCS)",
    date: "November 2024",
    description:
      "National seminar for IT students covering current trends and topics in computing.",
    image: "assets/certificates/cert-jpcs-geek-speaks.jpg",
    category: "IT-related Training",
  },
  {
    title: "Research \"AI & Ethics\" and Research Grant Proposal Seminar",
    issuer: "Aldersgate College Inc.",
    date: "February 2025",
    description:
      "Seminar on ethical considerations in AI research and how to prepare a research grant proposal.",
    image: "assets/certificates/cert-ai-ethics.jpg",
    category: "IT-related Training",
  },
  {
    title: "Certificate of Recognition — Academic Scholarship",
    issuer: "Aldersgate College Inc.",
    date: "2023 – 2025",
    description: "Awarded for maintaining an academic scholarship throughout the program.",
    image: "assets/certificates/cert-scholarship.jpg",
    category: "Other",
  },
  {
    title: "Best in Practicum",
    issuer: "Aldersgate College Inc.",
    date: "May 2025",
    description: "Recognition for outstanding performance during the practicum/OJT period.",
    image: "assets/certificates/cert-best-practicum.jpg",
    category: "Other",
  },
  {
    title: "Best in Capstone Presentation",
    issuer: "Aldersgate College Inc.",
    date: "May 2025",
    description: "Recognition for outstanding presentation of the capstone research and system project.",
    image: "assets/certificates/cert-capstone.jpg",
    category: "Other",
  },
  {
    title: "Dean's List Award",
    issuer: "Aldersgate College Inc.",
    date: "May 2025",
    description: "Recognition for academic excellence and consistent high standing.",
    image: "assets/certificates/cert-deans-list.jpg",
    category: "Other",
  },
];

// ---------------------------------------------------------------------------
// Experience — timeline, most recent first.
// ---------------------------------------------------------------------------
const EXPERIENCE = [
  {
    role: "Administrative Aide III (Programmer / IT Support)",
    org: "Sangguniang Bayan Office, LGU Solano",
    period: "2025 – Present",
    points: [
      "Developed and maintained web-based systems using PHP, Python, Flask, MySQL, and Bootstrap",
      "Developed an Inventory Management System (IMS) with barcode scanning, stock monitoring, and inventory tracking",
      "Developed a Client Satisfaction Survey System with tablet kiosk, automated reports, analytics, and AI-generated summaries",
      "Integrated AI auto-generated summary features into internal systems for faster data analysis and reporting",
      "Built systems with QR code logging and face recognition-based attendance monitoring",
      "Designed and managed MySQL databases for efficient data storage, reporting, and system performance",
      "Provided system deployment, troubleshooting, technical support, and user training",
      "Collaborated with staff to gather requirements and implement system improvements",
    ],
  },
  {
    role: "OJT – IT Support / Networking",
    org: "Aldersgate College",
    period: "January 2025 – March 2025",
    points: [
      "Installed and configured network devices including access points and LAN cabling",
      "Troubleshot Wi-Fi connectivity issues and performed network maintenance",
      "Assisted in network setup, including cable management and device configuration",
      "Provided technical support for printers, including troubleshooting and repair",
      "Supported day-to-day IT operations and resolved technical issues for users",
    ],
  },
  {
    role: "OJT – Technical Support",
    org: "Touchstream Digital Inc. (RMA Office)",
    period: "March 2025 – May 2025",
    points: [
      "Diagnosed and repaired hardware issues in laptops and monitors",
      "Performed troubleshooting for display, power, and connectivity problems",
      "Conducted hardware inspections and basic component replacements",
      "Assisted in system testing and device maintenance",
      "Provided technical support for clients and ensured proper device functionality",
    ],
  },
  {
    role: "Network Support and Security | Network Devices and Basic Configuration",
    org: "Cisco Networking Academy",
    period: "March 2026 – April 2026",
    points: [
      "Learned fundamentals of network support, troubleshooting, and security concepts",
      "Configured basic network devices such as routers and switches",
      "Performed basic network setup and IP addressing",
      "Applied knowledge of network protocols and connectivity",
      "Understood cybersecurity basics and network protection methods",
    ],
  },
];

// ---------------------------------------------------------------------------
// Education
// ---------------------------------------------------------------------------
const EDUCATION = [
  {
    degree: "Bachelor of Science in Information Technology",
    school: "Aldersgate College Inc.",
    year: "2021 – 2025",
    details:
      "Best in Capstone Presentation, Best in Practicum, and Dean's List awardee. Coursework in web development, database management, networking, and systems analysis and design.",
  },
  {
    degree: "Senior High School",
    school: "Solano High School",
    year: "2019 – 2021",
    details: "",
  },
  {
    degree: "Junior High School",
    school: "Solano High School",
    year: "2015 – 2019",
    details: "",
  },
  {
    degree: "Elementary",
    school: "Curifang Elementary School",
    year: "2009 – 2015",
    details: "",
  },
];

// ---------------------------------------------------------------------------
// Services — "What I Can Do"
// ---------------------------------------------------------------------------
const SERVICES = [
  { icon: "code", title: "Web Development", desc: "Responsive websites and web apps built from scratch with clean, maintainable code." },
  { icon: "layout-dashboard", title: "System Development", desc: "Custom internal systems for records, inventory, and workflow management." },
  { icon: "database", title: "Database Management", desc: "Schema design, queries, and day-to-day database administration." },
  { icon: "headset", title: "Technical Support", desc: "Responsive troubleshooting and end-user support for hardware and software." },
  { icon: "cpu", title: "Computer Troubleshooting", desc: "Diagnosing and resolving desktop, laptop, and peripheral issues." },
  { icon: "palette", title: "Basic Graphic Design", desc: "Simple graphics and layout assets to support web and print materials." },
  { icon: "life-buoy", title: "IT Support", desc: "General IT assistance, setup, and maintenance for small offices." },
  { icon: "refresh-cw", title: "Website Maintenance", desc: "Ongoing updates, fixes, and content changes to keep a site running well." },
];

// ---------------------------------------------------------------------------
// GitHub section
// ---------------------------------------------------------------------------
const GITHUB_INFO = {
  username: "keikcy",
  stats: [
    { label: "Repositories", value: "—" },
    { label: "Contributions", value: "—" },
    { label: "Followers", value: "—" },
  ],
  languages: ["PHP", "Python", "JavaScript", "HTML/CSS", "SQL"],
  featured: [
    { name: "ims", desc: "Inventory Management System with barcode scanning, stock monitoring, and inventory tracking." },
    { name: "client-satisfaction-survey", desc: "Tablet-kiosk client satisfaction survey system with automated reports and AI-generated summaries." },
    { name: "snap", desc: "School news and announcement portal." },
  ],
};

// ---------------------------------------------------------------------------
// Resume summary
// ---------------------------------------------------------------------------
const RESUME_SUMMARY =
  "Entry-level IT professional with experience in LGU operations, system development, data management, and technical support. Skilled in programming, data entry, web-based systems, troubleshooting, and administrative tasks. Eager to apply my skills, learn new technologies, and contribute to a productive team in IT, programming, data entry, virtual assistance, or non-voice support roles.";
