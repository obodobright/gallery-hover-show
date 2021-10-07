import React from "react";
import styled from "styled-components";
import logo from "../assest/logo2.png";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Content>
          <LogoContainer>
            <Logo src={logo} />
          </LogoContainer>
          <Navigation>
            <Link>About Us</Link>
            <Link>Menu</Link>
            <Link>Contact</Link>
          </Navigation>
          <Social>
            <FaFacebook style={{ margin: "0 20px" }} />
            <FaTwitter style={{ margin: "0 20px" }} />
            <FaInstagram style={{ margin: "0 20px" }} />
          </Social>
        </Content>
      </Wrapper>
    </Container>
  );
};
export default Footer;
const Social = styled.div`
  display: flex;
  justify-content: center;
  color: white;
  font-size: 35px;
`;
const Content = styled.div`
  position: relative;
  top: -46%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
const Navigation = styled.div`
  display: flex;
  justify-content: center;
  cursor: pointer;
`;
const Link = styled.div`
  font-size: 20px;
  color: white;
  font-weight: bold;
  margin: 15px 20px;
`;
const Logo = styled.img`
  width: 170px;
  height: 170px;
`;
const LogoContainer = styled.div`
  width: 250px;
  height: 250px;
  background: white;
  position: relative;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`
  height: 350px;
  background: whitesmoke;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 130em;
  height: 120em;
  position: absolute;
  border-radius: 50%;
  background: #5e8f69;
  display: flex;
  justify-content: center;
  top: 20%;
  flex-direction: column;
  align-items: center;
`;
