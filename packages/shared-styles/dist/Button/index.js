"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultButton = void 0;
var resetButton = "\n  border: none;\n  cursor: pointer;\n";
exports.defaultButton = "\n  ".concat(resetButton, "\n  border: 2px solid transparent;\n\n  padding: 13px 29px;\n  font-size: 1rem;\n  line-height: calc(1rem + 1px);\n  text-align: left;\n  font-weight: 400;\n  text-transform: uppercase;\n  font-family: \"DIN 2014 Bold\", Fallback, sans-serif;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: all 0.2s;\n\n  .icon {\n    transition: transform 0.2s;\n    margin-bottom: 2px;\n  }\n\n  :hover {\n    .icon-after {\n      transform: translate(6px, 0);\n    }\n\n    .icon-before {\n      transform: translate(-6px, 0);\n    }\n  }\n");
