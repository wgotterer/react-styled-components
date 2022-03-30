import styled, { css } from "styled-components";
import { Link as ReactRouterDomLink} from "react-router-dom";
import React from "react";

const HeaderWrapper = styled.header`
  height: 60px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  padding: 0 16px;
  position: fixed;
  top: 0;
  background: #eee;
`;

const Menu = styled.menu`
  display: flex;
  position: relative;
  width: initial;
  border-bottom: none;
  margin: auto 0 auto auto;
  font-family: "Open Sans";
  background: none;
  left: initial;
  top: initial;
`;


// create this react component becuase the isActive prop throws an error becuase the Link from react-router-dom
// doesnt accept it as a prop. Therefore we re-name it and pass in isActive prop destructured and then 
// return the ReactRouterDomLink which is an alias for Link and pass it all the props and not the isActive props because it's destructured. 
const Link = ({isActive, children, ...props}) => {
    return(
        <ReactRouterDomLink {...props}>
            {children}
        </ReactRouterDomLink>
    )
}

const StyledLink = styled(Link)`
padding: 4px 6ex;
display: block;
text-align: center;
box-sizing: border-box;
margin: auto 0;
font-weight: ${p => p.isActive ? "bold" : "normal" };
`

export function Header() {
  return (
    <HeaderWrapper>
      <Menu>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/login" isActive>Login</StyledLink>
      </Menu>
    </HeaderWrapper>
  );
}
