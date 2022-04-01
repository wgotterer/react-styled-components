import { Input } from "components/common";
import React, { useState } from "react";
import styled, {keyframes} from "styled-components";


const ToggleWrapper = styled.div`
width: 50px;
min-width: 50px;
height: 25px;
border-radius: 25px;
border: 1px solid #666;
margin: auto;
display: flex;
background: linear-gradient(to bottom, ${p=> p.theme.primaryColor}, ${p=> p.theme.secondaryColor} );
`

const Notch = styled.div`
height: 21px;
width: 21px;
border: 1px solid #666;
margin-top: 1px;
background: white;
border-radius: 50%;
transition: transform 0.1s linear;
transform: translate(${p=> p.isActive ? "26px" : "1px"})

`

export function Toggle({isActive}) {
  return (
    <ToggleWrapper>
    <Notch isActive={isActive} />
    </ToggleWrapper>
  )
}
