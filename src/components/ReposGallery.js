import React from 'react';
import ModalWindow from './ModalWindow';
// import Data from './data';
const ReposGallery = ({ item, filterModal }) => {
  const addModal = (e) => {
    const eventClass = e.target.className.slice(-2).trim();

    console.log(eventClass);
    // console.log(eventClass.length);
    // console.log(typeof eventClass);
    filterModal(parseInt(eventClass));
  };
  return (
    <div className='projects-box'>
      {item.map((el, i) => {
        while (i < 6) {
          const { id, language, title, image, link, highlights } = el;
          return (
            <>
              {/* <ModalWindow /> */}
              <div className='filter' key={id}>
                <div className='card-img'>
                  <img className='project-img' src={image} alt='' />
                </div>
                <div className='img-text'>
                  <div className='project-head'>{title}</div>
                  <span className='highlight'>{highlights}</span>
                </div>
                <button className={`btn-learn-more ${id}`} onClick={addModal}>
                  LEARN MORE
                </button>
                <ModalWindow />
                {/* <a href={link}>LEARN MORE</a> */}
              </div>
            </>
          );
        }
      })}
    </div>
  );
};
export default ReposGallery;
