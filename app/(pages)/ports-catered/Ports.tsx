import {Text, View} from "react-native"
import { Button } from "react-native-paper"

export default function Ports(){
    return(
        <>
        <View style={{flexDirection:"row"}}>
        <Button mode="outlined" style={{ borderRadius: 0 }} rippleColor="#EE9034">Hello</Button>
        <Button>Hello</Button>
        <Button>Hello</Button>
        </View>
        </>
    )
}