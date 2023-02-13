import React, { useEffect, useState } from "react";
import "./Service.scss";

const Service = (props) => {
  const [type, setType] = useState("");
  useEffect(() => {
    setType(props.data);
  }, [props.data]);
  return (
    <>
      {type === "maintenance" && (
        <div className="maintenance">
          <div className="text">
            <p>
              <strong>
                L&K Tech chuyên cung cấp dịch vụ bảo trì, bảo dưỡng và sửa chữa
                nguồn các loại máy hàn công nghiệp như: MIG, TIG, Laser và máy
                cắt Plasma, laser, … với đội ngũ kỹ thuật lành nghề trên 10 năm
                kinh nghiệm, trình độ chuyên môn kỹ thuật cao. Chúng tôi sẽ luôn
                có mặt để tư vấn, bảo trì, hỗ trợ duy trì độ bền của máy hàn,
                phòng ngừa hư hỏng có thể xảy ra trong quá trình sử dụng.
              </strong>
            </p>
          </div>
          <div className="image">
            <img src="https://res.cloudinary.com/dwpjjpgrz/image/upload/v1676304645/may-han-mig-MIG-MMA200_vceblt.jpg" />
          </div>
        </div>
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
            <img src="https://res.cloudinary.com/dwpjjpgrz/image/upload/v1676305760/gia-cong-han-cat_duemei.jpg" />
          </div>
        </div>
      )}
    </>
  );
};

export default Service;
