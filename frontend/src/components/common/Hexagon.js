import styled from 'styled-components';

const Hexagon = ({ type = 'horizontal', isRegular = false, image, width, height, unit = 'px', border = false }) => {
  const newHeight = isRegular ? (width / 2) * 1.73 : height;

  const hexaImage = (
    <Hexa width={width} height={newHeight} unit={unit}>
      {image ? (
        <Image width={width} height={newHeight} unit={unit} src={image} alt='bee hive'></Image>
      ) : (
        <div>기본 이미지</div>
      )}
    </Hexa>
  );

  if (border) {
    const borderSpec = border.split(' ');
    const borderWeight = Number(borderSpec[0].replace('px', ''));

    return (
      <Border
        width={width}
        height={newHeight}
        unit={unit}
        borderWeight={borderWeight}
        style={{
          backgroundColor: borderSpec[1],
        }}
      >
        {hexaImage}
      </Border>
    );
  } else {
    return hexaImage;
  }
};

const Border = styled.div`
  /* clip-path: polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%); // 세로 정육각형 */
  clip-path: polygon(15% 0, 85% 0, 100% 50%, 85% 100%, 15% 100%, 0 50%); // 가로 정육각형
  width: calc(${(props) => props.width}${(props) => props.unit} + ${(props) => props.borderWeight * 2}px);
  height: calc(${(props) => props.height}${(props) => props.unit} + ${(props) => props.borderWeight * 2}px);
  max-width: calc(180px + ${(props) => props.borderWeight * 2}px);
  max-height: calc(180px + ${(props) => props.borderWeight * 2}px);
  padding: ${(props) => props.borderWeight}px;
  margin: auto;
`;
const Hexa = styled.div`
  /* clip-path: polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%); // 세로 정육각형 */
  clip-path: polygon(15% 0, 85% 0, 100% 50%, 85% 100%, 15% 100%, 0 50%); // 가로 정육각형
  width: ${(props) => props.width}${(props) => props.unit};
  height: ${(props) => props.height}${(props) => props.unit};
  max-width: 180px;
  max-height: 180px;
  object-fit: cover;
`;
const Image = styled.img`
  object-fit: cover;
  width: ${(props) => props.height}${(props) => props.unit};
  height: ${(props) => props.height}${(props) => props.unit};
  max-width: 180px;
  max-height: 180px;
`;
export default Hexagon;
