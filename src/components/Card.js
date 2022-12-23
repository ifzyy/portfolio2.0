import React from 'react'
import { BsGithub, BsBoxArrowInUpRight } from 'react-icons/bs';
const Card = (props) => {
    const { name, description, tools, image, live, source } = props
    console.log(tools)
    return (

        <div id="card1" className="card">
            <h1 className="card-header">{name}</h1>
            <p className="card-desc">
                {description}
            </p>
            <ul className="tools-used">
                {tools.map(element => (
                    <li className="tool"> {element}</li>
                ))}
            </ul>
            <div className="card-text">
                <a href={source}><BsGithub />See Source</a>
                <a href={live}><BsBoxArrowInUpRight />See Live</a>
            </div>
            <img src={image} alt="" className="metro" />
        </div>
    )
}

export default Card
