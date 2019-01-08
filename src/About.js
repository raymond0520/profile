import React, {Component} from 'react';
import './About.css';
import About_Img from './about_img.jpg';
import About_Bg from './about_bg.jpg';

class About extends Component {
  render() {

    const About_container_style = {
      backgroundImage: 'url(' + About_Bg + ')',
      backgroundSize: 'contain'
    };

    return <div className="About-container" style={About_container_style}>
      {/* <img src={About_Bg} className="About-bg" alt="about background" /> */}
      <div className="About-img-container">
        <img src={About_Img} className="About-img" alt="about" />
      </div>
      <div className="About-text-container">
        <h1 className="About-title">A short story about me</h1>
        <p className="About-summary">
          Strong engineering professional with a Master's Degree
          in Software Engineering of Distributed Systems from KTH
          Royal Institute of Technology. 3+ years’ hands on
          JavaScript experience with a demonstrated history of
          frontend development in diverse and international agile
          environments. Skilled with modern JavaScript coding,
          testing and debugging and heavy github user. I like to
          follow latest technology in my spare time.
              </p>
      </div>
    </div>;
  }
}

export default About;