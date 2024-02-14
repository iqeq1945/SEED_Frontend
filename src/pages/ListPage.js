import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import Banner from '../components/common/Banner';
import ListTemplate from '../components/list/ListTemplate';
import ListItem from '../components/list/ListItem';

const ListPage = () => {
  return (
    <>
      <HeaderContainer />
      <Banner />
      <ListTemplate>
        <ListItem />
      </ListTemplate>
    </>
  );
};

export default ListPage;
