import styled from 'styled-components';
import { useState } from 'react';
import CategoryBlock from '../../components/blocks/categoryBlock/CategoryBlock.js';
import ListBlock from '../../components/blocks/listBlock/ListBlock.js';
import {
  SelfCareCategoryList,
  HappyCategoryList,
} from '../../temp/database/categories.js';
import HiveList from '../../temp/database/hives.json';

const UsMain = () => {
  const selfCareCategoryList = SelfCareCategoryList;
  const happyCategoryList = HappyCategoryList;

  return (
    <div>
      <TopBlock>
        <TopTextArea>
          <strong>하이브</strong>
          <p>다른 꿀벌들이 모여 있는 하이브를 둘러보세요</p>
        </TopTextArea>
        <TopImageArea>
          <img
            width={'100%'}
            draggable='false'
            src='https://media.istockphoto.com/vectors/yellow-honey-hive-with-cute-bees-hanging-on-a-tree-branch-vector-vector-id1248883563?s=612x612'
            alt='bee hive'
          />
        </TopImageArea>
      </TopBlock>
      <CategoryBlock
        title='나를 가꾸는 하이브'
        categoryList={selfCareCategoryList}
      />
      <CategoryBlock
        title='현재를 즐기는 하이브'
        categoryList={happyCategoryList}
      />
      {/* <div>필터</div> */}
      <ListBlock title='모든 하이브' itemList={HiveList} />
      {/* <ListBlock title='인기 하이브' />
      <ListBlock title='참여했던 하이브' />
      <ListBlock title='활기찬 하이브' />
      <ListBlock title='집에서 참여하는 하이브' /> */}
    </div>
  );
};

// styles
const TopBlock = styled.div`
  display: flex;
  width: 90%;
  max-width: 800px;
  max-height: 300px;
  margin: 0 auto;
  background-color: lightyellow;
`;
const TopTextArea = styled.div`
  width: 70%;
  text-align: left;
  font-size: calc(8px + 2vmin);
  background-color: white;
`;
const TopImageArea = styled.div`
  width: 30%;
`;
export default UsMain;
