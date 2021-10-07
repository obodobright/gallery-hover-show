import React from "react";
import styled from "styled-components";
import menuData from "./menuData.json";
const Menu = () => {
  return (
    <Container id="menu">
      <Wrapper>
        <NavName>Menu</NavName>
        <MenuHead>Explore Our Best Food</MenuHead>
        <SubHead>Below you can see our best selling meals!</SubHead>
        <Section>
          {menuData.map((foodData) => {
            const { id, foodName, foodImage, foodDesc, foodPrice } = foodData;
            return (
              <Card key={id}>
                <FoodImage src={foodImage} />
                <FoodInfoContainer>
                  <FoodInfo>
                    <FoodName>{foodName}</FoodName>
                    <FoodDesc>{foodDesc}</FoodDesc>
                  </FoodInfo>
                  <FoodPriceContainer>
                    <FoodPrice>{foodPrice}$</FoodPrice>
                  </FoodPriceContainer>
                </FoodInfoContainer>
              </Card>
            );
          })}
        </Section>
      </Wrapper>
    </Container>
  );
};
export default Menu;
const Card = styled.div`
  width: 350px;
  height: 350px;
  background: whitesmoke;
  margin: 20px 10px;
  box-shadow: rgb(0 0 0/39%) 0 16px 16px -10px;
  transition: all 350ms;
  transform: scale(1);

  :hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;
const FoodImage = styled.img`
  width: 100%;
  height: 70%;
  object-fit: cover;
`;
const FoodInfoContainer = styled.div`
  padding: 20px 10px;
  display: flex;
  justify-content: space-between;
`;
const FoodPriceContainer = styled.div``;
const FoodInfo = styled.div``;
const FoodName = styled.div`
  font-size: 25px;
  font-weight: bold;
`;

const FoodDesc = styled.div`
  font-size: 17px;
  font-weight: 500;
`;
const FoodPrice = styled.div`
  font-size: 25px;
  font-weight: bold;
`;

const NavName = styled.div`
  font-size: 30px;
  font-weight: 500;
  color: #f19a33;
`;
const MenuHead = styled.div`
  font-size: 60px;
  font-weight: 700;
  line-height: 1;
`;
const SubHead = styled.div`
  font-size: 30px;
  font-weight: 700;
`;
const Section = styled.div`
  display: flex;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px 0;

  background-image: linear-gradient(#fafafa, whitesmoke);
`;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 70vh;
  align-items: center;
`;
