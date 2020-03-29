import * as React from "react";
import * as _ from "styled-components/cssprop";

type Props = {
  primary: boolean;
};
export const Button: React.FC<Props> = ({ children, primary }) => (
  <button
    css={{
      backgroundColor: "white",
      color: "gray",
      ...(primary && {
        backgroundColor: "blue",
        color: "white",
      }),
    }}
  >
    {children}
  </button>
);
