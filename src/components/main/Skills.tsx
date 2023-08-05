/* React */
// import React from 'react';

/* Components */
import SkillItem from './SkillItem';
/* Data */
import { skills } from '../../data/skills';

/* //////////////////////////////////////////////////////////////// */
export default function Skills() {
  /* JSX ---------------------------------------------------------- */
  return (
    <section className="flex justify-center">
      <h2>Skills</h2>

      <div className="grid md:grid-cols-2 gap-4 mx-auto">
        {skills.map((skill) => (
          <SkillItem key={skill.titles[0].skillTitle} skill={skill} />
        ))}
      </div>
    </section>
  );
}
