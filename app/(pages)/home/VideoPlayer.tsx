import { useVideoPlayer, VideoView } from "expo-video"
import { StyleSheet } from "react-native"

export default function VideoPlayer({video}:{video: number}){
const player = useVideoPlayer(video, (player) => {
    player.play()
})

    return(
        <VideoView
            player={player}
            style={styles.videoSize}
            contentFit="cover"
            nativeControls={false}
        />
    )
}

const styles = StyleSheet.create({
 
  videoSize:{
    width: 70,
    marginRight: 5,
    height: 130,
    borderRadius: 5,
    overflow: "hidden",
  }
});
