import React, { Component } from 'react';
import './Education.css';
import EducationUnit from './EducationUnit.js';
import EducationBg from './about_bg.jpg';

class Education extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
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
                <div className="Education-list-container">
                    <EducationUnit schoolIcon={educations[0].schoolIcon}
                        schoolName={educations[0].schoolName}
                        major={educations[0].major}
                        startDate={educations[0].startDate}
                        endDate={educations[0].endDate}
                    />
                    <EducationUnit schoolIcon={educations[1].schoolIcon}
                        schoolName={educations[1].schoolName}
                        major={educations[1].major}
                        startDate={educations[1].startDate}
                        endDate={educations[1].endDate}
                    />
                </div>
            </div>
        );
    }
}

export default Education;
