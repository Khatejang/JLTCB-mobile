import { View } from "react-native"
import GovermentLogos from "./GovernmentLogos"
import NewsUpdates from "./news-updates/NewsUpdatesContainer"
import VideoReels from "./Reels/ReelsContainer"

export default function Index(){
    return(
        <View style={{backgroundColor: "#fff"}}>
        <GovermentLogos></GovermentLogos>
        <VideoReels></VideoReels>
        <NewsUpdates></NewsUpdates>
        </View>
    )
}