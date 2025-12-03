import React from "react";
import { View, StyleSheet } from "react-native";
import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg";

export default function LeftCurveMenu({ style }) {
  return (
    <View style={[styles.container, style]}>
      <Svg width="380" height="220" viewBox="0 0 380 220">
        <Defs>
          <LinearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
            <Stop offset="0%" stopColor="#1d2b5b" />
            <Stop offset="50%" stopColor="#d5893c" />
            <Stop offset="100%" stopColor="#ffffff" />
          </LinearGradient>
        </Defs>

        <Path
          d="M0 5 C270 0 280 280 200 360"
          fill="#ffffff"
          stroke="url(#grad)"
          strokeWidth={10}
        />
        <Path
          d="M0 10 C100 0 280 280 10 360"
          fill="#ffffff"

        />
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 60,
    alignSelf: "flex-start",
    overflow: "visible",
  },
});
