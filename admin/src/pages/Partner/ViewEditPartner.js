import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import EditPartner from "../../components/Partner/EditPartner";
const ViewEditPartner = () => {
  return (
    <>
      <Header />
      <EditPartner type="edit" />
      <hr />
      <Footer />
    </>
  );
};
export default ViewEditPartner;
