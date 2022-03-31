import { PageLayout, Input, PasswordInput } from "components/common";
import React, { useState } from "react";
import styled from "styled-components";

const Form = styled.form`
  width: 100%;
  max-width: 400px;
  background: white;
  border: 1px solid #eee;
  padding: 16px;
  box-sizing: border-box;
  color: black;
  border-radius: 4px;
`;

export default function Login() {
  const [formFields, setFormfields] = useState({ username: "", password: "" });

  function handleInputChange(e) {
    e.preventDefault()
    setFormfields((currentState) => ({
      ...currentState,
      [e.target.name]: e.target.value,
    }));
  }

  return (
    <PageLayout>
      <h1>Home</h1>
      <Form>
        <Input
          value={formFields.username}
          onChange={handleInputChange}
          type="text"
          name="username"
          placeholder="Username"
        />
         <PasswordInput
          value={formFields.password}
          onChange={handleInputChange}
          type="password"
          name="password"
          placeholder="Password"
        />
      </Form>
    </PageLayout>
  );
}
