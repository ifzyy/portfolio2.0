import React, { useEffect } from 'react'

import AOS from 'aos';
import { data } from './portData';
import Card from './Card';
import 'aos/dist/aos.css';
import '../styles/portfolio.css'

const Portfolio = () => {

    useEffect(() => {
        AOS.init({ duration: 1000, easing: 'linear' });
        AOS.refresh();
    }, []);
    return (
        <div id="portfolio">
            <h1 className='portfolio' data-aos="fade-left">My portfolio</h1>
            <p className="port-text" data-aos="fade-right">
                A small gallery of recent projects chosen by me
                .I've done some of them together with amazing people from countries around the globe.
            </p>
            <div className="work-cards" data-aos="zoom-in">
                {data.map((dat) => (
                    <Card
                        key={dat.name}
                        name={dat.name}
                        description={dat.description}
                        tools={dat.tools}
                        live={dat.live}
                        source={dat.source}
                        image={dat.image}
                    />
                ))}

            </div>
        </div>
    )
}

export default Portfolio
