import React from "react";
import AdditionalInfo from "../components/layout/AdditionalInfo";
import Advertise from "../components/layout/Advertise";
import Banner from "../components/layout/Banner";
import Bestseller from "../components/layout/Bestseller";
import MiddleAdvertisement from "../components/layout/MiddleAdvertisement";
import Newarrival from "../components/layout/Newarrival";
import Offers from "../components/layout/Offers";

const Home = () => {
  return (
    <>
      <Banner />
      <AdditionalInfo />
      <Advertise />
      <Newarrival />
      <Bestseller />
      <MiddleAdvertisement />
      <Offers />
    </>
  );
};

export default Home;
