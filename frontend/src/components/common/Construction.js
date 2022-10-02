import { Box } from '@mui/material';
import styled from 'styled-components';

const Construction = ({ title }) => {
  return (
    <Container>
      <ImageWrapper>
        <img src='/images/Construction.png' alt='It is under construction now.'></img>
      </ImageWrapper>
      <Box>열심히 개발하고 있어요!</Box>
    </Container>
  );
};

// styles
const Container = styled.div`
  text-align: left;
  max-width: 800px;
  margin: 0 auto min(1vmin, 10px);
  font-size: calc(10px + 2vmin);
  align-items: center;
  text-align: center;
`;
const ImageWrapper = styled.div`
  margin-bottom: 20px;
  & img {
    width: 400px;
    height: 400px;
  }
`;

export default Construction;
