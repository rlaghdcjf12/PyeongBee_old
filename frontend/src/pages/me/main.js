import { Alert, Card } from 'react-bootstrap';
import Image from 'react-bootstrap/esm/Image.js';
import styled from 'styled-components';
import Hexagon from '../../components/common/Hexagon.js';

const MeMain = () => {
  const activityCheckList = [
    { day: 'sun', count: 4 },
    { day: 'mon', count: 2 },
    { day: 'tue', count: 3 },
    { day: 'wed', count: 7 },
    { day: 'thu', count: 2 },
    { day: 'fri', count: 4 },
    { day: 'sat', count: 4 },
    { day: 'sun', count: 4 },
    { day: 'mon', count: 3 },
    { day: 'tue', count: 7 },
    { day: 'wed', count: 1 },
    { day: 'thu', count: 1 },
    { day: 'fri', count: 5 },
    { day: 'sat', count: 2 },
    { day: 'sun', count: 3 },
    { day: 'mon', count: 2 },
    { day: 'tue', count: 1 },
    { day: 'wed', count: 5 },
    { day: 'thu', count: 3 },
    { day: 'fri', count: 4 },
    { day: 'sat', count: 3 },
  ];

  let activityWeekList = [];

  activityCheckList.map((act) => {
    var weekCount = 0;
    if (act.day === 'sun') {
      const week = [];
      week.push(act);
      weekCount += 1;
    }
  });

  return (
    <>
      <Profile>
        <Background>
          <Image
            width={'100%'}
            height={'100%'}
            src='https://post-phinf.pstatic.net/MjAxOTA2MDNfMTQ3/MDAxNTU5NTI5MTkxNTI1.rxCH-JM27rrnvatW0sGIC9GnEArQzCIDXBA9QGyTSNYg.oGXpWK7prD3Jq9VyI1Ta9h7wZ2fUGIvMx8hC5q2_oZ8g.JPEG/Summer_beach.jpg?type=w1200'
            alt='background_image'
          ></Image>
          <MyDreamContainer>
            <MyDream variant='warning'>평범함이 모여 비범함이 된다.</MyDream>
          </MyDreamContainer>
        </Background>
        <HexagonContainer>
          <Hexagon
            image='https://st.depositphotos.com/2069237/2950/i/950/depositphotos_29500311-stock-photo-running-man-male-runner-in.jpg'
            width={30}
            height={30}
            unit='vw'
            border='1px gold'
          ></Hexagon>
        </HexagonContainer>
        <NameContainer>
          <Title>Lv.1</Title>&nbsp;
          <Title>근면성실한</Title>&nbsp;
          <NickName>찌롱</NickName>
        </NameContainer>
      </Profile>
      <BodyContainer>
        <RetroBlock>
          <MessageCloud>오늘의 회고 하기</MessageCloud>
          <ActivityFarm>
            {activityCheckList.map((activity) => {})}
            <ActivityWeek>
              <Card.Title>ActivityFarm</Card.Title>
              <Activity></Activity>
              <Activity></Activity>
              <Activity></Activity>
              <Activity></Activity>
              <Activity></Activity>
              <Activity></Activity>
              <Activity></Activity>
            </ActivityWeek>
          </ActivityFarm>
        </RetroBlock>
        <div>ME 서비스의 메인 페이지 입니다.</div>
      </BodyContainer>
    </>
  );
};

// styles
const Profile = styled.div``;
const Background = styled.div`
  width: 100vw;
  max-width: 1200px;
  height: 50vmin;
  max-height: 400px;
  margin: 0 auto;
`;
const MyDreamContainer = styled.div`
  position: absolute;
  top: min(160px, 20vmin);
  width: min(100vw, 1200px);
  font-size: 4vmin;
`;
const HexagonContainer = styled.div`
  position: absolute;
  top: calc(min(400px, 50vmin) - min(15vw, 90px));
  left: calc(50vw - min(15vw, 90px));
`;
const MyDream = styled.div`
  width: 100%;
  height: 6vh;
  color: white;
`;
const NameContainer = styled.div`
  margin-top: calc(min(15vw, 90px) + 10px);
  display: inline-flex;
  font-size: calc(10px + 1.5vmin);
`;
const Title = styled.div``;
const NickName = styled.div``;
const BodyContainer = styled.div`
  margin-top: 2vh;
`;
const RetroBlock = styled.div``;
const MessageCloud = styled(Alert)`
  width: min(90vw, 500px);
  margin: 10px auto;
  font-size: max(20px, 3vmin);
  line-height: max(20px, 3vmin);
`;
const ActivityFarm = styled(Card)`
  width: 90vw;
  margin: 10px auto;
  background-color: green;
`;
const ActivityWeek = styled(Card.Body)``;
const Activity = styled.div`
  width: 13px;
  height: 13px;
  margin: 2px;
  background-color: skyblue;

  border: 1px solid blue;
`;

export default MeMain;
