import styled from 'styled-components';
import { useParams } from 'react-router-dom';

const HiveDetail = () => {
  const { id } = useParams();

  return <>hive {id}의 상세 페이지입니다.</>;
};

// styles

export default HiveDetail;
