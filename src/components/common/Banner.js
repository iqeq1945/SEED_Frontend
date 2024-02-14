import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
//import palette from '../../lib/styles/palette';

const Banner = () => {
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShows: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className="slider-container">
      <StyledSlider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
      </StyledSlider>
    </div>
  );
};

const StyledSlider = styled(Slider)`
  .slick-list {
    height: 280px;
  }
  .slick-dots {
    display: flex;
    justify-content: center;
    color: black;

    li button:before {
      color: black;
    }

    li.slick-active button:before {
      color: black;
    }
  }
`;

export default Banner;
