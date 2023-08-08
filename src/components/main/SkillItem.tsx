/* React */
// import React from 'react';

/* Types */
import type { Skill } from '../../data/skills';

type Props = {
  skill: Skill;
};

/* //////////////////////////////////////////////////////////////// */
export default function SkillItem({ skill }: Props) {
  /* JSX ---------------------------------------------------------- */
  return (
    <li className="list-none max-w-[465px] p-4 bg-neutral-200/25 rounded-lg">
      <div className="flex gap-4 pb-2 mb-2 border-b-[0.5px] border-neutral-300">
        {skill.titles.map((title) => (
          <h3 key={title.skillTitle} className="flex items-center text-xl">
            <img
              src={`/${title.skillIcon}.png`}
              alt={`${title.skillTitle}`}
              className="h-7 mr-1"
            />
            <span className="tracking-wide">{title.skillTitle}</span>
          </h3>
        ))}
      </div>

      <ul className="list-disc list-outside pl-5 flex flex-col gap-2">
        {skill.descriptions.map((description) => (
          <li key={description}>{description}</li>
        ))}
      </ul>
    </li>
  );
}
