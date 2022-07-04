import { Container, Row, Col, Badge } from 'react-bootstrap';
import styled, { css } from 'styled-components';
import Hexagon from '../../common/Hexagon.js';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { useNavigate } from 'react-router-dom';
import { MdOutlineLocationOn } from 'react-icons/md';

const ListItem = ({ item }) => {
  const navigate = useNavigate();

  const goDetail = () => {
    navigate('./detail/' + item.id);
  };

  const computedAir = () => {
    if (item?.air > 80) {
      return { variant: 'danger', title: '활기참', color: 'white' };
    } else if (item?.air > 30) {
      return { variant: 'warning', title: '보통', color: 'saddleBrown' };
    } else {
      return { variant: 'info', title: '차분함', color: 'white' };
    }
  };

  return (
    <ItemArea onClick={goDetail} fluid>
      <ItemWrapper>
        <ImageArea xs={4} md={3}>
          <Hexagon image={item.images[0]} width={25} height={25} unit='vmin' border='1px gold'></Hexagon>
        </ImageArea>
        <InfoArea xs={8} md={9}>
          <InfoTitle>
            <SimpleCol xs={7}>
              <strong>{item.title}</strong>
            </SimpleCol>
            <SimpleCol
              style={{
                fontSize: 'calc(2px + 2vmin)',
              }}
            >
              <MdOutlineLocationOn />
              {item.location}
            </SimpleCol>
          </InfoTitle>
          <InfoAir>
            <Col xs={3} style={{ paddingRight: '0px' }}>
              분위기
            </Col>
            <Col xs={9}>
              <ProgressBar
                variant={computedAir().variant}
                now={item.air}
                animated
                label={
                  <span style={{ fontSize: 'calc(1px + 2vmin)', color: computedAir().color }}>
                    {computedAir().title}
                  </span>
                }
                style={{ height: '3vmin', margin: '5px 0 5px' }}
              />
            </Col>
          </InfoAir>
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
const shortText = css`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
const ItemArea = styled(Container)`
  width: 100%;
  padding: 1vmin 1vmin;
  margin-bottom: 1vmin;
  &:hover {
    background-color: lightyellow;
    border-radius: 2.5vmin;
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
  padding: 0 2vmin;
  font-size: min(21px, 2.5vmin);
  text-align: left;
`;
const SimpleCol = styled(Col)`
  ${shortText};
`;
const InfoTitle = styled(Row)`
  font-size: min(25px, 2.7vmin);
  margin-right: 0;
`;
const InfoCondition = styled.div``;
const ConditionBadge = styled(Badge)`
  margin-right: 0.8vmin;
`;
const InfoAir = styled(Row)`
  margin-right: 0;
`;
const InfoPersonnel = styled(Row)`
  margin-right: 0;
`;
export default ListItem;
