import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import "./News.scss";
import { useNavigate } from "react-router-dom";

const News = () => {
  const navigate = useNavigate();
  const [news, setNews] = useState([]);
  const [newsId, setNewsId] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (e) => {
    setShow(true);
    setNewsId(e);
  };
  async function getNews() {
    const res = await axios.get("http://localhost:8000/news");
    setNews(res.data.news);
  }
  async function deleteNews() {
    await axios.delete("http://localhost:8000/news/" + newsId);
    handleClose();
    window.location.reload();
  }
  const editNews = (e) => {
    navigate("/news/" + e);
  };
  useEffect(() => {
    getNews();
  }, []);
  return (
    <Container fluid="xxl">
      <h1 className="all">My News</h1>
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>Name</th>
            <th colSpan={2}>Create At</th>
          </tr>
        </thead>
        <tbody>
          {news.length > 0 &&
            news.map((item, index) => (
              <tr className="tr-news" key={index}>
                <td>{index}</td>
                <td className="td-image">
                  <img
                    className="news-image"
                    src={item.image}
                    alt={item.name}
                  />
                </td>
                <td className="td-name">
                  <a href={`./news/${item.slug}/detail`}>{item.name}</a>
                </td>
                <td>{item.createdAt}</td>
                <td>
                  <button
                    className="edit-delete"
                    onClick={() => {
                      editNews(`${item.slug}`);
                    }}
                  >
                    <img
                      src="https://res.cloudinary.com/dwpjjpgrz/image/upload/v1677255155/ICON/icons8-edit-30_tmdtyi.png"
                      alt="edit"
                    />
                  </button>{" "}
                  <button
                    className="edit-delete"
                    onClick={() => handleShow(`${item._id}`)}
                  >
                    <img
                      src="https://res.cloudinary.com/dwpjjpgrz/image/upload/v1677255261/ICON/icons8-trash-can-30_irvcca.png"
                      alt="delete"
                    />
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Wait!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this news ?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={deleteNews}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};
export default News;
