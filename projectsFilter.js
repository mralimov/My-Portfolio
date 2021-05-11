"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _ProjectsMenu = _interopRequireDefault(require("./components/ProjectsMenu"));

var _ProjectsCard = _interopRequireDefault(require("./components/ProjectsCard"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import myRepos from '../JS/data';
function ProjectsHead() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_ProjectsMenu["default"], null), /*#__PURE__*/_react["default"].createElement(_ProjectsCard["default"], null));
}

console.log('RUNNING....'); // const header = <h2>Hello World</h2>;

_reactDom["default"].render( /*#__PURE__*/_react["default"].createElement(ProjectsHead, null), document.getElementById('projects'));
