import BlockWrapper from '../../common/BlockWrapper.js';
import CategoryArea from './CategoryArea.js';

const CategoryBlock = ({ title, categoryList }) => {
  return (
    <BlockWrapper title={title}>
      <CategoryArea categoryList={categoryList} />
    </BlockWrapper>
  );
};

export default CategoryBlock;
