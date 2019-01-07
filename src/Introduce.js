import React, {Component} from 'react';
import './Introduce.css';
import headerBackground from './main_index_bg.jpg';
import logo from './logo.svg';

class Introduce extends Component {
    render() {
        return (
            <div className="Introduce-container">
                <img src={headerBackground} className="Header-background" alt="background" />
                <div className="Home-greeting-container">
                    <p className="Home-greeting">Hey! I'm Raymond</p>
                    <p className="Self-desc">A JavaScript Developer</p>
                </div>
            </div>
        );
    }
}

export default Introduce;