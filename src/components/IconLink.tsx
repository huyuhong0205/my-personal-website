/* React-icons */
import type { IconType } from 'react-icons';

type Props = {
  href: string;
  Icon: IconType;
};

/* //////////////////////////////////////////////////////////////// */
export default function IconLink({ href, Icon }: Props) {
  /* JSX ---------------------------------------------------------- */
  return (
    <a
      href={href}
      className="flex justify-center items-center h-8 w-8 rounded-full bg-zinc-400"
      target="_blank"
    >
      <Icon className="h-5 w-5 text-white" />
    </a>
  );
}
