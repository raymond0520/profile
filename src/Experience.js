import React, {Component} from 'react';
import './Experience.css';
import ExperienceUnit from './ExperienceUnit.js'

class Experience extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    experienceList(props) {
        const listItems = props.experiences.map((item) =>
            <li key={item.id}>
                <ExperienceUnit title={item.title}
                                company={item.company}
                                summary={item.summary}
                                startDate={item.startDate}
                                endDate={item.endDate}
                 />
            </li>
        );

        return (
            <ul>{listItems}</ul>
        );
    }

    render() {
        return (
            <div className="Experience-container">
                <h1 className="Experience-head-title">My Experience</h1>
                <div className="Experience-list-container">
                    {this.experienceList(this.props)}
                </div>
            </div>
        );
    }
}

export default Experience;