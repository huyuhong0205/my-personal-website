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
    descriptions: ['description test test', 'description test test'],
  },
  {
    titles: [{ skillTitle: 'Javascript', skillIcon: 'javascript' }],
    descriptions: [
      'description test test description test test description test test description test test',
      'description test test',
    ],
  },
  {
    titles: [{ skillTitle: 'React, React Native', skillIcon: 'react' }],
    descriptions: ['description test test', 'description test test'],
  },
  {
    titles: [
      { skillTitle: 'Node.js', skillIcon: 'nodejs' },
      { skillTitle: 'MongoDB', skillIcon: 'mongodb' },
    ],
    descriptions: [
      'description test test description test test',
      'description test test',
    ],
  },
  {
    titles: [{ skillTitle: 'Typescript', skillIcon: 'typescript' }],
    descriptions: ['description test test', 'description test test'],
  },
];
