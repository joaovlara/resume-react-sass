import SocialNetworkContainer from "./SocialNetworkContainer";
import InformationContainer from "./InformationContainer";

import Avatar from "../img/jwao.png"

import "../styles/components/sidebar.sass";

const Sidebar = () => {
    return (
        <aside id="sidebar">
            <img src={Avatar} alt="João Lara" />
            <div className="name">
                <h1>João Lara</h1>
            </div>
            <div className="title">
                <p className="title-text">Desenvolvedor Front-End</p>
                <span className="cursor"></span>
            </div>
            <SocialNetworkContainer />
            <InformationContainer />
            <a href="https://drive.google.com/file/d/19mX9BNREcsYxh6kGjZADtBTAyu0n5fY0/view?usp=sharing" className="btn">download CV</a>
        </aside >
    )
}

export default Sidebar
