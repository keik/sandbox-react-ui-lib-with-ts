"use strict";

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = __importStar(require("react"));

var _StyledDiv = (0, _styledComponents.default)("div").withConfig({
  displayName: "Panel___StyledDiv",
  componentId: "ru3db6-0"
})({
  backgroundColor: "gray"
});

exports.Panel = function (_a) {
  var children = _a.children;
  return <_StyledDiv>
    {children}
  </_StyledDiv>;
};