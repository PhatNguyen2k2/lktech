import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "./Partners.scss";

const Partners = () => {
  const navigate = useNavigate();
  const [partners, setPartners] = useState([]);
  async function getPartners() {
    const res = await axios.get("http://localhost:8000/partners");
    setPartners(res.data.partner);
  }
  useEffect(() => {
    getPartners();
  }, []);
  return (
    <Container fluid="xxl">
      <div className="PartnerIntro">
        <p>
          Với thiện chí hợp tác cùng phát triển, L&K TECH rất tin tưởng vào sự
          thành công tốt đẹp và lâu dài trong quá trình hợp tác giữa công ty và
          Quý đối tác.
        </p>
        <p>
          Xin chân thành cảm ơn các Quý đối tác đã và đang hợp tác cùng công ty
          chúng tôi trên đoạn đường phát triển.
        </p>
      </div>
      {partners.length > 0 &&
        partners.map((partner) => (
          <div className="partner">
            <div className="logo_name">
              <AnimationOnScroll
                animateIn="animate__fadeInUp"
                animateOut="animate__fadeOutDown"
                duration={0.4}
              >
                <h2 className="namePartner">{partner.name}</h2>
                <img className="img" src={partner.logo} />
              </AnimationOnScroll>
            </div>
            <div className="partner_info">
              <p>
                Xuất xứ: {partner.origin}
                <br />
                Ngày thành lập: {partner.founding}
                <br />
                Lĩnh vực: {partner.field}
                <br />
                Ứng dụng:
                <ul>
                  {partner.application.map((app) => (
                    <li>{app}</li>
                  ))}
                </ul>
                <a class="learn-more" href={partner.link}>
                  {partner.link}
                </a>
              </p>
            </div>
          </div>
        ))}
    </Container>
  );
};
export default Partners;
