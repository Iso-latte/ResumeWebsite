import './componetStyles/InfoBoxes.css';

function About() {
    return (
        <div className="container">
            <div className="colOne">
                <img width="70%" height="200px" src="/user.png" alt="person" />
            </div>
            <div className="colTwo">
                <div className="Title">
                    <h3><b><u>About</u></b></h3>
                </div>
                <p>
                    <br/><b>Who I am</b>
                    <ul>
                        <li>- I graduated high school and moved to Denver to pursue higher education in Computer Science and Mathematics.</li>
                        <li>- My passion for creating and problem-solving began with my early exposure to coding through game development on Roblox.</li>
                        <li>- I have always enjoyed collaboration and teamwork, which I developed further through participation in organized team sports.</li>
                    </ul>
                    <br/><b>Projects & Growth</b>
                    <ul>
                        <li>- During my studies, I explored Linux distributions using Raspberry Pi and VirtualBox, enhancing my understanding of operating systems.</li>
                        <li>- Developed a matrix LED picture display using Python and C++, combining programming and hardware skills.</li>
                        <li>- Built several websites and web applications using frameworks such as React, Flask, Django, and Ruby on Rails.</li>
                        <li>- Applied my Mathematics minor to understand foundational concepts of neural networks.</li>
                    </ul>
                    <br/><b>Future Goals</b>                 
                    <ul>
                        <li>- Currently preparing for CompTIA certifications to strengthen my technical credentials.</li>
                        <li>- Expanding my knowledge of networking to better understand system architectures and data flow.</li>
                        <li>- Deepening my comprehension of data structures and algorithms to enhance problem-solving skills.</li>
                        <li>- Exploring the full potential of AI technologies to innovate and create impactful solutions.</li>
                    </ul>
                </p>
            </div>
        </div>
    );
}

export default About;
