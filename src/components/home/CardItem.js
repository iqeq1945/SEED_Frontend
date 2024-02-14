import React from 'react';
import styled from 'styled-components';

const StyleCardItem = styled.div`
  display: flex;
  align-items: end;
  width: 200px;
  height: 280px;
  border: 1px solid;
  span {
    color: black;
  }
  & + & {
    margin-left: 3%;
  }
`;

const CardItem = () => {
  return (
    <StyleCardItem>
      <span>title</span>
    </StyleCardItem>
  );
};

export default CardItem;
