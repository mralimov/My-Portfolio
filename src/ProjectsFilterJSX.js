import React from 'react';
import ReactDOM from 'react-dom';
import ProjectsMenu from './components/ProjectsMenu';
import ReposCard from './components/ProjectsCard';
// import myRepos from '../JS/data';
function ProjectsHead() {
  return (
    <>
      <ProjectsMenu />
      <ReposCard />
    </>
  );
}
console.log('RUNNING....');
// const header = <h2>Hello World</h2>;

ReactDOM.render(<ProjectsHead />, document.getElementById('projects'));
