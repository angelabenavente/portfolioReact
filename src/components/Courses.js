import React from 'react';

class Courses extends React.Component{    
  render(){
    return (
      <section className="coursesr">
        <div className="view-hidden" id="toggle">
        <ul>
        <li>- Complete JavaScript (45h). Udemy</li>
            <li>- Advanced CSS and Sass (28h). Udemy</li>   
            <li>- Digital Marketing (24h). IAB</li>
            <li>- Team Building (12h). UAM</li>   
          </ul>
        </div>
      </section>      
    )
  }
}

export default Courses;
