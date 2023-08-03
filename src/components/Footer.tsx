/* React */
// import React from 'react';
/* React-icons */
import { FaGithub, FaLinkedin } from 'react-icons/Fa';

/* Components */
import IconLink from './IconLink';

/* //////////////////////////////////////////////////////////////// */
export default function Footer() {
  /* JSX ---------------------------------------------------------- */
  return (
    <footer className="p-4 text-center">
      <div className="flex justify-center items-center gap-2 mb-2">
        <IconLink href="https://github.com/huyuhong0205" Icon={FaGithub} />
        <IconLink href="[TODO] add Linkedin link" Icon={FaLinkedin} />
      </div>

      <p className="text-sm text-zinc-400">
        &copy; {new Date().getFullYear()} YU-HONG HU.
      </p>
    </footer>
  );
}
