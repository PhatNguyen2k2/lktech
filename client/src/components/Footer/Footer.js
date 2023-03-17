import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="introduce">
          <ul className="ulIntro">
            <strong>Công Ty TNHH L&K TECH</strong>
            <li>
              Đ/c: 149 Nguyễn Thị Định, P.Bình Trưng Tây, Q.2, Tp.Hồ Chí Minh
            </li>
            <li>ĐT: (+84) 286 286 7101</li>
            <li>Giờ làm việc: (8h00 – 17h00 | Từ thứ 2 đến thứ 7)</li>
          </ul>
        </div>
        <div className="service">
          <ul className="ulService">
            <strong>DỊCH VỤ HỖ TRỢ</strong>
            <li>
              <Link to="/maintenance"> Bảo trì</Link>
            </li>
            <li>
              <Link to="/machining">Gia công Hàn & Cắt Laser</Link>
            </li>
            <li>
              <Link to="/advice">Tư vấn & thi công hệ thống khí</Link>
            </li>
          </ul>
        </div>
        <div className="info">
          <ul className="ulInfo">
            <strong>THÔNG TIN CHÚNG TÔI</strong>
            <li>Email: khoa.le@lktech.com.vn</li>
            <li>090 777 3041 (Mr.Khoa) </li>
          </ul>
        </div>
      </div>
      <p className="belowFooter">&#169; 2020 Công Ty TNHH L&K TECH</p>
    </>
  );
};
export default Footer;
