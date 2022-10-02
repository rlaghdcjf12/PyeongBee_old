import styled from 'styled-components';
import { useState } from 'react';
import CategoryBlock from '../../components/blocks/categoryBlock/CategoryBlock.js';
import ListBlock from '../../components/blocks/listBlock/ListBlock.js';
import { SelfCareCategoryList, HappyCategoryList } from '../../resources/database/categories.js';
import HiveList from '../../resources/database/hives.json';
import { Box } from '@mui/material';

const UsMain = () => {
  return (
    <div>
      <TopBlock>
        <TopTextArea>
          <strong>Bee House</strong>
          <p>다른 꿀벌들이 모여 있는 공간들을 둘러보세요</p>
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
      <CategoryBlock title='나를 가꾸는 둥지' categoryList={SelfCareCategoryList} />
      <CategoryBlock title='현재를 즐기는 둥지' categoryList={HappyCategoryList} />
      {/* <div>필터</div> */}
      <ListBlock title='모든 공간' itemList={HiveList} />
      {/* <ListBlock title='인기 하이브' />
      <ListBlock title='참여했던 하이브' />
      <ListBlock title='활기찬 하이브' />
      <ListBlock title='집에서 참여하는 하이브' /> */}
    </div>
  );
};

// styles
const TopBlock = styled(Box)`
  display: flex;
  width: 90%;
  max-width: 800px;
  max-height: 300px;
  margin: 10px auto;
  background-color: lightyellow;
`;
const TopTextArea = styled(Box)`
  width: 70%;
  text-align: left;
  font-size: calc(8px + 2vmin);
  background-color: white;
`;
const TopImageArea = styled(Box)`
  width: 30%;
`;
export default UsMain;
