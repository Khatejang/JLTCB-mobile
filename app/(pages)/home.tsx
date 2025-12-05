import { Text } from "react-native"
import NewsUpdates from "@/components/home/NewsUpdataes"
import VideoReels from "@/components/home/VideoReels"
import GovermentLogos from "@/components/home/GovernmentLogos"

export default function Home(){
    return(
        <>
        <Text>Home</Text>
        <GovermentLogos></GovermentLogos>
        <VideoReels></VideoReels>
        <NewsUpdates></NewsUpdates>
        </>
    )
}