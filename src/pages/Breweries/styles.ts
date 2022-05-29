import styled from 'styled-components';

export const Container = styled.div`
  background: #FFFEF0;
  height: 100vh;
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  background: #F2EC54;
  padding: 16px 20px;
  font-size: 1.875rem;
  line-height: 2.8125rem;

  div {
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    button {
      background: transparent;
      display: flex;
      align-items: center;
      font-size: 1.875rem;
      gap: 1.25rem;
      
      img {
        height: 38px;
        width: 38px;
      }
    }
  }
`;

export const BreweriesList = styled.main`
  width: 100%;
  max-width: 1440px;
  margin: 98px auto 0;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  gap: 48px;
`;