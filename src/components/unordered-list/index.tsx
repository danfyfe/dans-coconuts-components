import { ReactNode } from "react";

interface IUnorderedListProps {
  children: ReactNode
  className?: string
};

const UnorderedList = ({ children, className = '' }: IUnorderedListProps) => (
  <ul className={`font-heading ${className}`}>{children}</ul>
);

export default UnorderedList;
