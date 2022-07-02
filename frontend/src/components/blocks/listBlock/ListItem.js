import { useRef } from 'react';
import { Container, Row, Col, Badge } from 'react-bootstrap';
import styled from 'styled-components';
import Hexagon from '../../common/Hexagon.js';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { useNavigate } from 'react-router-dom';

const ListItem = ({ item }) => {
  const hexagonRef = useRef();
  const navigate = useNavigate();

  const goDetail = () => {
    navigate('./detail/' + item.id);
  };

  return (
    <ItemArea onClick={goDetail} fluid>
      <ItemWrapper>
        <ImageArea ref={hexagonRef} xs={4}>
          <Hexagon
            isRegular={false}
            image={item.images[0]}
            width={25}
            height={25}
            // width={hexagonRef?.current?.width}
            // height={hexagonRef?.current?.height}
            unit={'vmin'}
            border='1px gold'
          ></Hexagon>
        </ImageArea>
        <InfoArea xs={8}>
          <InfoTitle>
            <strong>{item.title}</strong>
          </InfoTitle>
          <InfoCondition>
            <ConditionBadge pill bg='primary'>
              남다른 각오
            </ConditionBadge>
            {/* <ConditionBadge pill bg='success'>
              {item.location}
            </ConditionBadge>
            <ConditionBadge pill bg='secondary'>
              {item.refundRate}% 환급
            </ConditionBadge> */}
            {/* <ConditionBadge pill bg='secondary'>
              {item.period}주
            </ConditionBadge>
            <ConditionBadge pill bg='secondary'>
              {item.condition}번
            </ConditionBadge> */}
          </InfoCondition>
          <InfoAir>
            <Col xs='3' style={{ paddingRight: '0px' }}>
              분위기
            </Col>
            <Col xs='9'>
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
          <InfoPersonnel>
            <div className='itemTitle'>OOOOO 17명 / 25명</div>
          </InfoPersonnel>
        </InfoArea>
      </ItemWrapper>
    </ItemArea>
  );
};

// styles
const ItemArea = styled(Container)`
  width: 100%;
  padding: 1vmin 1vmin;
  margin-bottom: 1vmin;
  &:hover {
    background-color: lightyellow;
    border-radius: 30px;
  }
`;
const ItemWrapper = styled(Row)`
  width: 100%;
  margin: 0 auto;
`;
const ImageArea = styled(Col)`
  padding: 0;
`;
const InfoArea = styled(Col)`
  line-height: min(36px, 5vmin);
  font-size: min(21px, 2.5vmin);
  padding-right: 0;
  padding-left: calc(1px + 2vmin);
`;
const InfoTitle = styled(Row)`
  font-size: min(25px, 2.7vmin);
`;
const InfoCondition = styled.div``;
const ConditionBadge = styled(Badge)`
  margin-right: 0.8vmin;
`;
const InfoAir = styled(Row)`
  /* display: flex; */
`;
const InfoPersonnel = styled(Row)`
  /* display: flex; */
`;
export default ListItem;
