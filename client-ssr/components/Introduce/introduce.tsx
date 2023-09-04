// pages/introduce.tsx
import React from "react";
import styles from "./introduce.module.scss"

const Introduce: React.FC = () => {
    return (
        <div className="mx-auto p-8">
            <div className={`p-10 ${styles.bigTitle}`}>
                <p className={`animate__animated animate__pulse animate__infinite text-center ${styles.title}`}>Về công ty chúng tôi</p>
            </div>
            <div className={styles.intro}>
                <div className={styles.introImg}>
                    <img
                        className={styles.image}
                        src="https://res.cloudinary.com/dwpjjpgrz/image/upload/v1677346085/Product%20img/intro_qdgzsf.jpg"
                        alt="Introduce"
                    />
                </div>
                <div className={styles.introText}>
                    <p className={styles.text}>
                        Công ty TNHH L&K TECH xin gửi lời cảm ơn chân thành tới quý khách
                        hàng đã và đang đồng hành cùng chúng tôi trong suốt thời gian
                        qua. Là một công ty về dịch vụ cơ khí, với mong muốn phục vụ
                        khách hàng tốt nhất. Chúng tôi luôn cố gắng cải thiện với phương
                        châm: "NIỀM TIN KHÁCH HÀNG LÀ THƯỚC ĐO GIÁ TRỊ CÔNG TY CHÚNG TÔI".
                        <br />
                        Bên cạnh đó, chúng tôi vẫn luôn hoàn thiện, cải tiến hằng ngày
                        để phù hợp hơn với khách hàng. Với đội ngũ nhân viên năng động,
                        sáng tạo cập nhập không ngừng nghỉ. Với những chuyên viên có kinh
                        nghiệm nhiều năm trong lĩnh vực cơ khí. Cùng với tiêu chí hoạt
                        động năng suất, chúng tôi đảm bảo bạn có thể có được những trải
                        nghiệm tuyệt vời nhất khi sử dụng các dịch vụ của chúng tôi.
                    </p>
                    <p>
                        Các loại sản phẩm của chúng tôi hiện nay: <br />
                        + Laser: Cung cấp các loại máy hàn, máy cắt laser, ... <br />
                        + Khí: Cung cấp sản phẩm khí công nghiệp, khí y tế, khí phân tích,
                        khí chuẩn… Tư vấn, thiết kế, thi công và lắp đặt hệ thống cung
                        cấp khí <br />
                        + Hoá chất: Cung cấp các giải pháp và hoá chất ngành xi mạ, chăn
                        nuôi, cao su…
                    </p>
                </div>
            </div>
        </div >
    );
};

export default Introduce;
