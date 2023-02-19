import React from "react";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import Introduce from "../components/Introduce/Introduce";
import Footer from "../components/Footer/Footer";
import PartnerShow from "../components/Partners/PartnerShow";

const ViewHome = () => {
  return (
    <>
      <Header />
      <Banner />
      <Introduce />
      <PartnerShow />
      <Footer />
    </>
  );
};
export default ViewHome;
