import React, { useEffect, useState } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Pagination from "react-bootstrap/Pagination";
import News from "./News";
const NewsList = () => {
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(0);
  const [active, setActive] = useState(1);
  let items = [];
  for (let number = 1; page !== 0 && number <= page; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === active}
        onClick={getNewsList}
      >
        {number}
      </Pagination.Item>
    );
  }
  async function getNewsList(e) {
    let num;
    typeof e === "number"
      ? (num = e)
      : (num = e !== undefined ? e.target.textContent : "1");
    const res = await axios.get(`http://localhost:8000/news/show/${num}`);
    e !== undefined &&
      (typeof e === "number"
        ? setActive(Number(e))
        : setActive(Number(e.target.textContent)));
    window.scrollTo(0, 0);
    setNews(res.data.news);
    setPage(res.data.count);
  }
  useEffect(() => {
    getNewsList();
  }, [page]);
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
        <Pagination.First
          onClick={() => {
            setPage(1);
            setActive(1);
          }}
        />
        {items}
        <Pagination.Last
          onClick={() => {
            getNewsList(page);
          }}
        />
      </Pagination>
    </Container>
  );
};
export default NewsList;
