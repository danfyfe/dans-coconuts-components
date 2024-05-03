import { ReactNode } from "react";

interface IParagraphProps {
    children: ReactNode
    className?: string
};

const Paragraph = ({ children, className = '' }: IParagraphProps) => {
    return <p className={`font-heading ${className}`}>{children}</p>
};

export default Paragraph;