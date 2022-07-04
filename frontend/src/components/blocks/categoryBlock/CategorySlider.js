import { useRef, useState } from 'react';
import { Image } from 'react-bootstrap';
import styled from 'styled-components';
import Hexagon from '../../common/Hexagon.js';
import _ from 'lodash';

// TODO : 모바일 웹 터치 슬라이드 동작 구현할 것.

const CategorySlider = ({ categoryList }) => {
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
      itemCount={categoryList.length}
      onMouseDown={handleDragStart}
      onMouseMove={handleThrottleDragMove}
      onMouseUp={handleDragEnd}
      onMouseLeave={handleDragEnd}
      ref={scrollRef}
    >
      {categoryList?.map((category, idx) => {
        return (
          <SlideItem key={idx}>
            <Hexagon image={category.imagePath} width={25} height={25} unit='vmin' border='1px gold' />
            <Text>{category.title}</Text>
          </SlideItem>
        );
      })}
    </Slider>
  );
};

// TODO : 카테고리쪽도 vmin으로 단위 통일해서 맞출 것.

const Slider = styled.div`
  display: flex;
  white-space: nowrap;
  overflow: hidden;
  padding-left: max(calc(50% - ${(props) => props.itemCount * 100}px - ${(props) => props.itemCount - 1}vmin), 5%);
`;
const SlideItem = styled.div`
  flex-shrink: 0;
  width: 25vmin;
  max-width: 200px;
  margin-right: 2vmin;
`;
const Text = styled.span`
  font-size: calc(4px + 2vmin);
`;

export default CategorySlider;
