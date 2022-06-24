import styled from 'styled-components';
import { useRef, useState } from 'react';
import _ from 'lodash';
import { Image } from 'react-bootstrap';

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
          <SlideItem key={idx}>
            <Image draggable={false} width='100%' roundedCircle='true' src={category.imagePath}></Image>
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
  padding-left: max(calc(50% - 400px), 5%);
`;
const SlideItem = styled.div`
  flex-shrink: 0;
  width: 23%;
  max-width: 200px;
`;
const Text = styled.p`
  text-align: center;
`;

export default CategorySlider;
