import styled from 'styled-components';
// import CategoryTitleArea from './CategoryTitleArea.js';
// import CategoryItemArea from './CategoryItemArea.js';

const ListBlock = (props) => {
  const { title, list } = props;

  return (
    <BlockWrapper>
      <TitleArea>
        <span className='titleText'>모든 하이브</span>
      </TitleArea>
      <ListArea>
        <ItemArea>
          <ImageArea>
            <img
              width={'100%'}
              src='https://media.istockphoto.com/vectors/yellow-honey-hive-with-cute-bees-hanging-on-a-tree-branch-vector-vector-id1248883563?s=612x612'
              alt='hive'
            />
          </ImageArea>
          <InfoArea>
            <div className='row'>
              <div className='itemTitle'>발산역 독서모임 😍</div>
            </div>
            <div className='row'>
              <div className='col-3'>남다른 각오</div>
              <div className='col-3'>100% 환급</div>
              <div className='col-3'>2주</div>
              <div className='col-3'>10번</div>
            </div>
            <div className='row'>
              <div className='itemTitle'>활기찬</div>
            </div>
            <div className='row'>
              <div className='itemTitle'>OOOOO 17명 / 25명</div>
            </div>
          </InfoArea>
        </ItemArea>
        <ItemArea>
          <ImageArea>
            <img
              width={'100%'}
              src='https://media.istockphoto.com/vectors/yellow-honey-hive-with-cute-bees-hanging-on-a-tree-branch-vector-vector-id1248883563?s=612x612'
              alt='hive'
            />
          </ImageArea>
          <InfoArea>
            <div className='row'>
              <div className='itemTitle'>발산역 독서모임 😍</div>
            </div>
            <div className='row'>
              <div className='col-3'>남다른 각오</div>
              <div className='col-3'>100% 환급</div>
              <div className='col-3'>2주</div>
              <div className='col-3'>10번</div>
            </div>
            <div className='row'>
              <div className='itemTitle'>활기찬</div>
            </div>
            <div className='row'>
              <div className='itemTitle'>OOOOO 17명 / 25명</div>
            </div>
          </InfoArea>
        </ItemArea>
        <ItemArea>
          <ImageArea>
            <img
              width={'100%'}
              src='https://media.istockphoto.com/vectors/yellow-honey-hive-with-cute-bees-hanging-on-a-tree-branch-vector-vector-id1248883563?s=612x612'
              alt='hive'
            />
          </ImageArea>
          <InfoArea>
            <div className='row'>
              <div className='itemTitle'>발산역 독서모임 😍</div>
            </div>
            <div className='row'>
              <div className='col-3'>남다른 각오</div>
              <div className='col-3'>100% 환급</div>
              <div className='col-3'>2주</div>
              <div className='col-3'>10번</div>
            </div>
            <div className='row'>
              <div className='itemTitle'>활기찬</div>
            </div>
            <div className='row'>
              <div className='itemTitle'>OOOOO 17명 / 25명</div>
            </div>
          </InfoArea>
        </ItemArea>
        <ItemArea>
          <ImageArea>
            <img
              width={'100%'}
              src='https://media.istockphoto.com/vectors/yellow-honey-hive-with-cute-bees-hanging-on-a-tree-branch-vector-vector-id1248883563?s=612x612'
              alt='hive'
            />
          </ImageArea>
          <InfoArea>
            <div className='row'>
              <div className='itemTitle'>발산역 독서모임 😍</div>
            </div>
            <div className='row'>
              <div className='col-3'>남다른 각오</div>
              <div className='col-3'>100% 환급</div>
              <div className='col-3'>2주</div>
              <div className='col-3'>10번</div>
            </div>
            <div className='row'>
              <div className='itemTitle'>활기찬</div>
            </div>
            <div className='row'>
              <div className='itemTitle'>OOOOO 17명 / 25명</div>
            </div>
          </InfoArea>
        </ItemArea>
        <ItemArea>
          <ImageArea>
            <img
              width={'100%'}
              src='https://media.istockphoto.com/vectors/yellow-honey-hive-with-cute-bees-hanging-on-a-tree-branch-vector-vector-id1248883563?s=612x612'
              alt='hive'
            />
          </ImageArea>
          <InfoArea>
            <div className='row'>
              <div className='itemTitle'>발산역 독서모임 😍</div>
            </div>
            <div className='row'>
              <div className='col-3'>남다른 각오</div>
              <div className='col-3'>100% 환급</div>
              <div className='col-3'>2주</div>
              <div className='col-3'>10번</div>
            </div>
            <div className='row'>
              <div className='itemTitle'>활기찬</div>
            </div>
            <div className='row'>
              <div className='itemTitle'>OOOOO 17명 / 25명</div>
            </div>
          </InfoArea>
        </ItemArea>
        <ItemArea>
          <ImageArea>
            <img
              width={'100%'}
              src='https://media.istockphoto.com/vectors/yellow-honey-hive-with-cute-bees-hanging-on-a-tree-branch-vector-vector-id1248883563?s=612x612'
              alt='hive'
            />
          </ImageArea>
          <InfoArea>
            <div className='row'>
              <div className='itemTitle'>발산역 독서모임 😍</div>
            </div>
            <div className='row'>
              <div className='col-3'>남다른 각오</div>
              <div className='col-3'>100% 환급</div>
              <div className='col-3'>2주</div>
              <div className='col-3'>10번</div>
            </div>
            <div className='row'>
              <div className='itemTitle'>활기찬</div>
            </div>
            <div className='row'>
              <div className='itemTitle'>OOOOO 17명 / 25명</div>
            </div>
          </InfoArea>
        </ItemArea>
      </ListArea>
    </BlockWrapper>
  );
};

// styles
const BlockWrapper = styled.div`
  width: 90%;
  max-width: 800px;
  text-align: left;
  margin: 0 auto;
`;
const TitleArea = styled.strong`
  font-size: calc(10px + 2vmin);
  /* width: 30%; */
`;
const ListArea = styled.div`
  /* width: 70%; */
`;
const ItemArea = styled.div`
  display: flex;
  width: 100%;
  background-color: lightyellow;
`;
const ImageArea = styled.div`
  width: 30%;
`;
const InfoArea = styled.div`
  width: 70%;
`;

export default ListBlock;
