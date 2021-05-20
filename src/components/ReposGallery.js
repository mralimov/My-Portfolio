import React from 'react';
// import Data from './data';
const ReposGallery = ({ item }) => {
  console.log(item);
  return (
    <div className='projects-box'>
      {item.map((el, i) => {
        while (i < 6) {
          const { id, language, title, image, link, highlights } = el;
          return (
            <div className='filter' key={id}>
              <div className='card-img'>
                <img className='project-img' src={image} alt='' />
              </div>
              <div className='img-text'>
                <div className='project-head'>{title}</div>
                <span className='highlight'>{highlights}</span>
              </div>
              <button className='btn-learn-more'>LEARN MORE</button>
              {/* <a href={link}>LEARN MORE</a> */}
            </div>
          );
        }
      })}
    </div>
  );
};
export default ReposGallery;
