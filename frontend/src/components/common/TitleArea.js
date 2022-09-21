import styled from 'styled-components';

const TitleArea = ({ title }) => {
  return (
    <Container>
      <Body>{title}</Body>
    </Container>
  );
};

// styles
const Container = styled.div`
  text-align: left;
  max-width: 800px;
  margin: 0 auto min(1vmin, 10px);
`;
const Body = styled.strong`
  margin: 0 auto;
  font-size: calc(10px + 2vmin);
`;

export default TitleArea;
