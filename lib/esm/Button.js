var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import * as React from "react";
export var Button = function (_a) {
    var children = _a.children, primary = _a.primary;
    return (React.createElement("button", { css: __assign({ backgroundColor: "white", color: "gray" }, (primary && {
            backgroundColor: "blue",
            color: "white",
        })) }, children));
};
