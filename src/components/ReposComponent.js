import React, { useState, Fragment } from 'react';
import Data from './data';
import ReposGallery from './ReposGallery';
import ReposMenu from './ReposMenu';
import ModalWindow from './ModalWindow';

const ReposComponent = () => {
  const [items, setItems] = useState(Data);

  const [modalData, setModalData] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const filterModal = (repo) => {
    const updateModal = Data.filter((element) => {
      return element.id === repo;
    });
    setModalData(updateModal);
  };

  const filterItem = (el) => {
    const updateItems = Data.filter((curEl) => {
      return curEl.language === el;
    });
    setItems(updateItems);
  };

  const confirmModal = (event) => {
    setIsOpen(event);
  };

  return (
    <Fragment>
      {isOpen && (
        <ModalWindow
          dataModal={modalData}
          modalClose={confirmModal}
          key='modal-key'
        />
      )}
      <ReposMenu filterItem={filterItem} />
      <ReposGallery
        key='unique-key'
        item={items}
        filterModal={filterModal}
        modalOpen={confirmModal}
      />
    </Fragment>
  );
};

export default ReposComponent;
