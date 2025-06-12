import * as React from "react";
import { StyleProp, ViewStyle } from "react-native";
import Svg, { ClipPath, Defs, G, Path } from "react-native-svg";

interface ArrowRightProps {
  color?: string;
  style?: StyleProp<ViewStyle>;
}

const ArrowRight: React.FC<ArrowRightProps> = ({ color = "#fff", style }) => (
  <Svg width={21} height={17} fill="none" style={style}>
    <G clipPath="url(#a)">
      <Path
        fill={color}
        d="M20.585 8.732a.424.424 0 0 0-.129-.31L13.16.897c-.162-.188-.281-.232-.4-.232a.418.418 0 0 0-.42.42c0 .122.032.233.118.31l4.307 4.428 2.58 2.556-2.364-.066H.951a.408.408 0 0 0-.41.42c0 .244.183.421.41.421h16.029l2.363-.055-2.58 2.545-4.306 4.427a.468.468 0 0 0-.119.321c0 .222.184.41.421.41a.403.403 0 0 0 .302-.133l7.394-7.626a.424.424 0 0 0 .13-.31Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill={color} d="M0 0h21v17H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default ArrowRight;
