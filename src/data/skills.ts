export type Skill = {
  titles: {
    skillTitle: string;
    skillIcon: string;
  }[];
  descriptions: string[];
};

export const skills: Skill[] = [
  {
    titles: [
      { skillTitle: 'HTML', skillIcon: 'html' },
      { skillTitle: 'CSS', skillIcon: 'css' },
    ],
    descriptions: [
      'Use semantic HTML5 tags to improve webpage SEO.',
      'Implementing various page layouts using CSS flex box and grid.',
      'Utilize media queries and flexible layouts to achieve RWD across various screen sizes.',
      'Experienced in using the Sass preprocessor and the Tailwind CSS framework.',
    ],
  },
  {
    titles: [
      { skillTitle: 'Javascript', skillIcon: 'javascript' },
      { skillTitle: 'Typescript', skillIcon: 'typescript' },
    ],
    descriptions: [
      'Familiar with the basics of JavaScript and the new features of ES6.',
      'Using the Fetch API to make asynchronous requests for handling API calls.',
      'Experienced in using TypeScript with React, Node.js, and various libraries.',
    ],
  },
  {
    titles: [{ skillTitle: 'React, React Native', skillIcon: 'react' }],
    descriptions: [
      "Familiar with React's functional components and common hooks.",
      'Using React Redux and Redux Toolkit to manage states.',
      'Building a Single Page Application (SPA) website using React Router.',
    ],
  },
  {
    titles: [
      { skillTitle: 'Node.js', skillIcon: 'nodejs' },
      { skillTitle: 'MongoDB', skillIcon: 'mongodb' },
    ],
    descriptions: [
      'Understanding the principles and process of communication between the front end and back end.',
      'Using Node.js, Express, and MongoDB to build backend RESTful APIs and communicate with the frontend.',
    ],
  },
];
