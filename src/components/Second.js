import React from 'react';
import BasicTwo from './Basic_two';
import Basic from './Basic';
import None from './None';

const Second = () => {
    return (
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr 1fr",marginInline:"30px",paddingBlock:"13px"}}>
            <p><span style={{fontWeight:"bold"}}>02.</span> Service</p>
            <Basic />
            <BasicTwo />
            <None />
            <div>
                <p style={{fontSize:"1.2rem",fontWeight:"bold",display:"flex",alignItems:"center",justifyContent:"end"}}>$200</p>
            </div>
        </div>
    );
}

export default Second;
