import styled from 'styled-components';

const CategoryTitleArea = (props) => {
  const { title } = props;

  return (
    <Container>
      <Body>{title}</Body>
    </Container>
  );
};

const Container = styled.div`
  text-align: left;
  width: 90%;
  max-width: 800px;
  margin: 0 auto 10px;
`;
const Body = styled.strong`
  margin: 0 auto;
  font-size: calc(10px + 2vmin);
`;

export default CategoryTitleArea;
