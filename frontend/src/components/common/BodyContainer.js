import styled from 'styled-components';

const BodyContainer = ({ width, maxWidth, children }) => {
  return (
    <Container width={width} maxWidth={maxWidth}>
      {children}
    </Container>
  );
};

// styles
const Container = styled.div`
  width: ${(p) => p.width}vw;
  max-width: ${(p) => p.maxWidth}px;
  margin: auto;
  padding: 10px 0;
`;

export default BodyContainer;
