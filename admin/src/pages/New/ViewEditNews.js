import React from "react";
import Header from "../../components/Header/Header";
import EditNews from "../../components/News/EditNews";
const ViewEditNews = () => {
  return (
    <>
      <Header />
      <EditNews type="edit" />
    </>
  );
};
export default ViewEditNews;
