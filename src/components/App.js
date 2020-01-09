import React from 'react';
import Work from './Work';
import '../styles/App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
<main className="main">
  <Work
    coverClass="first-proyect-image image"
    descriptionClass="first-project-description description"
    projectImage="./assets/images/ab-favicon.png"
    projectTitle="Anonymous Proxy"
    projectDescription="Responsive design project"
    projectSkills="HTML | SASS | JS | GULP"
    projectCode="https://github.com/angelabenavente/Anonymous-proxy"
    projectWeb="http://beta.adalab.es/evaluacion-final-modulo-1-angelabenavente/"
  />
  <Work
    coverClass="second-proyect-image image"
    descriptionClass="second-project-description description"
    projectImage="./assets/images/ab-favicon.png"
    projectTitle="Awesome Profile Cards"
    projectDescription="App to generare and share proffesional cards"
    projectSkills="REACT | APIs | SASS | JS | GULP"
    projectCode="https://github.com/angelabenavente/Awesome-profile-cards"
    projectWeb="http://beta.adalab.es/project-promo-h-module-2-team-2-afternoon/"
  />
  <Work
    coverClass="third-proyect-image image"
    descriptionClass="third-project-description description"
    projectImage="./assets/images/ab-favicon.png"
    projectTitle="Dice Pig Game"
    projectDescription="Dice game for two"
    projectSkills="HTML | CSS | JS"
    projectCode="https://angelabenavente.github.io/DicePigGame/"
    projectWeb="https://github.com/angelabenavente/DicePigGame"
  />
  <Work
    coverClass="fourth-proyect-image image"
    descriptionClass="fourth-project-description description"
    projectImage="./assets/images/ab-favicon.png"
    projectTitle="Contact us!"
    projectDescription="Web for contact work teams"
    projectSkills="HTML | CSS | JS | GULP"
    projectCode="https://github.com/Adalab/project-promo-h-module-1-team-2-afternoon-sprint-2-"
    projectWeb="http://beta.adalab.es/project-promo-h-module-1-team-2-afternoon-sprint-2-/"
  />
  <Work
    coverClass="fifth-proyect-image image"
    descriptionClass="fifth-project-description"
    projectImage="./assets/images/ab-favicon.png"
    projectTitle="Series around the world"
    projectDescription="Series in all the world, filter by rating and save in favorites"
    projectSkills="SASS | JS | API | LocalStore"
    projectCode="https://github.com/angelabenavente/search-tv-series"
    projectWeb="https://angelabenavente.github.io/search-tv-series/"
  />
  
  <section id="about" className="main__aboutMe">
    <div className="main__aboutMe__cover">
      <h2>About</h2>
    </div>
  
    <article className="main__aboutMe__content">
      <h2 className="heading-secondary">How/Who I am?</h2>
      <p>I am a enthusiastic, creative Frontend developer and Graphic Designer that enjoy experimenting with the new development trends and working regularly on my own and colaboratibe Web design projects.</p>
      <p>In a quest for always keeping myself updated, I read books and attend conferences & meetups.</p>
  
      <section className="main__aboutMe__content--formation">
        <h2 className="heading-secondary">What's my formation?</h2>
        <div className="main__aboutMe__content--formation--box">
          <div id="js-toggle" className="bootcamp-view">
            <div className="view-left">
              <div className="studiesWrapper">
                <p className="formation__bootcamp--title">FrontEnd development Bootcamp</p>
                <span className="study-place">in Adalab</span>
              </div>
            </div>
          <div className="formation__bootcamp--arrow">
            <span>
              <i className="bootcamp-arrow-button fas fa-chevron-down"></i>
            </span>
          </div>
        </div>
        <div className="view-hidden hidden" id="toggle">
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
      </div>
      <div className="main__aboutMe__content--formation--box">
        <div className="master__header-container">
          <div className="master__header">
            <div className="studiesWrapper">
              <p className="master__title">Web and Ghaphic Design Master</p>
              <span className="study-place">in AZPE</span>
            </div>
          </div>
          <div className="button-form">
            <span>
              <i className="arrow-button-form fas fa-chevron-down"></i>
            </span>
          </div>
        </div>
        <form className="master__form hidden" action="" method="post">
          <ul>
            <li>- Web development.</li>
            <li>- Wordpress</li>
            <li>- Graphic design: Ps, Ia, Id</li>
            <li>- Digital marketing: SEO/SEM tools.</li>
            <li>- Community Manager functions.</li>     
          </ul>
        </form>
      </div>
  
      <div className="main__aboutMe__content--formation--box">
        <div className="formation__grade">
          <div className="formation-container">
            <div className="studiesWrapper">
              <p className="title">Languages & Communication Grade</p>
              <span className="study-place">in Universidad Autónoma de Madrid</span>
            </div>
            <div className="button-form">
              <span>
                <i className="arrow-button-share fas fa-chevron-down"></i>
              </span>
            </div>
          </div>
          <div id="formation-button-section" className="validateInputsSection hidden">
            <ul>
              <li>- Communication techniques. </li>
              <li>- Trading and Mediation.</li>
              <li>- Digital editing, Design and Layout.</li>
              <li>- Audiovisual analysis.</li>
              <li>- Branding.</li>
              <li>- Translation.</li>
              <li>- French (C1). English (B2).</li>
              <li>- Mandarin Chinese (HSK3)</li>
            </ul>
          </div>
        </div>
      </div>
  
      <div className="main__aboutMe__content--formation--box">
        <div id="js-toggle-courses" className="courses-view">
          <div className="view-left">
            <div className="studiesWrapper">
              <p className="formation__courses--title">Especialize courses</p>
              <span className="study-place">Self-learning</span>
            </div>
          </div>
          <div className="formation__courses--arrow">
            <span>
              <i className="courses-arrow-button fas fa-chevron-down"></i>
            </span>
          </div>
        </div>
        <div className="view-hidden hidden" id="toggle-courses">
          <ul>
            <li>- Complete JavaScript (45h). Udemy</li>
            <li>- Advanced CSS and Sass (28h). Udemy</li>   
            <li>- Digital Marketing (24h). IAB</li>
            <li>- Team Building (12h). UAM</li>   
          </ul>
        </div>
      </div>
    </section>
  
    <section className="main__skills">
      <h2 className="heading-secondary">Skills</h2>
      <div className="skillsContainer">
        <section>
          <h3 className="category-front">Front-End</h3>
          <div className="frontend-wrapper skillsWraper">
            <ul className="primera">
              <li className="skill">
                <i className="fab fa-html5" style={{color:' #dd4b25'}}></i>HTML
              </li>
              <li className="skill">
                <i className="fab fa-css3-alt" style={{color: "#1a6fb4"}}></i>CSS
              </li>
              <li className="skill">
                <i className="fab fa-js" style={{color: "#efd81d"}}></i>Javascript
              </li>
              <li className="skill">
                <i className="fab fa-sass" style={{color: "#c76494"}}></i>Sass
              </li>
              <li className="skill">
                <i className="fab fa-sass" style={{color: "#c76494"}}></i>Pug
              </li>
              <li className="skill">
                <i className="fab fa-react" style={{color: "#2d82ca"}}></i>React
              </li>
              <li className="skill">
                <i className="fab fa-node-js" style={{color: "#2d82ca"}}></i>Node.js
              </li>
              <li className="skill">
                <i className="fab fa-npm" style={{color: "#8df108"}}></i>NPM
              </li>
              <li className="skill">
                <i className="fab fa-gulp" style={{color: "#dd4b25"}}></i>Gulp
              </li>
              <li className="skill">
                <i className="fab fa-wordpress-simple" style={{color: "#2d82ca"}}></i>Wordpress
              </li>
              <li className="skill">
                <i className="fas fa-code-branch" style={{color: "#dd4b25"}}></i>Git
              </li>
              <li className="skill">
                <i className="fas fa-chart-bar" style={{color: "#e87205"}}></i>Github
              </li>
            </ul>
          </div>
        </section>
        <div>
          <section>
            <h3 className="category-design">Graphic Design</h3>
            <div className="graphic-design-wrapper skillsWraper">
              <ul className="graphic-design">
                <li className="skill">
                  <i className="fas fa-photo-video" style={{color: "#00c6fa"}}>
                  </i>Photoshop
                </li>
                <li className="skill">
                  <i className="fas fa-vector-square" style={{color: "#ff7c00"}}>
                  </i>Illustrator
                </li>
                <li className="skill">
                  <i className="far fa-newspaper" style={{color: "#e10186"}}>
                  </i>InDesign
                </li>
                <li className="skill">
                  <i className="fas fa-image" style={{color: "#add0e4"}}>
                  </i>Lightroom
                </li>
              </ul>
            </div>
          </section>
          <section className="seo">
            <h3 className="category-seo">Team Building</h3>
            <div className="seo-wrapper skillsWraper">
              <ul className="primera">
                <li className="skill">
                  <i className="fab fa-trello" style={{color: "#0379c2"}}></i>Trello
                </li>
                <li className="skill">
                  <i className="fas fa-chart-bar" style={{color: "#e87205"}}></i>Scrum
                </li>
                <li className="skill">
                  <i className="fas fa-chart-bar" style={{color: "#e87205"}}></i>Agile
                </li>
              </ul>
            </div>
          </section>
          </div>
          </div>
        </section>
        <h2 className="heading-secondary paragraph-linkedin">More details in my...</h2>
        <div className="download-cv-button">
            
          <a className="download-cv-link" target="_blank" href="../pdfs/reporte2-05-10.pdf" download="Reporte2Mayo2010">
            <i className="fas fa-download"></i>{'\u00A0'}  Curriculum Vitae (PDF)
          </a>
        </div>

      <h2>Contact</h2>
      <p className="heading-final u-margin-bottom-small"> If you have a project or want to collaborate you are very welcome to contact me.<br/>I am available for freelance projects and full-time employment.</p>
      <div className="contact-button">
        <a className="btn-text">
          <i className="social-icon fas fa-map-marker-alt"></i>{'\u00A0'} Madrid, Spain
        </a>
      </div>
      <div className="contact-button">
        <a href="https://www.linkedin.com/in/%C3%A1ngela-benavente-almaz%C3%A1n-436003174/" target="_blank" className="btn-text">
          <i className="social-icon fab fa-linkedin"></i>{'\u00A0'} Ángela Benavente Almazán
        </a>
      </div>
      <div className="contact-button">
          <a href="https://github.com/angelabenavente" target="_blank" className="btn-text">
            <i className="social-icon fab fa-github"></i>{'\u00A0'} @angelabenavente
          </a>
      </div>
      <div className="contact-button">
        <a href="mailto:angela.b.almazan@gmail.com" target="_blank" className="btn-text">
          <i className="social-icon fas fa-envelope-square"></i>{'\u00A0'}  angela.b.almazan@gmail.com
        </a>
      </div>
      <div className="contact-button">
        <a href="tel:644154842" target="_blank" className="btn-text">
          <i className="social-icon fas fa-phone-square-alt"></i> {'\u00A0'}+0034 644154842
        </a>
      </div>

    </article>
  </section>
</main>
    );
  }
}

export default App;
