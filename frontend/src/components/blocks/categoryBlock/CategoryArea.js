import styled from 'styled-components';
import CategorySlider from './CategorySlider.js';

const CategoryItemArea = ({ categoryList }) => {
  return (
    <Container>
      <CategorySlider categoryList={categoryList}></CategorySlider>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  margin-bottom: 10px;
`;

export default CategoryItemArea;
