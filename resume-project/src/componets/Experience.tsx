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
                    <h3>
                        <b>
                            <u>Experience</u>
                        </b>
                    </h3>
                </div>
                <br />
                <b>Assistant Manager</b>
                <br />
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
                    <li>- Visited 10–20 customer sites weekly for routine cleaning</li>
                    <li>
                        - Translated from Spanish to English for team communication
                    </li>
                </ul>
                <br />
                <b>Warehouse Worker</b>
                <br />
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
                <b>Greenskeeper</b>
                <br />
                Las Campanas, Santa Fe, NM <br />
                May 2017 – August 2018
                <br />
                <br />
                <ul>
                    <li>- Led teams of 4–6 people</li>
                    <li>
                        - Employed teamwork to ensure all grass was well-maintained
                        before opening
                    </li>
                    <li>
                        - Practiced effective time management to ensure the crew
                        completed their tasks on time
                    </li>
                </ul>
                <br />
            </div>
        </div>
    );
};

export default Experience;
