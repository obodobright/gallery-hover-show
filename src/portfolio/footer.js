import React from "react";
import styled from "styled-components";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Logo>
          Lumen <code>Code</code>{" "}
        </Logo>
        <Info>Designed and developed by yours truly</Info>
        <Social>
          <Link>
            <FaTwitter />
          </Link>
          <Link>
            <FaGithub />
          </Link>
          <Link>
            <FaLinkedin />
          </Link>
          <Link>
            <AiOutlineMail />
          </Link>
        </Social>
      </Wrapper>
    </Container>
  );
};

export default Footer;
const Social = styled.div`
  display: flex;
`;
const Info = styled.div``;
const Logo = styled.div`
  font-family: arialblack;
  font-size: 30px;

  logo {
    font-family: "Source Code Pro", monospace;
  }
`;
const Link = styled.a`
  margin: 0 0px;
  font-size: 20px;
  border: 1px solid white;
  padding: 5px;
  background: darkblue;
  color: lightblue;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
  justify-content: space-around;
  flex-direction: wrap;
`;
const Container = styled.div`
  width: 100%;
  height: 80px;
  background: darkblue;
  color: lightblue;
`;
