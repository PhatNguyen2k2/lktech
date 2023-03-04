import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./Header.scss";
const Header = () => {
  return (
    <Navbar key={"lg"} bg="light" expand={"lg"} className="mb-3 header">
      <Container fluid>
        <Navbar.Brand href="/" className="logoBranch">
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
                Home
              </Nav.Link>
              <Nav.Link href="/" className="textOne">
                <img
                  className="img"
                  src="https://res.cloudinary.com/dwpjjpgrz/image/upload/v1676999030/ICON/icons8-robot_zdy1uf.gif"
                  alt="products"
                />{" "}
                Product
              </Nav.Link>
              <NavDropdown
                title={
                  <>
                    <img
                      className="image"
                      src="https://res.cloudinary.com/dwpjjpgrz/image/upload/v1677207337/ICON/icons8-handshake_vgc0wc.gif"
                      alt="partner"
                    />{" "}
                    Partner
                  </>
                }
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="/partner/add">
                  Add partner
                </NavDropdown.Item>
                <NavDropdown.Item href="/partner">
                  View partner
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title={
                  <>
                    <img
                      className="img"
                      src="https://res.cloudinary.com/dwpjjpgrz/image/upload/v1676999368/ICON/ezgif.com-resize_j5wedw.gif"
                      alt="news"
                    />{" "}
                    News
                  </>
                }
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="/news/create">
                  Add news
                </NavDropdown.Item>
                <NavDropdown.Item href="/news">View news</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};
export default Header;
