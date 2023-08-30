import React from "react";
import BgImage from "../assets/img/auth/login-bg.jpeg";

const SkyDiv = () => {
    return (
    <>
        <div className="mb-4 mb-lg-0 bg-white shadow-soft border rounded-left border-light p-4 p-lg-5 h-100 w-100 fmxw-500" style={{ backgroundImage: `url(${BgImage})` }}>
            <div className="mb-4 mt-6">
                <h3 className="welcome-text">Welcome</h3>
                <h3 className="welcome-text back-logo">back to logo</h3>
            </div>
            <div className="mb-4">
                <p className="auth-text">
                Integer congue sagittis and velna augue egestas magna suscipit purus aliquam
                </p>
            </div>
            <div className="mt-9">
                <p className="reserved-text">
                © 2023. All Rights Reserved
                </p>
            </div>
        </div>
    </>
    )
};

export default SkyDiv;