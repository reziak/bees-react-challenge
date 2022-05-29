import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100%;
  height: fit-content;
  background: #FFFEF0;
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
  padding: 98px 40px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  
  @media (max-width: 891px) {
    justify-content: center;
  }

  @media (min-width: 892px) {
    max-width: 892px;
  }
  
  @media (min-width: 1322px) {
    max-width: 1322px;
  }
`;