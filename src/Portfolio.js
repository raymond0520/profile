import React, {Component} from 'react';
import './Portfolio.css';
import PortfolioUnit from './PortfolioUnit.js';

class Portfolio extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);

        this.liRef = React.createRef();
    }

    componentDidMount () {
        // const node = this.liRef.current;
        // console.log("node.key");
    }

    portfolioList(props) {
        const listItems = props.portfolios.map((portfolio, index) =>
            <li key={portfolio.id} className="Portfolio-item" ref={index===1?this.liRef:null}>
                <PortfolioUnit pic={portfolio.pic}
                               title={portfolio.title}
                               desc={portfolio.desc}
                />
            </li>
        );

        return (
            <ul className="Portfolio-list">{listItems}</ul>
        );
    }

    render() {
        return (
            <div className="Portfolio-list-container">
                <h1 className="Portfolio-list-container-title">My portfolio</h1>
                {this.portfolioList(this.props)}
            </div>
        );
    }
}

export default Portfolio;