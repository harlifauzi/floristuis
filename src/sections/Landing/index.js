import React from 'react';
import { MyButton, Gap } from '../../components';
import { HeroImage } from "../../assets";
import './Landing.css';

const Landing = () => {
    return (
        <div className="landing-container">
            <div className="landing-wrapper">
                <div className="landing-left">
                    <h1 className="landing-title">The flower service<br></br>with a twist</h1>
                    <Gap height={20} />
                    <p className="landing-desc">Direct from local growers. Delivering right yo your door.<br></br>Say yes, we do the best.</p>
                    <Gap height={20} />
                    <MyButton title="Get to shop" />
                </div>
                <img className="landing-hero" src={HeroImage} />
            </div>
        </div>
    )
}

export default Landing
