import React from 'react';
import styled from 'styled-components';

const StyledStackedList = styled.div`
  width: 300px;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
`;

const ListItem = styled.div`
  background-color: #f0f0f0;
  margin-bottom: 5px;
  padding: 8px;
  border-radius: 3px;
`;

const StackedList = ({ items = [] }) => {
  return (
    <StyledStackedList>
      {items.map((item) => (
        <ListItem key={item.id}>
          <strong>{item.text}</strong>
          <p>Date: {item.date}</p>
          <p>ID: {item.id}</p>
        </ListItem>
      ))}
    </StyledStackedList>
  );
};

export const DemoStackedList = () => {
  const items = [
    { text: 'Item 1', date: '2024-02-19', id: 1 },
    { text: 'Item 2', date: '2024-02-20', id: 2 },
    { text: 'Item 3', date: '2024-02-21', id: 3 },
  ];

  return (
    <div>
      <h1>Stacked List Example</h1>
      <StackedList items={items} />
    </div>
  );
};

export default StackedList;
