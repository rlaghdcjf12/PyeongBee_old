import styled from 'styled-components';
import TitleArea from './TitleArea.js';

const BlockWrapper = ({ title, isTitle = true, children }) => {
  return (
    <Wrapper>
      {isTitle && <TitleArea title={title} />}
      {children}
    </Wrapper>
  );
};

// styles
const Wrapper = styled.div`
  width: 100%;
`;

export default BlockWrapper;
