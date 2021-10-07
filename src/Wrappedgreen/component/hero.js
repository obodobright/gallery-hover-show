import React from "react";
import styled from "styled-components";
import heroimg from "../assest/heroimg.png";
import sideImg from "../assest/sideImg.png";
import { AiOutlineArrowRight } from "react-icons/ai";

const Heropage = () => {
  return (
    <Container>
      <Wrapper>
        <Content>
          <Title>Healthy & Fresh Food For You</Title>
          <Desc>Created for lovers of healthy delicious and non-obvious food.</Desc>
          <Button>
            Check Menu <AiOutlineArrowRight />
          </Button>
        </Content>
        <ImageContainer>
          <ImageHolder>
            <Image src={heroimg} />
          </ImageHolder>
        </ImageContainer>
      </Wrapper>
      <SideImage src={sideImg} />
    </Container>
  );
};
export default Heropage;
const SideImage = styled.img`
  width: 200px;
  height: 200px;
  left: -35px;
  position: absolute;
  top: 85%;
`;

const ImageContainer = styled.div`
  width: 800px;
  height: 800px;
  overflow: hidden;
  position: relative;
`;
const ImageHolder = styled.div`
  height: 100%;
  width: 100%;
  background: #387546;
  border-radius: 50%;
  position: absolute;
  right: -70px;
  top: -200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  width: 500px;
  height: 500px;
  margin: 0 60px;
`;
const Desc = styled.div`
  font-size: 22px;
  width: 400px;
  font-family: raleway;
`;
const Button = styled.button`
  width: 200px;
  height: 45px;
  border: 0;
  outline: none;
  border-radius: 7px;
  background: #f19a33;
  color: white;
  font-weight: 700;
  letter-spacing: 1.2px;
  font-size: 18px;
  margin-top: 15px;
  transition: all 400ms;
  transform: scale(1);
  box-shadow: rgb(0 0 0/39%) 0px 16px 10px -10px;
  :hover {
    cursor: pointer;
    transform: scale(0.9);
    font-weight: 600;
  }
`;
const Title = styled.div`
  font-size: 60px;
  font-weight: 900;
  font-family: raleway;
`;
const Image = styled.img`
  width: 700px;
  height: 400px;
  object-fit: contain;
  position: absolute;
  top: 250px;
  transition: all 350ms;
  transform: scale(1);

  :hover {
    transform: scale(0.97);
  }
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 80vh;
  background-image: linear-gradient(#b7cca9, #dee7d8);
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
