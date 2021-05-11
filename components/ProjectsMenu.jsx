import React from 'react';
import './ProjectsMenu.css';
function ProjectsMenu() {
  return (
    <div className='projects-menu-container'>
      <button className='btn btn-active' data-filter='all'>
        CSS-SASS
      </button>
      <button className='btn' data-filter='js'>
        JAVASCRIPT
      </button>
      <button className='btn' data-filter='react'>
        REACT
      </button>
      <button className='btn' data-filter='python'>
        PYTHON
      </button>
      <button className='btn' data-filter='mern'>
        MERN
      </button>
    </div>
  );
}

export default ProjectsMenu;
