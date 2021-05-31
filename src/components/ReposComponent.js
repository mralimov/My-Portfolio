import React, { useState } from 'react';
import Data from './data';
import ReposGallery from './ReposGallery';
import ReposMenu from './ReposMenu';

const allDataValues = [...new Set(Data.map((curEl) => curEl.language))];

// import '../../CSS/component-styling/projectsMenu.css';
const ReposComponent = () => {
  const [items, setItems] = useState(Data);
  const [allRepos, setallRepos] = useState(allDataValues);
  const [modalData, setModalData] = useState('');

  const filterModal = (e) => {
    const updateModal = Data.filter((element) => {
      return element.id === e;
    });
    setModalData(updateModal);
  };

  const filterItem = (el) => {
    const updateItems = Data.filter((curEl) => {
      return curEl.language === el;
    });
    setItems(updateItems);
  };

  return (
    <>
      <ReposMenu filterItem={filterItem} />
      <ReposGallery
        item={items}
        filterModal={filterModal}
        modalData={modalData}
      />
    </>
  );
};

export default ReposComponent;
