import "../styles/components/informationcontainer.sass";

import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from "react-icons/ai";

const informations = [
  { id: "phone", icon: <AiFillPhone />, data: "(41)998205576" },
  { id: "email", icon: <AiOutlineMail />, data: "joaovdelara@gmail.com" },
  { id: "pin", icon: <AiFillEnvironment />, data: "Curitiba / PR" },
];

const InformationContainer = () => {
  return (
    <section id="information">
      <div className="informations-grid">
        {informations.map((info) => (
          <div className="info-card" key={info.id}>
            <div className="info-typing" id={info.id}>
              {info.icon}
              <span>{info.data}</span>
            </div>
            <br />
          </div>
        ))}
      </div>
    </section>
  );
};

export default InformationContainer;
