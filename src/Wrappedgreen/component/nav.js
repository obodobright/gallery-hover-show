import React from "react";
import styled from "styled-components";
import logo from "../assest/logo.png";
const Nav = () => {
  return (
    <Container>
      <Wrapper>
        <Logo src={logo} />
        <NavLink>
          <NavItem>About Us</NavItem>
          <NavItem>Menu</NavItem>
          <NavItem>Contact</NavItem>
        </NavLink>
      </Wrapper>
    </Container>
  );
};
export default Nav;
const Container = styled.div`
  width: 100%;
  height: 100px;
  background: white;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 22;
`;
const Logo = styled.img`
  width: 200px;
  padding: 25px;
  margin-left: 20px;
  object-fit: contain;
`;
const NavLink = styled.div`
  display: flex;
  margin: 0 30px;
`;
const NavItem = styled.div`
  margin: 0 20px;
  font-size: 22px;
  font-weight: 700;
  transition: all 350ms;

  :hover {
    cursor: pointer;
    color: #f19a33;
  }
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;
