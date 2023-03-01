import React from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import "./AddNews.scss";

const AddNews = () => {
  const [checkSuccess, setCheckSuccess] = useState(false);
  const [noti, setNoti] = useState(0);
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
    div.innerHTML = `
      <div id="form-des" style="background-color: #C6CED6 ">
        <label>Title<br/>
            <input type="text" name="title"></input>
        </label>
        <label>Image<br/>
            <input type="text" name="img"></input>
        </label>
        <label>Description<br/>
            <textarea name="form-description"></textarea>
        </label>
        <button onClick={this.parentNode.remove()}>Delete</button>
      </div>`;
    document.getElementById("soft-content").appendChild(div);
  };
  const handleFormDescriptionLine = () => {
    let div = document.createElement("div");
    div.innerHTML = `
    <div id="form-des" style= "background-color: #ABB0BE " >
      <label>Title<br/>
          <input type="text" name="title"></input>
      </label>
      <label>Image<br/>
          <input type="text" name="img"></input>
      </label>
      <label>Description in line<br/>
          <textarea name="form-description_line" placeholder="use ',' to cut line"></textarea>
      </label>
      <button onClick={this.parentNode.remove()}>Delete</button>
    </div>`;
    document.getElementById("soft-content").appendChild(div);
  };
  const handleDescription = () => {
    let div = document.createElement("div");
    div.innerHTML = `
      <div id="des" style= "background-color: #9791A4 ">
          <label>Description<br/>
              <textarea name="description"></textarea>
          </label>
          <button onClick={this.parentNode.remove()}>Delete</button>
      </div>`;
    document.getElementById("soft-content").appendChild(div);
  };
  const handleDescriptionLine = () => {
    let div = document.createElement("div");
    div.innerHTML = `
      <div id="des" style= "background-color: #887285 ">
        <label>Description in line<br/>
            <textarea name="description_line" placeholder="use ',' to cut line"></textarea>
        </label>
        <button onClick={this.parentNode.remove()}>Delete</button>
      </div>`;
    document.getElementById("soft-content").appendChild(div);
  };
  const handleEnd = () => {
    document.getElementById("ending").innerHTML = `
        <div id="open-end">
            <label>End<br/>
                <textarea name="end"></textarea>
            </label>
            <button onClick={this.parentNode.remove()}>Delete</button>
        </div>
    `;
  };
  async function handleSubmit(e) {
    e.preventDefault();
    const newNews = {
      name: e.target.name_content.value,
      author: e.target.author.value,
      paragraph: [],
    };
    let newDes = {};
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
          newDes.descriptionLine = input.value.split(", ");
          newDes.type = "form_description_line";
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
          newDes.descriptionLine = input.value.split(", ");
          newDes.type = "description_line";
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
  return (
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
            style={{ backgroundColor: "#785462" }}
            onClick={handleEnd}
          >
            End
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="content">
            <div className="hard-content">
              <label>
                Name
                <br />
                <input type="text" name="name_content" required autoFocus />
              </label>
              <label>
                Author
                <br />
                <input type="text" name="author" required />
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
      </div>
      <hr />
      {checkSuccess &&
        (noti === 201 ? (
          <Alert key={"success"} variant={"success"}>
            Thêm thành công
          </Alert>
        ) : (
          <Alert key={"danger"} variant={"danger"}>
            Thêm thất bại
          </Alert>
        ))}
    </Container>
  );
};
export default AddNews;
