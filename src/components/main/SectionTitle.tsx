/* React */
// import React from 'react';

type Props = {
  children: string;
};

/* //////////////////////////////////////////////////////////////// */
export default function SectionTitle({ children }: Props) {
  /* JSX ---------------------------------------------------------- */
  return (
    <div className="pb-6">
      <h2 className="inline font-title text-2xl font-medium tracking-wide border-b-[3px] border-neutral-400">
        {children}
      </h2>
    </div>
  );
}
