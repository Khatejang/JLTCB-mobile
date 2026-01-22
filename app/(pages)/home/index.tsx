import { View } from "react-native"
import GovermentLogos from "../../../src/components/home-section/GovernmentLogos"
import NewsUpdates from "../../../src/components/home-section/news-updates/NewsUpdatesContainer"
import Reels from "../../../src/components/home-section/Reels/ReelsContainer"

export default function Index(){
    return(
        <View style={{backgroundColor: "#fff"}}>
        <GovermentLogos/>
        <Reels/>
        <NewsUpdates/>
        </View>
    )
}