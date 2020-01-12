import React from 'react';
import '../styles/App.scss';
import '../images/firstProjectImage.jpg';
import '../images/firstWorkImage.png';

class Work extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
  
  <section id="work" className="main__work">
    
    

    <div id="first-project" className="first-project project">
      <div id="project-image"  className={this.props.coverClass}></div>

      <div id="project-description" className={this.props.descriptionClass}>
        <div className="textWorks">
          <h3 className="projectTitle" id="projectTitle">{this.props.projectTitle}</h3>
          <p id="projectDescription">{this.props.projectDescription}</p>
          <p id="projectSkills">{this.props.projectSkills}</p>
          <div className="linksInfoProject">
            <button className="seeMore-button">
              <a id="seePlaceLink" href={this.props.projectWeb} target="_blank">Visit place</a>
          </button>
          <button className="seeMore-button">
            <a id="seeCodeLink" href={this.props.projectCode} target="_blank">See code</a>
          </button>
          </div>
          <p className="nextSectionButton">
            <a href="#about">{}</a>
          </p>
        </div>
      </div>
    </div>
  </section>

  
    );
  }
}

export default Work;
