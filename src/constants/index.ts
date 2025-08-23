import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from '../types';
import womanImg from '../assets/woman.png';
import man from '../assets/profile-hero.jpg';
import ronin from '../assets/ronin.png';
import devops from '../assets/devops.png'; // or .svg
import fullStack from '../assets/fullStack.png';
import reactlogo from '../assets/company/reactlogo.png';
import NodejsLogo from '../assets/company/NodejsLogo.png';
import mongodblogo from '../assets/company/mongodblogo.png';
import cloud from '../assets/company/cloud.png';
import kfc from '../assets/kfc.png';
import Dashboard from '../assets/Dashbaord.png';
import enatega from '../assets/enatega.png';

import {
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
} from '../assets';

export const navLinks: TNavLink[] = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services: TService[] = [
  {
    title: 'Frontend Developer',
    icon: web,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Full-Stack Developer',
    icon: fullStack,
  },
  {
    title: 'DevOps',
    icon: devops,
  },
];

const technologies: TTechnology[] = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: 'Front-End Developer',
    companyName: 'Self-Driven / Freelance Projects',
    icon: reactlogo,
    iconBg: '#383E56',
    date: 'Jan 2025 – Present',
    points: [
      'Developed interactive web applications using JavaScript (ES6+), React.js, Next.js, and TypeScript.',
      'Built 3D and animated experiences with React Three Fiber, Framer Motion, and Canvas API.',
      'Designed modern UI/UX layouts using Tailwind CSS and ShadCN.',
      'Managed complex application state with Redux Toolkit and integrated Supabase & Firebase for backend services.',
      'Enhanced user experience with React-Toastify notifications and real-time feedback.',
    ],
  },
  {
    title: 'Back-End Developer ',
    companyName: 'Self-Driven / Freelance Projects',
    icon: NodejsLogo,
    iconBg: '#383E56',
    date: 'Aug 2025 – Present',
    points: [
      'Built RESTful APIs and server-side logic using Node.js and Express.js.',
      'Implemented robust server-side workflows and middleware for scalable applications.',
      'Applied CI/CD pipelines and DevOps practices for automated deployments.',
      'Integrated back-end services with Supabase & Firebase.',
      'Monitored applications and tracked errors using Sentry.',
    ],
  },
  {
    title: 'Database & Authentication',
    companyName: 'Self-Driven / Freelance Projects',
    icon: mongodblogo,
    iconBg: '#001E2B',
    date: 'Jan 2025 – Present',
    points: [
      'Designed and managed MongoDB databases with Mongoose for efficient data handling',
      'Implemented secure authentication with OAuth & JWT.',
      'Configured real-time updates using Supabase & Firebase.',
      'Optimized queries and structures for high-performance applications.',
      'Ensured data integrity, validation, and security across projects.',
    ],
  },
  {
    title: 'DevOps & Deployment / Tools',
    companyName: 'Self-Driven / Freelance Projects',
    icon: cloud,
    iconBg: '#E6DEDD',
    date: 'Jan 2025 – Present',
    points: [
      'Managed version control and collaboration with Git & GitHub.',
      'Deployed apps using Vercel, Netlify, and Azure.',
      'Implemented CI/CD pipelines for automated testing and deployment.',
      'Worked in Linux environments to maintain development workflows.',
      'Monitored and tracked issues with Sentry.',
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      'Working with Muhammad Achar was a fantastic experience. He developed a clean, responsive website for our project, and his attention to detail truly stood out.',
    name: 'Sarah Khan,',
    designation: 'Project Coordinator',
    company: 'Acme Co',
    image: womanImg,
  },
  {
    testimonial:
      'Muhammad Achar has excellent skills in the MERN stack. The dashboard he built was efficient, user-friendly, and exceeded our expectations.',
    name: 'Ali Raza,',
    designation: 'Team Lead',
    company: 'Tech Solutions',
    image: man,
  },
  {
    testimonial:
      'Professional, creative, and reliable — Muhammad Achar not only delivered a functional product but also suggested improvements that made our application even better.',
    name: 'Dr. Ayesha Ahmed,',
    designation: 'Mentor',
    company: 'Innovate Labs',
    image: womanImg,
  },
];

const projects: TProject[] = [
  {
    name: 'KFC Landing Page',
    description:
      'A Modern, responsive KFC landing page showcasing menu, promotions, and brand visuals with fast, mobile-friendly UI.',
    tags: [
      {
        name: 'html & css',
        color: 'orange-text-gradient',
      },
      {
        name: 'javascript',
        color: 'text-yellow-400',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: kfc,
    sourceCodeLink: 'https://github.com/muhammadachar435/KFC-Clone-Landing.git',
    liveDemoLink: '',
  },
  {
    name: 'Ronin Website',
    description:
      'A fully responsive e-commerce website with modern design, smooth UI/UX, and complete shopping features.',
    tags: [
      {
        name: 'html & css',
        color: 'orange-text-gradient',
      },
      {
        name: 'javascript',
        color: 'text-yellow-400',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: ronin,
    sourceCodeLink: 'https://github.com/muhammadachar435/Ronin-Website.git',
    liveDemoLink: 'https://ronin-website-two.vercel.app/',
  },
  {
    name: 'Dashboard Website',
    description:
      'Responsive React admin dashboard with modern UI, Supabase integration, Toastify notifications, and smooth UX.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: Dashboard,
    sourceCodeLink: 'https://github.com/muhammadachar435/React-Supabase-Dashboard.git',
    liveDemoLink: 'https://react-supabase-dashboard.vercel.app/',
  },
  {
    name: 'Enatega Web Clone',
    description:
      'A React-based food delivery platform clone with Supabase for authentication, real-time updates, and dynamic menus in a responsive UI.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: enatega,
    sourceCodeLink: 'https://github.com/muhammadachar435/Enatega-Frontend-Website-Supabase.git',
    liveDemoLink: 'https://enatega-frontend-website-supabase.vercel.app/',
  },
];

export { services, technologies, experiences, testimonials, projects };
