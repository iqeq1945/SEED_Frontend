import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';
const ListTemplateBlock = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20%;
  margin: 50px auto;
`;

const ListTemplate = ({ children }) => {
  return <ListTemplateBlock>{children}</ListTemplateBlock>;
};

export default ListTemplate;
