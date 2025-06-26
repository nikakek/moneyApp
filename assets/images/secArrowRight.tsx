import * as React from "react";
import { StyleProp, ViewStyle } from "react-native";
import Svg, { Path } from "react-native-svg";

interface ArrowRightSvgProps {
  color?: string;
  style?: StyleProp<ViewStyle>;
  width?: number;
  height?: number;
}

const ArrowRightSvg: React.FC<ArrowRightSvgProps> = ({ 
  color = "#3D56FA", 
  style, 
  width = 10, 
  height = 18 
}) => (
  <Svg width={width} height={height} fill="none" style={style}>
    <Path
      fill={color}
      d="M6.982 9 .366 15.805a1.312 1.312 0 0 0 0 1.818c.488.502 1.28.502 1.768 0l7.5-7.714a1.312 1.312 0 0 0 0-1.818L2.134.377a1.226 1.226 0 0 0-1.768 0 1.312 1.312 0 0 0 0 1.818L6.982 9Z"
    />
  </Svg>
);

export default ArrowRightSvg;