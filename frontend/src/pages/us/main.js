import styled from 'styled-components';

const UsMain = () => {
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
          ></img>
        </TopImageArea>
      </TopBlock>
    </div>
  );
};

// styles
const TopBlock = styled.div`
  display: flex;
  width: 80%;
  max-width: 720px;
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
