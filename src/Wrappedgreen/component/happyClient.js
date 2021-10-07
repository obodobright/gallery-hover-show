import React from "react";
import styled from "styled-components";
import img1 from "../assest/img1.png";
import img2 from "../assest/img2.png";
import img3 from "../assest/img3.png";
import img4 from "../assest/img4.png";
import img5 from "../assest/img5.png";
import img6 from "../assest/img6.png";

const Images = [
  { id: 1, img: img1 },
  { id: 2, img: img2 },
  { id: 3, img: img3 },
  { id: 4, img: img4 },
  { id: 5, img: img5 },
  { id: 6, img: img6 },
];
const Client = () => {
  return (
    <Container>
      <Wrapper>
        <NavName> Good food = happy clients</NavName>
        <ImageContainer>
          {Images.map((img) => {
            return <ClientImage id={img.id} src={img.img} />;
          })}
        </ImageContainer>
      </Wrapper>
    </Container>
  );
};
export default Client;

const ImageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 9px;
`;
const ClientImage = styled.img`
  width: 400px;
  height: 250px;

  object-fit: cover;
  transition: all 350ms;
  transform: scale(1);

  :hover {
    transform: scale(1.05);
  }
`;
const NavName = styled.div`
  font-size: 50px;
  font-weight: bold;
`;
const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background: whitesmoke;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  height: 100%;
  flex-direction: column;
`;
