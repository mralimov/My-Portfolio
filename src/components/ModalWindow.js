import React, { useState, Fragment } from 'react';
// import { FaChevronRight, FaChevronLeft, FaTimes } from 'react-icons/fa';
const ModalWindow = ({ dataModal, closeModal }) => {
  console.log(dataModal);
  const modalClosed = () => {
    closeModal(false);
  };
  return (
    <div className='modal-wrap flex visible' key={Math.random().toString()}>
      <div
        className='mask'
        onClick={modalClosed}
        key={Math.random().toString()}
      ></div>
      <div
        className='modal'
        id='modal'
        style={{ maxWidth: '700px' }}
        key={Math.random().toString()}
      >
        {dataModal.map((data, i) => {
          const { id, title, image, link, tag, details } = data;

          return (
            <Fragment>
              <div
                key={i}
                className='carousel-wrap'
                style={{ width: '700px', height: '450px' }}
              >
                <div className='window'>
                  <div
                    id='carousel'
                    style={{ width: '-700px; transform: translateX(0px)' }}
                    className
                  >
                    <img
                      className='slide'
                      style={{ width: '700px', height: '450px' }}
                      src={image}
                      alt=''
                    />

                    <img
                      className='slide'
                      style={{ width: '700px', height: '450px' }}
                      src={image}
                      alt=''
                    />

                    <img
                      className='slide'
                      style={{ width: '700px', height: '450px' }}
                      src={image}
                      alt=''
                    />
                  </div>
                  {/* <i className='fas fa-chevron-left' id='prev'></i>
                  <i className='fas fa-chevron-right' id='next'></i> */}
                </div>
              </div>
              <div className='info-box'>
                <div className='modal_title'>{title}</div>
                <div className='modal_tag'>{tag}</div>
                <div className='modal_detail'>{details}</div>
                <a href={link} target='_blank'>
                  <div className='button visible'>
                    <i className='fas fa-external-link-alt'></i>
                    VIEW SITE
                  </div>
                </a>
              </div>
              <i className='close fas fa-times' onClick={modalClosed}></i>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default ModalWindow;
