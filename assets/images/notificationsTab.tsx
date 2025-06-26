import * as React from "react";
import Svg, { Path } from "react-native-svg";

const notificationsTabIcon = ({ color = "#3A3A3A" }: { color?: string }) => (
  <Svg
    width={21}
    height={25}
    viewBox="0 0 21 25"
    fill="none"
  >
    <Path
      stroke={color}
      strokeLinecap="square"
      strokeWidth={1.045}
      d="M13.545 20.863A3.146 3.146 0 0 1 10.41 24a3.146 3.146 0 0 1-3.136-3.137"
    />
    <Path
      stroke={color}
      strokeLinecap="square"
      strokeWidth={1.045}
      d="M17.727 13.546V8.318C17.727 4.293 14.434 1 10.41 1 6.384 1 3.091 4.293 3.091 8.318v5.228C3.09 17.727 1 20.864 1 20.864h18.818s-2.09-3.137-2.09-7.319Z"
      clipRule="evenodd"
    />
  </Svg>
);

export default notificationsTabIcon;
