import React, { useState } from 'react';
import Data from './data';
import ReposGallery from './ReposGallery';
import ReposMenu from './ReposMenu';

const allDataValues = [...new Set(Data.map((curEl) => curEl.language))];

// import '../../CSS/component-styling/projectsMenu.css';
const ReposComponent = () => {
  const [items, setItems] = useState(Data);
  const [allRepos, setallRepos] = useState(allDataValues);
  const filterItem = (el) => {
    if (el === 'JAVASCRIPT') {
      setItems(Data);
      return;
    }
    const updateItems = Data.filter((curEl) => {
      return curEl.language === el;
    });
    setItems(updateItems);
  };
  return (
    <>
      <ReposMenu filterItem={filterItem} allRepos={allRepos} />
      <ReposGallery item={items} />
    </>
  );
};

export default ReposComponent;
