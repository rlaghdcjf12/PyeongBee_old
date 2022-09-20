import { Container } from '@mui/material';
import styled from 'styled-components';

const BodyContainer = ({ width, maxWidth, children, ...props }) => {
  return (
    <StyledContainer width={width} maxWidth={maxWidth} {...props}>
      {children}
    </StyledContainer>
  );
};

// styles
const StyledContainer = styled(Container)`
  width: ${(p) => p.width}vw;
  max-width: ${(p) => p.maxWidth}px;
  margin: auto;
  padding: 10px 0;
`;

export default BodyContainer;
