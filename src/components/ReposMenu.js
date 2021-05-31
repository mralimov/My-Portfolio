import React, { useState } from 'react';

const Menu = ({ filterItem }) => {
  const [isValid, setIsValid] = useState('');

  const toggleClass = (el) => {
    filterItem(el);
    setIsValid(el);
  };
  return (
    <div className='projects-menu'>
      <div className='projects-menu-container'>
        <button
          className={`btn ${isValid === 'JAVASCRIPT' ? 'btn-active' : ''}`}
          onClick={() => toggleClass('JAVASCRIPT')}
        >
          JAVASCRIPT
        </button>
        <button
          className={`btn ${isValid === 'CSS-SASS' ? 'btn-active' : ''}`}
          onClick={() => toggleClass('CSS-SASS')}
        >
          CSS-SASS
        </button>
        <button
          className={`btn ${isValid === 'REACT' ? 'btn-active' : ''}`}
          onClick={() => toggleClass('REACT')}
        >
          REACT
        </button>
        <button
          className={`btn ${isValid === 'PYTHON' ? 'btn-active' : ''}`}
          onClick={() => toggleClass('PYTHON')}
        >
          PYTHON
        </button>
        <button
          className={`btn ${isValid === 'MERN' ? 'btn-active' : ''}`}
          onClick={() => toggleClass('MERN')}
        >
          MERN
        </button>
      </div>
    </div>
  );
};

export default Menu;
