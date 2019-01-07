import React, {Component} from 'react';
import './Navigator.css';

class MainNavigator extends Component {
    render() {
        return (
            <div className="Main-navigator">
                <ul className="Main-side-nav">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#work">Work</a></li>
                    <li><a href="#education">Education</a></li>
                    <li><a href="#portfilio">Portfilio</a></li>
                </ul>
            </div>
        );
    }
}

export default MainNavigator;