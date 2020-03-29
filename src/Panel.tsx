import * as React from "react";
import * as _ from "styled-components/cssprop";

type Props = {};
export const Panel: React.FC<Props> = ({ children }) => (
  <div
    css={{
      backgroundColor: "gray",
    }}
  >
    {children}
  </div>
);
