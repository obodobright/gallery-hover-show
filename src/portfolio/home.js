import React from "react";
import styled from "styled-components";
import Header from "./header";
import Hero from "./heroPage";
import Service from "./serviceMother";
import VideoPage from "./videoPage";
import Newsletter from "./newsletterPage";

const Home = () => {
  return (
    <Container>
      <Header />
      <Hero />
      <Service />
      <VideoPage />
      <Newsletter />
    </Container>
  );
};
export default Home;
const Container = styled.div``;
