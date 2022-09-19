import styled from 'styled-components';
import { Box } from '@mui/material';

const FlexBox = ({ children }) => {
  return <Container>{children}</Container>;
};

// styles
const Container = styled(Box)`
  display: flex;
`;

export default FlexBox;
