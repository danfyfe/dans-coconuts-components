interface HeadingProps {
    type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
    text: string,
    className?: string
};


const Heading = ({ type = 'h1', text, className = '' }: HeadingProps) => {
    const HeadingElement = type;
    return <HeadingElement className={`font-heading ${className}`}>{text}</HeadingElement>
};

export default Heading;
