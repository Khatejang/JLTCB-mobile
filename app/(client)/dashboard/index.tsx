import { View } from "react-native";
import { Text } from "react-native-paper";
import Header from "./Header";
import Buttons from "./Buttons";
import TrackInput from "./TrackInput";
export default function Index() {

  return (
    <>
     <Header></Header>
      <Buttons></Buttons>
    <TrackInput></TrackInput>    
    </>
  );
}
