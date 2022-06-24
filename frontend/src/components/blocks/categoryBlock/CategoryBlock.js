import CategoryTitleArea from './CategoryTitleArea.js';
import CategoryItemArea from './CategoryItemArea.js';

const CategoryBlock = (props) => {
  const { title, categoryList } = props;

  return (
    <>
      <CategoryTitleArea title={title} />
      <CategoryItemArea categoryList={categoryList} />
    </>
  );
};

export default CategoryBlock;
