import React, {Component} from 'react';
import './Introduce.css';
import headerBackground from './main_index_bg.jpg';

class Introduce extends Component {
    render() {
        const Introduce_container_style = {
            backgroundImage: 'url(' + headerBackground + ')',
            backgroundSize: 'contain'
          };

        return (
            <div className="Introduce-container" style={Introduce_container_style}>
                {/* <img src={headerBackground} className="Header-background" alt="background" /> */}
                <div className="Home-greeting-container">
                    <p className="Home-greeting">Hey! I'm Raymond</p>
                    <p className="Self-desc">A JavaScript Developer</p>
                </div>
            </div>
        );
    }
}

export default Introduce;