/* React */
// import React from 'react';
/* React icons */
import type { IconType } from 'react-icons';

type Props = {
  href: string;
  title: string;
  // Icon: IconType;
};

/* //////////////////////////////////////////////////////////////// */
export default function HeaderLink({ href, title }: Props) {
  /* JSX ---------------------------------------------------------- */
  return (
    <li>
      <a
        href={href}
        target="_blank"
        className="group flex items-center gap-1 p-2 text-md"
      >
        {/* <Icon className="h-5 w-5 md:h-4 md:w-4 text-neutral-900" /> */}
        <span className="hidden md:inline-block group-hover:underline group-hover:underline-offset-2 group-hover:decoration-neutral-900">
          {title}
        </span>
      </a>
    </li>
  );
}
