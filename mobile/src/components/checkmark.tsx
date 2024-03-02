import React, { FC } from "react";
import { View } from "react-native";
import Svg, { Path } from "react-native-svg";

interface CheckmarkSVGProps {
  size?: number;
  color?: string;
  backgroundColor?: string;
}

const CheckmarkSVG: FC<CheckmarkSVGProps> = ({
  size = 24,
  color = "#000000",
  backgroundColor = "#ffffff",
}) => {
  // Calculate brightness (YIQ formula: https://en.wikipedia.org/wiki/YIQ)
  const brightness = (hex: string) => {
    const [r, g, b] = [
      parseInt(hex.substr(1, 2), 16),
      parseInt(hex.substr(3, 2), 16),
      parseInt(hex.substr(5, 2), 16),
    ];
    return (r * 299 + g * 587 + b * 114) / 1000;
  };

  // Determine text color based on brightness
  const textColor = brightness(backgroundColor) > 128 ? "#000000" : "#ffffff";

  return (
    <View style={{ width: size, height: size }}>
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill={textColor} // Set text color based on background brightness
      >
        <Path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
      </Svg>
    </View>
  );
};

export default CheckmarkSVG;
