import styled from "styled-components";

export const Button = styled.button`
  position: absolute;
  top: 14px;
  right: 15px;
  height: 16px;
  width: 14px;
  background-color: transparent;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(1.9);
  }
`;