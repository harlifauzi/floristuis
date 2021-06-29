import React from 'react';
import "./MyFooter.css";

const MyFooter = () => {
    return (
        <div className="myfooter-container">
            <div className="myfooter-wrapper">
                <p className="myfooter-text">Built with <span>React.js</span> · <span>Firebase</span> and more! By <span>Floristuis</span></p>
            </div>
        </div>
    )
}

export default MyFooter
