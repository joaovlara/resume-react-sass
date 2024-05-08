import SocialNetworkContainer from "./SocialNetworkContainer";
import InformationContainer from "./InformationContainer";

import Avatar from "../img/jwao.png"

import "../styles/components/sidebar.sass";


const Sidebar = () => {
    return (
        <aside id="sidebar">
            <img src={Avatar} alt="João Lara" />
            <h2>João Vitor de Lara</h2>
            <p className="title">Desenvolvedor Front-End</p>
            <SocialNetworkContainer />
            <InformationContainer />
            <a href="https://drive.google.com/file/d/19mX9BNREcsYxh6kGjZADtBTAyu0n5fY0/view?usp=sharing" className="btn">Dowload CV</a>
        </aside >
    )
}

export default Sidebar
