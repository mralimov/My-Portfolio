import React, { Fragment } from 'react';
// import Data from './data';
const ReposGallery = ({ item, filterModal, modalOpen }) => {
  const addModal = (e) => {
    const eventClass = e.target.className.slice(-2).trim();
    modalOpen(true);
    console.log(eventClass);
    // console.log(eventClass.length);
    // console.log(typeof eventClass);
    filterModal(parseInt(eventClass));
  };
  return (
    <div className='projects-box'>
      {item.map((el, i) => {
        while (i < 6) {
          const { id, title, image, highlights } = el;
          return (
            <Fragment>
              <div className='filter' key={id}>
                <div className='card-img' key={i}>
                  <img className='project-img' src={image} alt='' />
                </div>
                <div className='img-text'>
                  <div className='project-head'>{title}</div>
                  <span className='highlight'>{highlights}</span>
                </div>
                <button className={`btn-learn-more ${id}`} onClick={addModal}>
                  LEARN MORE
                </button>
              </div>
            </Fragment>
          );
        }
      })}
    </div>
  );
};
export default ReposGallery;
