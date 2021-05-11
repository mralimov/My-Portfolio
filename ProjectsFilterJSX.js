import React from 'react';
import ProjectsMenu from '../components/ProjectsMenu';

function ProjectsHead() {
  return React.createElement(ProjectsMenu, null);
}

ReactDOM.render(React.createElement(ProjectsHead, null), document.getElementById('projects'));