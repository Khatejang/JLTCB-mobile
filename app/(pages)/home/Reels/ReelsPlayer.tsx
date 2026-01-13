import { useVideoPlayer, VideoView } from "expo-video";
import { StyleSheet, Dimensions, Pressable } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";

type Props = {
  video: number;
};

export default function VideoPlayer({ video }: Props) {
  const router = useRouter();

  const player = useVideoPlayer(video, (player) => {
    player.muted = true;
    player.play();
  });
  const [expanded, setExpanded] = useState<boolean>(false);

  const screenWidth = Dimensions.get("window").width;
  const screenHeight = Dimensions.get("window").height;

  const videoWidth = !expanded ? screenWidth * 0.2 : screenWidth;
  const videoHeight = !expanded ? screenWidth * 0.3 : "70%" ;

  return (
    <>
      <Pressable onPress={() => { router.push("/home/Reels/ReesFullScreen")}}>
        <VideoView
          player={player}
          style={[styles.videoSize, { width: videoWidth, height: videoHeight }]}
          contentFit="cover"
          nativeControls={expanded}
        />
      </Pressable>
    </>
  );
}

const styles = StyleSheet.create({
  videoSize: {
    marginRight: 5,
    borderRadius: 5,
    overflow: "hidden",
  },
  fullscreenContainer: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  fullscreenVideo: {
    width: "100%",
    height: "100%",
  },
});
