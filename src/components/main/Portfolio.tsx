/* React */
// import React from 'react';

/* Components */
import SectionTitle from './SectionTitle';
import ProjectCard from './ProjectCard';
/* Data */
import { projects } from '../../data/projects';

/* //////////////////////////////////////////////////////////////// */
export default function Portfolio() {
  /* JSX ---------------------------------------------------------- */
  return (
    <section>
      <SectionTitle>Portfolio</SectionTitle>

      <section className="flex flex-col items-center gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.href} project={project} />
        ))}
      </section>
    </section>
  );
}
