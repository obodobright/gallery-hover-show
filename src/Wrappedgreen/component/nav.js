import React from "react";
import styled from "styled-components";
import logo from "../assest/logo.png";
import { Link } from "react-scroll";
const Nav = () => {
  return (
    <Container>
      <Wrapper>
        <Logo src={logo} />
        <NavLink>
          <NavItem
            to="about"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            delay={1000}
          >
            About Us
          </NavItem>
          <NavItem
            to="menu"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            delay={1000}
          >
            Menu
          </NavItem>
          <NavItem
            to="contact"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            delay={1000}
          >
            Contact
          </NavItem>
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
const NavItem = styled(Link)`
  margin: 0 20px;
  font-size: 22px;
  font-weight: 700;
  transition: all 350ms;
  color: black;
  text-decoration: none;

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
