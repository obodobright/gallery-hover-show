import React from "react";
import styled from "styled-components";
import taibat from "./toyeebah.JPG";
import peter from "./peter.jpeg";
import solomon from "./solomon.jpeg";
import codelab from "./codelab.MP4";
import svideo from "./so.MOV";
import tvideo from "./tb.MOV";
const user = [
  {
    id: 1,
    name: "Taibat",
    img: taibat,
    vid: tvideo,
  },
  {
    id: 2,
    name: "Peter",
    img: peter,
    vid: codelab,
  },
  {
    id: 3,
    name: "Solomon",
    img: solomon,
    vid: svideo,
  },
];
const Position = () => {
  return (
    <Container>
      <Text>BRIGHT GALLERY</Text>
      {user.map((user) => (
        <Wrapper key={user.id}>
          <BoxContainer src={user.img} />
          <Box
            src={user.vid}
            muted
            loop
            onMouseOver={(e) => e.target.play()}
            onMouseOut={(e) => e.target.pause()}
          />
        </Wrapper>
      ))}
    </Container>
  );
};
export default Position;

const Text = styled.div`
  font-size: 50px;
  font-weight: bold;
`;
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  background: black;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;
const BoxContainer = styled.img`
  width: 320px;
  height: 320px;
  object-fit: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 0 10px;
  border-radius: 50%;
`;
const Box = styled.video`
  opacity: 0;
  width: 320px;
  height: 320px;
  background: blue;
  position: absolute;
  object-fit: cover;
  top: 15px;
  border-radius: 30%;
  border: 4px solid whitesmoke;

  :hover {
    top: 30%;
    opacity: 1;
  }
`;
