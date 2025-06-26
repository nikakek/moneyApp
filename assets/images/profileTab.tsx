import * as React from "react";
import Svg, { Path } from "react-native-svg";

const ProfileTabIcon = ({ color = "#3A3A3A" }: { color?: string }) => (
  <Svg
    width={23}
    height={27}
    viewBox="0 0 23 27"
    fill="none"
  >
    <Path
      stroke={color}
      strokeLinecap="square"
      strokeWidth={1.05}
      d="M11.318 13.5c-2.9 0-5.25-2.544-5.25-5.682V6.682C6.068 3.544 8.418 1 11.318 1s5.25 2.544 5.25 5.682v1.136c0 3.138-2.35 5.682-5.25 5.682ZM21.818 21.941c0-1.762-1.068-3.311-2.629-3.814a25.845 25.845 0 0 0-7.87-1.218c-3.302 0-6.026.624-7.872 1.218C1.886 18.63.818 20.18.818 21.941v4.06h21v-4.06Z"
      clipRule="evenodd"
    />
  </Svg>
);

export default ProfileTabIcon;
