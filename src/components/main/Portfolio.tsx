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
    <section className="mb-8">
      <SectionTitle>Portfolio</SectionTitle>

      <div className="flex flex-col items-center gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.href} project={project} />
        ))}
      </div>
    </section>
  );
}
