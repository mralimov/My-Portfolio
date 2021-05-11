import React from 'react';
// import '../../CSS/component-styling/projectsMenu.css';
const ProjectsMenu = () => {
  return (
    <div className='projects-menu'>
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
    </div>
  );
};

export default ProjectsMenu;
