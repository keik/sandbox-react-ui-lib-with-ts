import _styled from "styled-components";
import * as React from "react";

var _StyledDiv = _styled("div").withConfig({
  displayName: "Panel___StyledDiv",
  componentId: "ved7em-0"
})({
  backgroundColor: "gray"
});

export var Panel = function Panel(_a) {
  var children = _a.children;
  return <_StyledDiv>
    {children}
  </_StyledDiv>;
};