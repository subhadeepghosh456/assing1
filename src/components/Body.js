import React from 'react';
import First from './First';
import Headings from './Headings';
import Second from './Second';
import Third from './Third';
import Fourth from './Fourth'
import Fifth from './Fifth';

const Body = () => {
    return (
        <div style={{paddingBlock:"50px"}}>
            <Headings />
            <First />
            <Second />
            <Third />
            <Fourth />
            <Fifth />
        </div>
    );
}

export default Body;
