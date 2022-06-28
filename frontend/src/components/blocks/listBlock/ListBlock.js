import { createRef } from 'react';
import styled from 'styled-components';
import ListItem from './ListItem.js';

const ListBlock = (props) => {
  const { title } = props;
  return (
    <BlockWrapper>
      <TitleArea>
        <strong className='titleText'>{title}</strong>
      </TitleArea>
      <ListArea>
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
      </ListArea>
    </BlockWrapper>
  );
};

// styles
const BlockWrapper = styled.div`
  width: 90%;
  max-width: 800px;
  text-align: left;
  margin: 0 auto;
`;
const TitleArea = styled.div`
  font-size: calc(10px + 2vmin);
  margin-bottom: 10px;
`;
const ListArea = styled.div`
  margin-bottom: 30px;
`;

export default ListBlock;