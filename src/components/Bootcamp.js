import React from 'react';

class Bootcamp extends React.Component{    
  render(){
    return (
      <section className="bootcamp">
        <div className="view-hidden" id="toggle">
          <ul>
            <li>- HTML5 | CSS3 | SASS.</li>
            <li>- Responsive design.</li>
            <li>- Development: JavaScript next | Node.</li>
            <li>- Frameworks: React.</li>
            <li>- Versions control: Git | Github.</li>
            <li>- Task runner: Gulp.</li>
            <li>- Dependency management: NPM.</li>
            <li>- Scrum & Agile philoshopy.</li>      
          </ul>
        </div>
      </section>      
    )
  }
}

export default Bootcamp;
