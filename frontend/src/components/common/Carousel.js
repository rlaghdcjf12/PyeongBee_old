import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import styled from 'styled-components';

const ControlledCarousel = ({ itemList, interval, fade = false }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} fade={fade}>
      {itemList?.map((item) => (
        <Item interval={interval}>
          <Image className='d-block w-100' src={item} alt='First slide' draggable={false} />
          {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Item>
      ))}
    </Carousel>
  );
};

// styles
const Item = styled(Carousel.Item)`
  width: 100vw;
  height: 56.25vw;
  max-width: 800px;
  max-height: 450px;
  /* margin: 0 auto; */
`;
const Image = styled.img`
  object-fit: cover;
  height: 100%;
`;

export default ControlledCarousel;
