export type Project = {
  title: string;
  href: string;
  heroImage: string;
  description: string;
  technic: string[];
};

export const projects: Project[] = [
  {
    title: 'Full stack airbnb clone',
    href: 'full-stack-airbnb-clone',
    heroImage: 'hero-full-stack-airbnb-clone.png',
    description:
      'This is a full-stack web application build from scratch by my self for practicing web development skills.',
    technic: ['Typescript', 'React', 'Node.js', 'Express', 'MongoDB', 'RWD'],
  },
  {
    title: 'React native expense tracking app',
    href: 'track-expenses',
    heroImage: 'hero-react-native-expense-tracking-app.png',
    description: 'A mobile app build with react native for expense tracking.',
    technic: ['Typescript', 'React Native', 'Expo', 'Realm'],
  },
  {
    title: 'My personal website',
    href: 'my-personal-website',
    heroImage: 'hero-my-personal-website.png',
    description:
      'My personal website built using the Astro framework and React components.',
    technic: ['Typescript', 'Astro', 'React', 'Tailwind css', 'RWD'],
  },
];
