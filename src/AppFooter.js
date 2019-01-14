import React, {Component} from 'react';
import './AppFooter.css';
import GitHub from './github.svg';
import Linkedin from './linkedin.svg';

class AppFooter extends Component {
    render() {
        return <div className="App-footer">
            <div className="Links-container">
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/raymond0520">
                    <img src={GitHub} alt="github ico" className="Github-ico" />
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/raymond0520">
                    <img src={Linkedin} alt="github ico" className="Linkedin-ico" />
                </a>
            </div>
            <p className="Copyright">Copyright@2018</p>
          </div>;
    }
}

export default AppFooter;