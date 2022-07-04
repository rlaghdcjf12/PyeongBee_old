import React from 'react';
import BlockWrapper from '../../common/BlockWrapper.js';

const DetailBlock = ({ title, isTitle = true, children }) => {
  return (
    <BlockWrapper isTitle={isTitle} title={title}>
      {children}
    </BlockWrapper>
  );
};

export default DetailBlock;
