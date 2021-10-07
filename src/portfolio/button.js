import React from "react";
import styled from "styled-components";

const GlobalButton = ({ text, bg, brd, cl, bdhover }) => {
  return (
    <Container>
      <Button brg={bg} border={brd} color={cl} borderH={bdhover}>
        {text}
      </Button>
    </Container>
  );
};
export default GlobalButton;
const Container = styled.div``;
const Button = styled.a`
  margin-top: 30px;
  width: 150px;
  height: 40px;
  margin-right: 10px;
  outline: none;
  background: ${({ brg }) => (brg ? "white" : "transparent")};
  border: ${({ border }) => (border ? "none" : "1px dashed #00008b")};
  text-decoration: none;
  border-radius: 5px;
  color: darkblue;
  font-weight: bold;
  transition: all 350ms;
  transform: scale(1);
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    transform: scale(1.05);
    font-weight: bold;
    background: ${({ brg }) => (brg ? "#00008b" : "transparent")};
    color: ${({ color }) => (color ? "white" : "#00008b")};
    border: ${({ borderH }) => (borderH ? "2px solid #00008b" : "white")};
    cursor: pointer;
  }
`;
