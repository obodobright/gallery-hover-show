import React from "react";
import styled from "styled-components";
import contactImg from "../assest/contactimg.png";

const Contact = () => {
  return (
    <Container>
      <Wrapper>
        <ImageHolder>
          <ImageContainer>
            <Image src={contactImg} />
          </ImageContainer>
        </ImageHolder>
        <Content>
          <NavName>About us</NavName>
          <Title>Few words about us</Title>
          <Desc>
            We are not ordinary food truck. We create a place overflowing with positive energy that
            it expresses important to us values. Get to know them specifically.
          </Desc>
          <Button>Learn More</Button>
        </Content>
      </Wrapper>
    </Container>
  );
};
export default Contact;
const ImageHolder = styled.div`
  width: 650px;
  height: 650px;
  position: relative;
  overflow: hidden;
`;
const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background: #387546;
  position: absolute;
  border-radius: 50%;
  left: -230px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Image = styled.img`
  width: 700px;
  height: 550px;
  object-fit: contain;
  position: absolute;
  left: 230px;
  top: 90px;
  transition: all 350ms;
  transform: scale(1);

  :hover {
    transform: scale(0.9);
  }
`;
const Content = styled.div`
  width: 500px;
  margin-right: 100px;
`;
const NavName = styled.div`
  font-size: 30px;
  color: #f19a33;
`;
const Title = styled.div`
  font-family: arial black;
  font-weight: 900;
  font-size: 45px;
`;
const Desc = styled.div`
  font-size: 25px;
  padding-right: 20px;
`;
const Button = styled.div`
  width: 150px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #387546;
  border: 0;
  outine: 0;
  border-radius: 7px;
  font-size: 18px;
  font-weight: 600;
  color: white;
  margin-top: 20px;
  transition: all 350ms;
  transfrom: scale(1);
  box-shadow: rgb(0 0 0/30%) 0 16px 10px -10px;

  :hover {
    transform: scale(0.9);
    cursor: pointer;
  }
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  background-image: linear-gradient(#dee7d8, #fafafa);
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
