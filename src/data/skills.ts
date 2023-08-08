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
      'Familiar with HTML5 semantic tags.',
      'Using Flex box and Grid to achieve flexible page layout and alignment.',
      'Utilize media queries and flexible layouts to achieve RWD across various screen sizes.',
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
      "Familiar with using TypeScript's types and generics.",
      'Experienced in using TypeScript with React, Node.js, and various libraries.',
    ],
  },
  {
    titles: [{ skillTitle: 'React, React Native', skillIcon: 'react' }],
    descriptions: [
      "Familiar with React's functional components and common hooks.",
      'Experienced in using common React libraries such as React Redux, Redux Toolkit, and React Router Dom.',
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
