import React from 'react';
import Editor from '../components/write/Editor';
import Responsive from '../components/common/Responsive';
import CategoryBox from '../components/write/CategoryBox';

const WritePage = () => {
  return (
    <Responsive>
      <Editor />
      <CategoryBox />
    </Responsive>
  );
};

export default WritePage;
