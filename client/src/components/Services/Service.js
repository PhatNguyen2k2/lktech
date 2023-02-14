import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "./Service.scss";

const Service = (props) => {
  const [type, setType] = useState("");
  useEffect(() => {
    setType(props.data);
  }, [props.data]);
  return (
    <Container style={{ backgroundColor: "#eeeeee" }} fluid="xxl">
      {type === "maintenance" && (
        <>
          <AnimationOnScroll
            initiallyVisible={true}
            animateOut="animate__fadeOutDown"
            duration={0.4}
          >
            <div className="maintenance">
              <div className="text1">
                <p>
                  <strong>
                    L&K Tech chuyên cung cấp dịch vụ bảo trì, bảo dưỡng và sửa
                    chữa nguồn các loại máy hàn công nghiệp như: MIG, TIG, Laser
                    và máy cắt Plasma, laser, … với đội ngũ kỹ thuật lành nghề
                    trên 10 năm kinh nghiệm, trình độ chuyên môn kỹ thuật cao.
                    Chúng tôi sẽ luôn có mặt để tư vấn, bảo trì, hỗ trợ duy trì
                    độ bền của máy hàn, phòng ngừa hư hỏng có thể xảy ra trong
                    quá trình sử dụng.
                  </strong>
                  <br /> <br />
                  L&K Tech sẽ kiểm tra, bảo trì máy hàn, máy cắt theo đúng
                  khuyến cáo và quy định của hãng sản xuất; cung cấp thiết bị,
                  phụ tùng phục vụ cho công tác sửa chữa, thay thế, bảo dưỡng
                  (nếu khách hàng yêu cầu).
                </p>
              </div>
              <div className="image1">
                <img
                  className="img"
                  src="https://res.cloudinary.com/dwpjjpgrz/image/upload/v1676344689/mayhan_twbmqx.jpg"
                />
              </div>
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn="animate__fadeInUp"
            animateOut="animate__fadeOutDown"
            duration={0.4}
          >
            <div className="maintenance">
              <div className="image2">
                <img
                  className="img"
                  src="https://res.cloudinary.com/dwpjjpgrz/image/upload/v1676344789/gia-cong-han_wc0eb4.jpg"
                />
              </div>
              <div className="text2">
                <p>
                  <strong>Tại sao cần bảo trì máy móc định kỳ?</strong>
                  <br /> <br />
                  Hiện nay nhiều đơn vị chưa thực sự chú trọng đến công tác bảo
                  trì và bảo dưỡng máy hàn hay máy cắt công nghiệp. Chỉ chờ đến
                  khi gặp sự cố mới tìm phương án thay thế và sửa chữa, không
                  quan tâm tới việc dự phòng, ngăn ngừa hỏng hóc, sự cố trước
                  khi nó xảy ra cũng như có kế hoạch nâng cấp, cải tiến đổi mới
                  công nghệ. Tình trạng này sẽ khiến bạn luôn ở trạng thái bị
                  động, độ sẵn sàng và độ tin cậy của máy móc thấp, ảnh hưởng
                  chung đến năng suất sản xuất nếu không may gặp sự cố bất ngờ
                  không kịp khắc phục.
                  <br />
                  Chung quy lại, bảo trì thường xuyên sẽ giúp bạn phòng ngừa và
                  phát hiện các hư hỏng, qua đó kiểm tra và cải tiến hệ thống
                  máy hàn, máy cắt trong dây chuyền làm việc. Tiết kiệm chi phí
                  vận hành và thay mới máy móc, giúp dây chuyền làm việc không
                  bị gián đoạn.
                </p>
              </div>
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn="animate__fadeInUp"
            animateOut="animate__fadeOutDown"
            duration={0.4}
          >
            <div className="maintenance">
              <div className="text1">
                <p>
                  <strong>Quy trình bảo trì máy móc của L&K Tech</strong>
                  <br />
                  <br />
                  Với quy trình làm việc chuyên nghiệp và bài bản, hệ thống máy
                  móc, thiết bị của bạn sẽ được bảo trì chất lượng. Cụ thể:
                </p>
                <ul>
                  <li>
                    <strong>Bước 1:</strong> Tiếp nhận yêu cầu, khảo sát tình
                    trạng máy móc để tư vấn dịch vụ bảo trì hoặc sửa chữa phù
                    hợp.
                  </li>
                  <li>
                    <strong>Bước 2:</strong> Lên kế hoạch và phương án bảo trì,
                    sửa chữa phù hợp với hiện trạng của từng loại máy hàn, máy
                    cắt.
                  </li>
                  <li>
                    <strong>Bước 3:</strong> Tiến hành công tác bảo trì và sửa
                    chữa máy hàn, máy cắt.
                  </li>
                  <li>
                    <strong>Bước 4:</strong> Vận hành và hiệu chuẩn lại máy móc
                    trước khi nghiệm thu, bàn giao cho khách hàng.
                  </li>
                </ul>
              </div>
              <div className="image1">
                <img
                  className="img"
                  src="https://res.cloudinary.com/dwpjjpgrz/image/upload/v1676304658/gia-cong-han-cat-4_d2jlcd.jpg"
                />
              </div>
            </div>
          </AnimationOnScroll>
        </>
      )}

      {type === "machining" && (
        <div className="machining">
          <div className="text">
            <p>
              <strong>
                Công nghệ gia công hàn & cắt laser đang rất thịnh hành trong
                cuộc sống hiện nay. Để tìm được cơ sở cung cấp dịch vụ gia công
                hàn & cắt laser không phải điều quá khó, tuy nhiên một địa chỉ
                uy tín, chất lượng đòi hỏi khách hàng phải tìm hiểu thật kỹ.
              </strong>
            </p>
          </div>
          <div className="image">
            <img
              className="img"
              src="https://res.cloudinary.com/dwpjjpgrz/image/upload/v1676305760/gia-cong-han-cat_duemei.jpg"
            />
          </div>
        </div>
      )}
    </Container>
  );
};

export default Service;
