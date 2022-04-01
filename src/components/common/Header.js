import styled, { css } from "styled-components";
import { Link as ReactRouterDomLink, useLocation } from "react-router-dom";
import React, {useState} from "react";
import { Toggle } from "./Toggle";

const HeaderWrapper = styled.header`
  height: 60px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  padding: 0 16px;
  position: fixed;
  top: 0;
  background-image: linear-gradient(to right, ${p => p.theme.primaryColor}, ${p => p.theme.secondaryColor});
  border-bottom: 3px solid ${p => p.theme.secondaryColor} ;
`;

const Menu = styled.menu`
  display: ${p => p.open ? "block" : "none"};
  position: absolute;
  width: 100%;
  top: 60px;
  padding: 8px;
  box-sizing: border-box;
  left: 0;
  border-bottom: 3px solid ${p => p.theme.secondaryColor};
  background: white;

  font-family: "Open Sans";

  @media (min-width: 768px) {
    display: flex;
    background: none;
    left: initial;
    top: initial;
    margin: auto 0 auto auto;
    position: relative;
    width: initial;
    border-bottom: none;
  }
`;

// create this react component becuase the isActive prop throws an error becuase the Link from react-router-dom
// doesnt accept it as a prop. Therefore we re-name it and pass in isActive prop destructured and then
// return the ReactRouterDomLink which is an alias for Link and pass it all the props and not the isActive props because it's destructured.
const Link = ({ isActive, children, ...props }) => {
  return <ReactRouterDomLink {...props}>{children}</ReactRouterDomLink>;
};

const StyledLink = styled(Link)`
  padding: 4px 2ex;
  display: block;
  text-align: center;
  box-sizing: border-box;
  margin: auto 0;
  font-weight: ${(p) => (p.isActive ? "bold" : "normal")};
  color: black;
`;

const MobilMenuIcon = styled.div`
  margin: auto 0 auto auto;
  width: 25px;
  min-width: 25px;
  padding: 5px;
  > div {
    height: 3px;
    background: black;
    margin: 5px 0;
    width: 100%;
  }
  @media(min-width: 768px) {
      display: none;
  }
`;

export function Header() {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <HeaderWrapper>
      <MobilMenuIcon onClick={() => setMenuOpen(s => !s)}>
        <div />
        <div />
        <div />
      </MobilMenuIcon>
      <Menu open={menuOpen}>
        <StyledLink to="/" isActive={pathname === "/"}>
          Home
        </StyledLink>
        <StyledLink to="/login" isActive={pathname === "/login"}>
          Login
        </StyledLink>
        <Toggle />
      </Menu>
    </HeaderWrapper>
  );
}
