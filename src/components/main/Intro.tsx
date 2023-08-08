/* React */
// import React from 'react';

/* Components */
import SectionTitle from './SectionTitle';

/* //////////////////////////////////////////////////////////////// */
export default function Intro() {
  /* JSX ---------------------------------------------------------- */
  return (
    <section className="mt-4">
      <SectionTitle>Intro</SectionTitle>

      <div className="flex flex-col gap-8">
        <div className="flex flex-col md:flex-row items-center gap-4 md:mx-auto">
          <figure className="h-[150px] w-[150px] rounded-full overflow-hidden shadow-sm">
            <img src="/profile.webp" className="object-cover" />
          </figure>

          <div className="flex flex-col items-center">
            <strong className="md:p-3 font-title font-medium text-3xl">
              YU-HONG HU
            </strong>

            <p className="flex flex-col items-center text-neutral-950">
              <span>National Taipei University of Technology,</span>
              <span>Electronic Engineering, 2018 - 2022</span>
            </p>
          </div>
        </div>

        <p className="max-w-xl w-[90%] sm:w-[80%] mx-auto">
          &nbsp;&nbsp;&nbsp;&nbsp; Programming is my hobby. I specialized in MCU
          (microcontroller unit) firmware and system integration in college. By
          chance, I learned about web development by chance and found it very
          interesting, so I started to learn on my own. Currently, I am focusing
          on front-end development, the goal is to become a full-stack software
          developer.
        </p>
      </div>
    </section>
  );
}
