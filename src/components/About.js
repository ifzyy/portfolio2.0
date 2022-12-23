import React, { useEffect } from 'react'
import { BsFillPatchCheckFill } from 'react-icons/bs'
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/about.css'
const About = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, easing: 'linear' });
        AOS.refresh();
    }, []);
    return (
        <div id="about">
            <div className="split" data-aos="zoom-in">
                <div className="about">
                    <h1 className="about-header" data-aos="fade-right">About me</h1>
                    <p className="about-text" data-aos="fade-left">  I'm a software developer from Nigeria, specialized in different technologies, <br/>
                        Building web applications, and beautiful websites for companies. <br/>
                        I love learning new languages and technologies and i am experienced in landing projects in a time pressured settings.
                    </p>
                    <a className="resume" href="resume">Get My Resume</a>
                </div>

                <div className="my-image" data-aos="zoom-in-down"><img className="me" src="https://user-images.githubusercontent.com/46050946/154709509-cecdbcc3-20ed-4037-9046-99f7a05d5dbb.gif" alt="BigCo Inc. logo" /></div>
            </div>

            <h4 className="lang" data-aos="zoom-in">Languages,Framworks and Tools</h4>
            <div className="splitter" data-aos="zoom-in">
                <ul className="language-used">
                    <li><BsFillPatchCheckFill /> CSS</li>
                    <li><BsFillPatchCheckFill />HTML</li>
                    <li><BsFillPatchCheckFill />Javascript</li>
                    <li><BsFillPatchCheckFill />Bootstrap</li>
                    <li><BsFillPatchCheckFill />Ruby on Rails </li>
                    <li><BsFillPatchCheckFill />RSpec</li>
                </ul>
                <ul className="language-used">
                    <li><BsFillPatchCheckFill />Capy Bara</li>
                    <li><BsFillPatchCheckFill />Ruby</li>
                    <li><BsFillPatchCheckFill />Github</li>
                    <li><BsFillPatchCheckFill />React js</li>
                    <li><BsFillPatchCheckFill />Git</li>
                    <li><BsFillPatchCheckFill />Terminal</li>
                </ul>
            </div>
            
        </div >
    )
}

export default About
