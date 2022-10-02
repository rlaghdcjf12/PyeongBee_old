import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import hives from '../../resources/database/hives.json';
import DetailBlock from '../../components/blocks/detailBlock/DetailBlock.js';
import Carousel from '../../components/common/Carousel.js';
import Hexagon from '../../components/common/Hexagon.js';
import { HappyCategoryList, SelfCareCategoryList } from '../../resources/database/categories.js';
import { Alert, Col, Row } from 'react-bootstrap';
import { MdStar } from 'react-icons/md';
import TitleArea from '../../components/common/TitleArea.js';
import { getUser } from 'resources/database/users.js';

const HiveDetail = () => {
  const { id } = useParams();
  const hive = hives.find((h) => h.id === Number(id));
  const category =
    HappyCategoryList.find((cate) => cate.title === hive.category) ??
    SelfCareCategoryList.find((cate) => cate.title === hive.category);

  console.log(hive.category, HappyCategoryList, SelfCareCategoryList, category);
  return (
    <DetailBlock isTitle={false}>
      <ImageArea>
        <Carousel itemList={hive?.images} interval={2000} />
      </ImageArea>
      <IntroArea>
        <CategoryArea>
          <LogoArea>
            <Hexagon image={category?.imagePath} width={6.5} height={6.5} unit='vmin' border={'1px gold'} />
          </LogoArea>
          <TextArea>{hive.title}</TextArea>
        </CategoryArea>
        <Row style={{ marginBottom: '4vmin' }}>
          <Col
            style={{
              textAlign: 'center',
              fontSize: 'calc(12px + 1vmin)',
              borderRight: '1px solid gold',
            }}
          >
            <Row style={{ marginBottom: '10px' }}>
              <Col>매니저</Col>
            </Row>
            <Row>
              <Col style={{ fontSize: 'calc(10px + 1vmin)' }}>{getUser(hive.manager).name}</Col>
            </Row>
          </Col>
          <Col
            style={{
              textAlign: 'center',
              fontSize: 'calc(12px + 1vmin)',
              borderRight: '1px solid gold',
            }}
          >
            <Row style={{ marginBottom: '10px' }}>
              <Col>인원</Col>
            </Row>
            <Row>
              <Col>
                {hive.currentCount}/{hive.maxCount}명
              </Col>
            </Row>
          </Col>
          <Col
            style={{
              textAlign: 'center',
              fontSize: 'calc(12px + 1vmin)',
              borderRight: '1px solid gold',
            }}
          >
            <Row style={{ marginBottom: '10px' }}>
              <Col>보상</Col>
            </Row>
            <Row>
              <Col style={{ fontSize: 'calc(12px + 0.5vmin)' }}>O</Col>
            </Row>
          </Col>
          <Col style={{ textAlign: 'center', fontSize: 'calc(12px + 1vmin)' }}>
            <Row style={{ marginBottom: '10px' }}>
              <Col>장소</Col>
            </Row>
            <Row>
              <Col>{hive.location}</Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Alert variant='warning'>
            1. This is a alert—check it out!
            <br />
            2. This is a alert—check it out!
            <br />
            3. This is a alert—check it out!
          </Alert>
        </Row>
        <Row>{hive.description}</Row>
        <Row>
          <TitleArea title='함께하는 챌린지'></TitleArea>
          <Row style={{ marginBottom: '10px', paddingLeft: '5%' }}>
            필수 챌린지, 선택 챌린지
            <br />
            <br />
            국회나 그 위원회의 요구가 있을 때에는 국무총리·국무위원 또는 정부위원은 출석·답변하여야 하며, 국무총리 또는
            국무위원이 출석요구를 받은 때에는 국무위원 또는 정부위원으로 하여금 출석·답변하게 할 수 있다. <br />
            <br />
            공무원은 국민전체에 대한 봉사자이며, 국민에 대하여 책임을 진다. 모든 국민은 법률이 정하는 바에 의하여
            공무담임권을 가진다. 대한민국은 국제평화의 유지에 노력하고 침략적 전쟁을 부인한다. <br />
            <br />
            명령·규칙 또는 처분이 헌법이나 법률에 위반되는 여부가 재판의 전제가 된 경우에는 대법원은 이를 최종적으로
            심사할 권한을 가진다. 대법원장과 대법관이 아닌 법관의 임기는 10년으로 하며, 법률이 정하는 바에 의하여 연임할
            수 있다.
          </Row>
        </Row>
        <Row>
          <TitleArea title='하이브에 대해서'></TitleArea>
          <Row style={{ marginBottom: '10px', paddingLeft: '5%' }}>
            국회나 그 위원회의 요구가 있을 때에는 국무총리·국무위원 또는 정부위원은 출석·답변하여야 하며, 국무총리 또는
            국무위원이 출석요구를 받은 때에는 국무위원 또는 정부위원으로 하여금 출석·답변하게 할 수 있다. <br />
            <br />
            공무원은 국민전체에 대한 봉사자이며, 국민에 대하여 책임을 진다. 모든 국민은 법률이 정하는 바에 의하여
            공무담임권을 가진다. 대한민국은 국제평화의 유지에 노력하고 침략적 전쟁을 부인한다. <br />
            <br />
            명령·규칙 또는 처분이 헌법이나 법률에 위반되는 여부가 재판의 전제가 된 경우에는 대법원은 이를 최종적으로
            심사할 권한을 가진다. 대법원장과 대법관이 아닌 법관의 임기는 10년으로 하며, 법률이 정하는 바에 의하여 연임할
            수 있다.
          </Row>
        </Row>
        <Row>
          <TitleArea title='방장에 대해서'></TitleArea>
          <Row style={{ marginBottom: '10px', paddingLeft: '5%' }}>
            국가는 건전한 소비행위를 계도하고 생산품의 품질향상을 촉구하기 위한 소비자보호운동을 법률이 정하는 바에
            의하여 보장한다. 행정각부의 설치·조직과 직무범위는 법률로 정한다. 재산권의 행사는 공공복리에 적합하도록
            하여야 한다.
          </Row>
        </Row>
        <Row>
          <TitleArea title='함께하는 사람들'></TitleArea>
        </Row>
        {/* <Row>
          <TitleArea title='다른 추천 하이브'></TitleArea>
        </Row> */}
        맨 밑에 참여하기 버튼 플로팅되게. 맨 아래에선 플로팅이 아니라 페이지에 박히고.
      </IntroArea>
    </DetailBlock>
  );
};

// styles
const ImageArea = styled.div`
  width: 100vw;
  height: 56.25vw;
  max-width: 800px;
  max-height: 450px;
  margin: 0 auto 10px;
`;
const IntroArea = styled.div`
  /* display: flex; */
  width: 90vw;
  max-width: 720px;
  margin: 0 auto;
  /* background-color: red; */
  text-align: left;
`;
const CategoryArea = styled.strong`
  display: flex;
  margin-bottom: 2vmin;
`;
const LogoArea = styled.div`
  width: 8vmin;
  height: 7vmin;
  padding: calc(0.25vmin - 1px) 0;
`;
const TextArea = styled.strong`
  line-height: 7vmin;
  padding-left: 1vmin;
  font-size: calc(5px + 3vmin);
`;
const SummaryArea = styled.div`
  height: 10vmin;
`;

export default HiveDetail;
