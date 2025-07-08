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
                <h4><b>IT Migration Technician</b></h4>
                Apex Systems / CompuCom, Denver, CO <br />
                June, 2025
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
                <h4><b>Assistant Manager</b></h4>
                Busy Bee Cleaners LLC, Aurora, CO <br />
                May 2023 – August 2023
                <br />
                <br />
                <ul>
                    <li>- Led teams of 4-6 people</li>
                    <li>
                        - Utilized time management to ensure jobs completed on schedule
                    </li>
                    <li>
                        - Identified needs for staffing, used organizational skills to
                        create <br />
                        and distribute schedules to keep members informed of changes
                    </li>
                    <li>
                        - Translated from Spanish to English for team communication
                    </li>
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
