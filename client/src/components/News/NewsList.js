import React, { useEffect, useState } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Pagination from "react-bootstrap/Pagination";
import News from "./News";
const NewsList = () => {
  const [news, setNews] = useState([]);
  let active = 2;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }
  async function getNewsList() {
    const res = await axios.get("http://localhost:8000/news");
    setNews(res.data.news);
  }
  useEffect(() => {
    getNewsList();
  }, []);
  return (
    <Container fluid="xxl">
      <Row>
        {news.length > 0 &&
          news.map((item, index) => (
            <Col sm={4} lg={3} key={index}>
              <News data={item} />
            </Col>
          ))}
      </Row>
      <Pagination className="justify-content-center">
        <Pagination.First />
        <Pagination.Prev />
        {items}
        <Pagination.Next />
        <Pagination.Last />
      </Pagination>
    </Container>
  );
};
export default NewsList;
