export type SectionId = "home" | "about" | "projects" | "contact";

export const sections: { id: SectionId; label: string }[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About Me" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export const portfolioData = {
  name: {
    first: "fatemeh",
    last: "mehri",
    full: "fatemeh mehri",
  },
  title: "Front-End Developer",
  tagline: "Next.js · React.js ·JavaScript· TypeScript",
  bio: "A Front-End developer working with React.js and Next.js, looking for opportunities to strengthen my skills and grow alongside related technologies. I value effective communication, flexibility, diligence, and problem-solving within a collaborative team.",
  about: {
    age: 29,
    birthDate: "1996",
    location: "Tehran, Iran",
    flag: "🇮🇷",
    quote:
      "I'm committed to quality, teamwork, and creating real value for the team I work with.",
    education: "B.S. Computer Eng. (Software) — Islamic Azad University, Tehran Central Branch",
    languages: ["English", "Persian (Native)"],
    interests: [
      { emoji: "☕", label: "Coffee" },
      { emoji: "🎮", label: "Gaming" },
      { emoji: "📚", label: "Learning" },
      { emoji: "✈️", label: "Travel" },
      { emoji: "🎬", label: "Cinema" },
      { emoji: "💻", label: "Coding" },
    ],
  },
  journey: {
    title: "Front-End Developer focused on React & Next.js",
    subtitle: "Building responsive, maintainable, and user-friendly interfaces.",
    skills: [
      {
        emoji: "💻",
        title: "Core",
        items: "HTML5 · CSS3 · JavaScript · TypeScript · React.js (hooks) · Next.js",
      },
      {
        emoji: "🧩",
        title: "State & Data",
        items:
          "Redux / Redux Toolkit · React Query · Immer.js · REST API · GraphQL · WebSocket",
      },
      {
        emoji: "🎨",
        title: "Styling & Tools",
        items: "TailwindCSS · SASS · Material UI · Ant Design · Responsive Design · Git",
      },
      {
        emoji: "📝",
        title: "Forms & Validation",
        items: "Formik · Yup",
      },
      {
        emoji: "⚙️",
        title: "Web & Integrations",
        items: "PWA · Google reCAPTCHA",
      },
      {
        emoji: "🐍",
        title: "Backend (Familiar)",
        items: "Python · FastAPI",
      },
    ],
  },
  stats: [
    { value: "React", label: "Specialty" },
    { value: "Next.js", label: "Framework" },
    { value: "∞", label: "Coffee ☕" },
  ],
  vision: {
    heading: "Crafting Quality Front-End Experiences",
    subheading:
      "Joining a front-end team to contribute to projects, grow my skills, and build interfaces that bring real value to users.",
    roles: ["Front-End Developer", "React.js", "Next.js"],
    mission:
      "Delivering clean, responsive, and maintainable user interfaces while collaborating closely with the team.",
    visionText:
      "To keep learning and deepening my expertise across the front-end ecosystem and related technologies.",
  },
  experience: [
    {
      role: "Frontend Developer",
      company: "Tabiat Makan Holding",
      period: "March 2025 – Present",
 
    },
  ],
  projects: [
    {
      id: 1,
      title: "ARM — Tabiat Makan Holding Management System",
      description:
        "Comprehensive management platform for all holdings of the Tabiat Makan Industrial Group (11 sub-holdings), with a role-based admin panel: Sales, Balance Sheet, Profit & Loss, general reports, Finance (treasury, facilities, obligations, expenses), HR, Admin panel, and activity Log History. Features advanced interactive analytical charts (D3.js, GSAP, Bubble Charts for multi-dimensional data) and an AI chatbot that analyzes on-page data and generates smart reports. Built in Dark/Light mode with mobile and desktop versions.",
      tags: [
        "React",
        "D3.js",
        "GSAP",
        "React Query",
        "ECharts",
        "Framer Motion",
        "Context API",
        "REST API",
        "Responsive",
      ],
      link: "https://arm.tm-ig.com/",
      github: "https://arm.tm-ig.com/",
    },
    {
      id: 2,
      title: "Divar Project",
      description:
        "Implementation of part of the Divar website (still in development), with login handled through an OTP authentication system.",
      tags: ["React.js", "React Query", "React Router", "Axios", "Formik", "Yup"],
      link: "https://github.com/fatemehmhr/divar-project.git",
      github: "https://github.com/fatemehmhr/divar-project.git",
    },
    {
      id: 3,
      title: "Mehri Store",
      description:
        "Mobile-number login flow and an admin panel built with Next.js and TypeScript.",
      tags: ["Next.js", "TypeScript", "TailwindCSS", "Redux Toolkit", "Formik", "Yup"],
      link: "https://github.com/fatemehmhr/mehri-store.git",
      github: "https://github.com/fatemehmhr/mehri-store.git",
    },
    {
      id: 4,
      title: "Contact Manager",
      description:
        "An admin management panel developed with React.js, using Context API and Immer.js for state management.",
      tags: ["React.js", "TailwindCSS", "Context API", "Immer.js", "Formik", "Yup", "REST API"],
      link: "https://github.com/fatemehmhr/contact-manager-.git",
      github: "https://github.com/fatemehmhr/contact-manager-.git",
    },
    {
      id: 5,
      title: "Portals — MUI Blog",
      description:
        "A personal blog developed with Material UI and React.js, with form validation and Google reCAPTCHA.",
      tags: ["MUI", "React.js", "Context API", "Formik", "Yup", "Google reCAPTCHA", "REST API"],
      link: "https://github.com/fatemehmhr/portals-MUI.git",
      github: "https://github.com/fatemehmhr/portals-MUI.git",
    },
    {
      id: 6,
      title: "Sticker Store — RTK Query",
      description:
        "A sticker shop and shopping cart built with React.js, Redux Toolkit, and RTK Query.",
      tags: ["React.js", "TailwindCSS", "Redux Toolkit", "RTK Query", "REST API"],
      link: "https://github.com/fatemehmhr/stickerStore-RTKQuery.git",
      github: "https://github.com/fatemehmhr/stickerStore-RTKQuery.git",
    },
    {
      id: 7,
      title: "Shopping Cart — TypeScript",
      description:
        "A shopping cart implemented with TypeScript, React Router, and Context API.",
      tags: ["TypeScript", "React.js", "React Router", "Context API", "REST API", "Responsive"],
      link: "https://github.com/fatemehmhr/sabadkharid-TS-.git",
      github: "https://github.com/fatemehmhr/sabadkharid-TS-.git",
    },
    {
      id: 8,
      title: "Blog — GraphQL",
      description:
        "A blog created with GraphQL, with its backend built on GraphCMS.",
      tags: ["React.js", "GraphQL", "GraphCMS"],
      link: "https://github.com/fatemehmhr/Blog-graphql.git",
      github: "https://github.com/fatemehmhr/Blog-graphql.git",
    },
    {
      id: 9,
      title: "Todo List — TypeScript",
      description:
        "A Todo List application implemented with TypeScript and React Router.",
      tags: ["TypeScript", "React.js", "React Router"],
      link: "https://github.com/fatemehmhr/TodoList-TS.git",
      github: "https://github.com/fatemehmhr/TodoList-TS.git",
    },
    {
      id: 10,
      title: "CoinCap.io",
      description:
        "Implementation of part of the CoinCap.io website (please enable a VPN for the data to load).",
      tags: ["React.js", "Ant Design", "React Router", "Context API", "REST API", "Responsive"],
      link: "https://github.com/fatemehmhr/coinCapProject.git",
      github: "https://github.com/fatemehmhr/coinCapProject.git",
    },
    {
      id: 11,
      title: "Jane Blog",
      description: "A simple personal blog.",
      tags: ["JavaScript", "Sass", "Axios", "Context API", "React Router"],
      link: "https://github.com/codingfront/jfd4-react-project-blog.git",
      github: "https://github.com/codingfront/jfd4-react-project-blog.git",
    },
  ],
  contact: {
    email: "96mehri@gmail.com",
    phone: "09011837973",
    socials: [
      { name: "GitHub", url: "https://github.com/fatemehmhr", icon: "github" },
      {
        name: "LinkedIn",
        url: "https://linkedin.com/in/fatemeh-mehri-771b0591",
        icon: "linkedin",
      },
      { name: "Telegram", url: "https://t.me/FMhr96", icon: "send" },
    ],
  },
};
