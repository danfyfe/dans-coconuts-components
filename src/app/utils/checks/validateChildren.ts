import { ReactNode, isValidElement } from "react";

const validateChildren = ({ children, config }: { children?: ReactNode; config: ValidationConfig }) => {
  if (!children) throw new Error('Component must have children.');
  if (Array.isArray(children)) {
    children.forEach(child => {
      if (!isValidElement(child) || child.type !== config.childrenType) {
        throw new Error(`Component only accepts <${config.childrenType}> elements as children.`);
      }
    });
  } else if (isValidElement(children) && children.type !== config.childrenType) {
    throw new Error(`Component only accepts <${config.childrenType}> elements as children.`);
  }
};

export default validateChildren;
