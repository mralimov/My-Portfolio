"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _ReposComponent = _interopRequireDefault(require("./components/ReposComponent"));

var _ReposGallery = _interopRequireDefault(require("./components/ReposGallery"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import ReposCard from './components/ProjectsCard';
// import myRepos from '../JS/data';
function ProjectsHead() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_ReposComponent["default"], null));
}

console.log('RUNNING..');

_reactDom["default"].render( /*#__PURE__*/_react["default"].createElement(ProjectsHead, null), document.getElementById('projects'));
