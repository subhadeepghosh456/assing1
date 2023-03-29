import React from 'react';

const Headings = () => {
    return (
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr 1fr",marginInline:"30px",paddingBlock:"4px"}}>
            <div>
                <p style={{fontSize:"1.2rem",fontWeight:"bold"}}>Pages</p>
            </div>
            <div>
                <p style={{fontSize:"1.2rem",fontWeight:"bold"}}>Design</p>
            </div>
            <div>
                <p style={{fontSize:"1.2rem",fontWeight:"bold"}}>Interactions & Animations</p>
            </div>
            <div>
                <p style={{fontSize:"1.2rem",fontWeight:"bold"}}>Integration</p>
            </div>
            <div>
                <p style={{fontSize:"1.2rem",fontWeight:"bold",display:"flex",justifyContent:"end"}}>Cost</p>
            </div>
        </div>
    );
}

export default Headings;
