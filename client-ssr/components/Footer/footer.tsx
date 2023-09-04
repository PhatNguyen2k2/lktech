import { FC } from "react";
import Link from "next/link";
import styles from "./footer.module.scss";
const Footer: FC = () => {
  return (
    <footer>
      <div className={styles.footer}>
        <div className="justify-between mx-auto lg:max-w-7xl md:flex md:px-8 sm:px-10 xs: px-5">
          <div className={styles.introduce}>
            <ul className={styles.ulIntro}>
              <strong className="block mb-3">Công Ty TNHH L&K TECH</strong>
              <li>Đ/c: 149 Nguyễn Thị Định, P.Bình Trưng Tây, Q.2, Tp.Hồ Chí Minh</li>
              <li>ĐT: (+84) 286 286 7101</li>
              <li>Giờ làm việc: (8h00 – 17h00 | Từ thứ 2 đến thứ 7)</li>
            </ul>
          </div>
          <div className={styles.service}>
            <ul className={styles.ulService}>
              <strong className="block mb-3">DỊCH VỤ HỖ TRỢ</strong>
              <li>
                <Link href="/service/maintenance">Bảo trì</Link>
              </li>
              <li>
                <Link href="/service/machining">Gia công Hàn & Cắt Laser</Link>
              </li>
              <li>
                <Link href="/service/advice">Tư vấn & thi công hệ thống khí</Link>
              </li>
            </ul>
          </div>
          <div className={styles.info}>
            <ul className={styles.ulInfo}>
              <strong className="block mb-3">THÔNG TIN CHÚNG TÔI</strong>
              <li>Email: khoa.le@lktech.com.vn</li>
              <li>090 777 3041 (Mr.Khoa) </li>
            </ul>
          </div>
        </div>
      </div>
      <p className="container mx-auto text-center mt-2">&copy; 2023 Công Ty TNHH L&K TECH</p>
    </footer>
  );
};

export default Footer;
