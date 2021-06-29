import React from 'react';
import { MyFooter, MyNavbar } from '../../components';
import { Custom, Landing } from '../../sections';
import './LandingPage.css';

const LandingPage = () => {
    return (
        <div className="landingpage-container">
            <MyNavbar />
            <Landing />
            <Custom />
            <MyFooter />
        </div>
    )
}

export default LandingPage
