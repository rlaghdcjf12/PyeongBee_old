import styled from 'styled-components';
import { Box } from '@mui/material';

const FlexBox = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>;
};

// styles
const Container = styled(Box)`
  display: flex;
`;

export default FlexBox;
