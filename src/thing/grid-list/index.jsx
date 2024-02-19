import React from 'react';
import styled from 'styled-components';

const StyledGridListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  padding: 10px;

  /* Add more media queries for larger screens if needed */
`;

const GridItem = styled.div`
  background-color: #f0f0f0;
  padding: 15px;
  border-radius: 5px;
  text-align: center;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const GridItemTitle = styled.h3`
  margin-top: 10px;
`;

const GridItemIcon = styled.div`
  font-size: 24px;
  margin-bottom: 10px;
`;

export const GridListDemo = () => {
  const items = [
    { title: 'Item 1', icon: '🚀' },
    { title: 'Item 2', icon: '📚' },
    { title: 'Item 3', icon: '💻' },
    { title: 'Item 4', icon: '🎨' },
    { title: 'Item 5', icon: '🎉' },
    { title: 'Item 6', icon: '🌟' },
  ];

  return (
    <div>
      <h1>Grid List Example</h1>
      <StyledGridListContainer>
        {items.map((item, index) => (
          <GridItem key={index}>
            <GridItemIcon>{item.icon}</GridItemIcon>
            <GridItemTitle>{item.title}</GridItemTitle>
          </GridItem>
        ))}
      </StyledGridListContainer>
    </div>
  );
};

export default GridList;
