import './componetStyles/InfoBoxes.css';

function Education() {
    return (
        <div className="container">
            <div className="colOne">
                <img width="70%" height="200px" src="./alumni.png" alt="GradCap" />
            </div>
            <div className="colTwo">
                <div className="Title">
                    <h3><b><u>Education</u></b></h3>
                </div>
                <p><br/><b>Metropolitan State University of Denver, Denver, CO</b><br/>
                Bachelor of Science in Computer Science, Minor in Mathematics<br/><br/>

                <b>Related Courses</b><br/> 
                Algorithms and Algorithm Analysis, Operating Systems, Machine Learning,<br/> Mobile Application 
                Development, Web Application Development<br/><br/>

                <b>Related Projects</b><br/>
                Web Application <i>"Eat Safe"</i><a href="https://eat-safe.github.io/smart-scan/" target="_blank"> https://eat-safe.github.io/smart-scan/ </a><br/>
                <ul>
                    <li>- Developed a user-friendly front-end interface</li>
                    <li>- Assisted in optimizing the back-end system</li>
                    <li>- Managed the hosting of the web application</li>
                </ul>  
                <br/>Machine Learning <i>"Number Detector"</i><a href="https://github.com/Iso-latte/MSU-NIST/" target="_blank"> https://github.com/Iso-latte/MSU-NIST/ </a><br/>
                <ul>
                    <li>- Developed a user-friendly front-end interface</li>
                    <li>- Assisted in optimizing the back-end system</li>
                    <li>- Managed the hosting of the web application</li>
                </ul>  
                </p>
            </div>
        </div>
    );
}

export default Education;
