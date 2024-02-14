import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';
import Responsive from '../common/Responsive';

const CategoryBlock = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CategoryButtons = styled(Responsive)`
  display: flex;
  padding: 0;
`;

const CategoryButton = styled(Button)`
  & + & {
    margin-left: 12px;
  }
`;

const BookItemListBlock = styled(Responsive)`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin-top: 50px;
`;

const BookItemBlock = styled.div`
  display: flex;
  border-radius: 4px;
  border: 1px solid;
  width: 80%;
`;

const ListItem = () => {
  return (
    <>
      <CategoryBlock>
        <CategoryButtons>
          <CategoryButton>전체</CategoryButton>
          <CategoryButton>판타지</CategoryButton>
          <CategoryButton>무협</CategoryButton>
          <CategoryButton>드라마</CategoryButton>
        </CategoryButtons>
      </CategoryBlock>
      <BookItemListBlock>
        <BookItemBlock>
          <img src="" alt="예시" />
          <div>
            <h2>제목</h2>
            <h3>작가</h3>
            <div>
              <span>조회수</span>/<span>좋아요수</span>/<span>화수/</span>
            </div>
          </div>
          <div>업데이트</div>
        </BookItemBlock>
        <BookItemBlock>
          <img src="" alt="예시" />
          <div>
            <h2>제목</h2>
            <h3>작가</h3>
            <div>
              <span>조회수</span>/<span>좋아요수</span>/<span>화수/</span>
            </div>
          </div>
          <div>업데이트</div>
        </BookItemBlock>
      </BookItemListBlock>
    </>
  );
};

export default ListItem;
