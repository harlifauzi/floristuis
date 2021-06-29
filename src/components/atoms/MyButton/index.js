import React from 'react';
import './MyButton.css';

const MyButton = ({ title, type }) => {
    if ( type ) {
        if ( type === "normal" ) {
            return (
                <div className="mybutton-container">
                    {title}
                </div>
            )
        }
        if ( type === "outline" ) {
            return (
                <div className="mybutton-container-outline">
                    {title}
                </div>
            )
        }
    } else {
        return (
            <div className="mybutton-container">
                {title}
            </div>
        )
    }
}

export default MyButton
