import React, { useState } from 'react';

const ReposMenu = ({ filterItem, allRepos }) => {
  // const [item, setItem] = useState('');

  // function addActive() {
  //   const toggling = document
  //     .querySelector('.btn')
  //     .classList.toggle('btn-active');
  //   setItem(toggling);
  // }
  return (
    <>
      <div className='projects-menu'>
        <div className='projects-menu-container'>
          {allRepos.map((curEl, i) => {
            return (
              <button
                key={i}
                className='btn'
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
