import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FiCreditCard, FiLayers, FiLayout } from "react-icons/fi";

const ThirdComp = () => {
    return (
        <>
            <div className="d-flex justify-content-around text-center align-items-center" style={{ backgroundColor: "#F8F9FA", height: "400px" }}>
                <div>
                    <FiCreditCard size={60} className="text-primary" />
                    <h3>Fully Responsive</h3>
                    <p className="text-secondary">This theme will look great on any <br></br>device, no matter the size!</p>
                </div>
                <div>

                    <FiLayers size={60} className="text-primary" />
                    <h3>Bootstrap 5 Ready</h3>
                    <p>Featuring the latest build of the new<br></br>Bootstrap 5 framework!</p>
                </div>
                <div>

                    <FiLayout size={60} className="text-primary" />
                    <h3>Easy to Use</h3>
                    <p>Ready to use with your own content,<br></br>or customize the source files!</p>
                </div>
            </div>
        </>
    )
}

export default ThirdComp;