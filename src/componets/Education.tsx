import React from 'react';
import './componetStyles/InfoBoxes.css';
import { useFadeInOnScroll } from './hooks/useFadeInOnScroll.ts';

const Education: React.FC = () => {
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
                    src="./alumni.png"
                    alt="Alumni graduation cap"
                />
            </div>
            <div className="colTwo">
                <div className="Title">
                    <h1>
                        <b>
                            <u>Education</u>
                        </b>
                    </h1>
                </div>
                <br />
                <p>
                    <h4><b>Metropolitan State University of Denver, Denver, CO</b></h4>
                    Bachelor of Science in Computer Science, Minor in Mathematics
                    <br />
                    <br />
                    <h4><b>CompTIA A+ Certification</b></h4>
                    Obtained: April 8th, 2025 Expiration Date: April 8th, 2028
                    <br />
                    Reference Code: BHWYNKY5TNFE1ZKQ
                    <br />
                    <br />
                    <h4><b>Related Courses</b></h4>
                    Algorithms and Algorithm Analysis, Operating Systems, Machine
                    Learning, 
                    <br/>
                    Mobile Application Development, Web Application
                    Development
                    <br />
                    <br />
                    <h4><b>Related Projects</b></h4>
                    Band Website <i>"Heir To Nothing" </i>
                    <a
                        href="https://heirtonothing.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Visit Heir To Nothing's Website
                    </a>
                    <ul>
                        <li>Utilized PaaS to host a React app</li>
                        <li>Leveraged technologies such as NPM, TypeScript, and GitHub deployments</li>
                        <li>Applied agile methods in the development process</li>
                    </ul>
                    <br />
                    Web Application <i>"Eat Safe" </i>
                    <a
                        href="https://eat-safe.github.io/smart-scan/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Visit Eat Safe
                    </a>
                    <ul>
                        <li>Developed a user-friendly front-end interface</li>
                        <li>Assisted in optimizing the back-end system</li>
                        <li>Managed the hosting of the web application</li>
                    </ul>
                    <br />
                    Machine Learning <i>"Number Detector" </i>
                    <a
                        href="https://github.com/Iso-latte/MSU-NIST/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View on GitHub
                    </a>
                    <ul>
                        <li>Developed a user-friendly front-end interface</li>
                        <li>Assisted in optimizing the back-end system</li>
                        <li>Managed the hosting of the web application</li>
                    </ul>
                </p>
                <br />
                <br />
            </div>
        </div>
    );
};

export default Education;
