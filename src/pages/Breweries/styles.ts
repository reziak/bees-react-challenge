import styled from 'styled-components';

export const Container = styled.div`
  background: #FFFEF0;
  height: 100vh;
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #F2EC54;
  padding: 16px 20px;
  font-size: 1.875rem;
  line-height: 2.8125rem;

  div {
    display: flex;
    align-items: center;
    gap: 1.25rem;

    img {
      height: 38px;
      width: 38px;
    }
  }
`;

export const BreweriesList = styled.main``;