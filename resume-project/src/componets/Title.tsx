import React from 'react';
import './componetStyles/Title.css';
import { useFadeInOnScroll } from './hooks/useFadeInOnScroll';

const Title: React.FC = () => {
    const { ref, isVisible } = useFadeInOnScroll();

    return (
        <div
            ref={ref}
            className={`container-title fade-in ${isVisible ? 'visible' : ''}`}
        >
            <div className='background'>
                <div className='row'>
                    <h1 className='title-words'><b>Joaquin R. Trujillo</b></h1>
                    <p className='title-words'>
                        <img width="25" height="25" style={{ marginRight: '10px' }} src="./command-line.png" alt="Logo" />
                    Software Developer / IT Technician</p>
                    <p className='title-words'>
                        <a href="https://www.youtube.com/@isolatte3739" target="_blank" rel="noopener noreferrer">
                            <img src="./yt_icon_rgb.png" alt="YouTube" width="35" height="30"style={{ marginRight: '15px' }} />
                        </a>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                            <img src="./github-mark.png" alt="GitHub" width="30" height="30" style={{ marginRight: '15px' }}/>
                        </a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                            <img src="./LI-In-Bug.png" alt="LinkedIn" width="35" height="30" />
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Title;
