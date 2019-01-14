import React, {Component} from 'react';
import './AppHeader.css';
import Navigator from './Navigator.js';

class AppHeader extends Component {
    render() {
        return (
            <div className="App-header">
                <p className="Logo-title">Raymond</p>
                <Navigator className="navigator"/>
            </div>
        );
    }
}

export default AppHeader;