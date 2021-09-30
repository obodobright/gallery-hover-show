import React from "react";
import styled from "styled-components";
import { GoHome } from "react-icons/go";
import { SiAboutDotMe } from "react-icons/si";
import { IoIosContact } from "react-icons/io";
import { FaServicestack } from "react-icons/fa";
import { BsCameraVideo } from "react-icons/bs";

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Logo>Bright</Logo>
        <Navigation>
          <Nav>
            <GoHome style={{ marginRight: "4px", fontSize: "20px", fontWeight: "bold" }} />
            <span>Home</span>
          </Nav>
          <Nav>
            <FaServicestack style={{ marginRight: "4px", fontSize: "20px", fontWeight: "bold" }} />
            <span>Service</span>
          </Nav>
          <Nav>
            <BsCameraVideo style={{ marginRight: "4px", fontSize: "20px", fontWeight: "bold" }} />
            <span>Video</span>
          </Nav>
          <Nav>
            <SiAboutDotMe style={{ marginRight: "4px", fontSize: "20px", fontWeight: "bold" }} />
            <span>About</span>
          </Nav>
        </Navigation>
        <Button>Contact</Button>
      </Wrapper>
    </Container>
  );
};
export default Header;
const Button = styled.button`
  width: 100px;
  height: 40px;
  outline: none;
  border: 1px solid lightblue;
  background: red;
  padding: 5px;
  font-size: 16px;
  text-transform: uppercase;
  border-radius: 4px;
  background: transparent;
  color: lightblue;
  font-weight: 500;
  transition: all 350ms;
  transform: scale(1);

  :hover {
    background: white;
    color: darkblue;
    transform: scale(1.05);
  }
`;
const Navigation = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;
const Nav = styled.div`
  margin: 0px 10px;
  display: flex;
  align-items: center;

  span {
    font-weight: bold;
    text-transform: uppercase;
    position: relative;

    :after {
      content: "";
      width: 100%;
      height: 2px;
      position: absolute;
      bottom: 2px;
      background: lightblue;
      left: 0;
      transition: all 350ms;
      transform: scale(0);
      transform-origin: center;
      opacity: 0;
    }
  }
  :hover {
    cursor: pointer;
    span {
      :after {
        transform: scale(1);
        opacity: 1;
      }
    }
  }
`;

const Logo = styled.div`
  width: 200px;
  padding: 10px;
  font-family: Cursive;
  font-size: 30px;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 70px;
`;
const Container = styled.div`
  width: 100%;
  height: 70px;
  background: darkblue;
  color: lightblue;
  padding: 0 20px;
  flex-wrap: wrap;
  position: fixed;
  z-index: 22;
`;
