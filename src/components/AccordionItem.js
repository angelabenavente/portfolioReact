import React from 'react';

class AccordionItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }

  toggleHandler = () => {
    const name = this.props.name;
    const handleOpenAccordion = this.props.handleOpenAccordion;

    handleOpenAccordion(name);
  }

  render() {
    const open = this.props.name === this.props.openName; //devuelve valor true o false
    const contentClass = 'form-bottom' + (open ? ' form-bottom-open' : '');
    const iconClass = 'form-arrow' + (open ? ' form-arrow-rotate' : '');

    return (
      <section className="forms__section">
        <div className="form-top" onClick={this.toggleHandler}>
          <div className="studiesWrapper">
          <p> {this.props.title}</p>
          <span className="study-place">{this.props.span}</span>
          </div>
          <div className={iconClass}>
            <i className="fas fa-chevron-down"></i>
          </div>
        </div>
        <div className={contentClass}>
          {this.props.children}
        </div>
      </section>
    )
  }
}

export default AccordionItem;