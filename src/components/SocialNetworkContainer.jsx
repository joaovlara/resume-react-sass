import { FaLinkedinIn, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";

import "../styles/components/socialnetworkcontainer.sass";

const socialNetworks = [
  { name: "linkedin", icon: <FaLinkedinIn />, link:"https://www.linkedin.com/in/joaovlara/" },
  { name: "github", icon: <FaGithub />, link:"https://github.com/JoaovLara" },
  { name: "instagram", icon: <FaInstagram />, link:"https://www.instagram.com/jwao_arte/" },
  { name: "whastapp", icon: <FaWhatsapp />, link:"https://wa.me/5541998205576" },

];

const SocialNetworkContainer = () => {
  return (
    <section id="social-networks">
      {socialNetworks.map((network) => (
        <a href={network.link} className="social-btn" id={network.name} key={network.name}>
          {network.icon}
        </a>
      ))}
    </section>
  );
};

export default SocialNetworkContainer;