import React from 'react';
import { ToolsImage } from '../../assets';
import { Gap, MyButton } from '../../components';
import "./Custom.css";

const Custom = () => {
    return (
        <div className="custom-container">
            <div className="custom-wrapper">
                <img src={ToolsImage} width={80} />
                <Gap height={30} />
                <h1 className="custom-title">Design, Order and Send!</h1>
                <Gap height={30} />
                <p className="custom-desc">Plantogift is new innovation in sending flower as a gift to your loved ones. You don’t need to leave the house, just choose a flower, bouquet or othe stuff and send it.</p>
                <Gap height={30} />
                <div className="custom-buttons">
                    <MyButton title="Create Yours" />
                    <Gap width={10} height={10} />
                    <MyButton title="Watch Showcase" type="outline" />
                </div>
            </div>
        </div>
    )
}

export default Custom
