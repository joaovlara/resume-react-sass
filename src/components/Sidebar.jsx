import React, { useState } from "react";
import SocialNetworkContainer from "./SocialNetworkContainer";
import InformationContainer from "./InformationContainer";

import Avatar2 from "../img/jwao.png";
import Avatar1 from "../img/jwao2.gif";

import "../styles/components/sidebar.sass";

const Sidebar = () => {
    const [avatar, setAvatar] = useState(Avatar1);

    const handleAvatarClick = () => {
        setAvatar((prevAvatar) => (prevAvatar === Avatar1 ? Avatar2 : Avatar1));
    };

    return (
        <aside id="sidebar">
            <img src={avatar} alt="João Lara" onClick={handleAvatarClick} />
            <div className="name">
                <h1>João Lara</h1>
            </div>
            <div className="title">
                <p className="title-text">Desenvolvedor Front-End</p>
                <span className="cursor"></span>
            </div>
            <SocialNetworkContainer />
            <InformationContainer />
            <a href="https://drive.google.com/file/d/1Zyic7fu4gkKX3e4a8jyKi8ZsKgqWRqAz/view?usp=sharing"
                className="btn">download CV</a>
            <a href="https://www.linkedin.com/in/joaovlara/"
                className="footer-copyright">© 2025 Copyright: João Lara</a>
        </aside>
    );
}

export default Sidebar;
