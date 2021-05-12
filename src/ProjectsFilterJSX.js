import React from 'react';
import ReactDOM from 'react-dom';
import ReposComponent from './components/ReposComponent';
// import ReposCard from './components/ProjectsCard';
import ReposGallery from './components/ReposGallery';
// import myRepos from '../JS/data';
function ProjectsHead() {
  return (
    <>
      <ReposComponent />
    </>
  );
}
console.log('RUNNING....');
// const header = <h2>Hello World</h2>;

ReactDOM.render(<ProjectsHead />, document.getElementById('projects'));
