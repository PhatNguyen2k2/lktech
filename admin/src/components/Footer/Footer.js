import React from "react";
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
              <a href="/maintenance"> Bảo trì</a>
            </li>
            <li>
              <a href="/machining">Gia công Hàn & Cắt Laser</a>
            </li>
            <li>
              <a href="/advice">Tư vấn & thi công hệ thống khí</a>
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
