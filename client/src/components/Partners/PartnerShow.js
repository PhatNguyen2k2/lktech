import React, { useEffect, useState } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import "./PartnerShow.scss";
const PartnerShow = () => {
  const [logo, setLogo] = useState([]);
  async function getPartners() {
    const res = await axios.get("http://localhost:8000/partners");
    setLogo(res.data.partner);
  }
  useEffect(() => {
    getPartners();
  }, []);
  return (
    <Container fluid="xxl">
      <div className="Pnlogo">
        {logo.length > 0 &&
          logo.map((lg, index) => (
            <a href={lg.link} key={index} target="_blank" rel="noreferrer">
              <img className="imagelogo" src={lg.logo} alt={lg.name} />
            </a>
          ))}
      </div>
    </Container>
  );
};
export default PartnerShow;
