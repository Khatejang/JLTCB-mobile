import React, { useState } from "react";
import { Dimensions, FlatList, Image, StyleSheet, View } from "react-native";
import ReelsPlayer from "./ReelsPlayer";


const data = [
  {
    id: "v1",
    type: "video",
    source: require("../../../../src/assets/reels/vid_1.mp4"),
  },
  {
    id: "v2",
    type: "video",
    source: require("../../../../src/assets/reels/vid_2.mp4"),
  },

  {
    id: "i1",
    type: "image",
    source: require("../../../../src/assets/reels/image_1.png"),
  },
  {
    id: "i2",
    type: "image",
    source: require("../../../../src/assets/reels/image_2.png"),
  },
  {
    id: "i3",
    type: "image",
    source: require("../../../../src/assets/reels/image_3.png"),
  },
  {
    id: "i4",
    type: "image",
    source: require("../../../../src/assets/reels/image_4.png"),
  },
  {
    id: "i5",
    type: "image",
    source: require("../../../../src/assets/reels/image_5.png"),
  },
  {
    id: "i6",
    type: "image",
    source: require("../../../../src/assets/reels/image_6.png"),
  },
];

export default function ReelsConatainer() {
  const screenWidth = Dimensions.get("window").width;
  const screenHeight = Dimensions.get("window").height;

  const [activeVideo, setActiveVideo] = useState<number | null>(null);

  return (
    <View style={styles.videoContainer}>
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          if (item.type === "video") {
            return (
              <ReelsPlayer
                video={item.source}
                // onPress={() => setActiveVideo(item.source)}
              />
            );
          }

          return (
            <Image
              source={item.source}
              style={[
                styles.videoSize,
                { width: screenWidth * 0.2, height: screenWidth * 0.3 },
              ]}
            />
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  videoContainer: {
    flexDirection: "row",
    paddingHorizontal: 5,
  },
  videoSize: {
    marginRight: 5,

    borderRadius: 5,
    overflow: "hidden",
  },
});
