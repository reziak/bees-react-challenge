import styled from "styled-components";

export const Container = styled.div`
  background: #F2EC54;
  border-radius: 666px;
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;

  button {
    background: transparent;
    width: 24px;
    height: 24px;
  }

  form {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    input {
      max-width: 90px;
    }
  }
`;