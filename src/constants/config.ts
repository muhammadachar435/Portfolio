type TSection = {
  p: string;
  h2: string;
  content?: string[];
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: 'Muhammad Achar',
    fullName: 'Muhammad Achar',
    email: 'muhammadacharzardari69@gmail.com', // put your real email here
  },

  hero: {
    name: 'Muhammad Achar',
    p: ['I’m a MERN Stack Developer', 'I build modern, responsive, and scalable web applications'],
  },

  contact: {
    p: 'Get in touch',
    h2: 'Contact.',
    form: {
      name: {
        span: 'Your Name',
        placeholder: "What's your name?",
      },
      email: { span: 'Your Email', placeholder: "What's your email?" },
      message: {
        span: 'Your Message',
        placeholder: 'What do you want to say?',
      },
    },
  },

  sections: {
    about: {
      p: 'Introduction',
      h2: 'Overview.',
      content: [
        "I'm a skilled MERN Stack Developer with expertise in React, Node.js, Express.js, and MongoDB, along with strong knowledge of HTML, CSS, and Tailwind CSS for responsive design. I also work with DevOps tools, Docker, Git/GitHub, and CI/CD pipelines to ensure smooth deployments. I collaborate closely with clients to build scalable, user-friendly applications that solve real-world problems.",
      ],
    },

    experience: {
      p: 'What I’ve Built & Worked On',
      h2: 'Work Experience.',
      content: [
        'Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively',
      ],
    },

    feedbacks: {
      p: 'What others say',
      h2: 'Testimonials.',
      content: [
        'Clients and peers describe me as a dedicated developer who delivers clean, scalable, and efficient solutions.',
        'I’m known for quick learning, problem-solving, and strong collaboration in team environments.',
      ],
    },

    works: {
      p: 'My work',
      h2: 'Projects.',
      content: [
        'Here are some of my featured MERN Stack projects, built with MongoDB, Express.js, React, and Node.js.',
        'They highlight my skills in frontend & backend development, including RESTful APIs, authentication, real-time features, and database management.',
      ],
    },
  },
};
