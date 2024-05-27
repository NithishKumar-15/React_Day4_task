import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const FifthComp = () => {
    return (
        <>
            <div style={{ backgroundColor: "rgb(248,249,250)", paddingTop: "70px" }}>
                <h3 className="text-center" >What people are saying...</h3>
                <div className="d-flex text-center justify-content-around" style={{ marginTop: "20px" }}>
                    <div>
                        <img class="rounded-circle" alt="avatar1" src="https://mdbcdn.b-cdn.net/img/new/avatars/9.webp" width="170" height="170" />
                        <h3>Margaret E.</h3>
                        <p>"This is fantastic! Thanks so much guys!"</p>
                    </div>
                    <div>
                        <img class="rounded-circle shadow-4-strong" alt="avatar2" src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp" width="170" height="170" />
                        <h3>Fred S.</h3>
                        <p>"Bootstrap is amazing. I've been using it<br></br> to create lots of super nice landing<br></br> pages."</p>
                    </div>
                    <div>
                        <img class="rounded-circle shadow-4-strong" alt="avatar2" src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp" width="170" height="170" />
                        <h3>Sarah W.</h3>
                        <p>"Thanks so much for making these free<br></br> resources available to us!"</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FifthComp;