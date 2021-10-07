import React from "react";
import styled from "styled-components";
import { RiTimeFill } from "react-icons/ri";
import { MdLocationOn } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <Container>
      <Wrapper>
        <ContactInfo>
          <RiTimeFill style={{ fontSize: "60px", padding: "6px 0", color: "#387546" }} />
          <WorkHours>Today 12pm - 9pm </WorkHours>
          <Sub>Working Hours</Sub>
        </ContactInfo>
        <ContactInfo>
          <MdLocationOn style={{ fontSize: "60px", padding: "6px 0", color: "#387546" }} />
          <WorkHours>Piastowska 4, Cracow</WorkHours>
          <Sub>Find Us</Sub>
        </ContactInfo>
        <ContactInfo>
          <FaPhoneAlt style={{ fontSize: "60px", padding: "6px 0", color: "#387546" }} />
          <WorkHours>503 204 176 </WorkHours>
          <Sub>Call us</Sub>
        </ContactInfo>
      </Wrapper>
    </Container>
  );
};
export default Contact;
const ContactInfo = styled.div`
  width: 370px;
  height: 175px;
  background: white;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-radius: 40%;
  box-shadow: rgb(0 0 0/39%) 10px 26px 30px -10px;
  margin: 0 20px;
  transition: all 450ms cubic-bezier(0.47, 1.64, 0.41, 0.8);

  :hover {
    transform: scale(1.05);
  }
`;
const WorkHours = styled.div`
  font-weight: bold;
  font-size: 17px;
  padding: 6px 0;
`;
const Sub = styled.div``;

const Container = styled.div`
  width: 100%;
  min-height: 50vh;
  height: 100%;
  background: whitesmoke;
`;
const Wrapper = styled.div`
  width: 100%;
  min-height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
