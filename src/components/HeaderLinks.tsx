/* React */
// import React from 'react';

/* //////////////////////////////////////////////////////////////// */
export default function HeaderLinks() {
  const handleHeaderLinkClick = (sectionId: string) => {
    const section = document.getElementById(sectionId);

    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  /* JSX ---------------------------------------------------------- */
  return (
    <nav>
      <ul className="flex justify-center items-center gap-4">
        <li>
          <button
            className="tracking-wide"
            onClick={() => handleHeaderLinkClick('section--intro')}
          >
            Intro
          </button>
        </li>

        <li>
          <button
            className="tracking-wide"
            onClick={() => handleHeaderLinkClick('section--skills')}
          >
            Skills
          </button>
        </li>

        <li>
          <button
            className="tracking-wide"
            onClick={() => handleHeaderLinkClick('section--portfolio')}
          >
            Portfolio
          </button>
        </li>
      </ul>
    </nav>
  );
}
