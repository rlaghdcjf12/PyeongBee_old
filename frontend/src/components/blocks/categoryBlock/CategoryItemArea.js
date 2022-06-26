import styled from 'styled-components';
import CategorySlider from './CategorySlider.js';

const CategoryItemArea = (props) => {
  const { categoryList } = props;

  return (
    <Container>
      <CategorySlider categoryList={categoryList}></CategorySlider>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  /* max-width: 800px; */
  max-block-size: calc(800px);
  margin: 0 auto 10px;
`;

export default CategoryItemArea;
