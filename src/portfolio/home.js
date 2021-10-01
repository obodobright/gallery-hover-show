import React, { useState } from "react";
import styled from "styled-components";
import Header from "./header";
import Hero from "./heroPage";
import Service from "./serviceMother";
import VideoPage from "./videoPage";
import Newsletter from "./newsletterPage";
import SubFooter from "./subfooter";

const Home = () => {
  const [toggle, setToggle] = useState(false);

  const onScroll = () => {
    const check = window.scrollY;
    if (check >= 80) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  };
  window.addEventListener("scroll", onScroll);
  return (
    <Container>
      <Header bg={toggle ? "bg" : ""} cl={toggle ? "cl" : ""} />
      <Hero />
      <Service />
      <VideoPage />
      <Newsletter />
      <SubFooter />
    </Container>
  );
};
export default Home;
const Container = styled.div``;
