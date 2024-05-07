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
            <a href="#" className="btn">Dowload CV</a>
        </aside >
    )
}

export default Sidebar
