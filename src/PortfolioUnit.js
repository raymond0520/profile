import React, {Component} from 'react';
import './PortfolioUnit.css';

class PortfolioUnit extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Portfolio-unit-container">
                <img src={this.props.pic} alt="portfolio pic" className="Portfolio-picture"></img>
                <h1 className="Portfolio-title">{this.props.title}</h1>
                <p className="Portfolio-desc">{this.props.desc}</p>
            </div>
        );
    }
}

 export default PortfolioUnit;