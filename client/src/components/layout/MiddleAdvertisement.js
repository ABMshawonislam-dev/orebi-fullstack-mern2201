import React from "react";
import { Link } from "react-router-dom";
import Container from "./Container";
import Image from "./Image";

const MiddleAdvertisement = () => {
  return (
    <div className="md:mt-32">
      <Container>
        <Link to="#">
          <Image imgsrc="assets/middleadd.png" />
        </Link>
      </Container>
    </div>
  );
};

export default MiddleAdvertisement;
