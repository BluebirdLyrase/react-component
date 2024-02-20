import styled from 'styled-components';

export const StackedListContainer = styled.div`
  overflow: hidden;
  padding: 10px;
`;

export const ListItem = styled.div`
  background-color: ${({ bgColor }) => bgColor || `#f0f0f0`};
  margin-bottom: 5px;
  padding: 10px;
  border-radius: 8px 8px 8px 8px;
`;

export const ItemTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 2px;
`;

export const ItemDetail = styled.p`
  margin: 0;
`;

export const ButtonContainer = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  width: 20%;
`;
