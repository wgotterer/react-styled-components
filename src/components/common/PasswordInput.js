import { Input } from "components/common";
import React, { useState } from "react";
import styled from "styled-components";


// with the attrs we add anythign we want to add to this component
// or in this case html element
const PasswordInputStyle = styled(Input).attrs(() => ({
    type: "password",
    placeholder: "Password"
}))`
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    `

export function PasswordInput(props){

    const [showPassword, setShowPassword] = useState(false)
    return (
       <PasswordInputStyle {...props} />
    )
}
