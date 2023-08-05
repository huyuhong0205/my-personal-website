/* React */
// import React from 'react';

/* Components */
import SectionTitle from './SectionTitle';
import SkillItem from './SkillItem';
/* Data */
import { skills } from '../../data/skills';

/* //////////////////////////////////////////////////////////////// */
export default function Skills() {
  /* JSX ---------------------------------------------------------- */
  return (
    <section className="my-16">
      <SectionTitle>Skills</SectionTitle>

      <div className="flex justify-center">
        <div className="grid md:grid-cols-2 gap-4 mx-auto">
          {skills.map((skill) => (
            <SkillItem key={skill.titles[0].skillTitle} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}
