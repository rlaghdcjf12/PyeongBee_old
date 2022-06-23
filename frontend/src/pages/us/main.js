import styled from 'styled-components';

const UsMain = () => {
  return (
    <div>
      US 서비스의 메인 페이지 입니다.
      <TopBlock>
        <div>c1</div>
        <div>c2</div>
      </TopBlock>
      <div>나를 가꾸는 꽃밭</div>
      <TopBlock>
        <div>c1</div>
        <div>c2</div>
      </TopBlock>
      <div>현재를 즐기는 꽃밭</div>
      <TopBlock>
        <div>c1</div>
        <div>c2</div>
      </TopBlock>
    </div>
  );
};

// styles
const TopBlock = styled.div`
  /* position: absolute; */
  width: 90%;
  height: 200px;
  margin: 0 auto;
  background-color: lightyellow;
`;

export default UsMain;
