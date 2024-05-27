import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const CompAfterNav = () => {
    return (
        <>
            <div className="bg-image" style={{
                backgroundImage: "url(https://mdbootstrap.com/img/Photos/Others/images/76.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "70vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                color: "white"
            }}>
                <h2>Generate more leads with a <br /> professional landing page!</h2>
                <div className="input-group mb-3" style={{ maxWidth: "500px", width: "100%" }}>
                    <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <button className="btn btn-primary" type="button" id="button-addon2">Button</button>
                </div>
            </div>

        </>
    )
}

export default CompAfterNav;