import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 382px;
  padding: 30px 23px;
  background: #fff;
  border: 1px solid #000;
  border-radius: 4px;

  strong {
    font-size: 1.25rem;
    line-height: 1.875rem;
    margin-bottom: 20px;
    display: block;
    color: #27272A;
  }

  p {
    line-height: 1.625rem;
    color: #3F3F46;
    margin-bottom: 20px;
  }

  p + div {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
`;

export const DeleteButton = styled.button`
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
`