import React, { useRef, useState } from "react";
import { View, ScrollView, Dimensions, StyleSheet, Text } from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;

export default function CardCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const data = [1, 2, 3]; // 3 cards

  const handleScroll = (event) => {
    const scrollX = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollX / SCREEN_WIDTH);
    setActiveIndex(index);
  };

  return (
    <View>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {data.map((item, index) => (
          <View
            key={index}
            style={[styles.card, { backgroundColor: "#ddd" }]}
          >
            <Text>Card {item}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Indicator Lines */}
      <View style={styles.indicatorContainer}>
        {data.map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicatorLine,
              { backgroundColor: index === activeIndex ? "#333" : "#ccc" },
            ]}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: SCREEN_WIDTH,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
    borderRadius: 10,
  },
  indicatorContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  indicatorLine: {
    width: 30,
    height: 3,
    marginHorizontal: 5,
    borderRadius: 2,
  },
});
