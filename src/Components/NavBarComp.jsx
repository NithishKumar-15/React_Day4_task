import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
const NavBar = () => {

    return (
        <>
            <nav className="navbar navbar-expand-lg py-3 navbar-light bg-light justify-content-around">
                <a className="navbar-brand">Start Bootstrap</a>
                <form className="form-inline">
                    <button className="btn btn btn-primary my-5 my-sm-0" type="submit">Sign up</button>
                </form>
            </nav>
        </>
    )
}

export default NavBar;