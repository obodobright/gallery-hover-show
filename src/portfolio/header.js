import React, { useState } from "react";
import styled from "styled-components";
import { GoHome } from "react-icons/go";
import { SiAboutDotMe } from "react-icons/si";
import { FaServicestack } from "react-icons/fa";
import { BsCameraVideo } from "react-icons/bs";
import NavigationTwoToneIcon from "@mui/icons-material/NavigationTwoTone";
import { animateScroll as Scroll, Link } from "react-scroll";

const Header = ({ bg, cl, bbc }) => {
  // State for hding and displaying button scroll
  const [hideScroll, setHideScroll] = useState(false);

  // function for hding and displaying button scroll
  const hideShowScroll = () => {
    const windowHeight = window.scrollY;
    if (windowHeight >= 304) {
      setHideScroll(true);
    } else {
      setHideScroll(false);
    }
  };
  window.addEventListener("scroll", hideShowScroll);

  // eventListener for react-scroll
  window.addEventListener("scroll", hideShowScroll);

  const scrollToTop = () => {
    Scroll.scrollToTop();
  };

  const scrollToBottom = () => {
    Scroll.scrollToBottom();
  };

  return (
    <Container background={bg} color={cl}>
      <Wrapper>
        <Logo onClick={scrollToBottom}>Sunday Kadiri</Logo>
        <Navigation>
          <Nav
            to="heropage"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            delay={1000}
          >
            <GoHome style={{ marginRight: "4px", fontSize: "20px", fontWeight: "bold" }} />
            <span>Home</span>
          </Nav>
          <Nav
            to="service"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <FaServicestack style={{ marginRight: "4px", fontSize: "20px", fontWeight: "bold" }} />
            <span>Service</span>
          </Nav>
          <Nav
            to="videopage"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <BsCameraVideo style={{ marginRight: "4px", fontSize: "20px", fontWeight: "bold" }} />
            <span>Video</span>
          </Nav>
          <Nav
            to="newsletter"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <SiAboutDotMe style={{ marginRight: "4px", fontSize: "20px", fontWeight: "bold" }} />
            <span>Contact</span>
          </Nav>
        </Navigation>
        <Button bbc={bbc} onClick={() => scrollToTop()} op={hideScroll ? "op" : ""}>
          <NavigationTwoToneIcon />
        </Button>
      </Wrapper>
    </Container>
  );
};
export default Header;
const Button = styled.div`
  opacity: ${({ op }) => (op ? "1" : 0)};
  width: 80px;
  height: 80px;
  background: darkblue;
  border-radius: 50%;
  position: fixed;
  top: 80%;
  right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  font-size: 16px;
  text-transform: uppercase;
  color: lightblue;
  font-weight: 500;
  transition: all 350ms;
  transform: scale(1);

  :hover {
    cursor: pointer;
  }
`;
const Navigation = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;
const Nav = styled(Link)`
  margin: 0px 10px;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${({ clr }) => (clr ? "inherit" : "inherit")};
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
    color: inherit;
    span {
      :after {
        transform: scale(1);
        opacity: 1;
      }
    }
  }
`;

const Logo = styled.div`
  width: 400px;
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
  background: ${({ background }) => (background ? "white" : "darkblue")};
  color: ${({ color }) => (color ? "darkblue" : "lightblue")};
  padding: 0 20px;
  flex-wrap: wrap;
  position: fixed;
  z-index: 22;
`;
