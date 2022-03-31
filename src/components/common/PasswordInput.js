import { Input } from "components/common";
import React, { useState } from "react";
import styled from "styled-components";

const PasswordInputWrapper = styled.div`
  display: flex;
/* the tilde grabs ahold of the next child element. in this case it is the div with the shown password */
  ~div{
      margin-bottom: 6px;
  }
`;

// with the attrs we add anythign we want to add to this component
// or in this case html element
const PasswordInputStyle = styled(Input).attrs(() => ({
  type: "password",
  placeholder: "Password",
}))`
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`;

const ToggleButton = styled.div`
  height: 40px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  font-size: 0.9em;
  display: flex;
  padding: 8px;
  border-left: 0;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  background: white;
  font-weight: bold;
  cursor: pointer;
  /* userselect unable to highlight text */
  user-select: none;
  color: black;
`;

export function PasswordInput(props) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <PasswordInputWrapper>
        <PasswordInputStyle {...props} />
        <ToggleButton onClick={() => setShowPassword(!showPassword)}>{showPassword ? "Hide" : "Show"}</ToggleButton>
      </PasswordInputWrapper>

      <div>{showPassword ? props.value : ""}</div>
    </>
  );
}
