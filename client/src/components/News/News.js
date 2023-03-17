import React, { useCallback, useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import "./News.scss";

const News = (props) => {
  const navigate = useNavigate();
  const [news, setNews] = useState({});
  const [description, setDescription] = useState("");
  const getDescription = useCallback(() => {
    if (Object.keys(news).length > 0) {
      news.paragraph.every((p) => {
        if (p.type === "description") {
          setDescription(p.description);
          return false;
        }
        return true;
      });
    }
  }, [news]);
  useEffect(() => {
    if (props.data) {
      setNews(props.data);
      getDescription();
    }
  }, [props.data, getDescription]);
  return (
    <>
      {Object.keys(news).length > 0 && (
        <Card
          className="card"
          onClick={() => navigate(`/news/${news.slug}/detail`)}
        >
          <div className="image">
            <Card.Img className="img" variant="top" src={news.image} />
          </div>
          <Card.Body>
            <Card.Title className="title">{news.name}</Card.Title>
            <Card.Text className="date">
              {news.createdAt.toString().substr(0, 10)}{" "}
              {news.createdAt.toString().substr(11, 8)}
            </Card.Text>
          </Card.Body>
          <Card.Body>
            <p className="des">{description}</p>
          </Card.Body>
        </Card>
      )}
    </>
  );
};
export default News;
