import { Alert } from "react-bootstrap";
import Image from "react-bootstrap/esm/Image.js";
import styled from "styled-components";
import Hexagon from "../../components/common/Hexagon.js";

const MeMain = () => {
  return (
    <>
      <Profile>
        <Background>
          <Image
            width={"100%"}
            height={"100%"}
            src="https://post-phinf.pstatic.net/MjAxOTA2MDNfMTQ3/MDAxNTU5NTI5MTkxNTI1.rxCH-JM27rrnvatW0sGIC9GnEArQzCIDXBA9QGyTSNYg.oGXpWK7prD3Jq9VyI1Ta9h7wZ2fUGIvMx8hC5q2_oZ8g.JPEG/Summer_beach.jpg?type=w1200"
            alt="background_image"
          ></Image>
        </Background>
        <HexagonContainer>
          <Hexagon
            image="https://st.depositphotos.com/2069237/2950/i/950/depositphotos_29500311-stock-photo-running-man-male-runner-in.jpg"
            width={30}
            height={30}
            unit="vmin"
            border="1px gold"
          ></Hexagon>
        </HexagonContainer>
        <MyDreamContainer>
          <MyDream variant="warning">평범함이 모여 비범함이 된다.</MyDream>
        </MyDreamContainer>
        <NameContainer>
          <Title>근면성실한</Title>&nbsp;
          <NickName>찌롱</NickName>
        </NameContainer>
      </Profile>
      <BodyContainer>
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
  height: 40vh;
  max-height: 400px;
  margin: 0 auto;
`;
const HexagonContainer = styled.div`
  position: absolute;
  top: calc(40vh - min(15vmin, 90px));
  left: calc(50vw - min(15vmin, 90px));
`;
const MyDreamContainer = styled.div`
  position: absolute;
  top: calc(calc(40vh + min(15vmin, 90px)) - 3.5vh);
  left: 25vw;
`;
const MyDream = styled(Alert)`
  width: 50vw;
  height: 6vh;
`;
const NameContainer = styled.div`
  margin-top: 15vh;
  display: inline-flex;
  font-size: calc(10px + 1.5vmin);
`;
const Title = styled.div``;
const NickName = styled.div``;
const BodyContainer = styled.div`
  margin-top: 2vh;
`;

export default MeMain;
