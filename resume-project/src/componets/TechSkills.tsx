import React from 'react';
import './componetStyles/InfoBoxes.css';
import { useFadeInOnScroll } from './hooks/useFadeInOnScroll';

const TechSkills: React.FC = () => {
    const { ref, isVisible } = useFadeInOnScroll();

    return (
        <div
            ref={ref}
            className={`container fade-in ${isVisible ? 'visible' : ''}`}
        >
            <div className="colOne">
                <img
                    width="70%"
                    height="200px"
                    src="./cognitive-training.png"
                    alt="Head with gears"
                />
            </div>
            <div className="colTwo">
                <div className="Title">
                    <h1>
                        <b>
                            <u>Technical Skills</u>
                        </b>
                    </h1>
                </div>
                <p>
                    <br />
                    <h4><b>Languages:</b></h4>
                    Python, Java, C, HTML, Kotlin, <br /> Ruby, JavaScript, TypeScript, React <br /> SQL, Shell Scripting, Bash
                    <br />
                    <br />
                    <h4><b>Applications:</b></h4>
                    Android Studio, GitHub, MS Excel, <br /> MS PowerPoint, Docker, Unity
                    <br />
                    <br />
                    <h4><b>Operating Systems:</b></h4>
                    Linux, Apple, Windows
                    <br />
                    <br />
                    <h4><b>Developer Tools and Methods</b></h4>
                    Git, Github, Agile (Scrum/Kanban)
                    <br />
                    <br />
                </p>
            </div>
        </div>
    );
};

export default TechSkills;
