import React, { Component } from 'react';
import './EducationUnit.css';

class EducationUnit extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Education-unit-container">
                <img src={this.props.schoolIcon} alt="school icon" className="School-icon"></img>
                <p className="School-name">{this.props.schoolName}</p>
                <p className="Study-date">{this.props.startDate}-{this.props.endDate}</p>
                <p className="Major">{this.props.major}</p>
            </div>
        );
    }
}

export default EducationUnit;
