import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Form from "react-bootstrap/Form";
import "./Header.scss";

const Header = () => {
  return (
    <Navbar key={"lg"} bg="light" expand={"lg"} className="mb-3 header">
      <Container fluid>
        <Navbar.Brand className="logoBranch" href="/">
          <img
            className="logo"
            src="https://res.cloudinary.com/dwpjjpgrz/image/upload/v1676022120/ICON/logo_zxf49n.png"
            alt="logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${"lg"}`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${"lg"}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${"lg"}`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${"lg"}`}>
              L&K TECH
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-center flex-grow-1 pe-3 textMenu">
              <Nav.Link href="/" className="textOne">
                <img
                  className="image"
                  src="https://res.cloudinary.com/dwpjjpgrz/image/upload/v1677207311/ICON/icons8-home-page_wdrltd.gif"
                  alt="home"
                />{" "}
                Trang chủ
              </Nav.Link>
              <Nav.Link href="/" className="textOne">
                <img
                  className="img"
                  src="https://res.cloudinary.com/dwpjjpgrz/image/upload/v1676999030/ICON/icons8-robot_zdy1uf.gif"
                  alt="products"
                />{" "}
                Sản phẩm
              </Nav.Link>
              <Nav.Link href="/partners" className="textOne">
                <img
                  className="image"
                  src="https://res.cloudinary.com/dwpjjpgrz/image/upload/v1677207337/ICON/icons8-handshake_vgc0wc.gif"
                  alt="partner"
                />{" "}
                Đối tác
              </Nav.Link>
              <Nav.Link href="/news" className="textOne">
                <img
                  className="img"
                  src="https://res.cloudinary.com/dwpjjpgrz/image/upload/v1676999368/ICON/ezgif.com-resize_j5wedw.gif"
                  alt="news"
                />{" "}
                Tin tức
              </Nav.Link>
            </Nav>
            <div className="d-flex searchBar">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <div className="search-item">
                {/* <li>khí</li>
                <li>hóa chất</li>
                <li>laser</li> */}
              </div>
            </div>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};
export default Header;
