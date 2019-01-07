import React, {Component} from 'react';
import './ExperienceUnit.css';

class ExperienceUnit extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Experience-unit-container">
                <div className="Experience-heading">
                    <h1 className="Experience-title">{this.props.title}</h1>
                    <p className="Experience-company">{this.props.company}</p>
                </div>
                <p className="Experience-date">{this.props.startDate} - {this.props.endDate}</p>
                <p className="Experience-summary">{this.props.summary}</p>
            </div>
        );
    }
}

export default ExperienceUnit;