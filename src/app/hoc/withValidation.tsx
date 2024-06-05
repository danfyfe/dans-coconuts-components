import { ComponentType, ReactNode } from "react";
import validateChildren from "../utils/checks/validateChildren";


const withValidation = <P extends object>(Component: ComponentType<P>, config: ValidationConfig) => {
  const WrappedComponent = ({ children, ...props }: P & { children: ReactNode }) => {
    if (process.env.NODE_ENV !== 'production') {
      validateChildren(children, config);
    }

    return <Component {...(props as P)}>{children}</Component>;
  };

  return WrappedComponent;
};

export default withValidation;

