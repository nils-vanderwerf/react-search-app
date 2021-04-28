import '../css/Heading.css'
import React from 'react';

const Heading = (props) => {
    return (
        <header style={props.color}>
                <h1>{props.heading}</h1>
        </header>
    )
}

export default Heading;