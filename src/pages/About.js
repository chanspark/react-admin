import React from 'react';
import queryString from 'query-string';

const About = ({ location, match }) => {
    const query = queryString.parse(location.search);
    console.log(query);
    // const detail = query.detail === 'true';
    const detail = query.detail;

    return (
        <div>
            <h2>About { match.params.name }</h2>
            {/*{ detail && 'detail: blahblah' }*/}
            { detail }
        </div>
    )
};

export default About;