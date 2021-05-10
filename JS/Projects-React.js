(function () {
  'use strict';

  class ProjectsRepo extends ReadableStreamDefaultController.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }

    render() {
      return;
      <>
        <h1>Hello world</h1>;
      </>;
    }
  }

  ReactDOM.render(<ProjectsRepo />, document.getElementById('projects'));
})();
