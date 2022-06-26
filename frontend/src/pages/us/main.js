import styled from 'styled-components';
import { useState } from 'react';
import CategoryBlock from '../../components/blocks/categoryBlock/CategoryBlock.js';
import ListBlock from '../../components/blocks/listBlock/ListBlock.js';

const UsMain = () => {
  const selfCareCategoryList = [
    {
      id: 1,
      title: '교양',
      url: './category/liberalarts',
      imagePath:
        'https://media.istockphoto.com/vectors/yellow-honey-hive-with-cute-bees-hanging-on-a-tree-branch-vector-vector-id1248883563?s=612x612',
    },
    {
      id: 2,
      title: '공부',
      url: './category/study',
      imagePath:
        'https://media.istockphoto.com/vectors/yellow-honey-hive-with-cute-bees-hanging-on-a-tree-branch-vector-vector-id1248883563?s=612x612',
    },
    {
      id: 3,
      title: '생활습관',
      url: './category/routine',
      imagePath:
        'https://media.istockphoto.com/vectors/yellow-honey-hive-with-cute-bees-hanging-on-a-tree-branch-vector-vector-id1248883563?s=612x612',
    },
    {
      id: 4,
      title: '정서',
      url: './category/emotion',
      imagePath:
        'https://media.istockphoto.com/vectors/yellow-honey-hive-with-cute-bees-hanging-on-a-tree-branch-vector-vector-id1248883563?s=612x612',
    },
    // {
    //   id: 5,
    //   title: '재테크',
    //   url: './category/finance',
    //   imagePath:
    //     'https://media.istockphoto.com/vectors/yellow-honey-hive-with-cute-bees-hanging-on-a-tree-branch-vector-vector-id1248883563?s=612x612',
    // },
    {
      id: 6,
      title: '선행',
      url: './category/beneficence',
      imagePath:
        'https://media.istockphoto.com/vectors/yellow-honey-hive-with-cute-bees-hanging-on-a-tree-branch-vector-vector-id1248883563?s=612x612',
    },
    // {
    //   id: 7,
    //   title: '뷰티',
    //   url: './category/beauty',
    //   imagePath:
    //     'https://media.istockphoto.com/vectors/yellow-honey-hive-with-cute-bees-hanging-on-a-tree-branch-vector-vector-id1248883563?s=612x612',
    // },
  ];
  const happyCategoryList = [
    {
      id: 1,
      title: '운동',
      url: './category/sports',
      imagePath:
        'https://media.istockphoto.com/vectors/yellow-honey-hive-with-cute-bees-hanging-on-a-tree-branch-vector-vector-id1248883563?s=612x612',
    },
    // {
    //   id: 2,
    //   title: '미디어',
    //   url: './category/media',
    //   imagePath:
    //     'https://media.istockphoto.com/vectors/yellow-honey-hive-with-cute-bees-hanging-on-a-tree-branch-vector-vector-id1248883563?s=612x612',
    // },
    {
      id: 3,
      title: '음악',
      url: './category/music',
      imagePath:
        'https://media.istockphoto.com/vectors/yellow-honey-hive-with-cute-bees-hanging-on-a-tree-branch-vector-vector-id1248883563?s=612x612',
    },
    {
      id: 4,
      title: '취미',
      url: './category/hobby',
      imagePath:
        'https://media.istockphoto.com/vectors/yellow-honey-hive-with-cute-bees-hanging-on-a-tree-branch-vector-vector-id1248883563?s=612x612',
    },
    // {
    //   id: 5,
    //   title: '게임',
    //   url: './category/game',
    //   imagePath:
    //     'https://media.istockphoto.com/vectors/yellow-honey-hive-with-cute-bees-hanging-on-a-tree-branch-vector-vector-id1248883563?s=612x612',
    // },
    // {
    //   id: 6,
    //   title: '반려동물',
    //   url: './category/pet',
    //   imagePath:
    //     'https://media.istockphoto.com/vectors/yellow-honey-hive-with-cute-bees-hanging-on-a-tree-branch-vector-vector-id1248883563?s=612x612',
    // },
    // {
    //   id: 7,
    //   title: '친목',
    //   url: './category/social',
    //   imagePath:
    //     'https://media.istockphoto.com/vectors/yellow-honey-hive-with-cute-bees-hanging-on-a-tree-branch-vector-vector-id1248883563?s=612x612',
    // },
  ];

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
      <CategoryBlock title='나를 가꾸는 하이브' categoryList={selfCareCategoryList} />
      <CategoryBlock title='현재를 즐기는 하이브' categoryList={happyCategoryList} />
      <div>필터</div>
      <ListBlock />
      {/* <div>인기 하이브</div>
      <div>마니또가 있는 하이브</div>
      <div>참여했던 하이브</div>
      <div>활기찬 하이브</div>
      <div>집에서 참여하는 하이브</div> */}
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
