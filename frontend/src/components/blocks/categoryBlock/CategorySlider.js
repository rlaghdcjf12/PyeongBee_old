import { useRef, useState } from 'react';
import { Image } from 'react-bootstrap';
import styled from 'styled-components';
import Hexagon from '../../common/Hexagon.js';
import _ from 'lodash';

// TODO : 모바일 웹 터치 동작 구현할 것.

const CategorySlider = (props) => {
  const { categoryList } = props;

  const scrollRef = useRef(null);

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState();

  const handleDragStart = (e) => {
    e.preventDefault();
    setIsDragging(true);
    setStartX(e.pageX + scrollRef.current.scrollLeft);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  const handleDragMove = (e) => {
    if (isDragging) {
      scrollRef.current.scrollLeft = startX - e.pageX;
    }
  };

  const delay = 15;
  const handleThrottleDragMove = _.throttle(handleDragMove, delay);

  return (
    <Slider
      onMouseDown={handleDragStart}
      onMouseMove={handleThrottleDragMove}
      onMouseUp={handleDragEnd}
      onMouseLeave={handleDragEnd}
      ref={scrollRef}
    >
      {categoryList?.map((category, idx) => {
        return (
          <SlideItem key={idx} style={{ marginRight: '1.5vmin' }}>
            <Hexagon image={category.imagePath} border='solid 1px gold' />
            <Text>{category.title}</Text>
          </SlideItem>
        );
      })}
    </Slider>
  );
};

const Slider = styled.div`
  display: flex;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  /* padding-left: max(calc(50% - 400px), 5%); */
  padding-left: 5%;
`;
const SlideItem = styled.div`
  flex-shrink: 0;
  width: 26%;
  max-width: 200px;
`;
const Text = styled.span`
  font-size: calc(4px + 2vmin);
  text-align: center;
`;

export default CategorySlider;
