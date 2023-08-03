/* React */
// import React from 'react';

/* Components */
import HeaderLinks from './HeaderLinks';

/* //////////////////////////////////////////////////////////////// */
export default function Header() {
  /* JSX ---------------------------------------------------------- */
  return (
    <header className="fixed h-16 w-full px-5 border-b border-zinc-900/10 bg-white/20 backdrop-blur-md">
      <div className="h-full max-w-4xl px-5 mx-auto flex justify-between items-center">
        <a href="/">YU-HONG HU</a>

        <HeaderLinks />
      </div>
    </header>
  );
}
