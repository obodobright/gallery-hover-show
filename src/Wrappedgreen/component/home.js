import React from "react";
import styled from "styled-components";
import Nav from "./nav";
import Hero from "./hero";
import About from "./about";
import Menu from "./menu";
import HappyClient from "./happyClient";
import Contact from "./contact";
import Footer from "./footer";

const Home = () => {
  return (
    <Container>
      <Nav />
      <Hero />
      <About />
      <Menu />
      <HappyClient />
      <Contact />
      <Footer />
    </Container>
  );
};
export default Home;

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: whitesmoke;
`;
