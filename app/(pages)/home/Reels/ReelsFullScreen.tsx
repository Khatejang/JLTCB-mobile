import { useCallback, useState, useEffect } from "react";
import { useVideoPlayer, VideoView } from "expo-video";
import { Dimensions, StyleSheet, TouchableOpacity, View } from "react-native";
import { useLocalSearchParams, useFocusEffect } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import {useRouter} from "expo-router"

const videoMap: Record<string, number> = {
  v1: require("../../../../src/assets/reels/vid_1.mp4"),
  v2: require("../../../../src/assets/reels/vid_2.mp4"),
};

export default function ReelsFullScreen() {
 
 const router = useRouter()

  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  const screenWidth = Dimensions.get("window").width;
  const screenHeight = Dimensions.get("window").height;

  const { id } = useLocalSearchParams();
  if (typeof id !== "string") return null;

  const source = videoMap[id];
  if (!source) return null;

  const player = useVideoPlayer(source, (player) => {
    player.play();
  });

  useFocusEffect(
    //useCallback is a function that won't need to rerun the
    // function unless the dependencies is changed
    useCallback(() => {
      player.play();
      return () => {
        player.pause();
      };
    }, [player])
  );

  useEffect(() => {
    if (isPlaying) {
      player.play();
    } else {
      player.pause();
    }
  }, [isPlaying, player]);

  return (
    <>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => setIsPlaying(!isPlaying)}
      >
        <VideoView
          player={player}
          style={[
            styles.videoSize,
            { width: screenWidth, height: screenHeight * 0.81 },
          ]}
          contentFit="cover"
          nativeControls={false}
        />
        <View style={styles.headerOverlay}>
          <TouchableOpacity
            onPress={() => router.push("/(pages)/home")}
          >
            <Ionicons name="close" size={28} color="white" />
          </TouchableOpacity>
        </View>
        {/* Overlay Play/Pause Button */}
        {!isPlaying && (
          <View
            style={[
              styles.buttonOverlay,
              { width: screenWidth, height: screenHeight * 0.81 },
            ]}
          >
            <Ionicons name="play" size={70} color="white" />
          </View>
        )}
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  videoSize: {
    marginRight: 5,
    borderRadius: 5,
    overflow: "hidden",
  },
  buttonOverlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff2d",
  },
  headerOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingHorizontal: 10,
    backgroundColor: "#00000080",
  },
});
