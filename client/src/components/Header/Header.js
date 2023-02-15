import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Form from "react-bootstrap/Form";
import "./Header.scss";

const Header = () => {
  return (
    <Navbar key={"lg"} bg="light" expand={"lg"} className="mb-3">
      <Container fluid>
        <Navbar.Brand className="logoBranch" href="/">
          <img
            className="logo"
            src="https://res.cloudinary.com/dwpjjpgrz/image/upload/v1676022120/logo_zxf49n.png"
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
              Offcanvas
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="flex-grow-1 pe-3 textMenu">
              <Nav.Link href="/" className="textOne">
                <img
                  className="image"
                  src="https://cdn.discordapp.com/attachments/906188184357048332/1075058701704118282/icons8-home-page.gif"
                />{" "}
                Trang chủ
              </Nav.Link>
              <Nav.Link href="/" className="textOne">
                <img
                  className="img"
                  src="https://res.cloudinary.com/dwpjjpgrz/image/upload/v1676388942/971530365710Management_noaeqp.gif"
                />{" "}
                Sản phẩm
              </Nav.Link>
              <Nav.Link href="/" className="textOne">
                <img
                  className="image"
                  src="https://cdn.discordapp.com/attachments/906188184357048332/1075061597929734235/icons8-handshake.gif"
                />{" "}
                Đối tác
              </Nav.Link>
              <Nav.Link href="/" className="textOne">
                <img
                  className="img"
                  src="https://res.cloudinary.com/dwpjjpgrz/image/upload/v1676389179/196770094540Center_Alignment_zsjhbx.gif"
                />{" "}
                Tin tức
              </Nav.Link>
            </Nav>
            <div className="search">
              <Form className="d-flex searchBar">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
              </Form>
              <img
                className="image"
                src="https://res.cloudinary.com/dwpjjpgrz/image/upload/v1676458324/icons8-search-50_v5np4d.png"
              />
            </div>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};
export default Header;
