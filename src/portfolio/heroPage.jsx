import React from "react";
import styled from "styled-components";
import GlobalButton from "./button";
const Hero = () => {
  return (
    <Container>
      <Wrapper>
        <Image />
        <Content>
          <Name>OBODO BRIGHT</Name>
          <Bio>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste possimus ducimus dolor
            assumenda molestias deserunt esse quod molestiae minus velit?
          </Bio>
          <ButtonContainer>
            <GlobalButton text="Button1" bdhover />
            <GlobalButton text="Button" bg brd cl />
          </ButtonContainer>
        </Content>
      </Wrapper>
    </Container>
  );
};
export default Hero;

const ButtonContainer = styled.div`
  display: flex;
`;

const Name = styled.div`
  font-size: 35px;
  font-weight: bold;
  font-family: cursive;
  margin-bottom: 30px;

  ::after ;
`;
const Bio = styled.div``;

const Image = styled.div`
  width: 350px;
  height: 400px;
  background: #151e3d;
  margin: 0 20px;
  border-radius: 25% 46%;
  border: 1px solid lightblue;
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
  color: darkblue;
`;
