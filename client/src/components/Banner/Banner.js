import React from "react";
import Container from "react-bootstrap/Container";
import "./Banner.scss";

const Banner = () => {
  return (
    <Container className="container">
      <div className="banner">
        <video autoPlay muted loop className="video">
          <source
            src="https://res.cloudinary.com/dwpjjpgrz/video/upload/v1676022850/khoi_dlctkd.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </Container>
  );
};
export default Banner;
