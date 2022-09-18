import styled from 'styled-components';
import React from 'react';
import { Box } from '@mui/material';
const Spacer = ({ size, axis, style = {} }) => {
  const width = axis === 'vertical' ? 1 : size * 8;
  const height = axis === 'horizontal' ? 1 : size * 8;
  return (
    <StyledBox
      width={width}
      height={height}
      style={{
        ...style,
      }}
    />
  );
};

// styles
const StyledBox = styled(Box)`
  display: block;
  width: ${(props) => props.width} px;
  min-width: ${(props) => props.width} px;
  height: ${(props) => props.height} px;
  min-height: ${(props) => props.height} px;
`;
export default Spacer;
