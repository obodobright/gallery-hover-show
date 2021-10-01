import React, { useState } from "react";
import styled from "styled-components";

const ServicePage = ({ title, decription, img }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <Container id="service">
      <Wrapper>
        <Image src={img} />
        <Content>
          <Title>{title}</Title>
          <Desc>
            {readMore ? decription : `${decription.substring(0, 100)}...`}
            <button onClick={() => setReadMore(!readMore)}>
              {readMore ? "show less" : "read more"}
            </button>
          </Desc>
        </Content>
      </Wrapper>
    </Container>
  );
};
export default ServicePage;

const Image = styled.img`
  width: 300px;
  height: 50%;
  object-fit: cover;
  background: blue;
`;
const Content = styled.div`
  padding: 10px 15px;
`;
const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  line-height: 1;
  padding-bottom: 13px;
`;
const Desc = styled.div`
  font-size: 13px;
  line-spacing: 2px;

  button {
    border: none;
    outline: none;
    cursor: pointer;
    color: azure;
    text-decoration: underline;
    background: transparent;
    transition: all 350ms;
    transform: scale(1);
  }
  :hover {
    button {
      text-decoration: none;
      transform: scale(1.02);
    }
  }
`;
const Wrapper = styled.div`
  margin: 0 15px;
  margin-top: 20px;
  width: 300px;
  padding-bottom: 10px;
  background: transparent;
  color: white;
  transition: all 350ms;
  transform: scale(1);
  :hover {
    transform: scale(1.002);
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  }
`;
const Container = styled.div``;
