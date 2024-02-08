import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const CategoryBoxBlock = styled.div`
  width: 100%;
  border-top: 0;
  border-bottom: 0.5rem;

  h4 {
    color: ${palette.gray[8]};
    margin-top: 0;
    margin-bottom: 0.5rem;
  }
`;

const CategoryForm = styled.form`
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  width: 250px;
  border: 1px solid ${palette.gray[9]};
  input,
  button {
    outline: none;
    border: none;
    font-size: 1rem;
  }

  input {
    padding: 0.5rem;
    flex: 1;
    min-width: 0;
  }

  button {
    cursor: poinger;
    padding-right: 1rem;
    padding-left: 1rem;
    border: none;
    background: ${palette.gray[8]};
    color: white;
    font-weight: bold;
    &:hover {
      background: ${palette.gray[6]};
    }
  }
`;

const Category = styled.div`
  margin-right: 0.5rem;
  color: ${palette.gray[6]};
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;

const CategoryListBlock = styled.div`
  display: flex;
  margin-top: 0.5rem;
`;
const CategoryItem = React.memo(({ category }) => (
  <Category>#{category}</Category>
));
const CategoryList = React.memo(({ categories }) => (
  <CategoryListBlock>
    {categories.map((category) => (
      <CategoryItem key={category} category={category} />
    ))}
  </CategoryListBlock>
));

const CategoryBox = () => {
  return (
    <CategoryBoxBlock>
      <h4>카테고리</h4>
      <CategoryForm>
        <input placeholder="카테고리 입력" />
        <button type="submit">추가</button>
      </CategoryForm>
      <CategoryList categories={['판타지', '무협', '로맨스']} />
    </CategoryBoxBlock>
  );
};

export default CategoryBox;
