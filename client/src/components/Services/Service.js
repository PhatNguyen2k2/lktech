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
                    Công nghệ gia công hàn & cắt laser đang rất thịnh hành trong
                    cuộc sống hiện nay. Để tìm được cơ sở cung cấp dịch vụ gia
                    công hàn & cắt laser không phải điều quá khó, tuy nhiên một
                    địa chỉ uy tín, chất lượng đòi hỏi khách hàng phải tìm hiểu
                    thật kỹ.
                  </strong>
                  <br />
                  Nếu bạn cần tìm đơn vị cắt gia công hàn và cắt laser uy tín,
                  đảm bảo chất lượng hàn cắt và giao hàng đúng hẹn. Nếu bạn
                  không hài lòng với đơn vị đang gia công cho bạn và cần tìm nơi
                  làm việc bài bản hơn để hợp tác lâu dài. Thì L&K Tech có thể
                  đáp ứng nhu cầu của bạn.
                  <br />
                  Với hệ thống máy hàn, máy cắt laser hiện đại với công nghệ mới
                  nhất cùng đội ngũ kỹ sư nhiều năm kinh nghiệm trong ngành cơ
                  khí chúng tôi sẽ mang đến cho Quý khách sản phẩm chính xác,
                  nét cắt đẹp và giá cả phù hợp nhất.
                </p>
              </div>
              <div className="image1">
                <img
                  className="img"
                  src="https://res.cloudinary.com/dwpjjpgrz/image/upload/v1676305760/gia-cong-han-cat_duemei.jpg"
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
                  <strong>Tại L&K Tech, chúng tôi ĐẢM BẢO:</strong>
                  <br />
                  <br />
                  Khi sử dụng dịch vụ gia công hàn & cắt laser tại L&K Tech,
                  khách hàng sẽ được phía công ty cam kết về chất lượng và tiến
                  độ công việc. Cụ thể:
                </p>
                <ul>
                  <li>
                    Hoàn thiện chi tiết hàn và cắt với độ chính xác cực cao
                  </li>
                  <li>Chất lượng của thành phẩm đẹp, được gia công tỉ mỉ</li>
                  <li>
                    Hàn và cắt laze được nhiều chất liệu khó và đa dạng về mẫu
                    mã.
                  </li>
                  <li>
                    Giá thành hợp lý – Đúng tiến độ thi công – Tuổi thọ lâu dài
                  </li>
                  <li>Chế độ bảo hành theo từng sản phẩm.</li>
                </ul>
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
                  Không phải ngẫu nhiên L&K Tech lại được đông đảo khách hàng
                  tin tưởng lựa chọn sử dụng dịch vụ. Dưới đây là sự khác biệt
                  trong chất lượng dịch vụ hàn và cắt laser của L&K Tech:
                </p>
                <ul>
                  <li>
                    Không chắc chắn giá rẻ nhất, nhưng giá trị tương xứng với
                    thành phẩm bạn nhận được.
                  </li>
                  <li>
                    Chất thành phẩm đảm bảo. Có bảo hành, bảo trì sản phẩm uy
                    tín.
                  </li>
                  <li>Áp dụng hệ thống máy móc, công nghệ tiên tiến nhất.</li>
                  <li>
                    Đội ngũ kỹ thuật giàu kinh nghiệm, lành nghề và chuyên
                    nghiệp.
                  </li>
                  <li>
                    Hỗ trợ khách hàng mọi lúc, mọi nơi và có mặt nhanh chóng khi
                    khách hàng cần.
                  </li>
                </ul>
              </div>
              <div className="image1">
                <img
                  className="img"
                  src="https://res.cloudinary.com/dwpjjpgrz/image/upload/v1676343502/gia-cong-han-cat-3_v4chal.jpg"
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
              <p className="text9">
                <strong>Báo giá gia công hàn và cắt laser</strong>
                <br />
                Hiện nay, có rất nhiều đơn vị nhận gia công hàn và cắt laser với
                giá thành cạnh tranh. Tuy nhiên, không phải cứ nhận gia công hàn
                và cắt laser sản phẩm theo yêu cầu là sẽ thực hiện tốt, những
                đơn vị báo giá rẻ chưa chắc đảm bảo chất lượng tốt. Vậy, nên
                chọn đơn vị gia công hàn và cắt laser cần tìm hiểu thật kỹ
                lưỡng.
                <br />
                L&K Tech chuyên gia công hàn và cắt laser uy tín chất lượng tại
                Hồ Chí Minh theo yêu cầu của khách hàng. Quý khách đang có nhu
                cầu sử dụng dịch vụ cần được tư vấn báo giá dịch vụ vui lòng
                liên hệ Hotline: 090 777 3041(Mr. Khoa) để được đội ngũ kinh
                doanh L&K Tech liên hệ ngay!
              </p>
            </div>
          </AnimationOnScroll>
        </>
      )}

      {type === "advice" && (
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
                    Ngoài việc cung cấp các sản phẩm riêng lẻ, L&K Tech còn cung
                    cấp dịch vụ tư vấn và thi công hệ thống đường ống khí phòng
                    thí nghiệm và công nghiệp. Với đội ngũ kỹ sư nhiều năm kinh
                    nghiệm trong ngành cung cấp khí, L&K Tech cung cấp giải pháp
                    trọn gói cho khách hàng nhằm giúp khách tối ưu nhất chi phí
                    bao gồm cung cấp vật tư, thiết kế và thi công. Khách hàng
                    không cần tốn công để tìm nhiều nơi.
                  </strong>
                </p>
              </div>
              <div className="image1">
                <img
                  className="img"
                  src="https://res.cloudinary.com/dwpjjpgrz/image/upload/v1676343536/he-thong-khi-3_qmbos5.png"
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
                  src="https://res.cloudinary.com/dwpjjpgrz/image/upload/v1676343561/he-thong-khi_vdaue7.jpg"
                />
              </div>
              <div className="text2">
                <p>
                  <strong>
                    Tư vấn và thi công hệ thống khí an toàn – hiệu quả
                  </strong>
                  <br />
                  <br />
                  Với nhiều năm kinh nghiệm cung cấp giải pháp tư vấn thi công
                  hệ thống khí, L&K Tech sẽ giúp khách hàng lựa chọn giải pháp
                  phù hợp nhất. Các giải pháp bao gồm:
                </p>
                <ul>
                  <li>
                    Khảo sát để tìm hiểu các thông số cần thiết và kết cấu hiện
                    hữu
                  </li>
                  <li>
                    Lên phương án lắp đặt phù hợp với hiện trạng thực tế của
                    khách hàng
                  </li>
                  <li>
                    Lựa chọn vật tư phù hợp với các yêu cầu, tối ưu chi phí cho
                    khách hàng
                  </li>
                  <li>
                    Thiết kế và lựa chọn phương án thi công đảm bảo an toàn,
                    hiệu quả nhất.
                  </li>
                </ul>
                <p>
                  Với đầy đủ các dòng sản phẩm cho một hệ thống cấp khí, L&K
                  Tech sẽ cung toàn bộ các sản phẩm cho hệ thống khí, giúp khách
                  an tâm về chất lượng, giảm thời gian và chi phí.
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
                  <strong>
                    Quy trình tư vấn và thi công hệ thống khí tại L&K Tech
                  </strong>
                  <br />
                  <br />
                  L&K Tech cung cấp dịch vụ thi công lắp đặt hệ thống khí với
                  quy trình làm việc chuyên nghiệp bao gồm các bước sau:
                </p>
                <ul>
                  <li>
                    <strong>Bước 1:</strong> Tiếp nhận thông tin và yêu cầu của
                    khách hàng về dịch vụ thi công lắp đặt hệ thống khí nén.
                  </li>
                  <li>
                    <strong>Bước 2:</strong> Sau khi tiếp nhận thông tin, L&K
                    Tech sẽ tiến hành khảo để đưa ra các tư vấn và đề xuất
                    phương án thi công phù hợp.
                  </li>
                  <li>
                    <strong>Bước 3:</strong> Sau khi thống nhất về phương án thi
                    công, L&K Tech tiến hành báo giá và chốt hợp đồng.
                  </li>
                  <li>
                    <strong>Bước 4:</strong> Tiến hành thi công hệ thống đường
                    ống khí theo đúng yêu cầu kỹ thuật và tiến độ đã cam kết.
                  </li>
                  <li>
                    <strong>Bước 5:</strong> Nghiệm thu và bàn giao hệ thống ống
                    khí sau khi thi công lắp đặt. Tiến hành thanh lý hợp đồng và
                    bảo hành dịch vụ.
                  </li>
                </ul>
              </div>
              <div className="image1">
                <img
                  className="img"
                  src="https://res.cloudinary.com/dwpjjpgrz/image/upload/v1676343589/lap-dat-he-thong-khi-nen_ajwwax.jpg"
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
                  src="https://res.cloudinary.com/dwpjjpgrz/image/upload/v1676343614/he-thong-khi-1_xqwhdu.jpg"
                />
              </div>
              <div className="text2">
                <p>
                  <strong>
                    Lợi ích khi sử dụng dịch vụ tư vấn và thi công hệ thống khí
                    tại L&K Tech
                  </strong>
                  <br />
                  <br />
                  Lắp đặt hệ thống cấp khí đòi hỏi trình độ kỹ thuật cao chuyên
                  biệt, để đảm bảo an toàn kỹ thuật vì vậy Quý doanh nghiệp hãy
                  lựa chọn cho mình đơn vị thi công uy tín. Tại L&K Tech, chúng
                  tôi cam kết đảm bảo xây dựng lắp đặt hệ thống đường ống dẫn
                  khí an toàn, đúng công năng sử dụng, tính toán các phương án
                  tiết kiệm chi phí, đúng áp lực khí cần sử dụng, và đúng lưu
                  lượng khách hàng cần;
                </p>
                <ul>
                  <li>
                    Nhân sự chuyên nghiệp, kỹ sư giàu kinh nghiệm có trình độ kỹ
                    thuật cao.
                  </li>
                  <li>
                    Vật tư hệ thống chất lượng tốt, bền bỉ, đảm bảo an toàn kỹ
                    thuật trong vận hành sử dụng.
                  </li>
                  <li>
                    Mức giá thành hợp lý nhưng vẫn đảm bảo các tiêu chuẩn cao
                    của ngành khí.
                  </li>
                </ul>
              </div>
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn="animate__fadeInUp"
            animateOut="animate__fadeOutDown"
            duration={0.4}
          >
            <div className="maintenance">
              <p className="text9">
                Nếu Khách hàng có nhu cầu tư vấn và thi công hệ thống đường ống
                khí phòng thí nghiệm và công nghiệp thì liên lạc với chúng tôi
                qua hotline 090 777 3041(Mr. Khoa) để được hỗ trợ tư vấn và báo
                giá.
              </p>
            </div>
          </AnimationOnScroll>
        </>
      )}
    </Container>
  );
};

export default Service;
