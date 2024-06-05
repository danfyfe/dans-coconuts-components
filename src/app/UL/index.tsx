import { ReactElement } from "react";
import withValidation from "../hoc/withValidation";

const UL = ({ children }: { children: ReactElement<HTMLLIElement> | ReactElement<HTMLLIElement>[] }) => {
  return (
    <ul>
      {children}
    </ul>
  )
};

export default withValidation(UL, { childrenType: 'li', childrenRequired: true });
