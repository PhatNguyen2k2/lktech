import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import "./Banner.scss";

const Banner = () => {
  const [btnChange, setBtnChange] = useState(1);
  const [count, setCount] = useState(0);
  const clickHandle = (type) => {
    switch (type) {
      case "laser":
        setBtnChange(1);
        break;
      case "khi":
        setBtnChange(2);
        break;
      case "chemical":
        setBtnChange(3);
        break;
    }
  };
  useEffect(() => {
    setTimeout(() => {
      if (btnChange > 2) {
        setBtnChange(1);
        setCount(count + 1);
      } else {
        setBtnChange(btnChange + 1);
        setCount(count + 1);
      }
    }, 3000);
  }, [count]);
  return (
    <Container fluid="xxl">
      <div className="banner">
        <video
          autoPlay
          muted
          loop
          className="video"
          src="https://res.cloudinary.com/dwpjjpgrz/video/upload/v1676022850/khoi_dlctkd.mp4"
          type="video/mp4"
        />
        {btnChange === 1 && (
          <div className="bannerTrans">
            <img
              className="imageLaser"
              src="https://res.cloudinary.com/dwpjjpgrz/image/upload/v1676049422/image-removebg-preview_rjjnbc.png"
            />
            <div className="bannerDescription">
              <h1>Laser bướm</h1>
              <h2>Super bướm, bạn của moị nhà</h2>
            </div>
            <button id="btnOne" type="button">
              Laser
            </button>
          </div>
        )}
        {btnChange === 2 && (
          <div className="bannerTrans">
            <img
              className="imageKhi"
              src="https://res.cloudinary.com/dwpjjpgrz/image/upload/v1676086379/Kh%C3%AD_vzoz4f.png"
            />
            <div className="bannerDescriptionKhi">
              <h1>Khí</h1>
              <h2>
                Super khí, bạn của moị nhà bướm bướm bướm bướm bướm bướm bướm
                bướm bướm
              </h2>
            </div>
            <button id="btnTwo" type="button">
              Khí
            </button>
          </div>
        )}
        {btnChange === 3 && (
          <div className="bannerTrans">
            <img
              className="imageChemical"
              src="https://res.cloudinary.com/dwpjjpgrz/image/upload/v1676022018/hoachat-removebg-preview_v2mbdk.png"
            />
            <div className="bannerDescription">
              <h1>Hóa chất</h1>
              <h2>Super hóa chất, bạn của moị nhà</h2>
            </div>
            <button id="btnThree" type="button">
              Hóa chất
            </button>
          </div>
        )}
        <div className="bannerButton">
          <button
            type="button"
            className="btn"
            onClick={() => clickHandle("laser")}
          >
            Laser
          </button>
          <button
            type="button"
            className="btn"
            onClick={() => clickHandle("khi")}
          >
            Khí
          </button>
          <button
            type="button"
            className="btn"
            onClick={() => clickHandle("chemical")}
          >
            Hóa chất
          </button>
        </div>
      </div>
    </Container>
  );
};
export default Banner;
