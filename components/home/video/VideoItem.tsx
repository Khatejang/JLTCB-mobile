import { useVideoPlayer, VideoView } from "expo-video"
import styles from "../../../styles/home/video-styles"

export default function VideoItem({video}:{video: number}){
const player = useVideoPlayer(video, (player) => {
    player.pause()
})

    return(
        <VideoView
            player={player}
            style={styles.video}
            contentFit="cover"
            nativeControls={false}
        />
    )
}