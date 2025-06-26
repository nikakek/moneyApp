import * as React from "react";
import Svg, { ClipPath, Defs, G, Path } from "react-native-svg";

const HomeTabIcon = ({ color = "#3A3A3A" }: { color?: string }) => (
  <Svg width={26} height={25} viewBox="0 0 26 25" fill="none">
    <G
      stroke={color}
      strokeLinecap="square"
      strokeWidth={1.05}
      clipPath="url(#clip0)"
    >
      <Path d="M22.6 12.708V6.042H3.4c-1.326 0-2.4-1.12-2.4-2.5v17.5c0 1.84 1.433 3.333 3.2 3.333h18.4v-6.667" />
      <Path
        d="M25 17.709h-5.6c-1.326 0-2.4-1.12-2.4-2.5 0-1.381 1.074-2.5 2.4-2.5H25v5Z"
        clipRule="evenodd"
      />
      <Path d="M17.8 2.708V1.042H3.4c-1.326 0-2.4 1.119-2.4 2.5 0 1.38 1.074 2.5 2.4 2.5" />
    </G>
    <Defs>
      <ClipPath id="clip0">
        <Path fill="#fff" d="M0 0h26v25H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default HomeTabIcon;
