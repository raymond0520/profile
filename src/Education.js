import React, { Component } from 'react';
import './Education.css';
import EducationUnit from './EducationUnit.js';
import EducationBg from './about_bg.jpg';

class Education extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    educationList (props) {
        const listItems = props.educations.map((education) => 
            <li key={education.id}>
                <EducationUnit schoolIcon={education.schoolIcon}
                        schoolName={education.schoolName}
                        major={education.major}
                        startDate={education.startDate}
                        endDate={education.endDate}
                    />
            </li>
        );

        return (
            <ul className="Education-list">
                {listItems}
            </ul>
        );
    }

    render() {
        const educations = this.props.educations;
        const Education_container_style = {
            backgroundImage: 'url(' + EducationBg + ')',
            backgroundSize: 'contain'
        };

        return (
            <div className="Education-container" style={Education_container_style}>
                {/* <img src={EducationBg} alt="education background" className="Eucation-bg"></img> */}
                <h1 className="Education-container-title">My Education</h1>
                {this.educationList(this.props)}
            </div>
        );
    }
}

export default Education;
