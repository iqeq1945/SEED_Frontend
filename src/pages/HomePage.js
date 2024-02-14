import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import Banner from '../components/common/Banner';
import CardTemplate from '../components/home/CardTemplate';
import CardItem from '../components/home/CardItem';
const HomePage = () => {
  return (
    <>
      <HeaderContainer />
      <Banner />
      <CardTemplate>
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
      </CardTemplate>
    </>
  );
};
export default HomePage;
