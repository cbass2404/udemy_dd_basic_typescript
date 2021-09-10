"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const server_1 = require("react-dom/server");
React.Component.prototype.helloWorld = function () {
    return "Hello World";
};
class MyComponent extends React.Component {
    render() {
        return React.createElement("div", null, this.helloWorld());
    }
}
console.log(server_1.renderToString(React.createElement(MyComponent, null)));
