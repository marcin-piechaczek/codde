import Link, { LinkProps } from 'next/link';
import { HTMLAttributes } from 'react';

export type NextLinkProps = LinkProps & HTMLAttributes<HTMLAnchorElement>;

export const NextLink = ({ children, href, ...props }: NextLinkProps) => {
  return (
    <Link href={href} {...props}>
      {children}
    </Link>
  );
};
