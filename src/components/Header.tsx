/* React */
// import React from 'react';
/* React icons */
// import { ImGithub } from 'react-icons/Im';

/* Components */
import HeaderLink from './HeaderLink';

/* //////////////////////////////////////////////////////////////// */
export default function Header() {
  /* JSX ---------------------------------------------------------- */
  return (
    <header className="fixed h-16 w-full px-3 sm:px-5 border-b border-zinc-900/10 bg-white/20 backdrop-blur-md">
      <div className="h-full max-w-4xl md:px-5 mx-auto flex justify-between items-center">
        <a href="/" className="font-title font-bold text-lg">
          YU-HONG HU
        </a>

        <nav>
          <ul className="flex gap-2">
            <HeaderLink
              href="https://github.com/huyuhong0205"
              title="Github"
              // Icon={ImGithub}
            />
            {/* <HeaderLink
              href="https://www.linkedin.com/in/yu-hong-hu/"
              title="Linkedin"
              Icon={FaLinkedin}
            /> */}
          </ul>
        </nav>
      </div>
    </header>
  );
}
