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
        'I’m Muhammad Achar, a dedicated MERN Stack Developer with strong expertise in MongoDB, Express.js, React.js, and Node.js. I specialize in building modern, scalable, and high-performance web applications that combine clean design with powerful functionality.',
        'With a deep understanding of front-end and back-end development, I create user-friendly interfaces, secure backends, and seamless full-stack solutions that solve real-world problems. My focus is always on quality, performance, and innovation to deliver applications that make a lasting impact.',
      ],
    },

    experience: {
      p: 'What I’ve Built & Worked On',
      h2: 'Work Experience.',
      content: [
        'I have worked on several real-world projects including a 3D Portfolio, an E-Commerce Watch Store, and Task Management Applications.',
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
