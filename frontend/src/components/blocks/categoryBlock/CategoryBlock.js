import CategoryTitleArea from './CategoryTitleArea.js';
import CategoryItemArea from './CategoryItemArea.js';
import styled from 'styled-components';

const CategoryBlock = ({ title, categoryList }) => {
  return (
    <CateBlock>
      <CategoryTitleArea title={title} />
      <CategoryItemArea categoryList={categoryList} />
    </CateBlock>
  );
};

const CateBlock = styled.div``;

export default CategoryBlock;
