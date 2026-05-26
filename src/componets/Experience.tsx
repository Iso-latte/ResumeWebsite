import React from 'react';
import './componetStyles/InfoBoxes.css';
import { useFadeInOnScroll } from './hooks/useFadeInOnScroll.ts'; // Assuming the hook is in a `hooks` folder.

const Experience: React.FC = () => {
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
                    src="./experience.png"
                    alt="Head with stars"
                />
            </div>
            <div className="colTwo">
                <div className="Title">
                    <h1>
                        <b>
                            <u>Experience</u>
                        </b>
                    </h1>
                </div>
                        <br />
                <h4><b>Commission Sales Associate, Build Your Own Department</b></h4>
                Micro Center, Denver, CO <br />
                August 2025 - Present
                <br />
                <br />
                <ul>
                    <li>
                        - Delivered front-line technical support by diagnosing and resolving hardware and software issues for desktops, laptops, and peripheral devices.
                    </li>
                    <li>
                        - Troubleshot a wide range of customer issues, including Windows errors, network and browser problems, and driver conflicts, providing clear end-user guidance and education.
                    </li>
                    <li>
                        - Performed hands-on hardware repairs and upgrades, including RAM, hard drives, and other internal components.
                    </li>
                    <li>
                        - Built and configured custom computer systems tailored to customer specifications and performance needs.
                    </li>
                    <li>
                        - Analyzed devices brought in by customers to identify root causes of technical issues and recommend optimal solutions.
                    </li>
                    <li>
                        - Maintained up-to-date knowledge of emerging technologies and products to deliver informed recommendations and effective setups.
                    </li>
                     <li>
                        - Thrived in fast-paced, high-pressure environments while consistently meeting performance targets and delivering exceptional customer service.
                    </li>
                    <li>
                        - Followed established troubleshooting processes and documentation standards to ensure consistent, efficient issue resolution.
                    </li>
                    <li>
                        - Maintained a clean, organized workspace and implemented daily routines to support operational efficiency.
                    </li>
                </ul>
                <br />
                <h4><b>IT Migration Technician</b></h4>
                Cigna, Denver, CO <br />
                June 2025 - July 2025
                <br />
                <br />
                <ul>
                    <li>- Performed detailed hardware and software setup, including system 
                    configuration, login validation, and app verification for migration</li>
                    <li>
                        - Documented and tracked inventory data for quality assurance and  
                        testing workflows
                    </li>
                    <li>- Followed technical procedures and worked with leads to resolve issues </li>
                </ul>
                <br />
                <h4><b>Warehouse Worker</b></h4>
                Amazon Fresh, Aurora, CO <br />
                August 2019 – March 2020 <br />
                <br />
                <ul>
                    <li>
                        - Effectively managed inventory by stocking incoming <br /> items
                        and picking items for shipment in a timely manner
                    </li>
                    <li>- Performed quality assurance checks</li>
                    <li>- Processed between 200-400 items</li>
                </ul>
                <br />
                <h4><b>Greenskeeper</b></h4>
                Las Campanas, Santa Fe, NM <br />
                May 2017 – August 2018
                <br />
                <br />
                <ul>
                    <li>- Led teams of 4–6 people</li>
                    <li>
                        - Employed teamwork to ensure all grass <br />was well-maintained
                        before opening
                    </li>
                    <li>
                        - Practiced effective time management to <br/>ensure the crew
                        completed their tasks on time
                    </li>
                </ul>
                <br />
                <br/>
            </div>
        </div>
    );
};

export default Experience;
