import {ReactNode} from 'react';

type ExternalLinkType = {
  href: string;
  children: ReactNode;
  underline?: boolean;
  className?: string;
};

const ExternalLink = ({
  href,
  children,
  underline = true,
  className = '',
}: ExternalLinkType) => {
  return (
    <a
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      className={`${underline && 'underline'} hover:no-underline ${className}`}
    >
      {children}
    </a>
  );
};

export default ExternalLink;
