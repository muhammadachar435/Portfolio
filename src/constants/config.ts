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
        'I’m Muhammad Achar, a skilled MERN Stack Developer. I build modern and scalable web applications using React, Node.js, Express, and MongoDB. I focus on creating user-friendly interfaces and efficient back-end solutions that solve real-world problems.',
        
      ],
    },

    experience: {
      p: 'What I’ve Built & Worked On',
      h2: 'Work Experience.',
      content: [
        'I’m Muhammad Achar, a skilled MERN Stack Developer. I build modern and scalable web applications using React, Node.js, Express, and MongoDB. I focus on creating user-friendly interfaces and efficient back-end solutions that solve real-world problems.
',
        'My experience covers both front-end and back-end development, API integration, and database management.',
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
