import { useState } from 'react';
import styled from 'styled-components';
import Hexagon from 'components/common/Hexagon.js';
import { getUser } from 'resources/database/users.js';
import BodyContainer from 'components/common/BodyContainer';
import { Box, Grid, Paper, Tab, Tabs, TextField, Card, Alert } from '@mui/material';
import FlexBox from 'components/common/FlexBox';
import BlockWrapper from 'components/common/BlockWrapper';
import Spacer from 'components/common/Spacer';
import { MdArrowForward } from 'react-icons/md';

const MeMain = () => {
  const user = getUser(1);
  const [tab, setTab] = useState('RETRO');

  const setCurreuntTab = (event, tab) => {
    console.log(tab);
    setTab(tab);
  };

  const RetroBlock = () => {
    return (
      <Paper elevation={0}>
        <Spacer size={2} />
        <BlockWrapper title='🌃 하루 정리'>
          <TextField id='retro-daily' label='어디보자.. 오늘 무슨 일이 있었더라..' fullWidth multiline></TextField>
        </BlockWrapper>
        <Spacer size={2} />
        <BlockWrapper title='🥰 오늘의 설렘과 행복'>
          <TextField id='retro-happy' label='오늘 날씨가 좋아서 산책도 하고 좋았어!' fullWidth multiline></TextField>
        </BlockWrapper>
        <Spacer size={2} />
        <BlockWrapper title='🎁 오늘의 감사일기'>
          <TextField
            id='retro-thanks'
            label='출퇴근 할 때 지하철에 앉아서 갈 수 있어 감사합니다!'
            fullWidth
            multiline
          ></TextField>
        </BlockWrapper>
        <Spacer size={2} />
        <BlockWrapper title='❤️ 오늘의 감정일기'>
          <TextField id='retro-emotion' label='오늘은 너무 행복해!' fullWidth multiline></TextField>
        </BlockWrapper>
        <Spacer size={2} />
        <BlockWrapper title='😢 오늘의 잊고 싶은 순간'>
          <TextField id='retro-sad' label='오늘 이건 좀 힘들더라..' fullWidth multiline></TextField>
        </BlockWrapper>
      </Paper>
    );
  };

  const GrowBlock = () => {
    return (
      <Paper elevation={0}>
        <Spacer size={2} />
        <BlockWrapper title='📘 오늘의 독서'>
          <TextField id='grow-book' label='자기관리론을 읽고..' fullWidth multiline></TextField>
        </BlockWrapper>
        <Spacer size={2} />
        <BlockWrapper title='🔥 오늘의 성공 실천'>
          <TextField id='grow-step' label='오늘은 영어 단어를 20개 외웠어!' fullWidth multiline></TextField>
        </BlockWrapper>
      </Paper>
    );
  };

  return (
    <BodyContainer width={90} maxWidth={800}>
      <FlexBox>
        <HexagonWrapper>
          <Hexagon image={user?.profileImage} width={24} height={24} unit='vw' border='2px gold'></Hexagon>
        </HexagonWrapper>
        <ProfileWrapper container direction='column' justifyContent='flex-start' alignItems='flex-start'>
          <ProfileRow item>
            {user?.title} {user?.name}
          </ProfileRow>
          <ProfileRow item>Lv. {user?.lv}</ProfileRow>
          <ProfileRow item>평범함이 모여 비범함이 된다.</ProfileRow>
        </ProfileWrapper>
      </FlexBox>
      <Spacer axis='vertical' size={1} />
      <BlockWrapper title='오늘의 감정'>
        <Grid container direction='column'>
          <Grid container direction='row' justifyContent='space-around' alignItems='center'>
            <Grid xs={4} item>
              <TextWrapper>아침</TextWrapper>
            </Grid>
            <Grid xs={4} item>
              <TextWrapper>저녁</TextWrapper>
            </Grid>
            <Grid xs={4} item>
              <TextWrapper>밤</TextWrapper>
            </Grid>
          </Grid>
          <Grid container direction='row' justifyContent='space-evenly' alignItems='center'>
            <Grid item>
              <EmotionBox>🤗 행복</EmotionBox>
            </Grid>
            <TextWrapper>
              <MdArrowForward />
            </TextWrapper>
            <Grid item>
              <EmotionBox>😎 뿌듯</EmotionBox>
            </Grid>
            <TextWrapper>
              <MdArrowForward />
            </TextWrapper>
            <Grid item>
              <EmotionBox>🤬 분노</EmotionBox>
            </Grid>
          </Grid>
        </Grid>
      </BlockWrapper>
      {/* <HoneyContainer>
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
      </HoneyContainer> */}
      <StyledTabs value={tab} onChange={setCurreuntTab} variant='fullWidth'>
        <StyledTab value='RETRO' label='✍️ 회고' />
        <StyledTab value='DAILY' label='🚀 성장' />
      </StyledTabs>
      {tab === 'RETRO' ? <RetroBlock /> : <GrowBlock />}
    </BodyContainer>
  );
};

// styles
const HexagonWrapper = styled(Box)`
  margin-right: 10px;
`;
const ProfileWrapper = styled(Grid)``;
const ProfileRow = styled(Grid)`
  align-items: center;
  font-size: min(3.5vw, 25px);
`;
const TextWrapper = styled.span`
  font-size: calc(10px + 2vmin);
`;
const EmotionBox = styled(Box)`
  font-size: calc(10px + 2vmin);
  border: '1px solid gold';
  background-color: gold;
  width: calc(45px + 9vmin);
  border-radius: 16px;
`;
const StyledTabs = styled(Tabs)`
  height: 8vmin;
  min-height: 24px !important;
  && .MuiTabs-indicator {
    background-color: gold;
  }
  && button {
    height: 8vmin;
    min-height: 24px;
    padding: 0;
  }
  && .Mui-selected {
    color: saddlebrown;
  }
`;
const StyledTab = styled(Tab)`
  && {
    color: black;
    font-size: calc(8px + 2vmin);
    text-transform: none;
  }
`;
// const MessageCloud = styled(Alert)`
//   width: 90vmin;
//   /* height: 10vh; */
//   margin: 10px auto;
//   font-size: max(20px, 3vmin);
//   /* line-height: max(20px, 3vmin); */
// `;
// const HoneyContainer = styled(Card)`
//   width: min(90vw, 800px);
//   margin: 10px auto;
//   overflow: hidden;
// `;
// const HoneyWrapper = styled(Card.Body)`
//   padding-right: 1vw;
//   padding-left: 1vw;
//   margin: 0 auto;
//   text-align: left;
// `;
// const HoneyTitle = styled(Card.Title)`
//   font-size: min(4vw, 28px);
// `;
// const HoneyBody = styled.div`
//   display: flex;
//   margin-bottom: 2vmin;
//   text-align: center;
// `;
// const HoneyCol = styled.div`
//   position: relative;
//   top: ${(props) => (props.index % 2 === 1 ? '2.5vmin' : '')};
//   /* display: ; */
// `;
// const Honey = styled.div`
//   width: 4vmin;
//   margin-bottom: 0.6vw;
// `;
// const HoneyDay = styled.span`
//   position: relative;
//   top: -4px;
//   font-size: min(2.5vw, 20px);
// `;

export default MeMain;
