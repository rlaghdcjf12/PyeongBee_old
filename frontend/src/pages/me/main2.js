import { useEffect, useState, useRef } from 'react';
import { useWindowScroll } from 'react-use';
import { Alert, Card } from 'react-bootstrap';
import Image from 'react-bootstrap/esm/Image.js';
import styled from 'styled-components';
import Hexagon from 'components/common/Hexagon.js';
import { getUser } from 'resources/database/users.js';
import { throttle } from 'lodash';

const MeMain = () => {
  const scrollInfo = useWindowScroll();
  const [lastScrollY, setLastScrollY] = useState(0);
  // const [headerHide, setHeaderHide] = useState(false);
  const user = getUser(1);

  const handleScroll = (lastY, scroll) => {
    if (lastY < scroll.y && scroll.y > 52) {
      // header hide
    } else if (lastY > scroll.y) {
      // header down
    }
    setLastScrollY(scroll.y);
  };

  const throttled = useRef(throttle((lastY, scroll) => handleScroll(lastY, scroll), 100));

  useEffect(() => {
    throttled.current(lastScrollY, scrollInfo);
  }, [scrollInfo, lastScrollY]);

  return (
    <>
      <Profile>
        <Background>
          <Image width={'100%'} height={'100%'} src={user?.backgroundImage} alt='background_image'></Image>
          <MyDreamContainer>
            <MyDream variant='warning'>평범함이 모여 비범함이 된다.</MyDream>
          </MyDreamContainer>
        </Background>
        <HexagonContainer>
          <Hexagon image={user?.profileImage} width={30} height={30} unit='vw' border='1px gold'></Hexagon>
        </HexagonContainer>
        <NameContainer>
          <Title>Lv.{user?.lv}</Title>&nbsp;
          <Title>{user?.title}</Title>&nbsp;
          <NickName>{user?.name}</NickName>
        </NameContainer>
      </Profile>
      <BodyContainer>
        <RetroBlock>
          <MessageCloud>오늘의 회고 하기</MessageCloud>
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
                            day?.count >= 5
                              ? '#EBB601'
                              : day?.count >= 3
                              ? 'Gold'
                              : day?.count >= 1
                              ? '#FFEE7B'
                              : 'white'
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
  width: 90vmin;
  /* height: 10vh; */
  margin: 10px auto;
  font-size: max(20px, 3vmin);
  /* line-height: max(20px, 3vmin); */
`;
const HoneyContainer = styled(Card)`
  width: 90vmin;
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
