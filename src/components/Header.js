import React from 'react';
import Media from 'react-media';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    console.log(this.props.onTop)
    return (
  
      <header className="header">

      <div className="navigationAuthor">
    
        <div className="navigation header__navigation">
          <input type="checkbox" className="navigation__checkbox" id="navi-toggle"/>
          <label htmlFor="navi-toggle" id="navigation__button" className="navigation__button" style={(this.props.onTop === "about") ? {backgroundColor : "#252525"}: (this.props.onTop === "firstWork") ? {backgroundColor : "#2a4d68"} : {backgroundColor : "green"} }>
            <p className="navigation__icon">&nbsp;</p>
          </label>
          <div id="navigation-background" className="navigation__background">&nbsp;</div>
    
          <nav className="navigation__nav">
            <ul className="navigation__list">
              <li className="navigation__item">
                <a href="#" className="navigation__link">Home</a>
              </li>
              <li className="navigation__item">
                <a href="#" className="navigation__link">Work</a>
              </li>
              <li className="navigation__item">
                <a href="#" className="navigation__link">About</a>
              </li>
              <li className="navigation__item">
                <a href="#" className="navigation__link">Formation</a>
              </li>
              <li className="navigation__item">
                <a href="#" className="navigation__link">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
    
        <div className="header__logo">
          <Media queries={{
            small: "(max-width: 599px)",
            medium: "(min-width: 600px) and (max-width: 1199px)",
            large: "(min-width: 1200px)"
          }}>
            {matches => (
              <React.Fragment>
                {matches.small && <span id="author" >AB | </span>}
                {matches.medium && <span id="author" >Ángela Benavente | </span>}
                {matches.large && <span id="author" >Ángela Benavente | </span>}
              </React.Fragment>
            )}
        </Media>
          <span className="pageCategory">{(this.props.onTop === "about") ? "about" : "projects"}</span>
        </div>
      </div>
      <div id="contactLinksHeader" className="header__logo-aboutMe">
        <div className="contactLink contact-button">
          <a href="https://www.linkedin.com/in/%C3%A1ngela-benavente-almaz%C3%A1n-436003174/" className="btn-text" target="_blank">
            <i className="social-icon fab fa-linkedin"></i>
          </a>
        </div>
        <div className="contactLink contact-button">
          <a href="https://github.com/angelabenavente" className="btn-text" target="_blank">
            <i className="social-icon fab fa-github"></i>
          </a>
        </div>
        <div className="contactLink contact-button">
          <a href="https://github.com/angelabenavente" className="btn-text" target="_blank">
            <i className="social-icon fas fa-envelope-square"></i>
          </a>
        </div>
        <div className="contactLink contact-button">
          <a href="tel:644154842" className="btn-text" target="_blank">
            <i className="social-icon fas fa-phone-square-alt"></i>
          </a>
        </div>
    </div>
    </header>

  
    );
  }
}

export default Header;
