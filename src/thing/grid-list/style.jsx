import styled from 'styled-components';

export const StyledGridListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 10px;
  /* Add more media queries for larger screens if needed */
`;

export const GridItem = styled.div`
  background-color: #f0f0f0;
  padding: 15px;
  border-radius: 5px;
  text-align: center;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

export const GridItemTitle = styled.h3`
  margin-top: 10px;
`;

export const GridItemIcon = styled.div`
  font-size: 24px;
  margin-bottom: 10px;
`;
