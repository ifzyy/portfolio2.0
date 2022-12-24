import React, { useEffect } from 'react'
import { FaReact } from 'react-icons/fa'
import { DiRuby } from 'react-icons/di'
import { CgDisplayFullwidth } from 'react-icons/cg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/services.css'
const Services = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, easing: 'linear' });
        AOS.refresh();
    }, []);

    return (
        <div id="services">
            <div className="languages">
                <div className="try" data-aos="zoom-in">
                    <div className="frontend" data-aos="fade-left"> <FaReact /> Frontend </div>
                    <div className="frontend" data-aos="fade-left"> <DiRuby /> backend</div>
                </div>

                <div className="frontend" data-aos="fade-right"><CgDisplayFullwidth />               fullstack
                </div>
            </div>
            <div className="job" data-os="zoom-in">
                <h2 className="job-head" data-aos="fade-left"> what i do?</h2>
                <ul className="job-lists" >
                    <li data-aos="fade-right">beautiful interface</li>
                    <li data-aos="fade-left">Enjoyable experience</li>
                </ul>
                <p className="job-text" data-aos="zoom-in">I build beautiful and
                    responsive web applications and websites for a client or for companies and <br /> i am
                    comfortable from the frontend to the backend side of things.
                </p>
            </div>
        </div>
    )
}

export default Services
