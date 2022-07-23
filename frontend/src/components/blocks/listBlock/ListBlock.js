import styled from 'styled-components';
import BlockWrapper from '../../common/BlockWrapper.js';
import ListItem from './ListItem.js';

const ListBlock = ({ title, itemList }) => {
  return (
    <BlockWrapper title={title}>
      <ListArea>
        {itemList.map((hive) => (
          <ListItem item={hive} key={hive.id} />
        ))}
      </ListArea>
    </BlockWrapper>
  );
};

// styles
const ListArea = styled.div`
  max-width: 800px;
  margin: 0 auto 30px;
`;

export default ListBlock;
