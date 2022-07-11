import LinkNextJs, { LinkProps } from "next/link";
import React from "react";

interface LinkPropsCustom extends Omit<LinkProps, "href"> {
  children: React.ReactNode;
  href: string;
  className?: string;
}

const Link = ({ children, className, ...props }: LinkPropsCustom) => {
  return (
    <LinkNextJs {...props}>
      <a href={props.href} className={className}>
        {children}
      </a>
    </LinkNextJs>
  );
};

export default Link;
