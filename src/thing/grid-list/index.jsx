import React from 'react';
import {
  StyledGridListContainer,
  GridItem,
  GridItemIcon,
  GridItemTitle,
} from './style';

export const GridListDemo = () => {
  const items = [
    { title: 'Item 1', icon: '🚀' },
    { title: 'Item 2', icon: '📚' },
    { title: 'Item 3', icon: '💻' },
    { title: 'Item 4', icon: '🎨' },
    { title: 'Item 5', icon: '🎉' },
    { title: 'Item 6', icon: '🌟' },
    { title: 'Item 7', icon: '🚀' },
    { title: 'Item 8', icon: '📚' },
    { title: 'Item 9', icon: '💻' },
    { title: 'Item 10', icon: '🎨' },
    { title: 'Item 11', icon: '🎉' },
    { title: 'Item 12', icon: '🌟' },
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
