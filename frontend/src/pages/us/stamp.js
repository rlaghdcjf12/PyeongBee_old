import styled from 'styled-components';
import { useState, useEffect } from 'react';
import Moment from 'react-moment';
import CategoryBlock from '../../components/blocks/categoryBlock/CategoryBlock.js';
import ListBlock from '../../components/blocks/listBlock/ListBlock.js';
import { SelfCareCategoryList, HappyCategoryList } from '../../resources/database/categories.js';
import HiveList from '../../resources/database/hives.json';
import { Box, Paper } from '@mui/material';

const Stamp = () => {
  const selfCareCategoryList = SelfCareCategoryList;
  const happyCategoryList = HappyCategoryList;
  let timer = null;
  // const [time, setTime] = useState(Moment());
  // useEffect(() => {
  //   timer = setInterval(() => {
  //     setTime(Moment());
  //   }, 1000);
  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []);

  return (
    <Paper>
      <Box>
        haha
        <image src='/images/'></image>
      </Box>
    </Paper>
  );
};

// styles
const TopBlock = styled.div`
  display: flex;
  width: 90%;
  max-width: 800px;
  max-height: 300px;
  margin: 10px auto;
  background-color: lightyellow;
`;
const TopTextArea = styled.div`
  width: 70%;
  text-align: left;
  font-size: calc(8px + 2vmin);
  background-color: white;
`;
const TopImageArea = styled.div`
  width: 30%;
`;
export default Stamp;
