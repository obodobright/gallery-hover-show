import React from "react";
import styled from "styled-components";
import ServicePage from "./servicePage";
import data from "./data.json";

const ServiceHead = () => {
  return (
    <Container>
      {data.map((myData) => {
        return <ServicePage key={myData.id} {...myData} />;
      })}
    </Container>
  );
};
export default ServiceHead;
const Container = styled.div`
  width: 100%;
  min-height: 90vh;
  background: linear-gradient(180deg, lightblue, #00008b);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding-bottom: 10px;
`;
