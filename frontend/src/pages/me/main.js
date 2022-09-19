import { useEffect, useState, useRef } from 'react';
import { useWindowScroll } from 'react-use';
import { Alert, Badge, Card, Container, Row, Tab, Tabs } from 'react-bootstrap';
import Image from 'react-bootstrap/esm/Image.js';
import styled from 'styled-components';
import Hexagon from 'components/common/Hexagon.js';
import { getUser } from 'resources/database/users.js';
import { throttle } from 'lodash';
import BodyContainer from 'components/common/BodyContainer';

const MeMain = () => {
  const user = getUser(1);
  const [tab, setTab] = useState('retro');
  const setCurreuntTab = (tab) => {
    console.log(tab);
    setTab(tab);
  };

  return (
    <>
      <BodyContainer width={90} maxWidth={800}>
        <FlexBlock>
          <HexagonWrapper>
            <Hexagon image={user?.profileImage} width={24} height={24} unit='vw' border='1px gold'></Hexagon>
          </HexagonWrapper>
          <ProfileWrapper>
            <ProfileRow>
              {user?.title} {user?.name}
            </ProfileRow>
            <ProfileRow>Lv. {user?.lv} </ProfileRow>
            <ProfileRow>평범함이 모여 비범함이 된다.</ProfileRow>
          </ProfileWrapper>
        </FlexBlock>
        <FlexBlock>
          <EmotionBox pill bg='warning' text='dark'>
            🤗 행복
          </EmotionBox>
          <EmotionBox pill bg='warning' text='dark'>
            😎 뿌듯
          </EmotionBox>
          <EmotionBox pill bg='warning' text='dark'>
            🤬 분노
          </EmotionBox>
        </FlexBlock>
        <HoneyContainer>
          <HoneyWrapper>
            <HoneyTitle>나의 꿀통</HoneyTitle>
            <HoneyBody>
              {user?.activityList?.map((week, wi) => (
                <HoneyCol key={wi} index={wi}>
                  {week.map((day, di) => (
                    <Honey key={di}>
                      <Hexagon
                        width={3.6}
                        height={3.2}
                        unit='vmin'
                        border='1px Beige'
                        color={
                          day?.count >= 5 ? '#EBB601' : day?.count >= 3 ? 'Gold' : day?.count >= 1 ? '#FFEE7B' : 'white'
                        }
                      />
                    </Honey>
                  ))}
                  <HoneyDay>{5 * (wi + 1) === 100 ? '☆' : (wi + 1) % 2 === 0 ? 5 * (wi + 1) : ''}</HoneyDay>
                </HoneyCol>
              ))}
            </HoneyBody>
          </HoneyWrapper>
        </HoneyContainer>
        <Tabs fill activeKey={tab} onSelect={(tab) => setCurreuntTab(tab)}>
          <Tab eventKey='retro' title='회고' />
          <Tab eventKey='dailyLog' title='일지' />
        </Tabs>
        {tab === 'retro' ? <div>회고 입니다.</div> : <div>일지 입니다.</div>}
      </BodyContainer>
    </>
  );
};

// styles
const FlexBlock = styled.div`
  display: flex;
`;
const HexagonWrapper = styled.div`
  margin-right: 10px;
`;
const ProfileWrapper = styled(Container)`
  text-align: left;
  align-items: center;
`;
const MyDreamRow = styled(Row)`
  align-items: center;
  font-size: min(4vw, 30px);
`;
const ProfileRow = styled(Row)`
  align-items: center;
  font-size: min(3.5vw, 25px);
`;
const EmotionBox = styled(Badge)`
  margin: 10px auto;
  font-size: min(4vw, 30px);
`;
const Title = styled.div``;
const NickName = styled.div``;
const MainContainer = styled.div`
  margin-top: 2vh;
`;
const RetroBlock = styled.div``;
const MessageCloud = styled(Alert)`
  width: 90vmin;
  /* height: 10vh; */
  margin: 10px auto;
  font-size: max(20px, 3vmin);
  /* line-height: max(20px, 3vmin); */
`;
const HoneyContainer = styled(Card)`
  width: min(90vw, 800px);
  margin: 10px auto;
  overflow: hidden;
`;
const HoneyWrapper = styled(Card.Body)`
  padding-right: 1vw;
  padding-left: 1vw;
  margin: 0 auto;
  text-align: left;
`;
const HoneyTitle = styled(Card.Title)`
  font-size: min(4vw, 28px);
`;
const HoneyBody = styled.div`
  display: flex;
  margin-bottom: 2vmin;
  text-align: center;
`;
const HoneyCol = styled.div`
  position: relative;
  top: ${(props) => (props.index % 2 === 1 ? '2.5vmin' : '')};
  /* display: ; */
`;
const Honey = styled.div`
  width: 4vmin;
  margin-bottom: 0.6vw;
`;
const HoneyDay = styled.span`
  position: relative;
  top: -4px;
  font-size: min(2.5vw, 20px);
`;

export default MeMain;
