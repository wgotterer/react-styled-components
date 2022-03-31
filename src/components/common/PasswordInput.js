import { Input } from "components/common";
import React, { useState } from "react";
import styled from "styled-components";

const PasswordInputStyle = styled(Input)`
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    `

export function PasswordInput(props){

    const [showPassword, setShowPassword] = useState(false)
    return (
       <PasswordInputStyle {...props} />
    )
}
