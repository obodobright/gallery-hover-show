import React from "react";
import styled from "styled-components";
import GlobalButton from "./button";
import { Link } from "react-scroll";
import img from "./kd.jpeg";
const Hero = () => {
  return (
    <Container id="heropage">
      <Wrapper>
        <Image src={img} />
        <Content>
          <Sub>Hi THere! I'AM</Sub>
          <Name>
            <span>SUNDAY</span> KADIRI
          </Name>
          <Bio>
            A <span>Front-End Developer</span> passionate about creating interactive applications
            and experiences on the web
          </Bio>
          <ButtonContainer>
            <GlobalButton text="Resume" bdhover href="https://github.com/kadirisunday" />
            <Link to="Contact">
              <GlobalButton text="Contact" bg brd cl />
            </Link>
          </ButtonContainer>
        </Content>
      </Wrapper>
    </Container>
  );
};
export default Hero;

const Sub = styled.h6`
  text-transform: uppercase;
  font-weight: bold;
`;
const ButtonContainer = styled.div`
  display: flex;
`;

const Name = styled.div`
  font-size: 35px;
  font-weight: bold;
  font-family: cursive;
  margin-bottom: 10px;
  color: black;
  span {
    color: darkblue;
  }
`;
const Bio = styled.div`
  span {
    color: darkblue;
    font-weight: bold;
  }
`;

const Image = styled.img`
  width: 350px;
  height: 400px;
  background: #151e3d;
  margin: 0 20px;
  border-radius: 50%;
  border: 5px solid darkblue;
  object-fit: cover;
`;
const Content = styled.div`
  margin: 0 20px;
  display: flex;
  flex-direction: column;
  width: 350px;
  justify-content: left;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  margin-top: 100px;
`;
const Container = styled.div`
  width: 100%;
  min-height: 70vh;
  height: 100%;
  background: lightblue;
  display: flex;
  color: black;
`;
