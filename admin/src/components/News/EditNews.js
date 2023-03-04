import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import "./EditNews.scss";
import PageNotFound from "../NotFound/PageNotFound";

const AddNews = (props) => {
  const { slug } = useParams();
  const [checkSuccess, setCheckSuccess] = useState(false);
  const [noti, setNoti] = useState(0);
  const [news, setNews] = useState({});
  const [image, setImage] = useState("");
  const handleImageTitle = (e) => {
    if (e === undefined) {
      return;
    }
    setImage(e.target.value);
  };
  async function getNews() {
    if (props.type === "edit") {
      const res = await axios.get("http://localhost:8000/news/" + slug);
      setNews(res.data.news);
      setImage(res.data.news.image);
    }
  }
  useEffect(() => {
    handleImageTitle();
    getNews();
  }, [image, props.data]);
  const handleOpen = () => {
    document.getElementById("opening").innerHTML = `
      <div id="open-end">
      <label>Open<br/>
        <textarea name="open"></textarea>
        </label>
        <button onClick={this.parentNode.remove()}>Delete</button>
      </div>`;
  };
  const handleFormDescription = () => {
    let div = document.createElement("div");
    div.setAttribute("id", "form-des");
    div.setAttribute("style", "background-color: #C6CED6");
    div.innerHTML = `
      <label>Title<br/>
          <input type="text" name="title"></input>
      </label>
      <label>Image<br/>
          <input type="text" name="img"></input>
      </label>
      <label>Description<br/>
          <textarea name="form-description"></textarea>
      </label>
      <button onClick={this.parentNode.remove()}>Delete</button>`;
    document.getElementById("soft-content").appendChild(div);
  };
  const handleFormDescriptionLine = () => {
    let div = document.createElement("div");
    div.setAttribute("id", "form-des");
    div.setAttribute("style", "background-color: #ABB0BE");
    div.innerHTML = `
      <label>Title<br/>
          <input type="text" name="title"></input>
      </label>
      <label>Image<br/>
          <input type="text" name="img"></input>
      </label>
      <label>Description in line<br/>
          <textarea name="form-description_line" placeholder="use ',' to cut line"></textarea>
      </label>
      <button onClick={this.parentNode.remove()}>Delete</button>`;
    document.getElementById("soft-content").appendChild(div);
  };
  const handleFormWithoutImage = () => {
    let div = document.createElement("div");
    div.setAttribute("id", "form-des");
    div.setAttribute("style", "background-color: #ABB0BE");
    div.innerHTML = `
      <label>Title<br/>
          <input type="text" name="title"></input>
      </label>
      <label>Description<br/>
          <textarea name="form-withoutImage"></textarea>
      </label>
      <button onClick={this.parentNode.remove()}>Delete</button>`;
    document.getElementById("soft-content").appendChild(div);
  };
  const handleDescription = () => {
    let div = document.createElement("div");
    div.setAttribute("id", "des");
    div.setAttribute("style", "background-color: #9791A4");
    div.innerHTML = `
      <label>Description<br/>
          <textarea name="description"></textarea>
      </label>
      <button onClick={this.parentNode.remove()}>Delete</button>`;
    document.getElementById("soft-content").appendChild(div);
  };
  const handleDescriptionLine = () => {
    let div = document.createElement("div");
    div.setAttribute("id", "des");
    div.setAttribute("style", "background-color: #887285");
    div.innerHTML = `
      <label>Description in line<br/>
          <textarea name="description_line" placeholder="use ',' to cut line"></textarea>
      </label>
      <button onClick={this.parentNode.remove()}>Delete</button>`;
    document.getElementById("soft-content").appendChild(div);
  };
  const handleImage = () => {
    let div = document.createElement("div");
    div.setAttribute("id", "img");
    div.innerHTML = `
      <label>Image<br/>
      <input type="text" name="image"></input>
      </label>
      <button onClick={this.parentNode.remove()}>Delete</button>`;
    document.getElementById("soft-content").appendChild(div);
  };
  const handleEnd = () => {
    document.getElementById("ending").innerHTML = `
      <div id="open-end">
          <label>End<br/>
              <textarea name="end"></textarea>
          </label>
          <button onClick={this.parentNode.remove()}>Delete</button>
      </div>`;
  };
  async function handleSubmit(e) {
    e.preventDefault();
    const newNews = {
      name: e.target.name_content.value,
      author: e.target.author.value,
      image: e.target.image_news.value,
      paragraph: [],
    };
    let newDes;
    const form = Array.from(e.target.elements).filter(
      (input) => input.type !== "submit"
    );
    form.forEach((input) => {
      switch (input.name) {
        case "open":
          newNews.opening = input.value;
          break;
        case "title":
          newDes = {};
          newDes.title = input.value;
          break;
        case "img":
          newDes.image = input.value;
          break;
        case "form-description":
          newDes.description = input.value;
          newDes.type = "form_description";
          newNews.paragraph.push(newDes);
          break;
        case "form-description_line":
          newDes.type = "form_description_line";
          newNews.paragraph.push(newDes);
          break;
        case "form-withoutImage":
          newDes.type = "form_without_image";
          newNews.paragraph.push(newDes);
          break;
        case "description":
          newDes = {};
          newDes.description = input.value;
          newDes.type = "description";
          newNews.paragraph.push(newDes);
          break;
        case "description_line":
          newDes = {};
          newDes.descriptionLine = input.value;
          newDes.type = "description_line";
          newNews.paragraph.push(newDes);
          break;
        case "image":
          newDes = {};
          newDes.image = input.value;
          newDes.type = "image";
          newNews.paragraph.push(newDes);
          break;
        case "end":
          newNews.ending = input.value;
          break;
      }
    });
    const res = await axios.post("http://localhost:8000/news/create", newNews);
    setNoti(res.status);
    setCheckSuccess(true);
  }
  async function handleEditSubmit(e) {
    e.preventDefault();
    const newNews = {
      name: e.target.name_content.value,
      author: e.target.author.value,
      image: e.target.image_news.value,
      paragraph: [],
    };
    let newDes;
    const form = Array.from(e.target.elements).filter(
      (input) => input.type !== "submit"
    );
    form.forEach((input) => {
      switch (input.name) {
        case "open":
          newNews.opening = input.value;
          break;
        case "title":
          newDes = {};
          newDes.title = input.value;
          break;
        case "img":
          newDes.image = input.value;
          break;
        case "form-description":
          newDes.description = input.value;
          newDes.type = "form_description";
          newNews.paragraph.push(newDes);
          break;
        case "form-description_line":
          newDes.descriptionLine = input.value;
          newDes.type = "form_description_line";
          newNews.paragraph.push(newDes);
          break;
        case "form-withoutImage":
          newDes.description = input.value;
          newDes.type = "form_without_image";
          newNews.paragraph.push(newDes);
          break;
        case "description":
          newDes = {};
          newDes.description = input.value;
          newDes.type = "description";
          newNews.paragraph.push(newDes);
          break;
        case "description_line":
          newDes = {};
          newDes.descriptionLine = input.value;
          newDes.type = "description_line";
          newNews.paragraph.push(newDes);
          break;
        case "image":
          newDes = {};
          newDes.image = input.value;
          newDes.type = "image";
          newNews.paragraph.push(newDes);
          break;
        case "end":
          newNews.ending = input.value;
          break;
      }
    });
    const res = await axios.put("http://localhost:8000/news/" + slug, newNews);
    setNoti(res.status);
    setCheckSuccess(true);
  }
  return (
    <>
      {news === null ? (
        <PageNotFound />
      ) : (
        <Container fluid="xxl">
          <div className="news">
            <div className="control-box">
              <h2>Tool box</h2>
              <button
                className="btnCtrl"
                style={{ backgroundColor: "#E7ECEE" }}
                onClick={handleOpen}
              >
                Open
              </button>
              <button
                className="btnCtrl"
                style={{ backgroundColor: "#C6CED6" }}
                onClick={handleFormDescription}
              >
                Form Description
              </button>
              <button
                className="btnCtrl"
                style={{ backgroundColor: "#ABB0BE" }}
                onClick={handleFormDescriptionLine}
              >
                Form Description with line
              </button>
              <button
                className="btnCtrl"
                style={{ backgroundColor: "#ABB0BE" }}
                onClick={handleFormWithoutImage}
              >
                Form without image
              </button>
              <button
                className="btnCtrl"
                style={{ backgroundColor: "#9791A4" }}
                onClick={handleDescription}
              >
                Description
              </button>
              <button
                className="btnCtrl"
                style={{ backgroundColor: "#887285" }}
                onClick={handleDescriptionLine}
              >
                Description with line
              </button>
              <button
                className="btnCtrl"
                style={{ backgroundColor: "#876F8C" }}
                onClick={handleImage}
              >
                Image
              </button>
              <button
                className="btnCtrl"
                style={{ backgroundColor: "#785462" }}
                onClick={handleEnd}
              >
                End
              </button>
            </div>
            {Object.keys(news).length > 0 ? (
              <form onSubmit={handleEditSubmit}>
                <div className="content">
                  <div className="hard-content">
                    <label>
                      Name
                      <br />
                      <input
                        type="text"
                        name="name_content"
                        required
                        autoFocus
                        defaultValue={news.name || ""}
                      />
                    </label>
                    <label>
                      Author
                      <br />
                      <input
                        type="text"
                        name="author"
                        required
                        defaultValue={news.author || ""}
                      />
                    </label>
                    <label>
                      Image
                      <br />
                      <input
                        type="text"
                        name="image_news"
                        required
                        onChange={handleImageTitle}
                        defaultValue={news.image || ""}
                      />
                      {image.length > 0 && (
                        <div className="news-image">
                          <img src={image} alt={image} />
                        </div>
                      )}
                    </label>
                  </div>
                  <div id="opening">
                    {news.opening && (
                      <div id="open-end">
                        <label>
                          Open
                          <br />
                          <textarea
                            name="open"
                            defaultValue={news.opening}
                          ></textarea>
                        </label>
                      </div>
                    )}
                  </div>
                  <div id="soft-content">
                    {news.paragraph.map((p, index) => {
                      switch (p.type) {
                        case "form_description":
                          return (
                            <div
                              id="form-des"
                              style={{ backgroundColor: "#C6CED6" }}
                              key={index + 1}
                            >
                              <label>
                                Title
                                <br />
                                <input
                                  type="text"
                                  name="title"
                                  defaultValue={p.title}
                                ></input>
                              </label>
                              <label>
                                Image
                                <br />
                                <input
                                  type="text"
                                  name="img"
                                  defaultValue={p.image}
                                ></input>
                              </label>
                              <label>
                                Description
                                <br />
                                <textarea
                                  name="form-description"
                                  defaultValue={p.description}
                                ></textarea>
                              </label>
                            </div>
                          );
                        case "form_description_line":
                          return (
                            <div
                              id="form-des"
                              style={{ backgroundColor: "#ABB0BE" }}
                              key={index + 1}
                            >
                              <label>
                                Title
                                <br />
                                <input
                                  type="text"
                                  name="title"
                                  defaultValue={p.title}
                                ></input>
                              </label>
                              <label>
                                Image
                                <br />
                                <input
                                  type="text"
                                  name="img"
                                  defaultValue={p.image}
                                ></input>
                              </label>
                              <label>
                                Description in line
                                <br />
                                <textarea
                                  name="form-description_line"
                                  placeholder="use ',' to cut line"
                                  defaultValue={p.descriptionLine}
                                ></textarea>
                              </label>
                            </div>
                          );
                        case "form_without_image":
                          return (
                            <div
                              id="form-des"
                              style={{ backgroundColor: "#ABB0BE" }}
                              key={index + 1}
                            >
                              <label>
                                Title
                                <br />
                                <input
                                  type="text"
                                  name="title"
                                  defaultValue={p.title}
                                ></input>
                              </label>
                              <label>
                                Description
                                <br />
                                <textarea
                                  name="form-withoutImage"
                                  defaultValue={p.description}
                                ></textarea>
                              </label>
                            </div>
                          );
                        case "description":
                          return (
                            <div
                              id="des"
                              style={{ backgroundColor: "#9791A4" }}
                              key={index + 1}
                            >
                              <label>
                                Description
                                <br />
                                <textarea
                                  name="description"
                                  defaultValue={p.description}
                                ></textarea>
                              </label>
                            </div>
                          );
                        case "description_line":
                          return (
                            <div
                              id="des"
                              style={{ backgroundColor: "#887285" }}
                              key={index + 1}
                            >
                              <label>
                                Description in line
                                <br />
                                <textarea
                                  name="description_line"
                                  placeholder="use ',' to cut line"
                                  defaultValue={p.descriptionLine}
                                ></textarea>
                              </label>
                            </div>
                          );
                        case "image":
                          return (
                            <div id="img" key={index + 1}>
                              <label>
                                Image
                                <br />
                                <input
                                  type="text"
                                  name="image"
                                  defaultValue={p.image}
                                ></input>
                              </label>
                            </div>
                          );
                        default:
                          return null;
                      }
                    })}
                  </div>
                  <div id="ending">
                    {news.ending && (
                      <div id="open-end">
                        <label>
                          End
                          <br />
                          <textarea
                            name="end"
                            defaultValue={news.ending || ""}
                          ></textarea>
                        </label>
                      </div>
                    )}
                  </div>
                </div>
                <button className="btnSubmit" type="submit">
                  Save
                </button>
              </form>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="content">
                  <div className="hard-content">
                    <label>
                      Name
                      <br />
                      <input
                        type="text"
                        name="name_content"
                        required
                        autoFocus
                      />
                    </label>
                    <label>
                      Author
                      <br />
                      <input type="text" name="author" required />
                    </label>
                    <label>
                      Image
                      <br />
                      <input
                        type="text"
                        name="image_news"
                        required
                        onChange={handleImageTitle}
                      />
                      {image.length > 0 && (
                        <div className="news-image">
                          <img src={image} alt={image} />
                        </div>
                      )}
                    </label>
                  </div>
                  <div id="opening"></div>
                  <div id="soft-content"></div>
                  <div id="ending"></div>
                </div>
                <button className="btnSubmit" type="submit">
                  Save
                </button>
              </form>
            )}
          </div>
          <hr />
          {checkSuccess &&
            (noti === 201 || noti === 200 ? (
              <Alert key={"success"} variant={"success"} className="notifi">
                Success
              </Alert>
            ) : (
              <Alert key={"danger"} variant={"danger"} className="notifi">
                Failed
              </Alert>
            ))}
        </Container>
      )}
    </>
  );
};
export default AddNews;
