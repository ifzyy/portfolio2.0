import React,{useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BsGithub, BsBoxArrowInUpRight } from 'react-icons/bs';
const Card = (props) => {
    useEffect(() => {
        AOS.init({ duration: 1000, easing: 'linear' });
        AOS.refresh();
    }, []);
    const { name, description, tools, image, live, source } = props
    return (

        <div id="card1" className="card" data-aos="fade-right">
            <h1 className="card-header" data-aos="fade-left">{name}</h1>
            <p className="card-desc" data-aos="fade-right">
                {description}
            </p>
            <ul className="tools-used" data-aos="fade-left">
                {tools.map(element => (
                    <li className="tool"> {element}</li>
                ))}
            </ul>
            <div className="card-text">
                <a href={source} target="blank"><BsGithub />See Source</a>
                <a href={live} target="blank"><BsBoxArrowInUpRight />See Live</a>
            </div>
            <img src={image} alt="" className="metro" />
        </div>
    )
}

export default Card
