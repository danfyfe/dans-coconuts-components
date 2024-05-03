import { ReactNode } from "react";

interface HeadingProps {
    el: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
    children: ReactNode
    className?: string
};


const Heading = ({ el = 'h1', children, className = '' }: HeadingProps) => {
    const HeadingElement = el;
    return <HeadingElement className={`font-heading ${className}`}>{children}</HeadingElement>
};

export default Heading;
