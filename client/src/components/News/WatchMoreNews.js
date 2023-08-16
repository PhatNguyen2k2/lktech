import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./WatchMoreNews.scss";
const WatchMoreNews = (props) => {
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
  const handleOnclick = () => {
    navigate(`/news/${news.slug}/detail`);
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    if (props.data) {
      setNews(props.data);
      getDescription();
    }
  }, [props.data, getDescription]);
  return (
    <div className="moreNews" onClick={handleOnclick}>
      <div className="imgNews">
        <img src={news.image} alt={news.name} />
      </div>
      <div className="desNews">
        <h3>{news.name}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};
export default WatchMoreNews;
