import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./WatchMoreNews.scss";
const WatchMoreNews = (props) => {
  const navigate = useNavigate();
  const [news, setNews] = useState({});
  const [description, setDescription] = useState("");
  const getDescription = () => {
    if (Object.keys(news).length > 0) {
      news.paragraph.every((p) => {
        if (p.type === "description") {
          setDescription(p.description);
          return false;
        }
        return true;
      });
    }
  };
  const handleOnclick = () => {
    navigate(`/news/${news.slug}/detail`);
    window.location.reload();
  };
  useEffect(() => {
    if (props.data) {
      setNews(props.data);
      getDescription();
    }
  }, [props.data]);
  return (
    <div className="moreNews" onClick={handleOnclick}>
      <div className="imgNews">
        <img src={news.image} href={news.name} />
      </div>
      <div className="desNews">
        <h3>{news.name}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};
export default WatchMoreNews;
