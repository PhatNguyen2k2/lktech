import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import "./NewsDetail.scss";
import PageNotFound from "../NotFound/PageNotFound";

const NewsDetail = () => {
  const { slug } = useParams();
  const [news, setNews] = useState({});
  async function getNews() {
    const res = await axios.get("http://localhost:8000/news/" + slug);
    setNews(res.data.news);
  }
  useEffect(() => {
    getNews();
  }, []);
  return (
    <>
      {news === null ? (
        <PageNotFound />
      ) : (
        <Container fluid="xxl">
          {Object.keys(news).length > 0 && (
            <div className="detail">
              <h2>{news.name}</h2>
              <hr />
              <p>
                Đăng ngày: {news.createdAt.toString().substr(0, 10)} bởi{" "}
                {news.author}
              </p>
              <div className="content">
                {news.opening && <p>{news.opening}</p>}
                {news.paragraph.map((item, index) => {
                  switch (item.type) {
                    case "title":
                      return (
                        <div className="title" key={index + 1}>
                          <strong>{item.title}</strong>
                        </div>
                      );
                    case "description":
                      return (
                        <div className="des" key={index + 1}>
                          <p>{item.description}</p>
                        </div>
                      );
                    case "description_line":
                      return (
                        <div className="des-line" key={index + 1}>
                          <ul>
                            {item.descriptionLine.split("; ").map((p) => (
                              <li>{p}</li>
                            ))}
                          </ul>
                        </div>
                      );
                    case "image":
                      return (
                        <div className="image" key={index + 1}>
                          <img src={item.image} alt={item.image} />
                        </div>
                      );
                    default:
                      return null;
                  }
                })}
                {news.ending && <p>{news.ending}</p>}
              </div>
            </div>
          )}
        </Container>
      )}
    </>
  );
};
export default NewsDetail;
