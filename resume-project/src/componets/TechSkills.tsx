import './componetStyles/InfoBoxes.css';

function TechSkills() {
    return (
        <div className="container">
            <div className="colOne">
                <img width="70%" height="200px" src="./cognitive-training.png" alt="Head-with-gears" />
            </div>
            <div className="colTwo">
                <div className="Title">
                    <h3><b><u>Technical Skills</u></b></h3>
                </div>
                <p>
                    <br/><b>Languages:</b><br/>
                    Python, Java, C, HTML, Kotlin, <br/> Ruby, JavaScript, TypeScript, React<br/><br/>
                    <b>Applications:</b><br/>
                    Android Studio, GitHub, MS Excel, <br/> MS PowerPoint, Docker, Unity <br/><br/>
                    <b>Operating Systems:</b><br/>
                    Linux, Apple, Windows


                </p>
            </div>
        </div>
    );
}

export default TechSkills;
