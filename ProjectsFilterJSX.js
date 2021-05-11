import React from 'react';
import ProjectsMenu from '../components/ProjectsMenu';
import myRepos from '../JS/data';
function ProjectsHead() {
  state = {};
  return React.createElement(ProjectsMenu, null);
}

ReactDOM.render(React.createElement(ProjectsHead, null), document.getElementById('projects'));