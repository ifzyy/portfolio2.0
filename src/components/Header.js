import React, { useEffect } from 'react'
import { BsGithub } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
import { FaAngellist } from 'react-icons/fa'
import profile from '../images/hero-devices.svg'
import AOS from 'aos'
import 'aos/dist/aos.css'
import '../styles/header.css'
const Header = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])
    return (
        <div id="home">
            <section className="headline" data-aos="zoom-in">
                <div className="supporting-text">
                    <ul className="desktop-links">
                        <li><a href="https://github.com/ifzyy"><BsGithub /></a></li>
                        <li><a href="https://linkedin.com/in/johnson-emmanuel/"><BsLinkedin /></a></li>
                        <li><a href="https://twitter.com/JohnsnEmmanuel"><BsTwitter /></a></li>
                        <li><a href="https://angel.co/u/johnson-emmanuel-2"><FaAngellist /></a></li>
                    </ul>
                    <div className="greeter">
                        <h2 className="greeting"> Hi,
                            <br /> I'm <span> Johnson,</span> <br /> Web Developer
                        </h2>
                        <div className="description">
                            I can help you build a product , feature or website, Look through
                            some of my work and experience! If you like what you see and have a project you need coded,
                            don't hestiate to contact me.
                        </div>
                        <div className="spi">
                            <a href="#contact" className="contact-me-up">Contact me</a>
                            
                            <a className="contact-me-up" target="blank" href="https://docs.google.com/document/d/1tLfvt2igmRN-oh-5-nXqFZWA4qcpI37imy7ylz69Ljk/edit?usp=sharing">Get My Resume</a>
                        </div>

                    </div>
                </div>
                <div className="profile"><img className="hero" src={profile} alt="BigCo Inc. logo" /></div>
            </section >
        </div >
    )
}

export default Header
