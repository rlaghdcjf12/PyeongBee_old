import { useRef } from 'react';
import { Container, Row, Col, Badge } from 'react-bootstrap';
import styled from 'styled-components';
import Hexagon from '../../common/Hexagon.js';
import ProgressBar from 'react-bootstrap/ProgressBar';

const ListItem = (props) => {
  // const { title, list } = props;
  const hexagonRef = useRef();

  return (
    <ItemArea>
      <ImageArea ref={hexagonRef}>
        <Hexagon
          width={hexagonRef.width}
          height={hexagonRef.height}
          isRegular={false}
          border='solid 1px gold'
          image='https://media.istockphoto.com/vectors/yellow-honey-hive-with-cute-bees-hanging-on-a-tree-branch-vector-vector-id1248883563?s=612x612'
        ></Hexagon>
      </ImageArea>
      <InfoArea>
        <InfoTitle>
          <strong>발산역 독서모임 😍</strong>
        </InfoTitle>
        <InfoCondition>
          <ConditionBadge pill bg='primary'>
            남다른 각오
          </ConditionBadge>
          <ConditionBadge pill bg='success'>
            발산역
          </ConditionBadge>
          <ConditionBadge pill bg='secondary'>
            100% 환급
          </ConditionBadge>
          <ConditionBadge pill bg='secondary'>
            2주
          </ConditionBadge>
          <ConditionBadge pill bg='secondary'>
            10번
          </ConditionBadge>
        </InfoCondition>
        <InfoAir>
          <Col md='2'>분위기 :</Col>
          <Col md='10'>
            <ProgressBar
              variant='warning'
              now={60}
              animated
              label={<span style={{ fontSize: 'calc(1px + 2vmin)', color: 'saddleBrown' }}>보통</span>}
              style={{ height: '3vmin', margin: '5px 0 5px' }}
            />
          </Col>
        </InfoAir>
        <InfoPersonnel>
          <div className='itemTitle'>OOOOO 17명 / 25명</div>
        </InfoPersonnel>
      </InfoArea>
    </ItemArea>
  );
};

// styles
const ItemArea = styled.div`
  display: flex;
  width: 100%;
  max-height: 240px;
  /* background-color: lightyellow; */
  padding: 10px 0 10px;
`;
const ImageArea = styled.div`
  width: 20%;
  vertical-align: middle;
`;
const InfoArea = styled(Container)`
  width: 80%;
  padding-left: 10px;
  line-height: calc(10px + 3vmin);
  font-size: calc(1px + 2vmin);
`;
const InfoTitle = styled(Row)`
  font-size: calc(4px + 2vmin);
`;
const InfoCondition = styled.div``;
const ConditionBadge = styled(Badge)`
  margin-right: 0.8vmin;
`;
const InfoAir = styled(Row)`
  display: flex;
`;
const InfoPersonnel = styled(Row)``;
export default ListItem;
