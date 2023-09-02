import { FC } from "react";
import Link from "next/link";

const Footer: FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="introduce">
          <ul className="ulIntro">
            <strong className="block mb-3">Công Ty TNHH L&K TECH</strong>
            <li>Đ/c: 149 Nguyễn Thị Định, P.Bình Trưng Tây, Q.2, Tp.Hồ Chí Minh</li>
            <li>ĐT: (+84) 286 286 7101</li>
            <li>Giờ làm việc: (8h00 – 17h00 | Từ thứ 2 đến thứ 7)</li>
          </ul>
        </div>
        <div className="service">
          <ul className="ulService">
            <strong className="block mb-3">DỊCH VỤ HỖ TRỢ</strong>
            <li>
              <Link href="/maintenance"> Bảo trì</Link>
            </li>
            <li>
              <Link href="/machining">Gia công Hàn & Cắt Laser</Link>
            </li>
            <li>
              <Link href="/advice">Tư vấn & thi công hệ thống khí</Link>
            </li>
          </ul>
        </div>
        <div className="info">
          <ul className="ulInfo">
            <strong className="block mb-3">THÔNG TIN CHÚNG TÔI</strong>
            <li>Email: khoa.le@lktech.com.vn</li>
            <li>090 777 3041 (Mr.Khoa) </li>
          </ul>
        </div>
      </div>
      <p className="text-center mt-8">&copy; 2023 Công Ty TNHH L&K TECH</p>
    </footer>
  );
};

export default Footer;