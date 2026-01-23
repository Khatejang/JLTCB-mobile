import { TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  onPress: () => void;
  iconName: string;
  iconSize: number;
  iconColor: string;
};

export default function ButtonIcon({
  onPress,
  iconName,
  iconSize,
  iconColor,
}: Props) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{ width: 100, alignItems:"center",}}>
        <Ionicons name={iconName as any} size={iconSize} color={iconColor}/>
      </View>
    </TouchableOpacity>
  );
}
