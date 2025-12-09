import { ScrollView, View } from "react-native";
import styles from "../../../styles/home/video-styles";
import VideoItem from "./VideoItem";

const videos = [
  require("../../../assets/reels/video_1.mp4"),
  require("../../../assets/reels/video_2.mp4"),
  require("../../../assets/reels/video_3.mp4"),
  require("../../../assets/reels/video_4.mp4"),
  require("../../../assets/reels/video_5.mp4"),
  require("../../../assets/reels/video_6.mp4"),
  require("../../../assets/reels/video_7.mp4"),
  require("../../../assets/reels/video_8.mp4"),
];

export default function VideoReels() {
  return (
    <View style={styles.container}>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal>
        {videos.map((video, index) => (
            <View key={index}>
              <VideoItem video={video} />
            </View>
        ))}
      </ScrollView>
    </View>
  );
}
