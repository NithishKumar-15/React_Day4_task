import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


const CompFour = () => {
    return (
        <>
            <div className="row align-items-center">
                <div className="col-6 text-center align-middle">
                    <h4>Fully Responsive Design</h4>
                    <p>When you use a theme created by Start Bootstrap, you know that<br></br> the theme will look great on any device, whether it's a phone, tablet, <br></br>or desktop the page will behave responsively!</p>
                </div>
                <div className="col-6">
                    <img src="https://mdbootstrap.com/img/new/standard/city/041.jpg" className="img-fluid" alt="Responsive image" />
                </div>
            </div>

            <div className="row align-items-center">
                <div className="col-6">
                    <img src="https://mdbootstrap.com/img/new/fluid/nature/015.jpg" className="img-fluid" alt="Responsive image" />
                </div>
                <div className="col-6 text-center align-middle">
                    <h4>Updated For Bootstrap 5</h4>
                    <p>Newly improved, and full of great utility classes, Bootstrap 5 is<br></br> leading the way in mobile responsive web development! All of the <br></br>themes on Start Bootstrap are now using Bootstrap 5!</p>
                </div>

            </div>

            <div className="row align-items-center">
                <div className="col-6 text-center align-middle">
                    <h4>Easy to Use & Customize</h4>
                    <p>Landing Page is just HTML and CSS with a splash of SCSS for users<br></br> who demand some deeper customization options. Out of the box, <br></br>just add your content and images, and your new landing page will<br></br>be ready to go!</p>
                </div>
                <div className="col-6">
                    <img src="https://mdbootstrap.com/img/new/standard/city/053.jpg" className="img-fluid" alt="Responsive image" />
                </div>
            </div>
        </>
    )
}

export default CompFour;