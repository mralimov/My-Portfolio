import React, { useState } from 'react';
import './ModalWindow.css';
const ModalWindow = (props) => {
  return (
    <div className='modal-wrap flex visible'>
      <div className='mask'></div>
      <div className='modal' id='modal' style={{ maxWidth: '700px' }}>
        <div className='carousel-wrap' style={{ width: '700px' }}>
          <div className='window'>
            <div
              id='carousel'
              style={{ width: '-700px; transform: translateX(0px)' }}
              className
            >
              <img
                className='slide'
                style={{ width: '700px' }}
                src='https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg'
                alt=''
              />

              <img
                className='slide'
                style={{ width: '700px' }}
                src='https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-mont-blanc.jpg'
                alt=''
              />

              <img
                className='slide'
                style={{ width: '700px' }}
                src='https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-amiens-riquewihr.jpg'
                alt=''
              />
            </div>
            <i className='fas fa-chevron-left' id='prev'></i>
            <i className='fas fa-chevron-right' id='next'></i>
          </div>
        </div>
        <div className='info-box'>
          <div className='modal_title'>MODAL TITLE</div>
          <div className='modal_tag'>Modal Tag</div>
          <div className='modal_detail'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            ullam animi officiis laudantium enim quasi aut voluptatem accusamus
            dignissimos sapiente perspiciatis ut autem, amet a.
          </div>
          <a href='#' target='_blank'>
            <div className='button visible'>
              <i className='fas fa-external-link-alt'></i>
              VIEW SITE
            </div>
          </a>
        </div>
        <i className='close fas fa-times'></i>
      </div>
    </div>
  );
};

export default ModalWindow;
