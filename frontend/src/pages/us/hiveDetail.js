import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import hives from '../../temp/database/hives.json';
import DetailBlock from '../../components/blocks/detailBlock/DetailBlock.js';
import Carousel from '../../components/common/Carousel.js';
import Hexagon from '../../components/common/Hexagon.js';
import { HappyCategoryList, SelfCareCategoryList } from '../../temp/database/categories.js';
import { Alert, Col, Row } from 'react-bootstrap';
import { MdStar } from 'react-icons/md';
import TitleArea from '../../components/common/TitleArea.js';

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
        <Carousel itemList={hive?.images} />
      </ImageArea>
      <IntroArea>
        <CategoryArea>
          <LogoArea>
            <Hexagon image={category?.imagePath} width={6.5} height={6.5} unit='vmin' border={'1px gold'}>
              {hive.title}
            </Hexagon>
          </LogoArea>
          <TextArea>{hive.title}</TextArea>
        </CategoryArea>
        <Row style={{ marginBottom: '20px' }}>
          <Col style={{ textAlign: 'center', fontSize: '20px', borderRight: '1px solid gold' }}>
            <Row style={{ marginBottom: '10px' }}>
              <Col>
                <MdStar /> 4.5
              </Col>
            </Row>
            <Row>
              <Col>최근 3달 평균</Col>
            </Row>
          </Col>
          <Col style={{ textAlign: 'center', fontSize: '20px', borderRight: '1px solid gold' }}>
            <Row style={{ marginBottom: '10px' }}>
              <Col>4주</Col>
            </Row>
            <Row>
              <Col>20번</Col>
            </Row>
          </Col>
          <Col style={{ textAlign: 'center', fontSize: '20px', borderRight: '1px solid gold' }}>
            <Row style={{ marginBottom: '10px' }}>
              <Col>등급</Col>
            </Row>
            <Row>
              <Col>남다른 각오</Col>
            </Row>
          </Col>
          <Col style={{ textAlign: 'center', fontSize: '20px' }}>
            <Row style={{ marginBottom: '10px' }}>
              <Col>운영비</Col>
            </Row>
            <Row>
              <Col>3 밀랍</Col>
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
        <Row>
          <TitleArea title='하이브에 대해서'></TitleArea>
        </Row>
        <Row>
          <TitleArea title='방장에 대해서'></TitleArea>
        </Row>
        <Row>
          <TitleArea title='함께하는 사람들'></TitleArea>
        </Row>
        <Row>
          <TitleArea title='다른 추천 하이브'></TitleArea>
        </Row>
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
