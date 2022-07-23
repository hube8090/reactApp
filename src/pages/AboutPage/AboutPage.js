import React from 'react';

function AboutPage(props) {
    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.body}</p>
        </div>
    );
}

export default AboutPage;