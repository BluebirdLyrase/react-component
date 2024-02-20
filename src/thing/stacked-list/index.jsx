import React from 'react';
import {
  ButtonContainer,
  ItemDetail,
  ItemTitle,
  ListItem,
  StackedListContainer,
} from './style';

export const DemoStackedList = () => {
  const items = [
    {
      name: 'นางสาวเจน โดว (เจน)',
      section: '123 Main St',
      department: '555-1234',
    },
    {
      name: 'นายจอน โดว',
      section: '456 Oak St',
      department: '555-5678',
    },
    // Add more items as needed
  ];

  return (
    <div>
      <h1>Stacked List Example</h1>
      <StackedListContainer>
        {items.map((item, index) => (
          <ListItem
            key={index}
            onClick={() => onItemClick && onItemClick(item)}
          >
            <div style={{ display: 'flex' }}>
              <div style={{ width: '80%' }}>
                <ItemTitle>{item.name}</ItemTitle>
                <ItemDetail>ฝ่ายงาน : {item.section}</ItemDetail>
                <ItemDetail>แผนก : {item.department}</ItemDetail>
              </div>
              <ButtonContainer>
                <button>TEST</button>
              </ButtonContainer>
            </div>
          </ListItem>
        ))}
      </StackedListContainer>
    </div>
  );
};
