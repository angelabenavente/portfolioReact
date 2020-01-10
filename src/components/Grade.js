import React from 'react';

class Grade extends React.Component{    
  render(){
    return (
      <section className="master">
        <div className="view-hidden" id="toggle">
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
      </section>      
    )
  }
}

export default Grade;
