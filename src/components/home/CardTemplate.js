import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';

const CardTemplateBlock = styled(Responsive)`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  width: 100%;
`;

const CardItemTemplateBlock = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  margin-bottom: 40px;
`;

const CardItemListBlock = styled.div`
  display: flex;
  justify-content: center;
`;

const CardTemplate = ({ children }) => {
  return (
    <CardTemplateBlock>
      <CardItemTemplateBlock>
        <h3>title</h3>
        <CardItemListBlock>{children}</CardItemListBlock>
      </CardItemTemplateBlock>
      <CardItemTemplateBlock>
        <h3>title</h3>
        <CardItemListBlock>{children}</CardItemListBlock>
      </CardItemTemplateBlock>
    </CardTemplateBlock>
  );
};

export default CardTemplate;
