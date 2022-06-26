import { forwardRef } from 'react';
import styled from 'styled-components';

const Hexagon = forwardRef((props, ref) => {
  const width = ref.width;
  const height = ref.height;
  const { image, isRegular = false, border = false } = props;
  const newHeight = isRegular ? (Number(width?.replace('px', '')) / 2) * 1.73 + 'px' : height;

  // console.log(width, height);

  if (border) {
    const borderSpec = border?.split(' ');
    console.log(borderSpec);
    // const borderType = borderSpec[0];
    const borderWeight = borderSpec[1];
    const borderColor = borderSpec[2];
    const borderWidth =
      (Number(width?.replace('px', '')) + Number(borderWeight?.replace('px', '')) * 2).toString() + 'px';
    const borderHeight =
      (Number(newHeight?.replace('px', '')) + Number(borderWeight?.replace('px', '')) * 2).toString() + 'px';

    return (
      <Border
        style={{
          width: borderWidth,
          height: borderHeight,
          backgroundColor: borderColor,
          padding: borderWeight,
        }}
      >
        <Hexa style={{ width: width, height: newHeight }}>
          {image ? (
            <img width={'100%'} height={'100%'} draggable='false' src={image} alt='bee hive' />
          ) : (
            <div>이미지</div>
          )}
        </Hexa>
      </Border>
    );
  } else {
    return (
      <Hexa style={{ width: width, height: height }}>
        {image ? (
          <img width={'100%'} height={'100%'} draggable='false' src={image} alt='bee hive' />
        ) : (
          <div>이미지</div>
        )}
      </Hexa>
    );
  }
});

const Border = styled.div`
  clip-path: polygon(25% 0, 75% 0, 100% 50%, 75% 100%, 25% 100%, 0 50%);
  margin: 10px auto;
`;

const Hexa = styled.div`
  /* clip-path: polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%); // 세로 정육각형 */
  clip-path: polygon(25% 0, 75% 0, 100% 50%, 75% 100%, 25% 100%, 0 50%); // 가로 정육각형
  margin: 0 auto; ;
`;

export default Hexagon;
