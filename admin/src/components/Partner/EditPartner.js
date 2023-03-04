import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import PageNotFound from "../NotFound/PageNotFound";
import "./EditPartner.scss";
const EditPartner = (props) => {
  const date = new Date();
  let string;
  const { slug } = useParams();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [alert, setAlert] = useState("");
  const [validated, setValidated] = useState(false);
  const [partner, setPartner] = useState({});
  const [noti, setNoti] = useState(0);
  const [logo, setLogo] = useState("");
  const [checkSuccess, setCheckSuccess] = useState(false);
  async function handleSubmit(e) {
    const check = e.currentTarget;
    if (check.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      e.preventDefault();
      const form = e.target;
      const newPartner = {
        name: form.name.value,
        origin: form.origin.value,
        founding: form.founding.value,
        field: form.field.value,
        application: form.application.value.split(", "),
        link: form.link.value,
        logo: form.logo.value,
      };
      const res = await axios.post(
        "http://localhost:8000/partners/create",
        newPartner
      );
      setNoti(res.status);
      setCheckSuccess(true);
    }
    setValidated(true);
  }
  async function handleSubmitEdit(e) {
    const check = e.currentTarget;
    if (check.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      e.preventDefault();
      const form = e.target;
      const newPartner = {
        name: form.name.value,
        origin: form.origin.value,
        founding: form.founding.value,
        field: form.field.value,
        application: form.application.value.split(", "),
        link: form.link.value,
        logo: form.logo.value,
      };
      const res = await axios.put(
        "http://localhost:8000/partners/" + slug,
        newPartner
      );
      setNoti(res.status);
      setCheckSuccess(true);
    }
    setValidated(true);
  }
  async function getPartners() {
    if (props.type === "edit") {
      const res = await axios.get("http://localhost:8000/partners/" + slug);
      setPartner(res.data.partner);
      setLogo(res.data.partner.logo);
    }
  }
  const handleBlur = (e) => {
    switch (e.currentTarget.name) {
      case "founding":
        if (
          Number(e.target.value) < 1500 ||
          Number(e.target.value) > date.getFullYear()
        ) {
          setAlert("1500 < Year < " + date.getFullYear().toString());
          handleShow();
          e.target.value = "";
        }
        break;
      default:
        string = e.target.value.slice(
          e.target.value.length - 3,
          e.target.value.length
        );
        if (string !== "png" && string !== "jpg") {
          setAlert("png and jpg only");
          handleShow();
          e.target.value = "";
        }
    }
  };
  const handleLogo = (e) => {
    if (e === undefined) {
      return;
    }
    setLogo(e.target.value);
  };
  useEffect(() => {
    handleLogo();
    getPartners();
  }, [logo, props.data]);
  return (
    <>
      {partner === null ? (
        <PageNotFound />
      ) : (
        <Container className="add-partner-body" fluid="xxl">
          {Object.keys(partner).length > 0 ? (
            <Form noValidate validated={validated} onSubmit={handleSubmitEdit}>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label className="name" style={{ marginTop: "1%" }}>
                  Name
                </Form.Label>
                <Form.Control
                  required
                  autoComplete="true"
                  type="text"
                  name="name"
                  placeholder="L&K Tech"
                  defaultValue={partner.name || ""}
                />
                <Form.Control.Feedback type="invalid">
                  Fill name!
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label className="name">Origin</Form.Label>
                <Form.Control
                  required
                  autoComplete="true"
                  type="text"
                  name="origin"
                  placeholder="Việt Nam"
                  defaultValue={partner.origin || ""}
                />
                <Form.Control.Feedback type="invalid">
                  Fill origin!
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicTextArea">
                <Form.Label className="name">Year</Form.Label>
                <Form.Control
                  required
                  type="number"
                  name="founding"
                  onBlur={handleBlur}
                  placeholder="2000"
                  defaultValue={partner.founding || ""}
                />
                <Form.Control.Feedback type="invalid">
                  Fill year!
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicTextArea">
                <Form.Label className="name">Field</Form.Label>
                <Form.Control
                  required
                  as="textarea"
                  rows={4}
                  name="field"
                  placeholder="Sản xuất và kinh doanh sản phẩm hoá chất"
                  defaultValue={partner.field || ""}
                />
                <Form.Control.Feedback type="invalid">
                  Fill field!
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicTextArea">
                <Form.Label className="name">Application</Form.Label>
                <Form.Control
                  required
                  as="textarea"
                  rows={4}
                  name="application"
                  placeholder="Sản xuất ô tô, Điện tử, Nội thất"
                  defaultValue={partner.application.join(", ") || ""}
                />
                <Form.Control.Feedback type="invalid">
                  Fill application!
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label className="name">Link</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="link"
                  placeholder="https://lktech.com.vn"
                  defaultValue={partner.link || ""}
                />
                <Form.Control.Feedback type="invalid">
                  Fill link company!
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label className="name">Logo company</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="logo"
                  placeholder="https://lktech.com.vn/wp-content/uploads/2020/04/logo.png"
                  defaultValue={partner.logo || ""}
                  onChange={handleLogo}
                  onBlur={handleBlur}
                />
                <Form.Text className="text-muted">
                  Link has tag .jpg or .png
                </Form.Text>
                <Form.Control.Feedback type="invalid">
                  Fill link logo!
                </Form.Control.Feedback>
              </Form.Group>
              {logo.length > 0 && (
                <div className="partner-logo">
                  <img className="logo-image" src={logo} alt={logo} />
                </div>
              )}
              {checkSuccess &&
                (noti === 200 ? (
                  <Alert key={"success"} variant={"success"}>
                    Updated success
                  </Alert>
                ) : (
                  <Alert key={"danger"} variant={"danger"}>
                    Updated fail
                  </Alert>
                ))}
              <Button className="save" variant="primary" type="submit">
                Lưu
              </Button>
            </Form>
          ) : (
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label className="name" style={{ marginTop: "1%" }}>
                  Name
                </Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="name"
                  placeholder="L&K Tech"
                />
                <Form.Control.Feedback type="invalid">
                  Fill name!
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label className="name">Origin</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="origin"
                  placeholder="Việt Nam"
                />
                <Form.Control.Feedback type="invalid">
                  Fill origin!
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicTextArea">
                <Form.Label className="name">Year</Form.Label>
                <Form.Control
                  required
                  type="number"
                  name="founding"
                  onBlur={handleBlur}
                  placeholder="2000"
                />
                <Form.Control.Feedback type="invalid">
                  Fill year!
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicTextArea">
                <Form.Label className="name">Field</Form.Label>
                <Form.Control
                  required
                  as="textarea"
                  rows={4}
                  name="field"
                  placeholder="Sản xuất và kinh doanh sản phẩm hoá chất"
                />
                <Form.Control.Feedback type="invalid">
                  Fill field!
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicTextArea">
                <Form.Label className="name">Application</Form.Label>
                <Form.Control
                  required
                  as="textarea"
                  rows={4}
                  name="application"
                  placeholder="Sản xuất ô tô, Điện tử, Nội thất"
                />
                <Form.Control.Feedback type="invalid">
                  Fill application!
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label className="name">Link</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="link"
                  placeholder="https://lktech.com.vn"
                />
                <Form.Control.Feedback type="invalid">
                  Fill link company!
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label className="name">Logo company</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="logo"
                  placeholder="https://lktech.com.vn/wp-content/uploads/2020/04/logo.png"
                  onChange={handleLogo}
                  onBlur={handleBlur}
                />
                <Form.Text className="text-muted">
                  Link has tag .jpg or .png
                </Form.Text>
                <Form.Control.Feedback type="invalid">
                  Fill link logo!
                </Form.Control.Feedback>
              </Form.Group>
              {logo.length > 0 && (
                <div className="partner-logo">
                  <img className="logo-image" src={logo} alt={logo} />
                </div>
              )}
              {checkSuccess &&
                (noti === 201 ? (
                  <Alert key={"success"} variant={"success "}>
                    Added success
                  </Alert>
                ) : (
                  <Alert key={"danger"} variant={"danger"}>
                    Added fail
                  </Alert>
                ))}
              <Button className="save" variant="primary" type="submit">
                Lưu
              </Button>
            </Form>
          )}
          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Check again!</Modal.Title>
            </Modal.Header>
            <Modal.Body>{alert}</Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={handleClose}>
                OK
              </Button>
            </Modal.Footer>
          </Modal>
        </Container>
      )}
    </>
  );
};
export default EditPartner;
