import React from 'react';
import polygonBackground from '../images/heroPolygonBackground.png'

class Hero extends React.Component {


  render() {
    return (
      <React.Fragment>
      <div id="home" className="hero background">
  <img className="hero__background" src={polygonBackground}/>
  <svg className="intro" viewBox="0 0 200 86">
    <text textAnchor="start" x="10" y="30" className="text text-stroke" clipPath="url(#text1)">Ángela</text>
    <text textAnchor="start" x="10" y="50" className="text text-stroke" clipPath="url(#text2)">Benavente</text>
    <text textAnchor="start" x="10" y="70" className="text text-stroke" clipPath="url(#text3)">______________________________</text>
    <text textAnchor="start" x="10" y="30" className="text text-stroke text-stroke-2" clipPath="url(#text1)">Ángela</text>
    <text textAnchor="start" x="10" y="50" className="text text-stroke text-stroke-2" clipPath="url(#text2)">Benavente</text>
    <text textAnchor="start" x="10" y="70" className="text text-stroke text-stroke-2" clipPath="url(#text3)">______________________________</text>
    <defs>
      <clipPath id="text1">
        <text textAnchor="start" x="10" y="30" className="text">Ángela</text>
      </clipPath>
      <clipPath id="text2">
        <text textAnchor="start" x="10" y="50" className="text">Benavente</text>
      </clipPath>
      <clipPath id="text3">
        <text textAnchor="start" x="10" y="70" className="text">______________________________</text>
      </clipPath>
    </defs>
  </svg>
  <div>
    <g/>
      <path d="M70.598,16.753c-1.722-1.24-4.113-0.852-5.349,0.866c-1.242,1.716-0.853,4.113,0.865,5.35   c13.613,9.818,18.021,27.857,10.482,42.89c-4.082,8.138-11.088,14.202-19.726,17.066c-8.636,2.871-17.877,2.2-26.013-1.879   c-8.134-4.083-14.197-11.088-17.066-19.722c-2.866-8.642-2.197-17.877,1.886-26.014c4.958-9.89,14.458-16.779,25.413-18.429   c0.074-0.008,0.137-0.036,0.211-0.053l0.157,7.571c0.021,0.839,0.542,1.585,1.321,1.889c0.782,0.305,1.672,0.11,2.25-0.496   l10.904-11.379c0.794-0.828,0.764-2.142-0.062-2.933L44.492,0.577c-0.606-0.582-1.499-0.739-2.267-0.399   c-0.251,0.108-0.476,0.269-0.662,0.462c-0.372,0.389-0.585,0.919-0.579,1.479l0.151,7.212c-0.385-0.063-0.78-0.087-1.188-0.027   c-13.418,2.021-25.052,10.46-31.125,22.571C-1.499,52.451,6.85,77.584,27.424,87.901c5.989,3.005,12.362,4.429,18.646,4.429   c15.306,0,30.065-8.439,37.382-23.028C92.688,50.884,87.284,28.782,70.598,16.753z" fill="#404853"/>
      </div>
      </div>
  <div>
    <p className="job">Frontend Developer</p>
  </div>


  </React.Fragment>
    );
  }
}

export default Hero;
