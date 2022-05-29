import styled from "styled-components";

import beesSVG from '../../assets/bees.svg';

export const Container = styled.main`
  background: #F2EC54 url(${beesSVG});
  background-repeat: no-repeat;
  background-position: bottom 15px left 29px;
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 500px) {
    background-position: bottom 15px center;
    background-size: 250px;
  }

  font-size: 0.875rem;
  line-height: 1.3125rem;

  > div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    max-width: 300px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  > input {
    width: 100%;
    padding: 10px 12px;
    border-radius: 4px;
    border: 1px solid #D4D4D8;
  }

  label {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    input[type=checkbox] {
      height: 1rem;
      width: 1rem;
      border: 1px solid #A1A1AA;
      border-radius: 4px;
      outline: 0;
    }
  }

  button {
    padding: 8px 16px;
    background: #5D5FEF;
    max-width: 75px;
    border-radius: 4px;
    height: 40px;
    color: #fff;
    transition: background 0.2s;
    
    &:disabled {
      background: #52525B;
      cursor: not-allowed;
    }

    &:hover:not(:disabled) {
      background: #4a4cbf;
    }
  }
`;
