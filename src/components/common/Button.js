import styled, { css } from "styled-components";

const Button = styled.button`
  color: white;
  background: ${(p) => (p.secondary ? "black" : "#f8049c")};
  font-weight: bold;
  ${(p) =>
    p.large
      ? css`
          padding: 15px;
          border-radius: 10px;
          font-size: 4em;
        `
      : css`
          padding: 8px;
          border-radius: 4px;
          font-size: 1em;
        `}
  box-shadow: none;
  border: none;
  width: 100%;
  display: block;
  white-space: none;

  &:disabled {
    background: #eee;
    color: #666;
  }
`;

export { Button };
