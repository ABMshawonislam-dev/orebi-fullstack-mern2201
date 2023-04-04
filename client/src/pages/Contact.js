import React from "react";
import Breadcrumb from "../components/layout/Breadcrumb";
import Button from "../components/layout/Button";
import Container from "../components/layout/Container";
import InputBox from "../components/layout/InputBox";

const Contact = () => {
  return (
    <Container>
      <Breadcrumb />
      <div className="w-2/4">
        <h2 className="mb-10 font-dm text-4xl font-bold">Fill up a Form</h2>
        <InputBox as="input" placeholder="Your name here" title="Name" />
        <InputBox as="input" placeholder="Your email here" title="Email" />
        <InputBox
          as="textarea"
          placeholder="Your message here"
          title="Message"
        />
        <Button title="Post" />
      </div>
    </Container>
  );
};

export default Contact;
