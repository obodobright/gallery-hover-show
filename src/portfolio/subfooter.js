import React from "react";
import styled from "styled-components";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { RiPhoneFill } from "react-icons/ri";

const SubFooter = () => {
  return (
    <Container id="Contact">
      <Wrapper>
        <Title className="title">Get In Touch</Title>
        <ContactInfo>
          <Link href="tel:07031970221">
            <RiPhoneFill />
          </Link>
          <Link href="twitter.com/kadirisunday" target="_blank">
            <FaTwitter />
          </Link>
          <Link href="https://github.com/kadirisunday/" target="_blank">
            <FaGithub />
          </Link>
          <Link href="mailto:kairisunday212@gmail.com" target="_blank">
            <AiOutlineMail />
          </Link>
          <Link href="https://www.linkedin.com/in/emmanuel-kadiri-a83b939a" target="_blank">
            <FaLinkedin />
          </Link>
        </ContactInfo>
      </Wrapper>
    </Container>
  );
};
export default SubFooter;

const Container = styled.div`
  width: 100%;
  height: 30vh;
  background: powderblue;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  align-items: center;
  padding: 20px 0;
`;
const ContactInfo = styled.div`
  padding: 20px 0;
  display: flex;
`;
const Link = styled.a`
  text-align: center;
  margin: 0 15px;
  font-size: 30px;
  cursor: pointer;
  color: darkblue;
  font-weight: bold;
`;

const Title = styled.h1`
  font-size: 35px;
  position: relative;
  transition: all 350ms;
  color: darkblue;
  :after {
    content: "";
    position: absolute;
    bottom: -3px;
    left: 25%;
    width: 50%;
    height: 5px;
    background: #2c2891;
  }
`;
