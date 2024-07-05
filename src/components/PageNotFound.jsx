import React from "react";
import Lottie from "lottie-react";
import animation from "../assets/animation/animation404.json";
import { Link } from "react-router-dom";

const PageNotFound = () => {
    return (
        <>
            <div className="d-flex justify-content-center mt-2">
                <span style={{ width: 500 }}>
                    <Lottie animationData={animation} />
                </span>
            </div>

            <Link to="/">
                <button type="submit" className="btn login-button">
                    &#8656; Back
                </button>
            </Link>
        </>
    );
};

export default PageNotFound;
