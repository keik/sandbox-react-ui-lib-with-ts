"use strict";

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __assign = void 0 && (void 0).__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

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

var _StyledButton = (0, _styledComponents.default)("button").withConfig({
  displayName: "Button___StyledButton",
  componentId: "tbqhz4-0"
})(["", ""], function (p) {
  return p._css;
});

exports.Button = function (_a) {
  var children = _a.children,
      primary = _a.primary;
  return /*#__PURE__*/React.createElement(_StyledButton, {
    _css: __assign({
      backgroundColor: "white",
      color: "gray"
    }, primary && {
      backgroundColor: "blue",
      color: "white"
    })
  }, children);
};