/* React */
// import React from 'react';

/* Types */
import type { Project } from '../../data/projects';

type Props = {
  project: Project;
};

/* //////////////////////////////////////////////////////////////// */
export default function ProjectCard({ project }: Props) {
  const { title, href, heroImage, description, technic } = project;

  /* JSX ---------------------------------------------------------- */
  return (
    <a
      href={`/project/${href}`}
      className="group flex flex-col md:flex-row min-h-[200px] max-w-[400px] md:max-w-full md:w-[95%] p-3 mx-3 bg-neutral-200/25 hover:bg-neutral-200 rounded-lg transition-colors duration-200"
    >
      <figure className="md:min-h-[180px] md:max-w-[300px] mb-3 md:mb-0 overflow-hidden rounded-lg md:mr-4">
        <img src={heroImage} className="h-full w-full object-cover" />
      </figure>

      <div className="flex flex-col">
        <h4 className="mb-2 font-title font-medium text-xl">{title}</h4>
        <p className="mb-4 text-neutral-700">{description}</p>
        <div className="flex flex-wrap gap-2 mb-3">
          {technic.map((technicName) => (
            <span
              key={technicName}
              className="py-1 px-2 bg-white/70 rounded-full"
            >
              {technicName}
            </span>
          ))}
        </div>
        <span className="self-end mt-auto border-b-[1.5px] border-transparent group-hover:border-blue-600 text-blue-600">
          <span>detail</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="inline-block h-4 w-4 shrink-0 transition-transform -translate-y-[1px] group-hover:-translate-y-[3px] group-hover:translate-x-[2px] motion-reduce:transition-none"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
              clipRule="evenodd"
            ></path>
          </svg>
        </span>
      </div>
    </a>
  );
}
