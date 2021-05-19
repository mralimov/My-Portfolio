import React from 'react';

const ReposMenu = ({ filterItem, allRepos }) => {
  return (
    <>
      <div className='projects-menu'>
        <div className='projects-menu-container'>
          {allRepos.map((curEl, i) => {
            return (
              <button
                key={i}
                className='btn-active'
                // data-filter='all'
                onClick={() => filterItem(curEl)}
              >
                {curEl}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ReposMenu;
